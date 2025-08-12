import { useState } from 'react';

export default function SolarCalculator() {
  const [formData, setFormData] = useState({
    systemType: '',
    kwhPerYear: '',
  });
  
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateSolar = () => {
    const kwhPerYear = parseFloat(formData.kwhPerYear) || 0;
    const systemType = formData.systemType;

    // Solar calculation logic
    const dailyPowerConsumption = kwhPerYear / 365; // kWh per day
    
    // Solar system requirements
    const solarPanelCapacity = (dailyPowerConsumption * 1.3) / 5; // Assuming 5 peak sun hours

    setResults({
      solarPanelCapacity: solarPanelCapacity.toFixed(2),
      systemType: systemType,
    });
    
    setShowResults(true);
  };

  return (
    <section id="calculator" className="section-padding calculator-section">
      <div className="container">
        <div className="text-center mb-5">
          <div className="calculator-icon mx-auto mb-4">
            <i className="bi bi-calculator display-6 text-warning"></i>
          </div>
          <h2 className="section-title">
            Solar System Cost Calculator
          </h2>
          <p className="section-subtitle">
            Calculate your potential savings and system requirements for solar power systems
          </p>
        </div>

        <div className="row g-5">
          {/* Calculator Form */}
          <div className="col-lg-6">
            <div className="calculator-card">
              <h3 className="h4 fw-bold text-dark mb-4">Enter Your Details</h3>
              
              <div className="mb-4">
                <label className="form-label fw-medium text-dark">
                  Choose System Type *
                </label>
                <select
                  name="systemType"
                  value={formData.systemType}
                  onChange={handleInputChange}
                  className="form-select form-control-custom"
                  required
                >
                  <option value="">Select System Type</option>
                  <option value="Farm House">Farm House</option>
                  <option value="Home">Home</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label fw-medium text-dark">
                  kWh Used per Year (Units) *
                </label>
                <input
                  type="number"
                  name="kwhPerYear"
                  value={formData.kwhPerYear}
                  onChange={handleInputChange}
                  className="form-control form-control-custom"
                  placeholder="Enter annual kWh consumption"
                  required
                />
                <div className="form-text">
                  Check your electricity bill for annual consumption
                </div>
              </div>

              <button
                onClick={calculateSolar}
                disabled={!formData.systemType || !formData.kwhPerYear}
                className="btn btn-gradient w-100 py-3 d-flex align-items-center justify-content-center"
              >
                <i className="bi bi-calculator me-2"></i>
                <span>Calculate Solar Savings</span>
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="col-lg-6">
            {showResults && results ? (
              <div className="calculator-card">
                <h3 className="h4 fw-bold text-dark mb-4">
                  Your Solar Solution - {results.systemType}
                </h3>
                
                <div className="bg-warning bg-opacity-10 border border-warning rounded-3 p-4">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-sun text-warning me-3 fs-4"></i>
                    <span className="h6 fw-medium text-warning mb-0">Required System Size</span>
                  </div>
                  <div className="display-6 fw-bold text-warning">{results.solarPanelCapacity} kW</div>
                </div>
              </div>
            ) : (
              <div className="calculator-card d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
                <div className="text-center">
                  <i className="bi bi-sun display-1 text-warning mb-4"></i>
                  <h3 className="h5 fw-semibold text-muted mb-2">Ready to Calculate?</h3>
                  <p className="text-muted">Fill in your details to see your solar system requirements</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}