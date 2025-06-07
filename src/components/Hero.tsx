
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-secondary leading-tight">
              Wujudkan Brand
              <br />
              Impian Anda
              <br />
              dengan <span className="text-primary">Strategi</span>
              <br />
              <span className="text-primary">Digital Terdepan</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 font-opensans max-w-lg">
              Dieture Creative membantu bisnis Anda bertumbuh melalui solusi 
              branding dan pemasaran digital yang inovatif dan efektif.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-primary text-white px-6 py-3 rounded-2xl font-opensans font-semibold hover:bg-opacity-90 transition-all duration-300 text-center text-sm md:text-base"
              >
                Konsultasi Gratis
              </Link>
              
              <Link
                to="/portfolio"
                className="border-2 border-secondary text-secondary px-6 py-3 rounded-2xl font-opensans font-semibold hover:bg-secondary hover:text-white transition-all duration-300 text-center text-sm md:text-base"
              >
                Lihat Portfolio
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/4b6a245d-8739-4d2d-88cd-2f8580de3525.png"
                alt="Digital Marketing Strategy"
                className="w-full max-w-lg h-auto object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-opensans font-semibold text-secondary">
                    300+ Klien Terpercaya
                  </span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-primary rounded-xl p-3 shadow-lg">
                <span className="text-white font-opensans font-bold text-sm">
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
