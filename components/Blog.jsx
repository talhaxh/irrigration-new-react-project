import { useState } from 'react';
import Link from 'next/link';
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
    <section id="blog" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Agriculture Resources
          </h2>
          <p className="section-subtitle">
            Stay updated with the latest insights, techniques, and innovations in modern agriculture
          </p>
        </div>

        {/* Filter */}
        <div className="d-flex justify-content-center mb-5">
          <div className="d-flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`btn rounded-pill fw-medium ${
                  selectedCategory === category
                    ? 'btn-success'
                    : 'btn-outline-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {featuredPost && selectedCategory === 'All' && (
          <div className="mb-5">
            <h3 className="h4 fw-bold text-dark mb-4">Featured Article</h3>
            <div className="bg-gradient-primary rounded-4 overflow-hidden">
              <div className="row g-0">
                <div className="col-lg-6 p-5 text-white">
                  <div className="mb-3">
                    <span className="badge bg-light bg-opacity-20 text-white px-3 py-2 rounded-pill">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h3 className="h2 fw-bold mb-3">{featuredPost.title}</h3>
                  <p className="lead text-light mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-calendar text-light me-2"></i>
                      <span className="text-light">{featuredPost.date}</span>
                    </div>
                    <Link href={`/blog/${featuredPost.slug}`} className="btn btn-light">
                      <span className="me-2">Read More</span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="img-fluid h-100 w-100"
                    style={{ objectFit: 'cover', minHeight: '20rem' }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="row g-4">
          {regularPosts.map((post) => (
            <div key={post.id} className="col-md-6 col-lg-4">
              <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                <div className="blog-card">
                  <div className="position-relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-image"
                    />
                    <span className="blog-category">
                      {post.category}
                    </span>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="h5 fw-bold text-dark mb-3">
                      {post.title}
                    </h3>
                    <p className="text-muted mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="d-flex align-items-center justify-content-between text-muted small mb-4">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-calendar me-1"></i>
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <div className="text-success fw-semibold d-flex align-items-center">
                      <span className="me-2">Read Article</span>
                      <i className="bi bi-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}