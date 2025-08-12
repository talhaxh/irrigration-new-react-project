import { useState } from 'react';

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
    <section id="products" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Premium Agriculture Products
          </h2>
          <p className="section-subtitle">
            Discover our comprehensive range of agriculture equipment and smart farming solutions
          </p>
        </div>

        {/* Filter */}
        <div className="d-flex justify-content-center mb-5">
          <div className="d-flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`btn rounded-pill fw-medium ${
                  selectedCategory === category
                    ? 'btn-success'
                    : 'btn-outline-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="row g-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-md-6 col-lg-4">
              <div className="product-card">
                <div className="position-relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <span className={`product-badge ${
                    product.availability === 'In Stock' 
                      ? 'badge-in-stock' 
                      : 'badge-limited'
                  }`}>
                    {product.availability}
                  </span>
                </div>
                
                <div className="p-4">
                  <h3 className="h5 fw-bold text-dark mb-2">{product.name}</h3>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div className="star-rating me-2">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`bi ${
                            i < Math.floor(product.rating) 
                              ? 'bi-star-fill' 
                              : 'bi-star'
                          }`}
                        ></i>
                      ))}
                    </div>
                    <span className="small text-muted">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="d-flex align-items-baseline mb-3">
                    <span className="h4 fw-bold text-dark">{product.price}</span>
                    <span className="ms-2 text-muted text-decoration-line-through">{product.originalPrice}</span>
                  </div>

                  <ul className="list-unstyled mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="d-flex align-items-center small text-muted mb-1">
                        <div className="bg-success rounded-circle me-2" style={{ width: '6px', height: '6px' }}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="btn btn-success w-100 d-flex align-items-center justify-content-center">
                    <i className="bi bi-phone me-2"></i>
                    <span>Buy on App</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <div className="bg-gradient-primary rounded-4 p-5 text-white">
            <h3 className="h2 fw-bold mb-3">
              Need Help Choosing the Right Product?
            </h3>
            <p className="lead mb-4">
              Our agriculture experts are here to guide you through our product selection
            </p>
            <a href="#contact" className="btn btn-light btn-lg">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}