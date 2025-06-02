
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/services', label: 'Layanan' },
    { href: '/pricing', label: 'Harga' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Kontak' },
  ];

  const services = [
    'Manajemen Media Sosial',
    'Desain Grafis & Branding',
    'Content Marketing',
    'Facebook & Instagram Ads',
    'Google Ads',
    'SEO Optimization'
  ];

  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/8bd627b2-bcc2-4c65-bd1b-8cf4171b8f4b.png" 
                alt="Dieture Creative Logo" 
                className="h-10 w-10"
              />
              <span className="font-playfair font-bold text-xl">Dieture Creative</span>
            </div>
            <p className="text-gray-300 font-opensans mb-6 leading-relaxed">
              Agensi digital marketing terpercaya yang mengkhususkan diri dalam 
              manajemen media sosial, branding, dan strategi pemasaran digital 
              untuk mengembangkan bisnis Anda.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/dieturecreative" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary bg-opacity-20 p-3 rounded-2xl hover:bg-opacity-30 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/dieturecreative" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary bg-opacity-20 p-3 rounded-2xl hover:bg-opacity-30 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/dieturecreative" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary bg-opacity-20 p-3 rounded-2xl hover:bg-opacity-30 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 font-opensans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair font-bold text-xl mb-6">Layanan Kami</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 font-opensans text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair font-bold text-xl mb-6">Kontak</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300 font-opensans text-sm">
                  Jl. Sudirman No. 123<br />
                  Jakarta Pusat 10220<br />
                  Indonesia
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+6221-123-4567"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 font-opensans text-sm"
                >
                  +62 21-123-4567
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:hello@dieturecreative.com"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 font-opensans text-sm"
                >
                  hello@dieturecreative.com
                </a>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block bg-primary text-secondary px-6 py-3 rounded-2xl font-opensans font-semibold hover:bg-opacity-90 transition-all duration-300"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 font-opensans text-sm mb-4 md:mb-0">
              © 2024 Dieture Creative. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-primary transition-colors duration-200 font-opensans text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-primary transition-colors duration-200 font-opensans text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
