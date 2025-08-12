import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
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
  const shouldShowSolidBg = location.pathname.startsWith('/blog/') || 
                           location.pathname === '/privacy-policy' ||
                           location.pathname === '/terms-of-service' ||
                           location.pathname === '/cookie-policy' ||
                           isScrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      shouldShowSolidBg ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="/ChatGPT Image Jun 24, 2025, 05_55_22 PM.png" 
              alt="Royal Irrigation System Logo" 
              className="h-16 w-auto"
            />
            <div className="flex flex-col">
              <span className={`font-bold text-2xl leading-tight ${
                shouldShowSolidBg ? 'text-gray-900' : 'text-white'
              }`}>Royal</span>
              <span className={`font-medium text-base leading-tight ${
                shouldShowSolidBg ? 'text-green-700' : 'text-green-200'
              }`}>Irrigation </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 hover:text-green-600 ${
                  shouldShowSolidBg ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Get App</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              shouldShowSolidBg ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Get App</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}