import Layout from "@/components/Layout";
import { useState } from "react";
import { Filter, Search, Heart, Eye, Download, Zap, Star } from "lucide-react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "Wszystkie", count: 180 },
    { id: "social", name: "Social Media", count: 45 },
    { id: "logos", name: "Logo & Branding", count: 32 },
    { id: "business", name: "Biznes", count: 28 },
    { id: "marketing", name: "Marketing", count: 35 },
    { id: "presentations", name: "Prezentacje", count: 22 },
    { id: "print", name: "Materiały Drukowane", count: 18 }
  ];

  const gallery = [
    {
      id: 1,
      title: "Modern Tech Startup Logo",
      category: "logos",
      description: "Minimalistyczne logo dla startupu technologicznego z elementami AI",
      thumbnail: "💻",
      likes: 234,
      views: 1520,
      downloads: 89,
      tags: ["Tech", "AI", "Startup", "Minimalism"],
      featured: true,
      difficulty: "Średni",
      timeToCreate: "45 min"
    },
    {
      id: 2,
      title: "Instagram Stories Template Pack",
      category: "social",
      description: "Zestaw 10 nowoczesnych szablonów Instagram Stories z animacjami",
      thumbnail: "📱",
      likes: 567,
      views: 3240,
      downloads: 156,
      tags: ["Instagram", "Stories", "Social Media", "Animation"],
      featured: true,
      difficulty: "Łatwy",
      timeToCreate: "30 min"
    },
    {
      id: 3,
      title: "Business Presentation Template",
      category: "presentations",
      description: "Profesjonalny szablon prezentacji biznesowej z 25 slajdami",
      thumbnail: "📊",
      likes: 189,
      views: 980,
      downloads: 67,
      tags: ["Business", "Presentation", "Corporate", "Charts"],
      featured: false,
      difficulty: "Średni",
      timeToCreate: "60 min"
    },
    {
      id: 4,
      title: "Food Blog Post Graphics",
      category: "social",
      description: "Zestaw grafik do postów kulinarnych z przepisami",
      thumbnail: "🍝",
      likes: 445,
      views: 2180,
      downloads: 123,
      tags: ["Food", "Blog", "Recipe", "Lifestyle"],
      featured: false,
      difficulty: "Łatwy",
      timeToCreate: "25 min"
    },
    {
      id: 5,
      title: "Marketing Infographic",
      category: "marketing",
      description: "Infografika przedstawiająca statystyki marketingu cyfrowego",
      thumbnail: "📈",
      likes: 312,
      views: 1650,
      downloads: 78,
      tags: ["Marketing", "Infographic", "Statistics", "Digital"],
      featured: true,
      difficulty: "Zaawansowany",
      timeToCreate: "90 min"
    },
    {
      id: 6,
      title: "E-commerce Product Banners",
      category: "marketing",
      description: "Banery promocyjne dla sklepów internetowych - różne rozmiary",
      thumbnail: "🛒",
      likes: 398,
      views: 2340,
      downloads: 145,
      tags: ["E-commerce", "Banners", "Promotion", "Sales"],
      featured: false,
      difficulty: "Średni",
      timeToCreate: "40 min"
    },
    {
      id: 7,
      title: "Creative Agency Brochure",
      category: "print",
      description: "Trifold broszura dla agencji kreatywnej z portfolio",
      thumbnail: "📋",
      likes: 156,
      views: 890,
      downloads: 45,
      tags: ["Brochure", "Agency", "Print", "Portfolio"],
      featured: false,
      difficulty: "Zaawansowany",
      timeToCreate: "120 min"
    },
    {
      id: 8,
      title: "Real Estate Flyer",
      category: "print",
      description: "Profesjonalna ulotka nieruchomości z mapą i szczegółami",
      thumbnail: "🏠",
      likes: 234,
      views: 1420,
      downloads: 89,
      tags: ["Real Estate", "Flyer", "Property", "Print"],
      featured: false,
      difficulty: "Średni",
      timeToCreate: "50 min"
    },
    {
      id: 9,
      title: "Fitness App UI Concept",
      category: "business",
      description: "Koncepcja interfejsu aplikacji fitness z trackingiem aktywności",
      thumbnail: "💪",
      likes: 512,
      views: 2890,
      downloads: 167,
      tags: ["UI/UX", "App", "Fitness", "Health"],
      featured: true,
      difficulty: "Zaawansowany",
      timeToCreate: "180 min"
    }
  ];

  const filteredGallery = gallery.filter(item => {
    const matchesCategory = activeFilter === "all" || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = gallery.filter(item => item.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-bg py-20 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-primary rounded-full text-primary-foreground text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Galeria Inspiracji Canva
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6">
              <span className="text-gradient">Galeria</span><br />
              <span className="text-cyber">Najlepszych Projektów</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Odkryj inspirujące projekty stworzone w Canvie. Każdy design zawiera szczegółowy opis, 
              użyte techniki i szacowany czas realizacji.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Szukaj inspiracji... (np. 'logo', 'social media', 'biznes')"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 glass-card border border-primary/20 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-heading font-bold">
              <span className="text-gradient">Wyróżnione Projekty</span>
            </h2>
            <Star className="w-6 h-6 text-primary animate-glow" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl border border-primary/30 overflow-hidden hover-lift group shadow-glow"
              >
                {/* Thumbnail */}
                <div className="relative h-64 bg-gradient-card flex items-center justify-center text-8xl border-b border-primary/20">
                  {project.thumbnail}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      FEATURED
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-2">
                      <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover-glow cursor-pointer">
                        <Eye className="w-5 h-5 text-primary" />
                      </div>
                      <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover-glow cursor-pointer">
                        <Download className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {categories.find(cat => cat.id === project.category)?.name}
                    </span>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      project.difficulty === 'Łatwy' ? 'bg-green-500/20 text-green-400' :
                      project.difficulty === 'Średni' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {project.difficulty}
                    </div>
                  </div>

                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs text-muted-foreground bg-muted/20 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Heart className="w-3 h-3 mr-1" />
                        {project.likes}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {project.views}
                      </div>
                      <div className="flex items-center">
                        <Download className="w-3 h-3 mr-1" />
                        {project.downloads}
                      </div>
                    </div>
                    <div className="text-primary font-mono">
                      {project.timeToCreate}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-heading font-bold text-gradient mb-2">
                Przeglądaj Kategorie
              </h2>
              <p className="text-muted-foreground">Filtruj projekty według kategorii</p>
            </div>
            
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <select className="glass-card border border-primary/20 rounded-lg px-4 py-2 text-foreground">
                <option>Najnowsze</option>
                <option>Najpopularniejsze</option>
                <option>Najczęściej pobierane</option>
                <option>Najwyżej oceniane</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`glass-card p-4 rounded-xl border transition-all duration-300 hover-lift ${
                  activeFilter === category.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/40"
                }`}
              >
                <div className="font-semibold text-sm">{category.name}</div>
                <div className="text-xs opacity-70">{category.count}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((project) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl border border-primary/20 overflow-hidden hover-lift group transition-all duration-500"
              >
                {/* Thumbnail */}
                <div className="relative h-48 bg-gradient-card flex items-center justify-center text-6xl border-b border-primary/20">
                  {project.thumbnail}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-2">
                      <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover-glow cursor-pointer">
                        <Eye className="w-4 h-4 text-primary" />
                      </div>
                      <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover-glow cursor-pointer">
                        <Heart className="w-4 h-4 text-primary" />
                      </div>
                      <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover-glow cursor-pointer">
                        <Download className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {categories.find(cat => cat.id === project.category)?.name}
                    </span>
                    <div className="text-xs text-muted-foreground font-mono">
                      {project.timeToCreate}
                    </div>
                  </div>

                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs text-muted-foreground bg-muted/20 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Heart className="w-3 h-3 mr-1" />
                        {project.likes}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {project.views}
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full ${
                      project.difficulty === 'Łatwy' ? 'bg-green-500/20 text-green-400' :
                      project.difficulty === 'Średni' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {project.difficulty}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-gradient">
                Nie znaleziono projektów
              </h3>
              <p className="text-muted-foreground">
                Spróbuj zmienić kryteria wyszukiwania lub wybraną kategorię
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;