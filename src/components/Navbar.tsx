
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/services', label: 'Layanan' },
    { href: '/pricing', label: 'Harga' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/keyword-tool', label: 'Keyword Tool' },
    { href: '/contact', label: 'Kontak' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white bg-opacity-95'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-2">
            <span className="text-primary font-playfair font-bold text-2xl">
              Dieture Creative
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={scrollToTop}
                className="text-secondary hover:text-primary transition-colors duration-200 font-opensans"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="bg-primary text-white px-6 py-2 rounded-2xl font-opensans font-semibold hover:bg-opacity-90 transition-all duration-200"
            >
              Konsultasi Gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-3 py-2 text-secondary hover:text-primary transition-colors duration-200 font-opensans"
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mx-3 mt-4 bg-primary text-white px-6 py-2 rounded-2xl font-opensans font-semibold text-center hover:bg-opacity-90 transition-all duration-200"
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                Konsultasi Gratis
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
