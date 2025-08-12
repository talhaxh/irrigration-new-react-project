import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '/#services' },
    { name: 'Products', href: '/#products' },
    { name: 'Calculator', href: '/#calculator' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Resources', href: '/#blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  // Always show solid background on blog detail pages and policy pages
  const shouldShowSolidBg = router.pathname.startsWith('/blog/') || 
                           router.pathname === '/privacy-policy' ||
                           router.pathname === '/terms-of-service' ||
                           router.pathname === '/cookie-policy' ||
                           isScrolled;

  return (
    <header className={`navbar navbar-expand-lg fixed-top navbar-custom ${shouldShowSolidBg ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <img 
            src="/ChatGPT Image Jun 24, 2025, 05_55_22 PM.png" 
            alt="Royal Irrigation System Logo" 
            height="64"
            className="me-3"
          />
          <div className="d-flex flex-column">
            <span className={`navbar-brand-text ${shouldShowSolidBg ? 'text-dark' : 'text-white'}`}>
              Royal
            </span>
            <span className={`navbar-brand-subtitle ${shouldShowSolidBg ? 'text-success' : 'text-light'}`}>
              Irrigation System
            </span>
          </div>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
        >
          <span className={`navbar-toggler-icon ${shouldShowSolidBg ? 'text-dark' : 'text-white'}`}>
            {isMenuOpen ? '✕' : '☰'}
          </span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto me-4">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link fw-medium ${shouldShowSolidBg ? 'text-dark' : 'text-white'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="btn btn-success d-flex align-items-center">
            <i className="bi bi-download me-2"></i>
            <span>Get App</span>
          </button>
        </div>
      </div>
    </header>
  );
}