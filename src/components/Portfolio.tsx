
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Kopi Nusantara",
      category: "Instagram Management + Ads Campaign",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Meningkatkan engagement rate 300% dan penjualan online 150% dalam 6 bulan",
      client: "Kopi Nusantara",
      year: "2024"
    },
    {
      title: "Fashion Store Online",
      category: "Complete Branding + Content Creation",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Rebranding lengkap dengan peningkatan brand awareness 200%",
      client: "StyleUp Boutique",
      year: "2024"
    },
    {
      title: "Tech Startup",
      category: "Digital Marketing Strategy",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Lead generation campaign yang menghasilkan 500+ qualified leads",
      client: "InnovateTech",
      year: "2023"
    },
    {
      title: "Restaurant Chain",
      category: "Multi-Platform Management",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Koordinasi 5 outlet dengan konsistensi brand dan peningkatan customer retention",
      client: "Rasa Nusantara",
      year: "2023"
    },
    {
      title: "Beauty Brand",
      category: "Influencer Marketing + Content",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Kampanye dengan 50+ micro-influencer, ROI 400%",
      client: "Glow Beauty",
      year: "2023"
    },
    {
      title: "E-Learning Platform",
      category: "Performance Marketing",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Strategi ads yang menurunkan cost per acquisition 60%",
      client: "EduTech Indonesia",
      year: "2024"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6">
            Portfolio Terbaik Kami
          </h2>
          <p className="text-xl text-gray-600 font-opensans max-w-3xl mx-auto">
            Lihat bagaimana kami membantu klien mencapai target bisnis mereka 
            dengan strategi digital marketing yang efektif dan terukur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
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

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-4 rounded-2xl font-opensans font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
          >
            Lihat Portfolio Lengkap
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
