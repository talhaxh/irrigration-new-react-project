import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Royal Irrigation System</title>
        <meta name="description" content="Privacy Policy for Royal Irrigation System" />
      </Head>
      <Header />
      <main style={{ paddingTop: '5rem' }}>
        {/* Hero Section */}
        <section className="bg-gradient-primary py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <Link href="/" className="d-inline-flex align-items-center text-light text-decoration-none mb-4 fw-medium">
                  <i className="bi bi-arrow-left me-2"></i>
                  <span>Back to Home</span>
                </Link>
                
                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-shield-check display-6 text-light me-3"></i>
                  <h1 className="display-5 fw-bold text-white">
                    Privacy Policy
                  </h1>
                </div>
                
                <p className="lead text-light">
                  Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                <div className="alert alert-success border-start border-5 border-success">
                  <h2 className="h4 fw-bold mb-3">
                    <i className="bi bi-eye me-2 text-success"></i>
                    Information We Collect
                  </h2>
                  <p className="mb-3">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Create an account or use our services</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Contact us for support or inquiries</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Subscribe to our newsletter or updates</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Use our mobile application</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Participate in surveys or feedback forms</li>
                  </ul>
                </div>

                <div className="alert alert-primary border-start border-5 border-primary">
                  <h2 className="h4 fw-bold mb-3">
                    <i className="bi bi-people me-2 text-primary"></i>
                    How We Use Your Information
                  </h2>
                  <p className="mb-3">
                    We use the information we collect to:
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i>Provide, maintain, and improve our services</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i>Process transactions and send related information</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i>Send technical notices and support messages</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i>Respond to your comments and questions</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i>Develop new products and services</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-primary me-2"></i>Analyze usage patterns and trends</li>
                  </ul>
                </div>

                <div className="alert alert-warning border-start border-5 border-warning">
                  <h2 className="h4 fw-bold mb-3">
                    <i className="bi bi-lock me-2 text-warning"></i>
                    Information Security
                  </h2>
                  <p className="mb-3">
                    We implement appropriate security measures to protect your personal information:
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="bi bi-check-circle text-warning me-2"></i>Encryption of sensitive data in transit and at rest</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-warning me-2"></i>Regular security assessments and updates</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-warning me-2"></i>Access controls and authentication measures</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-warning me-2"></i>Employee training on data protection</li>
                    <li className="mb-2"><i className="bi bi-check-circle text-warning me-2"></i>Incident response procedures</li>
                  </ul>
                </div>

                <h2 className="h3 fw-bold mb-3">Data Sharing and Disclosure</h2>
                <p className="mb-3">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="bi bi-dot text-muted me-2"></i>With your explicit consent</li>
                  <li className="mb-2"><i className="bi bi-dot text-muted me-2"></i>To comply with legal obligations</li>
                  <li className="mb-2"><i className="bi bi-dot text-muted me-2"></i>To protect our rights and safety</li>
                  <li className="mb-2"><i className="bi bi-dot text-muted me-2"></i>With trusted service providers who assist in our operations</li>
                </ul>

                <h2 className="h3 fw-bold mb-3">Your Rights and Choices</h2>
                <p className="mb-3">You have the right to:</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="bi bi-dot text-muted me-2"></i>Access and update your personal information</li>
                  <li className="mb-2"><i className="bi bi-dot text-muted me-2"></i>Request deletion of your data</li>
                  <li className="mb-2"><i className="bi bi-dot text-muted me-2"></i>Opt-out of marketing communications</li>
                  <li className="mb-2"><i className="bi bi-dot text-muted me-2"></i>Request data portability</li>
                  <li className="mb-2"><i className="bi bi-dot text-muted me-2"></i>Lodge a complaint with supervisory authorities</li>
                </ul>

                <div className="bg-light rounded-4 p-4 mt-5">
                  <h2 className="h4 fw-bold mb-3">Contact Us</h2>
                  <p className="mb-3">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <p><strong>Email:</strong> privacy@royal.com</p>
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