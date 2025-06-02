
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Tips Meningkatkan Engagement di Instagram",
      excerpt: "Pelajari strategi terbukti untuk meningkatkan interaksi dengan audience di Instagram dan membangun komunitas yang loyal.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Tim Dieture",
      date: "15 November 2024",
      category: "Social Media"
    },
    {
      id: 2,
      title: "Cara Efektif Memanfaatkan TikTok untuk Brand UMKM",
      excerpt: "TikTok bukan hanya untuk hiburan. Temukan bagaimana UMKM dapat memanfaatkan platform ini untuk meningkatkan brand awareness.",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Tim Dieture",
      date: "12 November 2024",
      category: "Digital Marketing"
    },
    {
      id: 3,
      title: "Mengapa Branding Visual Penting untuk Startup Baru",
      excerpt: "Identitas visual yang kuat adalah kunci sukses startup. Pelajari mengapa branding visual sangat penting dan bagaimana membuatnya.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Tim Dieture",
      date: "8 November 2024",
      category: "Branding"
    },
    {
      id: 4,
      title: "Strategi Content Marketing untuk Meningkatkan Konversi",
      excerpt: "Content marketing yang tepat dapat meningkatkan konversi hingga 300%. Pelajari strategi terbukti untuk bisnis Anda.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Tim Dieture",
      date: "5 November 2024",
      category: "Content Marketing"
    },
    {
      id: 5,
      title: "ROI Campaign Ads: Cara Mengukur dan Meningkatkannya",
      excerpt: "Memahami ROI adalah kunci sukses kampanye iklan digital. Pelajari metrik penting dan cara optimalisasinya.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Tim Dieture",
      date: "2 November 2024",
      category: "Advertising"
    },
    {
      id: 6,
      title: "Tren Digital Marketing 2024: Yang Perlu Anda Ketahui",
      excerpt: "Dunia digital marketing terus berkembang. Simak tren terbaru yang akan mendominasi tahun 2024.",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Tim Dieture",
      date: "29 Oktober 2024",
      category: "Trends"
    }
  ];

  const categories = ["Semua", "Social Media", "Digital Marketing", "Branding", "Content Marketing", "Advertising", "Trends"];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-600 font-opensans max-w-3xl mx-auto">
              Dapatkan tips, strategi, dan insight terbaru tentang digital marketing, 
              branding, dan pengembangan bisnis dari para ahli di Dieture Creative.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-all duration-200 font-opensans"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full mb-4 w-fit">
                    Featured
                  </span>
                  <h2 className="text-3xl font-playfair font-bold text-secondary mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 font-opensans mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{blogPosts[0].date}</span>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${blogPosts[0].id}`}
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold"
                    >
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-playfair font-bold text-secondary mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 font-opensans mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary hover:text-secondary transition-colors text-sm font-semibold"
                    >
                      Baca →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-primary text-white px-8 py-3 rounded-2xl font-opensans font-semibold hover:bg-opacity-90 transition-all duration-200">
              Muat Lebih Banyak
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
