import React from 'react';
import { ArrowRight, Smartphone, QrCode } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-green-700 overflow-hidden pt-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-30S46.6 0 30 0zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transform Your <span className="text-green-300">Agriculture</span> with Smart Solutions
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
              From drip irrigation to solar systems, we provide cutting-edge technology that increases yield while reducing costs and environmental impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-green-200">Happy Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-green-200">Water Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">40%</div>
                <div className="text-green-200">Yield Increase</div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Mobile App Preview */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Our Mobile App</h3>
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img 
                    src="/photovoltaic-system-2742302_1280.jpg" 
                    alt="Smart Irrigation System in Action"
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">Download now and start optimizing your farm</p>
                  <div className="flex justify-center">
                    <div className="bg-gray-100 p-4 rounded-xl">
                      <QrCode className="w-20 h-20 text-gray-600" />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                      <span>🤖</span>
                      <div className="text-left">
                        <div className="text-xs">Get it on</div>
                        <div className="font-semibold">Google Play</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-400 w-12 h-12 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 bg-amber-600 w-8 h-8 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}