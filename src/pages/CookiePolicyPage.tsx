import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Settings, Info, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-900 to-purple-700 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-purple-200 hover:text-white mb-8 font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            
            <div className="flex items-center space-x-4 mb-6">
              <Cookie className="w-12 h-12 text-purple-300" />
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Cookie Policy
              </h1>
            </div>
            
            <p className="text-xl text-purple-100 leading-relaxed">
              Learn about how we use cookies and similar technologies to improve your experience on our website.
            </p>
            
            <div className="mt-6 text-purple-200">
              <p>Last updated: January 18, 2025</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Info className="w-6 h-6 text-purple-600 mr-3" />
                  What Are Cookies?
                </h2>
                <p className="text-gray-700">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners about how users interact with their sites.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Settings className="w-6 h-6 text-blue-600 mr-3" />
                  How We Use Cookies
                </h2>
                <p className="text-gray-700 mb-4">
                  We use cookies for several purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how visitors use our website</li>
                  <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Essential Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    These cookies are necessary for the website to function and cannot be switched off in our systems.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Session management</li>
                    <li>Security features</li>
                    <li>Load balancing</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Google Analytics</li>
                    <li>Page view tracking</li>
                    <li>User behavior analysis</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Functional Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    These cookies enable enhanced functionality and personalization.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Language preferences</li>
                    <li>User interface customization</li>
                    <li>Form data retention</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    These cookies are used to deliver advertisements more relevant to you.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Social media integration</li>
                    <li>Advertising personalization</li>
                    <li>Conversion tracking</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-yellow-600 mr-3" />
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-gray-700 mb-4">
                  You have several options for managing cookies:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings</li>
                  <li><strong>Opt-out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
                  <li><strong>Cookie Banner:</strong> Use our cookie consent banner to manage preferences</li>
                  <li><strong>Contact Us:</strong> Reach out to us directly for assistance</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services that place cookies on your device:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                <li><strong>Advertising Networks:</strong> For targeted advertising and remarketing</li>
                <li><strong>Customer Support Tools:</strong> For chat and support functionality</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Retention</h2>
              <p className="text-gray-700 mb-6">
                Different cookies have different retention periods:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until deleted</li>
                <li><strong>Analytics Cookies:</strong> Typically retained for 2 years</li>
                <li><strong>Marketing Cookies:</strong> Retention varies by provider</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
              </p>

              <div className="bg-gray-50 rounded-2xl p-8 mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us About Cookies</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> cookies@royal.com</p>
                  <p><strong>Phone:</strong> +92 342 0664128</p>
                  <p><strong>Address:</strong> Punjab, Pakistan</p>
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