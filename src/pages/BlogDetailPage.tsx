import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogPosts';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link
              to="/#blog"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
            >
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-20"> 
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-900 to-green-700 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/#blog"
              className="inline-flex items-center space-x-2 text-green-200 hover:text-white mb-6 font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>
            
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">  
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-green-200">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
              />
              
              <div className="prose prose-lg max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  className="blog-content"
                />
              </div>
            </article>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          {relatedPost.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />

      <style jsx>{`
        .blog-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: #1f2937;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1f2937;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .blog-content p {
          color: #374151;
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        .blog-content ul {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }
        .blog-content li {
          color: #374151;
          margin-bottom: 0.5rem;
          list-style-type: disc;
        }
        .blog-content strong {
          font-weight: 600;
          color: #1f2937;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}