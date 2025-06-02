
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

          {/* Right Content - Placeholder for image */}
          <div className="hidden lg:flex justify-center">
            <div className="w-full max-w-md h-80 bg-gray-200 rounded-2xl flex items-center justify-center">
              <span className="text-gray-400 text-2xl font-opensans">600 x 450</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
