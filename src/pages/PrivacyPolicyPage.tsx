import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-900 to-green-700 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-green-200 hover:text-white mb-8 font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            
            <div className="flex items-center space-x-4 mb-6">
              <Shield className="w-12 h-12 text-green-300" />
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Privacy Policy
              </h1>
            </div>
            
            <p className="text-xl text-green-100 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            
            <div className="mt-6 text-green-200">
              <p>Last updated: January 18, 2025</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-green-600 mr-3" />
                  Information We Collect
                </h2>
                <p className="text-gray-700 mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Create an account or use our services</li>
                  <li>Contact us for support or inquiries</li>
                  <li>Subscribe to our newsletter or updates</li>
                  <li>Use our mobile application</li>
                  <li>Participate in surveys or feedback forms</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Develop new products and services</li>
                  <li>Analyze usage patterns and trends</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-purple-600 mr-3" />
                  Information Security
                </h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With trusted service providers who assist in our operations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request data portability</li>
                <li>Lodge a complaint with supervisory authorities</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700 mb-6">
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 mb-6">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>

              <div className="bg-gray-50 rounded-2xl p-8 mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> privacy@royal.com</p>
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