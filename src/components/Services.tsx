import React from 'react';
import { Droplets, Sun, Zap, Sprout, Settings, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Droplets,
      title: 'Royal Irrigation Systems',
      description: 'Precision water delivery that reduces water usage by up to 95% while maximizing crop yield.',
      features: ['Water-efficient', 'Automated control', 'Customizable layouts', 'Remote monitoring'],
      color: 'bg-blue-500',
    },
    {
      icon: Sun,
      title: 'Royal Solar',
      description: 'Harness solar energy to power your irrigation systems, reducing electricity costs dramatically.',
      features: ['Zero electricity bills', 'Eco-friendly', 'Low maintenance', 'Government subsidies'],
      color: 'bg-orange-500',
    },
    {
      icon: Zap,
      title: 'Dairy Farming',
      description: 'Efficient milk production through advanced livestock management and modern dairy processing systems.',
      features: ['High-yield breeds', 'Automated milking systems', 'Nutrient-rich feed plans', 'Cold storage integration'],
      color: 'bg-green-500',
    },
    {
      icon: Sprout,
      title: 'Knowledge Library',
      description: 'Centralized digital resource hub offering expert insights, tutorials, and real-time agricultural best practices.',
      features: ['Expert-written guides', 'Step-by-step video tutorials', 'Crop-specific problem solving', 'Offline access for field use'],
      color: 'bg-green-500',
    },
    {
      icon: Settings,
      title: 'Market Rates',
      description: 'Real-time price tracking system for crops, livestock, and farming inputs across regional and national markets.',
      features: ['Live commodity price updates', 'City-wise and mandi-wise rate comparison', 'Historical price trend analysis', 'Customized alerts for rate changes'],
      color: 'bg-purple-500',
    },
    {
      icon: Shield,
      title: ' Advisory Services ',
      description: 'Personalized agricultural guidance from expert advisors to improve crop health, yield, and overall farm efficiency.',
      features: ['One-on-one expert consultations', 'Crop disease diagnosis and solutions', 'Soil and weather-based recommendations', 'Chat and in-app message support'],
      color: 'bg-red-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Agriculture Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end solutions that transform traditional farming into smart, sustainable agriculture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
    
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}