import React, { useState } from 'react';
import { Search, TrendingUp, Target, Lightbulb } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Textarea } from '../components/ui/textarea';

interface KeywordSuggestion {
  keyword: string;
  difficulty: string;
  volume: string;
  trend: string;
}

const KeywordTool = () => {
  const [businessInfo, setBusinessInfo] = useState('');
  const [suggestions, setSuggestions] = useState<KeywordSuggestion[]>([]);
  const [loading, setLoading] = useState(false);

  const generateKeywords = async () => {
    if (!businessInfo.trim()) {
      alert('Mohon masukkan informasi bisnis Anda');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyC7HhzczqGlISx4WIyB2OUpWgfwEEhPHO8`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Berdasarkan informasi bisnis: "${businessInfo}", generate 10 rekomendasi keyword SEO yang relevan untuk optimasi on-page bisnis ini. Untuk setiap keyword, berikan: keyword phrase, difficulty level (Easy/Medium/Hard), estimated monthly search volume range, dan trend (Rising/Stable/Declining). Format sebagai JSON array dengan fields: keyword, difficulty, volume, trend. Contoh format: [{"keyword": "contoh keyword", "difficulty": "Medium", "volume": "1K-10K", "trend": "Rising"}]`
            }]
          }]
        }),
      });

      const data = await response.json();
      console.log('API Response:', data);
      
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        const text = data.candidates[0].content.parts[0].text;
        console.log('Response text:', text);
        
        // Extract JSON from the response
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          try {
            const keywordsData = JSON.parse(jsonMatch[0]);
            setSuggestions(keywordsData);
          } catch (parseError) {
            console.error('JSON Parse Error:', parseError);
            // Fallback dengan data mock
            generateMockKeywords();
          }
        } else {
          console.log('No JSON found in response, using mock data');
          generateMockKeywords();
        }
      } else {
        console.error('Unexpected API response structure:', data);
        generateMockKeywords();
      }
    } catch (error) {
      console.error('Error generating keywords:', error);
      generateMockKeywords();
    } finally {
      setLoading(false);
    }
  };

  const generateMockKeywords = () => {
    const businessKeyword = businessInfo.split(' ')[0].toLowerCase();
    const mockSuggestions = [
      { keyword: `${businessKeyword} digital marketing`, difficulty: 'Medium', volume: '1K-10K', trend: 'Rising' },
      { keyword: `${businessKeyword} strategy`, difficulty: 'Easy', volume: '500-1K', trend: 'Stable' },
      { keyword: `best ${businessKeyword} tools`, difficulty: 'Hard', volume: '10K+', trend: 'Rising' },
      { keyword: `${businessKeyword} tips`, difficulty: 'Easy', volume: '1K-5K', trend: 'Stable' },
      { keyword: `${businessKeyword} guide`, difficulty: 'Medium', volume: '5K-10K', trend: 'Rising' },
      { keyword: `${businessKeyword} tutorial`, difficulty: 'Easy', volume: '2K-5K', trend: 'Stable' },
      { keyword: `${businessKeyword} solution`, difficulty: 'Medium', volume: '3K-8K', trend: 'Rising' },
      { keyword: `${businessKeyword} services`, difficulty: 'Hard', volume: '5K-15K', trend: 'Stable' },
      { keyword: `${businessKeyword} pricing`, difficulty: 'Medium', volume: '1K-3K', trend: 'Rising' },
      { keyword: `${businessKeyword} review`, difficulty: 'Easy', volume: '2K-6K', trend: 'Stable' },
    ];
    setSuggestions(mockSuggestions);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend.toLowerCase()) {
      case 'rising': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'stable': return <Target className="w-4 h-4 text-blue-600" />;
      case 'declining': return <TrendingUp className="w-4 h-4 text-red-600 rotate-180" />;
      default: return <Target className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6">
              AI Keyword <span className="text-primary">Recommendation</span>
            </h1>
            <p className="text-xl text-gray-600 font-opensans max-w-3xl mx-auto">
              Dapatkan rekomendasi keyword yang relevan untuk optimasi SEO on-page bisnis Anda 
              dengan bantuan kecerdasan buatan.
            </p>
          </div>

          {/* Keyword Tool Form */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-playfair font-bold text-secondary">
                  Keyword Recommendation Tool
                </h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                Masukkan informasi bisnis Anda untuk mendapatkan rekomendasi keyword SEO dari AI kami.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Informasi Bisnis
                  </label>
                  <Textarea
                    value={businessInfo}
                    onChange={(e) => setBusinessInfo(e.target.value)}
                    placeholder="Jelaskan tentang bisnis Anda: Industri, layanan/produk utama, target audiens, dan keunggulan unik Anda..."
                    className="min-h-[120px] border-gray-300 focus:border-primary focus:ring-primary"
                  />
                  <p className="text-sm text-blue-600 mt-2">
                    Semakin detail informasi yang Anda berikan, semakin baik rekomendasi yang dihasilkan.
                  </p>
                </div>

                <button
                  onClick={generateKeywords}
                  disabled={loading}
                  className="w-full bg-primary text-secondary px-8 py-4 rounded-2xl font-opensans font-semibold hover:bg-opacity-90 transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  {loading ? 'Menganalisis...' : 'Dapatkan Rekomendasi Keyword'}
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          {suggestions.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-playfair font-bold text-secondary mb-6 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-primary" />
                Rekomendasi Keyword
              </h2>
              
              <div className="grid gap-4">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-secondary mb-2">
                          {suggestion.keyword}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(suggestion.difficulty)}`}>
                            {suggestion.difficulty}
                          </span>
                          <span className="px-3 py-1 rounded-full text-sm font-medium text-blue-600 bg-blue-100">
                            {suggestion.volume} pencarian/bulan
                          </span>
                          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100">
                            {getTrendIcon(suggestion.trend)}
                            <span className="text-sm font-medium text-gray-700">
                              {suggestion.trend}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-playfair font-bold text-center text-secondary mb-12">
              Fitur Keyword Tool
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  AI-Powered Research
                </h3>
                <p className="text-gray-600">
                  Menggunakan Gemini AI untuk menganalisis dan memberikan saran keyword yang relevan
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Analisis Trend
                </h3>
                <p className="text-gray-600">
                  Memahami tren keyword untuk strategi konten yang lebih efektif
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Difficulty Score
                </h3>
                <p className="text-gray-600">
                  Mengetahui tingkat kesulitan ranking untuk setiap keyword yang disarankan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KeywordTool;
