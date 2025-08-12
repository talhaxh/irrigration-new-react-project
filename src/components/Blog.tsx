import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Drip Irrigation', 'Solar Systems', 'Smart Farming', 'Crop Care', 'Water Management'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Agriculture Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, techniques, and innovations in modern agriculture
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl font-medium transition-colors duration-200 text-sm ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {featuredPost && selectedCategory === 'All' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h3>
            <div className="bg-gradient-to-r from-green-600 to-amber-600 rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="text-white">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-green-100 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Calendar className="w-5 h-5 text-green-200" />
                      <span className="text-green-200">{featuredPost.date}</span>
                    </div>
                    <Link 
                      to={`/blog/${featuredPost.slug}`}
                      className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center space-x-2"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <div className="text-green-600 hover:text-green-700 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-200">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}