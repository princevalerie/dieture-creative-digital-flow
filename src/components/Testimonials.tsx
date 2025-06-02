
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "Kopi Nusantara",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "Dieture Creative benar-benar mengubah game digital marketing kami. Dalam 6 bulan, engagement Instagram naik 300% dan penjualan online meningkat drastis. Tim mereka sangat profesional dan selalu responsif.",
      rating: 5
    },
    {
      name: "Ahmad Rizki",
      position: "CEO & Founder",
      company: "StyleUp Boutique",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "Rebranding yang dilakukan Dieture Creative sangat memuaskan. Mereka tidak hanya membuat logo baru, tapi juga strategi brand yang komprehensif. ROI dari investasi branding ini luar biasa!",
      rating: 5
    },
    {
      name: "Maya Sari",
      position: "Digital Marketing Manager",
      company: "InnovateTech",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "Campaign lead generation yang mereka buat menghasilkan 500+ qualified leads dalam 3 bulan. Cost per lead juga turun 40% dibanding agency sebelumnya. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6">
            Apa Kata Klien Kami
          </h2>
          <p className="text-xl text-gray-600 font-opensans max-w-3xl mx-auto">
            Kepercayaan dan kepuasan klien adalah prioritas utama kami. 
            Inilah testimoni dari para klien yang telah merasakan dampak positif layanan kami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <div className="absolute -top-4 left-8">
                <div className="bg-primary w-12 h-12 rounded-2xl flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 font-opensans mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-opensans font-semibold text-secondary">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 font-opensans">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-primary font-opensans font-semibold">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-secondary font-opensans">
              <span className="font-bold">4.9/5</span> rating dari 50+ klien terpercaya
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
