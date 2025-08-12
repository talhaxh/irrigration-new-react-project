import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Muhammad Ahmed',
      location: 'Punjab, Pakistan',
      role: 'Cotton Farmer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'After installing the drip irrigation system, my water usage reduced by 80% and crop yield increased by 45%. The solar pump has completely eliminated my electricity bills. Excellent service!',
    },
    {
      name: 'Fatima Khan',
      location: 'Sindh, Pakistan',
      role: 'Vegetable Farmer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The smart irrigation controller with mobile app is fantastic. I can monitor and control my farm from anywhere. The technical support team is very responsive and helpful.',
    },
    {
      name: 'Ali Hassan',
      location: 'Khyber Pakhtunkhwa, Pakistan',
      role: 'Wheat Farmer',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The tunnel farming setup has transformed my farming. I can now grow crops year-round regardless of weather. The ROI was achieved in just 18 months. Highly recommended!',
    },
    {
      name: 'Ayesha Malik',
      location: 'Punjab, Pakistan',
      role: 'Rice Farmer',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The sprinkler system covers my entire field uniformly. Water distribution is perfect and I have saved significant time and labor costs. The investment was worth every rupee.',
    },
    {
      name: 'Usman Shah',
      location: 'Balochistan, Pakistan',
      role: 'Fruit Farmer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The soil moisture sensors and automation have revolutionized my mango orchard. Plants get exact water they need. Fruit quality has improved dramatically.',
    },
    {
      name: 'Zainab Hussain',
      location: 'Sindh, Pakistan',
      role: 'Flower Farmer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The greenhouse tunnel system protects my flowers from weather damage. Production has increased by 60% and quality is consistently high. Amazing technology!',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Our Farmers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real farmers sharing their transformation journey with our smart agriculture solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <div className="absolute -top-4 left-8">
                <div className="bg-green-500 p-3 rounded-full">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="pt-6">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-green-600 font-medium">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-green-600 to-amber-600 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Our Impact in Numbers</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-green-100">Happy Farmers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5000+</div>
              <div className="text-green-100">Acres Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">Rs2Cr+</div>
              <div className="text-green-100">Farmer Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-green-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}