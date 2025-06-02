
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Calendar, Tag } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: "Kopi Nusantara",
      category: "Instagram Management + Ads Campaign",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Meningkatkan engagement rate 300% dan penjualan online 150% dalam 6 bulan melalui strategi konten yang konsisten dan campaign ads yang tepat sasaran.",
      client: "Kopi Nusantara",
      year: "2024",
      services: ["Social Media Management", "Paid Advertising", "Content Creation"],
      results: {
        engagement: "+300%",
        sales: "+150%",
        followers: "+200%"
      }
    },
    {
      id: 2,
      title: "Fashion Store Online",
      category: "Complete Branding + Content Creation",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Rebranding lengkap dengan peningkatan brand awareness 200% dan pembentukan identitas visual yang kuat di semua platform digital.",
      client: "StyleUp Boutique",
      year: "2024",
      services: ["Brand Identity", "Social Media Design", "Photography"],
      results: {
        awareness: "+200%",
        reach: "+180%",
        conversion: "+120%"
      }
    },
    {
      id: 3,
      title: "Tech Startup",
      category: "Digital Marketing Strategy",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Lead generation campaign yang menghasilkan 500+ qualified leads melalui strategi multi-channel dan optimasi conversion funnel.",
      client: "InnovateTech",
      year: "2023",
      services: ["Lead Generation", "SEO Strategy", "Content Marketing"],
      results: {
        leads: "500+",
        conversion: "+85%",
        traffic: "+250%"
      }
    },
    {
      id: 4,
      title: "Restaurant Chain",
      category: "Multi-Platform Management",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Koordinasi 5 outlet dengan konsistensi brand dan peningkatan customer retention melalui strategi digital marketing terpadu.",
      client: "Rasa Nusantara",
      year: "2023",
      services: ["Multi-Location Management", "Brand Consistency", "Customer Retention"],
      results: {
        retention: "+150%",
        consistency: "100%",
        satisfaction: "+90%"
      }
    },
    {
      id: 5,
      title: "Beauty Brand",
      category: "Influencer Marketing + Content",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Kampanye dengan 50+ micro-influencer yang menghasilkan ROI 400% dan peningkatan brand awareness yang signifikan.",
      client: "Glow Beauty",
      year: "2023",
      services: ["Influencer Marketing", "Campaign Management", "Performance Tracking"],
      results: {
        roi: "400%",
        reach: "2M+",
        engagement: "+320%"
      }
    },
    {
      id: 6,
      title: "E-Learning Platform",
      category: "Performance Marketing",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Strategi ads yang menurunkan cost per acquisition 60% sambil meningkatkan kualitas lead dan conversion rate.",
      client: "EduTech Indonesia",
      year: "2024",
      services: ["Paid Advertising", "Conversion Optimization", "Analytics"],
      results: {
        cpa: "-60%",
        leads: "+400%",
        quality: "+150%"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6">
              Portfolio Terbaik Kami
            </h1>
            <p className="text-xl text-gray-600 font-opensans max-w-3xl mx-auto">
              Lihat bagaimana kami membantu klien mencapai target bisnis mereka 
              dengan strategi digital marketing yang efektif dan terukur.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-secondary bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-secondary px-3 py-1 rounded-full text-xs font-opensans font-semibold">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-primary font-opensans text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-playfair font-bold text-secondary mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 font-opensans text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.services.map((service, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(project.results).map(([key, value], index) => (
                      <div key={index} className="text-center">
                        <div className="text-primary font-bold text-sm">{value}</div>
                        <div className="text-gray-500 text-xs capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-secondary font-opensans font-semibold text-sm">
                      {project.client}
                    </span>
                    <button className="text-primary hover:text-secondary transition-colors duration-200">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-3xl p-12 text-center shadow-lg">
            <h2 className="text-3xl font-playfair font-bold text-secondary mb-4">
              Siap Bergabung dengan Klien Sukses Kami?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Mulai transformasi digital bisnis Anda bersama tim expert kami. 
              Konsultasi gratis untuk strategi yang tepat!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-4 rounded-2xl font-opensans font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
              >
                Konsultasi Gratis
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 border-2 border-secondary text-secondary px-8 py-4 rounded-2xl font-opensans font-semibold hover:bg-secondary hover:text-white transition-all duration-300"
              >
                Lihat Paket Harga
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
