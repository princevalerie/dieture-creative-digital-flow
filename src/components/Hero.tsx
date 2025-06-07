
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-secondary leading-tight">
              Wujudkan Brand
              <br />
              Impian Anda
              <br />
              dengan <span className="text-primary">Strategi</span>
              <br />
              <span className="text-primary">Digital Terdepan</span>
            </h1>
            
            <p className="text-lg text-gray-600 font-opensans max-w-md">
              Dieture Creative membantu bisnis Anda bertumbuh melalui solusi 
              branding dan pemasaran digital yang inovatif dan efektif.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-4 rounded-2xl font-opensans font-semibold hover:bg-opacity-90 transition-all duration-300 text-center"
              >
                Konsultasi Gratis
              </Link>
              
              <Link
                to="/portfolio"
                className="border-2 border-secondary text-secondary px-8 py-4 rounded-2xl font-opensans font-semibold hover:bg-secondary hover:text-white transition-all duration-300 text-center"
              >
                Lihat Portfolio
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Digital Marketing Strategy"
                className="w-full max-w-md h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-opensans font-semibold text-secondary">
                    300+ Klien Terpercaya
                  </span>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-primary rounded-xl p-4 shadow-lg">
                <span className="text-white font-opensans font-bold text-lg">
                  4.9★
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
