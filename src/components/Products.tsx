import React, { useState } from 'react';
import { Filter, Star, ShoppingCart, Smartphone } from 'lucide-react';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Drip Systems', 'Solar Equipment', 'Sprinklers', 'Sensors', 'Controllers'];

  const products = [
    {
      id: 1,
      name: 'Agricultural Seed',
      category: 'Drip Systems',
      price: 'Rs 45,000',
      originalPrice: 'Rs 52,000',
      rating: 4.8,
      reviews: 156,
      image: 'https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg',
      availability: 'In Stock',
      features: ['Complete drip setup', 'Smart controller', '2-year warranty', 'Free installation'],
    },
    {
      id: 2,
      name: '5HP Solar Water Pump',
      category: 'Solar Equipment',
      price: 'Rs 1,25,000',
      originalPrice: 'Rs 1,45,000',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=400',
      availability: 'In Stock',
      features: ['High efficiency', 'MNRE approved', '5-year warranty', 'Subsidy eligible'],
    },
    
    {
      id: 3,
      name: 'Electric Pump',
      category: 'Sprinklers',
      price: 'Rs 28,000',
      originalPrice: 'Rs 32,000',
      rating: 4.7,
      reviews: 203,
      image: 'https://images.pexels.com/photos/14783299/pexels-photo-14783299.jpeg',
      availability: 'In Stock',
      features: ['360° coverage', 'Adjustable flow', 'Durable design', 'Easy maintenance'],
    },
    {
      id: 4,
      name: 'Drip Irrigation Kit',
      category: 'Sensors',
      price: 'Rs 8,500',
      originalPrice: 'Rs 10,000',
      rating: 4.6,
      reviews: 124,
      image: 'https://images.pexels.com/photos/27624218/pexels-photo-27624218.jpeg',
      availability: 'In Stock',
      features: ['Wireless connectivity', 'Mobile alerts', 'Weather resistant', 'Long battery life'],
    },
    {      
      id: 5,
      name: 'Smart Irrigation Controller',
      category: 'Controllers',
      price: 'Rs 15,000',
      originalPrice: 'Rs 18,000',
      rating: 4.8,
      reviews: 176,
      image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400',
      availability: 'In Stock',
      features: ['App control', 'Schedule automation', 'Weather integration', 'Multiple zones'],
    },
    {
      id: 6,
      name: 'Pestiside Spray',
      category: 'Drip Systems',
      price: 'Rs 75,000',
      originalPrice: 'Rs 85,000',
      rating: 4.9,
      reviews: 67,
      image: 'https://images.pexels.com/photos/28800910/pexels-photo-28800910.jpeg',
      availability: 'Limited Stock',
      features: ['UV protection', 'Ventilation system', 'Drip integration', 'Professional setup'],
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Agriculture Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of agriculture equipment and smart farming solutions
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                  product.availability === 'In Stock' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {product.availability}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  <span className="ml-2 text-lg text-gray-500 line-through">{product.originalPrice}</span>
                </div>

                <ul className="space-y-1 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Smartphone className="w-4 h-4" />
                  <span>Buy on App</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-amber-600 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Help Choosing the Right Product?
            </h3>
            <p className="text-green-100 text-lg mb-8">
              Our agriculture experts are here to guide you through our product selection
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}