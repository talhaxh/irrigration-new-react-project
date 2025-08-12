import { useState } from 'react';

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
      icon: 'bi-telephone',
      title: 'Phone Support',
      details: '+92 98765 43210',
      subDetails: 'Mon-Sat, 9 AM - 7 PM',
      action: 'Call Now',
      color: 'contact-icon-green',
    },
    {
      icon: 'bi-whatsapp',
      title: 'WhatsApp Support',
      details: '+92 98765 43210',
      subDetails: '24/7 Instant Support',
      action: 'Chat on WhatsApp',
      color: 'contact-icon-green',
    },
    {
      icon: 'bi-envelope',
      title: 'Email Support',
      details: 'support@agritech.com',
      subDetails: 'Response within 2 hours',
      action: 'Send Email',
      color: 'contact-icon-blue',
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
    <section id="contact" className="section-padding bg-light-gray">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Get in Touch with Our Experts
          </h2>
          <p className="section-subtitle">
            Ready to transform your farm? Contact us for personalized consultation and quotes
          </p>
        </div>

        <div className="row g-5">
          {/* Contact Information */}
          <div className="col-lg-4">
            <div className="row g-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="col-12">
                  <div className="contact-info-card">
                    <div className="d-flex align-items-start">
                      <div className={`contact-icon ${info.color} text-white me-3`}>
                        <i className={`${info.icon} fs-5`}></i>
                      </div>
                      <div className="flex-grow-1">
                        <h3 className="h6 fw-bold text-dark mb-2">{info.title}</h3>
                        <p className="text-dark fw-medium mb-1">{info.details}</p>
                        <p className="text-muted small mb-3">{info.subDetails}</p>
                        <button className="btn btn-link text-success fw-semibold p-0 d-flex align-items-center">
                          <span className="me-2">{info.action}</span>
                          <i className="bi bi-send"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>    

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="bg-white rounded-4 p-5 shadow">
              <h3 className="h4 fw-bold text-dark mb-4">Send us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-5">
                  <i className="bi bi-check-circle display-1 text-success mb-4"></i>
                  <h4 className="h4 fw-bold text-dark mb-2">Message Sent Successfully!</h4>
                  <p className="text-muted">Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-dark">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-control form-control-custom"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-dark">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-control form-control-custom"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="row g-4 mt-1">
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-dark">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-control form-control-custom"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-dark">
                        Farm Size (Acres)
                      </label>
                      <input
                        type="number"
                        name="farmSize"
                        value={formData.farmSize}
                        onChange={handleInputChange}
                        className="form-control form-control-custom"
                        placeholder="Enter farm size"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="form-label fw-medium text-dark">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="form-select form-control-custom"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-4">
                    <label className="form-label fw-medium text-dark">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-control form-control-custom"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-gradient w-100 py-3 mt-4 d-flex align-items-center justify-content-center"
                  >
                    <i className="bi bi-send me-2"></i>
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