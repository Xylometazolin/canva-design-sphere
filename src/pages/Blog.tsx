import Layout from "@/components/Layout";
import { PenTool, Calendar, User, ArrowRight, TrendingUp } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Najnowsze funkcje AI w Canvie - Kompletny przegląd 2024",
      excerpt: "Odkryj wszystkie nowe narzędzia sztucznej inteligencji, które rewolucjonizują sposób projektowania w Canvie.",
      author: "Anna Kowalska",
      date: "15 grudnia 2024",
      readTime: "8 min",
      category: "Canva AI",
      featured: true
    },
    {
      title: "5 Trendów w Design 2024, które Musisz Znać",
      excerpt: "Przegląd najważniejszych trendów projektowych, które będą dominować w nadchodzącym roku.",
      author: "Marcin Nowak", 
      date: "12 grudnia 2024",
      readTime: "6 min",
      category: "Trendy",
      featured: false
    },
    {
      title: "Jak Zbudować Spójną Identyfikację Wizualną Marki",
      excerpt: "Praktyczny przewodnik po tworzeniu Brand Kit w Canvie i utrzymaniu spójności marki.",
      author: "Ewa Jankowska",
      date: "10 grudnia 2024", 
      readTime: "12 min",
      category: "Branding",
      featured: true
    }
  ];

  return (
    <Layout>
      <section className="hero-bg py-20 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-primary rounded-full text-primary-foreground text-sm font-medium mb-6">
              <PenTool className="w-4 h-4 mr-2" />
              Blog & Publicystyka
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6">
              <span className="text-gradient">Najnowsze</span><br />
              <span className="text-cyber">Trendy & Porady</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bądź na bieżąco z najnowszymi trendami w designie, funkcjami Canvy i najlepszymi praktykami branżowymi.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div key={index} className={`glass-card rounded-2xl border overflow-hidden hover-lift ${
                post.featured ? 'border-primary/50 shadow-glow' : 'border-primary/20'
              }`}>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    {post.featured && <TrendingUp className="w-4 h-4 text-primary" />}
                  </div>
                  
                  <h2 className="text-xl font-heading font-bold mb-4 hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <button className="btn-cyber w-full group">
                    Czytaj Więcej
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;