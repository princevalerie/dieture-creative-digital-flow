
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Digital Marketing Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary bg-opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            Jadilah Brand yang 
            <span className="text-primary"> Berpengaruh</span>
            <br />
            di Dunia Digital
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 font-opensans mb-8 max-w-3xl mx-auto leading-relaxed">
            Dieture Creative — Ahli dalam manajemen media sosial, branding visual, 
            dan campaign ads yang menghasilkan ROI tinggi untuk bisnis Anda.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/services"
              className="group bg-primary text-secondary px-8 py-4 rounded-2xl font-opensans font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              Lihat Layanan Kami
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/contact"
              className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-opensans font-semibold hover:bg-white hover:text-secondary transition-all duration-300 flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Konsultasi Gratis
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-playfair font-bold text-primary mb-2">50+</div>
              <div className="text-white font-opensans">Klien Terpercaya</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-playfair font-bold text-primary mb-2">200%</div>
              <div className="text-white font-opensans">Rata-rata ROI</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-playfair font-bold text-primary mb-2">24/7</div>
              <div className="text-white font-opensans">Support Aktif</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-playfair font-bold text-primary mb-2">3+</div>
              <div className="text-white font-opensans">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
