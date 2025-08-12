import React, { useState } from 'react';
import { Calculator, Sun, Zap, DollarSign, Phone, Mail } from 'lucide-react';

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
    <section id="calculator" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-6">
            <Calculator className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Solar System Cost Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential savings and system requirements for solar power systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Enter Your Details</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Choose System Type *
                </label>
                <select
                  name="systemType"
                  value={formData.systemType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="">Select System Type</option>
                  <option value="Farm House">Farm House</option>
                  <option value="Home">Home</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  kWh Used per Year (Units) *
                </label>
                <input
                  type="number"
                  name="kwhPerYear"
                  value={formData.kwhPerYear}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter annual kWh consumption"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  Check your electricity bill for annual consumption
                </p>
              </div>

              <button
                onClick={calculateSolar}
                disabled={!formData.systemType || !formData.kwhPerYear}
                className="w-full bg-gradient-to-r from-green-600 to-amber-600 hover:from-green-700 hover:to-amber-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Calculator className="w-5 h-5" />
                <span>Calculate Solar Savings</span>
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-8">
            {showResults && results ? (
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Your Solar Solution - {results.systemType}
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
                    <div className="flex items-center mb-4">
                      <Sun className="w-6 h-6 text-orange-600 mr-3" />
                      <span className="text-lg font-medium text-orange-600">Required System Size</span>
                    </div>
                    <div className="text-3xl font-bold text-orange-900">{results.solarPanelCapacity} kW</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 shadow-xl flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <Sun className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Ready to Calculate?</h3>
                  <p className="text-gray-500">Fill in your details to see your solar system requirements</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}