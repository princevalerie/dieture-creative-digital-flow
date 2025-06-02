
import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic",
      subtitle: "Untuk UMKM baru memulai",
      price: "5.000.000",
      period: "/bulan",
      popular: false,
      features: [
        "8 posting media sosial per bulan",
        "Laporan performa sederhana",
        "Konsultasi mingguan via WhatsApp",
        "Desain grafis basic (2 design/bulan)",
        "Manajemen 2 platform sosial media",
        "Response time 24 jam",
        "Content calendar bulanan"
      ],
      cta: "Mulai Basic Plan"
    },
    {
      name: "Pro",
      subtitle: "Untuk bisnis berkembang",
      price: "10.000.000",
      period: "/bulan",
      popular: true,
      features: [
        "16 posting media sosial per bulan",
        "Laporan analitik terperinci",
        "Konsultasi bi-weekly via Zoom",
        "Desain grafis premium (4 design/bulan)",
        "Manajemen 4 platform sosial media",
        "Response time 12 jam",
        "Content calendar + content pillar",
        "Basic ads management (budget terpisah)",
        "Hashtag research & optimization"
      ],
      cta: "Pilih Pro Plan"
    },
    {
      name: "Premium",
      subtitle: "Untuk perusahaan besar",
      price: "20.000.000",
      period: "/bulan",
      popular: false,
      features: [
        "30 posting + video content per bulan",
        "Laporan komprehensif + rekomendasi strategis",
        "Konsultasi mingguan via Zoom",
        "Unlimited desain grafis & video editing",
        "Manajemen semua platform sosial media",
        "Response time 6 jam",
        "Advanced content strategy",
        "Full ads management (Facebook, Google, Instagram)",
        "Influencer outreach & collaboration",
        "Brand guidelines & asset library",
        "Dedicated account manager"
      ],
      cta: "Pilih Premium Plan"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6">
              Paket Harga Layanan
            </h1>
            <p className="text-xl text-gray-600 font-opensans max-w-3xl mx-auto mb-8">
              Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda. 
              Semua paket sudah termasuk strategi personal dan support penuh dari tim ahli kami.
            </p>
            
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Konsultasi pertama GRATIS untuk semua paket</span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-sm font-semibold">
                    🔥 Paling Populer
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-playfair font-bold text-secondary mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 font-opensans mb-4">
                      {plan.subtitle}
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-secondary">
                        Rp {plan.price}
                      </span>
                      <span className="text-gray-500 font-opensans">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-opensans text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/contact"
                    className={`w-full py-4 rounded-xl font-opensans font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-primary text-white hover:bg-opacity-90'
                        : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-playfair font-bold text-secondary mb-4">
                Butuh Paket Custom?
              </h2>
              <p className="text-gray-600 font-opensans mb-6">
                Kami juga menyediakan paket custom yang disesuaikan dengan kebutuhan spesifik bisnis Anda. 
                Hubungi kami untuk konsultasi gratis dan proposal yang dipersonalisasi.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-xl font-opensans font-semibold hover:bg-opacity-90 transition-all duration-200"
              >
                Konsultasi Custom Package
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-center text-secondary mb-12">
              Pertanyaan Umum
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Apakah ada kontrak jangka panjang?",
                  answer: "Tidak ada kontrak jangka panjang. Anda dapat berhenti kapan saja dengan notice 30 hari sebelumnya."
                },
                {
                  question: "Bagaimana sistem pembayaran?",
                  answer: "Pembayaran dilakukan di awal bulan. Kami menerima transfer bank, e-wallet, dan metode pembayaran digital lainnya."
                },
                {
                  question: "Apakah bisa upgrade/downgrade paket?",
                  answer: "Ya, Anda dapat mengubah paket kapan saja. Perubahan akan berlaku di periode billing berikutnya."
                },
                {
                  question: "Apa yang terjadi jika saya tidak puas?",
                  answer: "Kami memberikan garansi kepuasan 30 hari. Jika tidak puas, kami akan refund 100% atau bekerja sama mencari solusi terbaik."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-secondary mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 font-opensans">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
