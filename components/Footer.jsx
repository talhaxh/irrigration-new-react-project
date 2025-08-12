import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    services: [
      'Drip Irrigation',
      'Solar Systems',
      'Dairy Farming',
      'Resources',
    ],
    support: [],
  };

  const socialLinks = [
    { icon: 'bi-facebook', href: '#', label: 'Facebook' },
    { icon: 'bi-twitter', href: '#', label: 'Twitter' },
    { icon: 'bi-instagram', href: '#', label: 'Instagram' },
    { icon: 'bi-youtube', href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-dark text-white">
      {/* Mobile App Download Section */}
      <div className="footer-app-section">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h3 className="h2 fw-bold text-white mb-3">
                Download Our Mobile App
              </h3> 
              <p className="lead text-light mb-4">
                Access all features, manage your farm, and get instant support right from your mobile device
              </p> 
              <div className="d-flex flex-column flex-sm-row gap-3">
                <button className="btn btn-dark d-flex align-items-center">
                  <span className="me-2 fs-4">🤖</span>
                  <div className="text-start">
                    <div className="small text-light">Get it on</div>
                    <div className="fw-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="bg-white p-4 rounded-3 d-inline-block">
                <i className="bi bi-qr-code display-1 text-muted mb-3"></i>
                <p className="text-muted fw-medium mb-0">Scan to Download</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="row g-4">
            {/* Company Info */}
            <div className="col-lg-6">
              <div className="footer-brand">
                <img 
                  src="/ChatGPT Image Jun 24, 2025, 05_55_22 PM.png" 
                  alt="Royal Irrigation System Logo" 
                  height="56"
                  className="me-3"
                />
                <div className="d-flex flex-column">
                  <span className="footer-brand-text">Royal</span>
                  <span className="footer-brand-subtitle">Irrigation System</span>
                </div>
              </div>
              <p className="text-light mb-4">
                Transforming agriculture with smart, sustainable solutions. From drip irrigation to solar systems, 
                we help farmers increase yield while reducing costs and environmental impact.
              </p>
            </div>

            {/* Services */}
            <div className="col-lg-3">
              <h4 className="h6 fw-bold text-white mb-3">Services</h4>
              <ul className="list-unstyled">
                {footerLinks.services.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a href="#" className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="col-lg-3">
              <h4 className="h6 fw-bold text-white mb-3">Support</h4>
              
              {/* Contact Information */}
              <div className="mb-4">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-telephone text-success me-2"></i>
                  <span className="text-light">+92 342 0664128</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-envelope text-success me-2"></i>
                  <span className="text-light">support@royal.com</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-geo-alt text-success me-2"></i>
                  <span className="text-light">Punjab, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="border-top border-secondary pt-4 mt-5">
            <div className="row align-items-center">
              <div className="col-md-6 mb-3 mb-md-0">
                <div className="d-flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="social-link"
                      aria-label={social.label}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
              <div className="col-md-6 text-md-end">
                <p className="text-muted small mb-2">
                  © 2025 Royal Irrigation System. All rights reserved.
                </p>
                <div className="d-flex flex-wrap justify-content-md-end gap-3">
                  <Link href="/privacy-policy" className="footer-link small">
                    Privacy Policy
                  </Link>
                  <Link href="/terms-of-service" className="footer-link small">
                    Terms of Service
                  </Link>
                  <Link href="/cookie-policy" className="footer-link small">
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}