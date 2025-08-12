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
    <section id="testimonials" className="section-padding bg-light-gray">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Success Stories from Our Farmers
          </h2>
          <p className="section-subtitle">
            Real farmers sharing their transformation journey with our smart agriculture solutions
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="testimonial-card">
                <div className="testimonial-quote">
                  <i className="bi bi-quote text-white"></i>
                </div>

                <div style={{ paddingTop: '1.5rem' }}>
                  <div className="d-flex align-items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-avatar me-3"
                    />
                    <div>
                      <h3 className="h6 fw-bold text-dark mb-1">{testimonial.name}</h3>
                      <p className="text-success fw-medium mb-0 small">{testimonial.role}</p>
                      <p className="text-muted small mb-0">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill star-rating"></i>
                    ))}
                  </div>

                  <p className="text-muted">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-5">
          <div className="bg-gradient-primary rounded-4 p-5 text-center text-white">
            <h3 className="h2 fw-bold mb-4">Our Impact in Numbers</h3>
            <div className="row g-4">
              <div className="col-6 col-md-3">
                <div className="display-6 fw-bold mb-2">500+</div>
                <div className="text-light">Happy Farmers</div>
              </div>
              <div className="col-6 col-md-3">
                <div className="display-6 fw-bold mb-2">5000+</div>
                <div className="text-light">Acres Covered</div>
              </div>
              <div className="col-6 col-md-3">
                <div className="display-6 fw-bold mb-2">Rs2Cr+</div>
                <div className="text-light">Farmer Savings</div>
              </div>
              <div className="col-6 col-md-3">
                <div className="display-6 fw-bold mb-2">95%</div>
                <div className="text-light">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}