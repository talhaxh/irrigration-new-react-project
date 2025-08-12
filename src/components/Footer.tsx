import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, QrCode } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    services: [
      'Drip Irrigation',
      'Solar Systems',
      'Dairy Farming',
      'Resources',
    ],
    support: [
      
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Mobile App Download Section */}
      <div className="bg-gradient-to-r from-green-600 to-amber-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Download Our Mobile App
              </h3> 
              <p className="text-green-100 text-lg mb-6">
                Access all features, manage your farm, and get instant support right from your mobile device
              </p> 
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl flex items-center space-x-3 transition-colors duration-200">
                  <span className="text-2xl">🤖</span>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="bg-white p-8 rounded-2xl inline-block">
                <QrCode className="w-32 h-32 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Scan to Download</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/ChatGPT Image Jun 24, 2025, 05_55_22 PM.png" 
                  alt="Royal Irrigation System Logo" 
                  className="h-14 w-auto"
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white leading-tight">Royal</span>
                  <span className="text-base font-medium text-green-400 leading-tight">Irrigation System</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming agriculture with smart, sustainable solutions. From drip irrigation to solar systems, 
                we help farmers increase yield while reducing costs and environmental impact.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Contact Information */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">+92 342 0664128</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">support@royal.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Punjab, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="border-t border-gray-800 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-400 text-sm">
                  © 2025 Royal Irrigation System. All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center md:justify-end space-x-6 mt-2 text-sm">
                  <Link to="/privacy-policy" className="text-gray-400 hover:text-green-400 transition-colors">
                    Privacy Policy
                  </Link>
                  <Link to="/terms-of-service" className="text-gray-400 hover:text-green-400 transition-colors">
                    Terms of Service
                  </Link>
                  <Link to="/cookie-policy" className="text-gray-400 hover:text-green-400 transition-colors">
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