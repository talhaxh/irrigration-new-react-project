export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-pattern"></div>
      <div className="container position-relative">
        <div className="row align-items-center min-vh-100 py-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-4 fw-bold text-white mb-4">
              Transform Your <span className="text-success">Agriculture</span> with Smart Solutions
            </h1>
            <p className="lead text-light mb-4">
              From drip irrigation to solar systems, we provide cutting-edge technology that increases yield while reducing costs and environmental impact.
            </p>
            
            <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
              <button className="btn btn-success btn-lg d-flex align-items-center justify-content-center">
                <span className="me-2">Explore Services</span>
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">500+</div>
                <div className="hero-stat-label">Happy Farmers</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">95%</div>
                <div className="hero-stat-label">Water Savings</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">40%</div>
                <div className="hero-stat-label">Yield Increase</div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="position-relative">
              <div className="bg-white rounded-4 p-4 shadow-lg" style={{ transform: 'rotate(3deg)' }}>
                <div className="text-center mb-4">
                  <h3 className="h4 fw-bold text-dark mb-3">Get Our Mobile App</h3>
                  <div className="rounded-3 overflow-hidden mb-4">
                    <img 
                      src="/photovoltaic-system-2742302_1280.jpg" 
                      alt="Smart Irrigation System in Action"
                      className="img-fluid"
                      style={{ height: '16rem', width: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-muted mb-3">Download now and start optimizing your farm</p>
                    <div className="d-flex justify-content-center mb-3">
                      <div className="bg-light p-3 rounded-3">
                        <i className="bi bi-qr-code display-6 text-muted"></i>
                      </div>
                    </div>
                    <button className="btn btn-dark d-flex align-items-center mx-auto">
                      <span className="me-2">🤖</span>
                      <div className="text-start">
                        <div className="small">Get it on</div>
                        <div className="fw-semibold">Google Play</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="position-absolute top-0 end-0 bg-success rounded-circle" 
                   style={{ width: '3rem', height: '3rem', marginTop: '-1rem', marginRight: '-1rem' }}>
              </div>
              <div className="position-absolute bottom-0 start-0 bg-warning rounded-circle" 
                   style={{ width: '2rem', height: '2rem', marginBottom: '-1rem', marginLeft: '-1rem' }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}