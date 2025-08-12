import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CookiePolicyPage() {
  return (
    <>
      <Head>
        <title>Cookie Policy - Royal Irrigation System</title>
        <meta name="description" content="Cookie Policy for Royal Irrigation System" />
      </Head>
      <Header />
      <main style={{ paddingTop: '5rem' }}>
        {/* Hero Section */}
        <section style={{ background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)' }} className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <Link href="/" className="d-inline-flex align-items-center text-light text-decoration-none mb-4 fw-medium">
                  <i className="bi bi-arrow-left me-2"></i>
                  <span>Back to Home</span>
                </Link>
                
                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-cookie display-6 text-light me-3"></i>
                  <h1 className="display-5 fw-bold text-white">
                    Cookie Policy
                  </h1>
                </div>
                
                <p className="lead text-light">
                  Learn about how we use cookies and similar technologies to improve your experience on our website.
                </p>
                
                <div className="mt-4 text-light">
                  <p>Last updated: January 18, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="alert alert-info border-start border-5 border-info">
                  <h2 className="h4 fw-bold mb-3">
                    <i className="bi bi-info-circle me-2 text-info"></i>
                    What Are Cookies?
                  </h2>
                  <p>
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners about how users interact with their sites.
                  </p>
                </div>

                <div className="alert alert-primary border-start border-5 border-primary">
                  <h2 className="h4 fw-bold mb-3">
                    <i className="bi bi-gear me-2 text-primary"></i>
                    How We Use Cookies
                  </h2>
                  <p className="mb-3">We use cookies for several purposes:</p>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i><strong>Performance Cookies:</strong> Help us understand how visitors use our website</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                  </ul>
                </div>

                <h2 className="h3 fw-bold mb-4">Types of Cookies We Use</h2>
                
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <div className="bg-success bg-opacity-10 p-4 rounded-3">
                      <h3 className="h5 fw-bold mb-3">Essential Cookies</h3>
                      <p className="mb-3">These cookies are necessary for the website to function and cannot be switched off in our systems.</p>
                      <ul className="list-unstyled small">
                        <li><i className="bi bi-dot text-muted me-1"></i>Session management</li>
                        <li><i className="bi bi-dot text-muted me-1"></i>Security features</li>
                        <li><i className="bi bi-dot text-muted me-1"></i>Load balancing</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="bg-primary bg-opacity-10 p-4 rounded-3">
                      <h3 className="h5 fw-bold mb-3">Analytics Cookies</h3>
                      <p className="mb-3">These cookies help us understand how visitors interact with our website.</p>
                      <ul className="list-unstyled small">
                        <li><i className="bi bi-dot text-muted me-1"></i>Google Analytics</li>
                        <li><i className="bi bi-dot text-muted me-1"></i>Page view tracking</li>
                        <li><i className="bi bi-dot text-muted me-1"></i>User behavior analysis</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="bg-warning bg-opacity-10 p-4 rounded-3">
                      <h3 className="h5 fw-bold mb-3">Functional Cookies</h3>
                      <p className="mb-3">These cookies enable enhanced functionality and personalization.</p>
                      <ul className="list-unstyled small">
                        <li><i className="bi bi-dot text-muted me-1"></i>Language preferences</li>
                        <li><i className="bi bi-dot text-muted me-1"></i>User interface customization</li>
                        <li><i className="bi bi-dot text-muted me-1"></i>Form data retention</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="bg-danger bg-opacity-10 p-4 rounded-3">
                      <h3 className="h5 fw-bold mb-3">Marketing Cookies</h3>
                      <p className="mb-3">These cookies are used to deliver advertisements more relevant to you.</p>
                      <ul className="list-unstyled small">
                        <li><i className="bi bi-dot text-muted me-1"></i>Social media integration</li>
                        <li><i className="bi bi-dot text-muted me-1"></i>Advertising personalization</li>
                        <li><i className="bi bi-dot text-muted me-1"></i>Conversion tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="alert alert-warning border-start border-5 border-warning">
                  <h2 className="h4 fw-bold mb-3">
                    <i className="bi bi-shield-check me-2 text-warning"></i>
                    Managing Your Cookie Preferences
                  </h2>
                  <p className="mb-3">You have several options for managing cookies:</p>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="bi bi-check-circle text-warning me-2"></i><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-warning me-2"></i><strong>Opt-out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-warning me-2"></i><strong>Cookie Banner:</strong> Use our cookie consent banner to manage preferences</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-warning me-2"></i><strong>Contact Us:</strong> Reach out to us directly for assistance</li>
                  </ul>
                </div>

                <div className="bg-light rounded-4 p-4 mt-5">
                  <h2 className="h4 fw-bold mb-3">Contact Us About Cookies</h2>
                  <p className="mb-3">
                    If you have any questions about our use of cookies, please contact us:
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <p><strong>Email:</strong> cookies@royal.com</p>
                      <p><strong>Phone:</strong> +92 342 0664128</p>
                    </div>
                    <div className="col-md-6">
                      <p><strong>Address:</strong> Punjab, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}