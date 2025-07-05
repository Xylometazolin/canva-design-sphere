import Layout from "@/components/Layout";
import { Zap, Target, Users, Sparkles, Brain, Layers, ArrowRight } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Sztuczna Inteligencja",
      description: "Magic Studio, Text to Image, Magic Write - poznaj wszystkie narzędzia AI dostępne w Canvie",
      stats: "15+ narzędzi AI"
    },
    {
      icon: Layers,
      title: "Wszechstronne Narzędzia",
      description: "Od podstawowych kształtów po zaawansowane animacje i efekty specjalne",
      stats: "200+ funkcji"
    },
    {
      icon: Users,
      title: "Współpraca Zespołowa",
      description: "Brand Kit, udostępnianie projektów, komentarze i system zatwierdzeń",
      stats: "Unlimited teams"
    },
    {
      icon: Target,
      title: "Integracje",
      description: "Połączenia z najpopularniejszymi platformami i narzędziami marketingowymi",
      stats: "50+ integracji"
    }
  ];

  const capabilities = [
    { category: "Social Media", items: ["Instagram Posts & Stories", "Facebook Covers", "YouTube Thumbnails", "TikTok Videos"] },
    { category: "Marketing", items: ["Ulotki & Plakaty", "Banery Reklamowe", "Email Headers", "Infografiki"] },
    { category: "Biznes", items: ["Prezentacje", "Dokumenty", "Certyfikaty", "Wizytówki"] },
    { category: "Video", items: ["Animowane Posty", "Intro/Outro", "Prezentacje Wideo", "Reklamy Video"] }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-bg py-20 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-primary rounded-full text-primary-foreground text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Kompleksowy Przewodnik po Canvie
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6">
              <span className="text-gradient">Odkryj Pełen Potencjał</span><br />
              <span className="text-cyber">Platformy Canva</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Canva to więcej niż narzędzie do projektowania. To kompletna platforma kreatywna 
              z zaawansowanymi funkcjami AI, która rewolucjonizuje sposób tworzenia treści wizualnych.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-center mb-16">
            <span className="text-gradient">Kluczowe Możliwości Canvy</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl border border-primary/20 hover-lift group">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:animate-glow">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-primary font-mono text-sm">
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-6">
              <span className="text-gradient">Co Możesz Tworzyć w Canvie?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tysiące szablonów dla każdej branży i okazji. Od prostych postów po złożone kampanie marketingowe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, index) => (
              <div key={index} className="glass-card p-6 rounded-xl border border-secondary/20 hover-lift">
                <h3 className="font-heading font-semibold text-lg mb-4 text-secondary">
                  {cap.category}
                </h3>
                <div className="space-y-2">
                  {cap.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-sm">
                      <Sparkles className="w-3 h-3 text-secondary mr-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12 rounded-2xl border border-primary/20">
            <h2 className="text-3xl font-heading font-bold mb-6 text-gradient">
              Rozpocznij Swoją Przygodę z Canvą
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Odkryj szczegółowe przewodniki, naucz się najnowszych funkcji i stwórz projekty, które wyróżnią Cię na rynku.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-cyber group">
                Eksploruj Narzędzia
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass-card border border-secondary/30 px-6 py-3 rounded-xl hover:border-secondary hover-magenta transition-all duration-300">
                Zobacz Canva AI
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;