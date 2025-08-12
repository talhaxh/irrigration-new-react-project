export default function Services() {
  const services = [
    {
      icon: '💧',
      title: 'Royal Irrigation Systems',
      description: 'Precision water delivery that reduces water usage by up to 95% while maximizing crop yield.',
      features: ['Water-efficient', 'Automated control', 'Customizable layouts', 'Remote monitoring'],
      color: 'bg-primary',
    },
    {
      icon: '☀️',
      title: 'Royal Solar',
      description: 'Harness solar energy to power your irrigation systems, reducing electricity costs dramatically.',
      features: ['Zero electricity bills', 'Eco-friendly', 'Low maintenance', 'Government subsidies'],
      color: 'bg-warning',
    },
    {
      icon: '⚡',
      title: 'Dairy Farming',
      description: 'Efficient milk production through advanced livestock management and modern dairy processing systems.',
      features: ['High-yield breeds', 'Automated milking systems', 'Nutrient-rich feed plans', 'Cold storage integration'],
      color: 'bg-success',
    },
    {
      icon: '🌱',
      title: 'Knowledge Library',
      description: 'Centralized digital resource hub offering expert insights, tutorials, and real-time agricultural best practices.',
      features: ['Expert-written guides', 'Step-by-step video tutorials', 'Crop-specific problem solving', 'Offline access for field use'],
      color: 'bg-success',
    },
    {
      icon: '⚙️',
      title: 'Market Rates',
      description: 'Real-time price tracking system for crops, livestock, and farming inputs across regional and national markets.',
      features: ['Live commodity price updates', 'City-wise and mandi-wise rate comparison', 'Historical price trend analysis', 'Customized alerts for rate changes'],
      color: 'bg-info',
    },
    {
      icon: '🛡️',
      title: 'Advisory Services',
      description: 'Personalized agricultural guidance from expert advisors to improve crop health, yield, and overall farm efficiency.',
      features: ['One-on-one expert consultations', 'Crop disease diagnosis and solutions', 'Soil and weather-based recommendations', 'Chat and in-app message support'],
      color: 'bg-danger',
    },
  ];

  return (
    <section id="services" className="section-padding bg-light-gray">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Comprehensive Agriculture Solutions
          </h2>
          <p className="section-subtitle">
            We provide end-to-end solutions that transform traditional farming into smart, sustainable agriculture
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className={`service-icon ${service.color} text-white`}>
                  <span style={{ fontSize: '2rem' }}>{service.icon}</span>
                </div>
    
                <h3 className="h4 fw-bold text-dark mb-3">{service.title}</h3>
                <p className="text-muted mb-4">{service.description}</p>
                
                <ul className="list-unstyled mb-0">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="d-flex align-items-center text-muted mb-2">
                      <div className="bg-success rounded-circle me-3" style={{ width: '8px', height: '8px' }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}