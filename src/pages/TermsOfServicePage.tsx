import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-blue-200 hover:text-white mb-8 font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            
            <div className="flex items-center space-x-4 mb-6">
              <FileText className="w-12 h-12 text-blue-300" />
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Terms of Service
              </h1>
            </div>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Please read these terms carefully before using our services. By using our services, you agree to these terms.
            </p>
            
            <div className="mt-6 text-blue-200">
              <p>Last updated: January 18, 2025</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                  Acceptance of Terms
                </h2>
                <p className="text-gray-700">
                  By accessing and using Royal Solar & Irrigation System services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Scale className="w-6 h-6 text-green-600 mr-3" />
                  Use License
                </h2>
                <p className="text-gray-700 mb-4">
                  Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained in our services</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>
              <p className="text-gray-700 mb-4">
                Royal Solar & Irrigation System provides:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Agricultural irrigation systems and equipment</li>
                <li>Solar power solutions for farming</li>
                <li>Technical consultation and support services</li>
                <li>Mobile application for farm management</li>
                <li>Educational resources and knowledge library</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Respect intellectual property rights</li>
                <li>Not engage in any harmful or disruptive activities</li>
              </ul>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
                  Disclaimer
                </h2>
                <p className="text-gray-700 mb-4">
                  The materials on our website and services are provided on an 'as is' basis. Royal Solar & Irrigation System makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Implied warranties or conditions of merchantability</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement of intellectual property</li>
                  <li>Accuracy, reliability, or completeness of information</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations of Liability</h2>
              <p className="text-gray-700 mb-6">
                In no event shall Royal Solar & Irrigation System or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services, even if we have been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                For paid services:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Payment is due upon receipt of invoice</li>
                <li>Late payments may incur additional charges</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Prices are subject to change with notice</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700 mb-6">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These terms and conditions are governed by and construed in accordance with the laws of Pakistan and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 mb-6">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>

              <div className="bg-gray-50 rounded-2xl p-8 mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> legal@royal.com</p>
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