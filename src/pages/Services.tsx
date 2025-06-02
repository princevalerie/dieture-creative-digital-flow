
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Instagram, Palette, TrendingUp, ArrowRight, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'social-media',
      icon: <Instagram className="w-16 h-16 text-primary" />,
      title: "Manajemen Media Sosial",
      description: "Kelola konten, jadwal posting, dan komunitas di berbagai platform dengan strategi yang tepat sasaran untuk meningkatkan engagement dan brand awareness.",
      features: [
        "Content Planning & Strategy",
        "Daily Posting & Scheduling",
        "Community Management",
        "Hashtag Research & Optimization",
        "Instagram Stories & Highlights",
        "Analytics & Monthly Reporting",
        "Competitor Analysis",
        "Crisis Management"
      ],
      platforms: ["Instagram", "Facebook", "TikTok", "LinkedIn", "Twitter"],
      price: "Mulai dari Rp 5.000.000/bulan"
    },
    {
      id: 'branding',
      icon: <Palette className="w-16 h-16 text-primary" />,
      title: "Desain Grafis & Branding",
      description: "Ciptakan identitas visual yang kuat dan memorable dengan desain profesional yang konsisten di semua touchpoint brand Anda.",
      features: [
        "Logo Design & Brand Identity",
        "Brand Guidelines Development",
        "Social Media Templates",
        "Print Design (Flyer, Brochure)",
        "Website Design (UI/UX)",
        "Packaging Design",
        "Brand Consultation",
        "Brand Asset Management"
      ],
      platforms: ["Adobe Creative Suite", "Figma", "Canva Pro", "Brand Management"],
      price: "Mulai dari Rp 3.000.000/project"
    },
    {
      id: 'advertising',
      icon: <TrendingUp className="w-16 h-16 text-primary" />,
      title: "Content Marketing & Digital Ads",
      description: "Tingkatkan reach dan konversi dengan strategi konten berbasis data dan campaign iklan yang teroptimasi untuk hasil maksimal.",
      features: [
        "SEO Content Writing",
        "Facebook & Instagram Ads",
        "Google Ads (Search & Display)",
        "Content Strategy & Calendar",
        "A/B Testing & Optimization",
        "Landing Page Creation",
        "Email Marketing",
        "Performance Analytics"
      ],
      platforms: ["Google Ads", "Facebook Ads Manager", "Google Analytics", "SEO Tools"],
      price: "Mulai dari Rp 7.000.000/bulan"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-secondary to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
              Layanan Profesional Kami
            </h1>
            <p className="text-xl text-gray-300 font-opensans leading-relaxed">
              Solusi digital marketing terintegrasi yang dirancang khusus untuk mengembangkan 
              bisnis Anda dengan strategi yang terbukti efektif dan hasil yang terukur.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`mb-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex items-center gap-12`}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="bg-primary bg-opacity-10 w-24 h-24 rounded-3xl flex items-center justify-center mb-8">
                  {service.icon}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-6">
                  {service.title}
                </h2>
                
                <p className="text-lg text-gray-600 font-opensans mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-opensans font-bold text-secondary mb-4">
                    Platform & Tools:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.platforms.map((platform, idx) => (
                      <span 
                        key={idx}
                        className="bg-primary bg-opacity-20 text-secondary px-3 py-1 rounded-full text-sm font-opensans"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-2xl font-playfair font-bold text-primary mb-2">
                    {service.price}
                  </div>
                  <p className="text-gray-600 font-opensans text-sm">
                    *Harga dapat disesuaikan dengan kebutuhan spesifik
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-4 rounded-2xl font-opensans font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                >
                  Konsultasi Gratis
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="md:w-1/2">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-playfair font-bold text-secondary mb-6">
                    Yang Anda Dapatkan:
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-opensans">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6">
              Butuh Paket Custom?
            </h2>
            <p className="text-xl text-gray-600 font-opensans mb-8">
              Setiap bisnis memiliki kebutuhan yang unik. Mari diskusikan solusi 
              yang tepat untuk tantangan digital marketing Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-secondary px-8 py-4 rounded-2xl font-opensans font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
              >
                Konsultasi Gratis
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-secondary text-secondary px-8 py-4 rounded-2xl font-opensans font-semibold hover:bg-secondary hover:text-white transition-all duration-300"
              >
                Lihat Paket Harga
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
