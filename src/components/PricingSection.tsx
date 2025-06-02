
import React from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';

const PricingSection = () => {
  const packages = [
    {
      name: "Basic",
      price: "5.000.000",
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      description: "Untuk UMKM yang baru memulai perjalanan digital",
      features: [
        "8 posting media sosial per bulan",
        "Desain konten feed Instagram",
        "Laporan performa sederhana",
        "Konsultasi mingguan via WhatsApp",
        "Hashtag research & strategy",
        "Basic community management"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "10.000.000",
      icon: <Star className="w-8 h-8 text-primary" />,
      description: "Untuk bisnis yang berkembang dan ingin meningkatkan reach",
      features: [
        "16 posting media sosial per bulan",
        "2 materi desain IG Feed custom",
        "Laporan analitik terperinci",
        "Konsultasi bi-weekly via Zoom",
        "Instagram Stories & Highlights",
        "Basic Facebook/Instagram Ads",
        "Competitor analysis bulanan"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "20.000.000",
      icon: <Crown className="w-8 h-8 text-purple-600" />,
      description: "Untuk perusahaan besar yang ingin dominasi digital",
      features: [
        "30 posting + video Reels per bulan",
        "Complete branding package",
        "Advanced analytics & strategy",
        "Weekly Zoom consultation",
        "Multi-platform management",
        "Advanced ads campaign",
        "Dedicated account manager",
        "24/7 priority support"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Paket Layanan Terbaik
          </h2>
          <p className="text-xl text-gray-300 font-opensans max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda. 
            Semua paket sudah termasuk konsultasi gratis dan garansi kepuasan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular ? 'ring-4 ring-primary ring-opacity-50 scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-secondary px-6 py-2 rounded-full text-sm font-opensans font-bold">
                    PALING POPULER
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="mb-4">
                  {pkg.icon}
                </div>
                <h3 className="text-2xl font-playfair font-bold text-secondary mb-2">
                  Paket {pkg.name}
                </h3>
                <p className="text-gray-600 font-opensans text-sm mb-4">
                  {pkg.description}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-playfair font-bold text-secondary">
                    Rp {pkg.price}
                  </span>
                  <span className="text-gray-500 font-opensans">/bulan</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-opensans text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 rounded-2xl font-opensans font-semibold transition-all duration-300 ${
                pkg.popular 
                  ? 'bg-primary text-secondary hover:bg-opacity-90 shadow-lg' 
                  : 'bg-secondary text-white hover:bg-opacity-90'
              }`}>
                Pesan Sekarang
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 font-opensans mb-4">
            Butuh paket khusus? Konsultasikan kebutuhan Anda dengan tim kami.
          </p>
          <button className="bg-white text-secondary px-8 py-3 rounded-2xl font-opensans font-semibold hover:bg-gray-100 transition-all duration-300">
            Konsultasi Custom Package
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
