
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Mohon lengkapi semua field yang wajib diisi');
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    toast.success('Pesan Anda telah terkirim! Kami akan menghubungi Anda dalam 24 jam kerja.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-secondary to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
              Mari Bicara Tentang Bisnis Anda
            </h1>
            <p className="text-xl text-gray-300 font-opensans leading-relaxed">
              Konsultasi gratis untuk membahas strategi digital marketing yang tepat 
              untuk mengembangkan bisnis Anda. Hubungi kami sekarang!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-playfair font-bold text-secondary mb-8">
                Kirim Pesan Kepada Kami
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-secondary font-opensans font-semibold mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-opensans"
                      placeholder="Masukkan nama lengkap"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-secondary font-opensans font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-opensans"
                      placeholder="contoh@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-secondary font-opensans font-semibold mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-opensans"
                      placeholder="+62 812-3456-7890"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-secondary font-opensans font-semibold mb-2">
                      Nama Perusahaan
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-opensans"
                      placeholder="PT. Contoh Indonesia"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-secondary font-opensans font-semibold mb-2">
                    Layanan yang Diminati
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-opensans"
                  >
                    <option value="">Pilih layanan</option>
                    <option value="social-media">Manajemen Media Sosial</option>
                    <option value="branding">Desain Grafis & Branding</option>
                    <option value="advertising">Content Marketing & Ads</option>
                    <option value="custom">Paket Custom</option>
                  </select>
                </div>

                <div>
                  <label className="block text-secondary font-opensans font-semibold mb-2">
                    Pesan *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-opensans resize-none"
                    placeholder="Ceritakan tentang bisnis Anda dan bagaimana kami bisa membantu..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-secondary py-4 px-8 rounded-2xl font-opensans font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-3xl p-8">
                <h3 className="text-2xl font-playfair font-bold text-secondary mb-6">
                  Informasi Kontak
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary bg-opacity-20 p-3 rounded-2xl">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-opensans font-semibold text-secondary mb-1">
                        Alamat Kantor
                      </h4>
                      <p className="text-gray-600 font-opensans">
                        Jl. Sudirman No. 123<br />
                        Jakarta Pusat 10220<br />
                        Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary bg-opacity-20 p-3 rounded-2xl">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-opensans font-semibold text-secondary mb-1">
                        Telepon
                      </h4>
                      <p className="text-gray-600 font-opensans">
                        +62 21-123-4567<br />
                        +62 812-3456-7890
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary bg-opacity-20 p-3 rounded-2xl">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-opensans font-semibold text-secondary mb-1">
                        Email
                      </h4>
                      <p className="text-gray-600 font-opensans">
                        hello@dieturecreative.com<br />
                        info@dieturecreative.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary bg-opacity-20 p-3 rounded-2xl">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-opensans font-semibold text-secondary mb-1">
                        Jam Operasional
                      </h4>
                      <p className="text-gray-600 font-opensans">
                        Senin - Jumat: 09:00 - 18:00<br />
                        Sabtu: 09:00 - 15:00<br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-8">
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-playfair font-bold text-green-800 mb-2">
                    Butuh Respon Cepat?
                  </h3>
                  <p className="text-green-700 font-opensans mb-6">
                    Hubungi kami langsung via WhatsApp untuk konsultasi instan
                  </p>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-2xl font-opensans font-semibold hover:bg-green-700 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat WhatsApp
                  </a>
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <h3 className="text-xl font-playfair font-bold text-secondary mb-4">
                  Lokasi Kami
                </h3>
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.195665800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sJl.%20Jenderal%20Sudirman%2C%20Jakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1644309583890!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
