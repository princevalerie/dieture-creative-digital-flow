
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Palette, TrendingUp, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Instagram className="w-12 h-12 text-primary" />,
      title: "Manajemen Media Sosial",
      description: "Kelola konten, jadwal posting, dan komunitas di berbagai platform seperti Instagram, Facebook, TikTok, dan LinkedIn dengan strategi yang tepat sasaran.",
      features: ["Content Planning", "Community Management", "Analytics & Reporting", "Hashtag Strategy"],
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/services/social-media"
    },
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "Desain Grafis & Branding",
      description: "Ciptakan identitas visual yang kuat dengan desain logo, brand guidelines, dan materi promosi yang konsisten dan memorable.",
      features: ["Logo Design", "Brand Identity", "Print Design", "Digital Assets"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/services/branding"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Content Marketing & Ads",
      description: "Tingkatkan reach dan engagement dengan strategi konten berbasis data dan campaign iklan yang teroptimasi untuk konversi maksimal.",
      features: ["SEO Content", "Facebook Ads", "Google Ads", "Performance Analysis"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/services/advertising"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6">
            Layanan Unggulan Kami
          </h2>
          <p className="text-xl text-gray-600 font-opensans max-w-3xl mx-auto">
            Solusi digital marketing terintegrasi yang dirancang khusus untuk mengembangkan 
            bisnis Anda di era digital dengan hasil yang terukur.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-secondary bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white bg-opacity-90 w-16 h-16 rounded-2xl flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-secondary mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 font-opensans mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 font-opensans">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.link}
                  className="group/link inline-flex items-center gap-2 text-primary font-opensans font-semibold hover:text-secondary transition-colors duration-200"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-2xl font-opensans font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
          >
            Lihat Semua Layanan
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
