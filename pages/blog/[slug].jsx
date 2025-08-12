import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { blogPosts } from '../../data/blogPosts';

export default function BlogDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <>
        <Head>
          <title>Post Not Found - Royal Irrigation System</title>
        </Head>
        <Header />
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light" style={{ paddingTop: '5rem' }}>
          <div className="text-center">
            <h1 className="display-4 fw-bold text-dark mb-4">Post Not Found</h1>
            <p className="text-muted mb-4">The blog post you're looking for doesn't exist.</p>
            <Link href="/#blog" className="btn btn-gradient px-4 py-2">
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
      <Head>
        <title>{post.title} - Royal Irrigation System</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <Header />
      <main style={{ paddingTop: '5rem' }}>
        {/* Hero Section */}
        <section className="bg-gradient-primary py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <Link href="/#blog" className="d-inline-flex align-items-center text-light text-decoration-none mb-4 fw-medium">
                  <i className="bi bi-arrow-left me-2"></i>
                  <span>Back to Blog</span>
                </Link>
                
                <div className="d-flex align-items-center mb-3">
                  <span className="badge bg-success px-3 py-2 rounded-pill">
                    {post.category}
                  </span>
                </div>
                
                <h1 className="display-5 fw-bold text-white mb-4">
                  {post.title}
                </h1>
                
                <div className="d-flex align-items-center text-light">
                  <i className="bi bi-calendar me-2"></i>
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <article>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="img-fluid rounded-4 mb-5"
                    style={{ height: '24rem', width: '100%', objectFit: 'cover' }}
                  />
                  
                  <div className="blog-content">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="section-padding bg-light-gray">
            <div className="container">
              <h2 className="section-title">Related Articles</h2>
              <div className="row g-4">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="col-md-4">
                    <Link href={`/blog/${relatedPost.slug}`} className="text-decoration-none">
                      <div className="blog-card">
                        <div className="position-relative overflow-hidden">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="blog-image"
                          />
                          <span className="blog-category">
                            {relatedPost.category}
                          </span>
                        </div>
                        <div className="p-4">
                          <h3 className="h5 fw-bold text-dark mb-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-muted small">
                            {relatedPost.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}