import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsOfServicePage() {
  return (
    <>
      <Head>
        <title>Terms of Service - Royal Irrigation System</title>
        <meta name="description" content="Terms of Service for Royal Irrigation System" />
      </Head>
      <Header />
      <main style={{ paddingTop: '5rem' }}>
        {/* Hero Section */}
        <section style={{ background: 'linear-gradient(135deg, #1e3a8a, #1e40af)' }} className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <Link href="/" className="d-inline-flex align-items-center text-light text-decoration-none mb-4 fw-medium">
                  <i className="bi bi-arrow-left me-2"></i>
                  <span>Back to Home</span>
                </Link>
                
                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-file-text display-6 text-light me-3"></i>
                  <h1 className="display-5 fw-bold text-white">
                    Terms of Service
                  </h1>
                </div>
                
                <p className="lead text-light">
                  Please read these terms carefully before using our services. By using our services, you agree to these terms.
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
                <div className="alert alert-primary border-start border-5 border-primary">
                  <h2 className="h4 fw-bold mb-3">
                    <i className="bi bi-check-circle me-2 text-primary"></i>
                    Acceptance of Terms
                  </h2>
                  <p>
                    By accessing and using Royal Solar & Irrigation System services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div className="alert alert-success border-start border-5 border-success">
                  <h2 className="h4 fw-bold mb-3">
                    <i className="bi bi-balance me-2 text-success"></i>
                    Use License
                  </h2>
                  <p className="mb-3">
                    Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="bi bi-x-circle text-danger me-2"></i>Modify or copy the materials</li>
                    <li className="mb-2"><i className="bi bi-x-circle text-danger me-2"></i>Use the materials for any commercial purpose or for any public display</li>
                    <li className="mb-2"><i className="bi bi-x-circle text-danger me-2"></i>Attempt to reverse engineer any software contained in our services</li>
                    <li className="mb-2"><i className="bi bi-x-circle text-danger me-2"></i>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>

                <h2 className="h3 fw-bold mb-3">Service Description</h2>
                <p className="mb-3">Royal Solar & Irrigation System provides:</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Agricultural irrigation systems and equipment</li>
                  <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Solar power solutions for farming</li>
                  <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Technical consultation and support services</li>
                  <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Mobile application for farm management</li>
                  <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Educational resources and knowledge library</li>
                </ul>

                <h2 className="h3 fw-bold mb-3">User Responsibilities</h2>
                <p className="mb-3">As a user of our services, you agree to:</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i>Provide accurate and complete information</li>
                  <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i>Maintain the security of your account credentials</li>
                  <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i>Use our services in compliance with applicable laws</li>
                  <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i>Respect intellectual property rights</li>
                  <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i>Not engage in any harmful or disruptive activities</li>
                </ul>

                <div className="alert alert-warning border-start border-5 border-warning">
                  <h2 className="h4 fw-bold mb-3">
                    <i className="bi bi-exclamation-triangle me-2 text-warning"></i>
                    Disclaimer
                  </h2>
                  <p className="mb-3">
                    The materials on our website and services are provided on an 'as is' basis. Royal Solar & Irrigation System makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation:
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="bi bi-dot text-muted me-2"></i>Implied warranties or conditions of merchantability</li>
                    <li className="mb-2"><i className="bi bi-dot text-muted me-2"></i>Fitness for a particular purpose</li>
                    <li className="mb-2"><i className="bi bi-dot text-muted me-2"></i>Non-infringement of intellectual property</li>
                    <li className="mb-2"><i className="bi bi-dot text-muted me-2"></i>Accuracy, reliability, or completeness of information</li>
                  </ul>
                </div>

                <div className="bg-light rounded-4 p-4 mt-5">
                  <h2 className="h4 fw-bold mb-3">Contact Information</h2>
                  <p className="mb-3">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <p><strong>Email:</strong> legal@royal.com</p>
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