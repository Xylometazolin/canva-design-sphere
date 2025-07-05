import Layout from "@/components/Layout";
import { Search, Filter, Clock, Star, Play, BookOpen, Users, TrendingUp } from "lucide-react";
import { useState } from "react";

const Tutorials = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Wszystkie", count: 250 },
    { id: "basics", name: "Podstawy", count: 45 },
    { id: "ai", name: "Canva AI", count: 32 },
    { id: "social", name: "Social Media", count: 68 },
    { id: "video", name: "Video", count: 41 },
    { id: "business", name: "Biznes", count: 38 },
    { id: "advanced", name: "Zaawansowane", count: 26 }
  ];

  const featuredTutorials = [
    {
      title: "Magic Design AI - Kompletny Przewodnik",
      description: "Naucz się wykorzystywać najnowsze narzędzie AI w Canvie do automatycznego generowania projektów",
      duration: "15 min",
      difficulty: "Początkujący",
      views: "12.5k",
      rating: 4.9,
      category: "ai",
      thumbnail: "🎨",
      isNew: true
    },
    {
      title: "Brand Kit - Tworzenie Spójnej Marki",
      description: "Krok po kroku jak stworzyć profesjonalny Brand Kit i wykorzystać go w swoich projektach",
      duration: "22 min",
      difficulty: "Średniozaawansowany",
      views: "8.3k",
      rating: 4.8,
      category: "business",
      thumbnail: "🏢",
      isPopular: true
    },
    {
      title: "Instagram Stories - 10 Najlepszych Szablonów",
      description: "Dowiedz się jak tworzyć angażujące Instagram Stories za pomocą Canvy",
      duration: "18 min",
      difficulty: "Początkujący",
      views: "15.2k",
      rating: 4.9,
      category: "social",
      thumbnail: "📱",
      isPopular: true
    },
    {
      title: "Animacje w Canvie - Od Podstaw do Profesjonalizmu",
      description: "Kompletny kurs animacji w Canvie - tekst, obiekty, przejścia i efekty specjalne",
      duration: "35 min",
      difficulty: "Zaawansowany",
      views: "6.7k",
      rating: 4.7,
      category: "video",
      thumbnail: "⚡",
      isNew: true
    },
    {
      title: "Text to Image AI - Tworzenie Grafik z Tekstu",
      description: "Wykorzystaj moc sztucznej inteligencji do generowania unikalnych obrazów z opisów tekstowych",
      duration: "12 min",
      difficulty: "Początkujący",
      views: "9.8k",
      rating: 4.8,
      category: "ai",
      thumbnail: "🤖",
      isNew: true
    },
    {
      title: "Prezentacje Biznesowe - Szablony i Wskazówki",
      description: "Twórz profesjonalne prezentacje, które przekonują i sprzedają",
      duration: "28 min",
      difficulty: "Średniozaawansowany",
      views: "11.4k",
      rating: 4.6,
      category: "business",
      thumbnail: "📊",
      isPopular: false
    }
  ];

  const stats = [
    { icon: BookOpen, value: "250+", label: "Tutoriali" },
    { icon: Users, value: "15k+", label: "Uczniów" },
    { icon: Clock, value: "100+", label: "Godzin Materiału" },
    { icon: Star, value: "4.8", label: "Średnia Ocena" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-bg py-20 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-primary rounded-full text-primary-foreground text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Darmowe Tutoriale Canva
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6">
              <span className="text-gradient">Naucz Się</span><br />
              <span className="text-cyber">Canvy za Darmo</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Ponad 250 szczegółowych poradników, które poprowadzą Cię od podstaw 
              do poziomu eksperta. Wszystko krok po kroku, z praktycznymi przykładami.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Szukaj tutoriali... (np. 'logo', 'Instagram', 'AI')"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 glass-card border border-primary/20 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-xl border border-primary/20 text-center hover-lift">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-2xl font-heading font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Filters */}
      <section className="py-12 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h2 className="text-2xl font-heading font-bold text-gradient mb-2">
                Kategorie Tutoriali
              </h2>
              <p className="text-muted-foreground">Wybierz kategorię która Cię interesuje</p>
            </div>
            
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <select className="glass-card border border-primary/20 rounded-lg px-4 py-2 text-foreground">
                <option>Najnowsze</option>
                <option>Najpopularniejsze</option>
                <option>Najwyżej oceniane</option>
                <option>Najkrótsze</option>
                <option>Najdłuższe</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`glass-card p-4 rounded-xl border transition-all duration-300 hover-lift ${
                  selectedCategory === category.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/40"
                }`}
              >
                <div className="font-semibold">{category.name}</div>
                <div className="text-sm opacity-70">{category.count}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-heading font-bold">
              <span className="text-gradient">Polecane Tutoriale</span>
            </h2>
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTutorials.map((tutorial, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl border border-primary/20 overflow-hidden hover-lift group transition-all duration-500"
              >
                {/* Thumbnail */}
                <div className="relative h-48 bg-gradient-card flex items-center justify-center text-6xl border-b border-primary/20">
                  {tutorial.thumbnail}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {tutorial.isNew && (
                      <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        NOWE
                      </span>
                    )}
                    {tutorial.isPopular && (
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                        POPULARNE
                      </span>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {categories.find(cat => cat.id === tutorial.category)?.name}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                      {tutorial.rating}
                    </div>
                  </div>

                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {tutorial.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {tutorial.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {tutorial.views}
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs ${
                      tutorial.difficulty === 'Początkujący' ? 'bg-green-500/20 text-green-400' :
                      tutorial.difficulty === 'Średniozaawansowany' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {tutorial.difficulty}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-cyber">
              Zobacz Wszystkie Tutoriale
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tutorials;