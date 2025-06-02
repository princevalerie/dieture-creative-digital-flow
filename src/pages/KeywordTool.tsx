
import React, { useState } from 'react';
import { Search, TrendingUp, Target, Lightbulb } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface KeywordSuggestion {
  keyword: string;
  difficulty: string;
  volume: string;
  trend: string;
}

const KeywordTool = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<KeywordSuggestion[]>([]);
  const [loading, setLoading] = useState(false);

  const generateKeywords = async () => {
    if (!query.trim()) {
      alert('Mohon masukkan kata kunci');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': 'AIzaSyC7HhzczqGlISx4WIyB2OUpWgfwEEhPHO8',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Generate 10 SEO keyword suggestions related to "${query}" for digital marketing. For each keyword, provide: keyword phrase, difficulty level (Easy/Medium/Hard), estimated monthly search volume range, and trend (Rising/Stable/Declining). Format as JSON array with fields: keyword, difficulty, volume, trend.`
            }]
          }]
        }),
      });

      const data = await response.json();
      
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        const text = data.candidates[0].content.parts[0].text;
        
        // Extract JSON from the response
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          const keywordsData = JSON.parse(jsonMatch[0]);
          setSuggestions(keywordsData);
        } else {
          // Fallback parsing if JSON is not properly formatted
          const mockSuggestions = [
            { keyword: `${query} digital marketing`, difficulty: 'Medium', volume: '1K-10K', trend: 'Rising' },
            { keyword: `${query} strategy`, difficulty: 'Easy', volume: '500-1K', trend: 'Stable' },
            { keyword: `best ${query} tools`, difficulty: 'Hard', volume: '10K+', trend: 'Rising' },
            { keyword: `${query} tips`, difficulty: 'Easy', volume: '1K-5K', trend: 'Stable' },
            { keyword: `${query} guide`, difficulty: 'Medium', volume: '5K-10K', trend: 'Rising' },
          ];
          setSuggestions(mockSuggestions);
        }
      }
    } catch (error) {
      console.error('Error generating keywords:', error);
      alert('Terjadi kesalahan saat mengambil data keyword.');
    } finally {
      setLoading(false);
    }
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
              Keyword Research Tool
            </h1>
            <p className="text-xl text-gray-600 font-opensans max-w-3xl mx-auto">
              Temukan kata kunci yang tepat untuk strategi SEO dan content marketing Anda 
              dengan bantuan AI Gemini yang canggih.
            </p>
          </div>

          {/* Search Input */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && generateKeywords()}
                placeholder="Masukkan kata kunci atau topik..."
                className="w-full px-6 py-4 pl-12 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <button
                onClick={generateKeywords}
                disabled={loading}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-xl hover:bg-opacity-90 transition-all duration-200 disabled:opacity-50"
              >
                {loading ? 'Mencari...' : 'Cari'}
              </button>
            </div>
          </div>

          {/* Results */}
          {suggestions.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-playfair font-bold text-secondary mb-6 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-primary" />
                Saran Kata Kunci
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
