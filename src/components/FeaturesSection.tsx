import { Brain, Palette, Users, Zap, BookOpen, Target, Layers, Sparkles } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Canva AI & Magic Studio",
      description: "Odkryj moc sztucznej inteligencji w projektowaniu. Magic Design, Text to Image, Magic Write i wiele innych narzędzi AI.",
      color: "primary",
      details: ["Magic Design Generator", "Text to Image AI", "Magic Write & Copy", "Background Remover AI"]
    },
    {
      icon: Palette,
      title: "Zaawansowane Narzędzia",
      description: "Profesjonalne funkcje projektowania, Brand Kit, animacje, efekty specjalne i narzędzia do współpracy zespołowej.",
      color: "secondary",
      details: ["Brand Kit & Style Guide", "Animacje & Efekty", "Współpraca Zespołowa", "Export w Wysokiej Jakości"]
    },
    {
      icon: BookOpen,
      title: "Kompletne Tutoriale",
      description: "Ponad 250+ szczegółowych poradników, od podstaw po zaawansowane techniki. Krok po kroku do mistrzostwa.",
      color: "primary",
      details: ["Poradniki dla Początkujących", "Zaawansowane Techniki", "Video Tutoriale", "Praktyczne Projekty"]
    },
    {
      icon: Users,
      title: "Kursy Premium & Usługi",
      description: "Profesjonalne kursy online, konsultacje 1-na-1, projektowanie na zamówienie i audyty wizualne.",
      color: "secondary",
      details: ["Kursy Krok po Kroku", "Konsultacje Indywidualne", "Projekty na Zamówienie", "Audyt Wizualny"]
    },
    {
      icon: Target,
      title: "Aplikacje & Integracje",
      description: "Połącz Canvę z ulubionymi narzędziami. Google Drive, Dropbox, social media i wiele innych integracji.",
      color: "primary",
      details: ["Social Media Integration", "Cloud Storage Sync", "Marketing Tools", "Workflow Automation"]
    },
    {
      icon: Sparkles,
      title: "Najnowsze Trendy",
      description: "Bądź na bieżąco z najnowszymi funkcjami Canvy, trendami w designie i najlepszymi praktykami branżowymi.",
      color: "secondary",
      details: ["Weekly Updates", "Design Trends", "Best Practices", "Industry Insights"]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-primary rounded-full text-primary-foreground text-sm font-medium mb-6">
            <Layers className="w-4 h-4 mr-2" />
            Pełne Spektrum Możliwości
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            <span className="text-gradient">Wszystko Czego Potrzebujesz</span><br />
            <span className="text-cyber">w Jednym Miejscu</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Od podstawowych funkcji po zaawansowane narzędzia AI. Kompleksowe podejście do nauki 
            i wykorzystania pełnego potencjału platformy Canva.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group glass-card p-8 rounded-2xl border hover-lift transition-all duration-500 ${
                feature.color === 'primary' 
                  ? 'border-primary/20 hover:border-primary/50 hover:shadow-glow' 
                  : 'border-secondary/20 hover:border-secondary/50 hover:shadow-magenta'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:animate-glow ${
                feature.color === 'primary' 
                  ? 'bg-gradient-to-br from-primary/20 to-primary/10' 
                  : 'bg-gradient-to-br from-secondary/20 to-secondary/10'
              }`}>
                <feature.icon className={`w-8 h-8 ${
                  feature.color === 'primary' ? 'text-primary' : 'text-secondary'
                }`} />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature Details */}
                <div className="space-y-2 pt-4 border-t border-border/50">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                        feature.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                      }`}></div>
                      <span className="text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="glass-card p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4 text-gradient">
              Gotowy na Rozpoczęcie?
            </h3>
            <p className="text-muted-foreground mb-6">
              Dołącz do tysięcy zadowolonych użytkowników i odkryj pełny potencjał Canvy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-cyber">
                Eksploruj Poradniki
              </button>
              <button className="glass-card border border-secondary/30 px-6 py-3 rounded-xl hover:border-secondary hover-magenta transition-all duration-300">
                Zobacz Kursy Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;