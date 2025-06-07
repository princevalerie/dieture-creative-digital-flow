
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';

const CTA = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-orange-400">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Siap Mengembangkan Bisnis Anda?
          </h2>
          <p className="text-xl text-white font-opensans mb-8 opacity-90">
            Jangan biarkan kompetitor unggul di dunia digital. Mulai transformasi 
            digital bisnis Anda bersama Dieture Creative hari ini juga!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="group bg-white text-secondary px-8 py-4 rounded-2xl font-opensans font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center gap-3"
            >
              <Calendar className="w-5 h-5" />
              Jadwalkan Konsultasi Gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-opensans font-semibold hover:bg-white hover:text-secondary transition-all duration-300 flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Chat WhatsApp
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                Konsultasi Gratis
              </h3>
              <p className="text-white opacity-90 font-opensans">
                Analisis mendalam strategi digital marketing bisnis Anda
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                Custom Strategy
              </h3>
              <p className="text-white opacity-90 font-opensans">
                Solusi yang disesuaikan dengan kebutuhan spesifik bisnis
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                Hasil Terukur
              </h3>
              <p className="text-white opacity-90 font-opensans">
                ROI yang jelas dan pelaporan transparan setiap bulan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
