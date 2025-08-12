import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    farmSize: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: '+92 98765 43210',
      subDetails: 'Mon-Sat, 9 AM - 7 PM',
      action: 'Call Now',
      color: 'bg-green-500',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Support',
      details: '+92 98765 43210',
      subDetails: '24/7 Instant Support',
      action: 'Chat on WhatsApp',
      color: 'bg-green-600',
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: 'support@agritech.com',
      subDetails: 'Response within 2 hours',
      action: 'Send Email',
      color: 'bg-blue-500',
    },
  ];

  const services = [
    'Drip Irrigation System',
    'Solar Irrigation',
    'Dairy Farming',
    'Knowledge Library',
    'Advisory Services',
    'Maintenance Service',
    'Consultation',
    'Other',
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch with Our Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your farm? Contact us for personalized consultation and quotes
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                      <p className="text-gray-700 font-medium mb-1">{info.details}</p>
                      <p className="text-gray-500 text-sm mb-4">{info.subDetails}</p>
                      <button className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center space-x-2 transition-colors duration-200">
                        <span>{info.action}</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>    

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-600">Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Farm Size (Acres)
                      </label>
                      <input
                        type="number"
                        name="farmSize"
                        value={formData.farmSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Enter farm size"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-amber-600 hover:from-green-700 hover:to-amber-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}