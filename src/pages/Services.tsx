import Layout from "@/components/Layout";
import { Palette, MessageCircle, CheckCircle, Zap, Crown, Users, ArrowRight, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Projektowanie Grafik na Zamówienie",
      description: "Profesjonalne projekty dostosowane do Twojej marki. Logo, wizytówki, ulotki, posty social media i więcej.",
      price: "Od 150 zł",
      duration: "2-5 dni roboczych",
      features: [
        "Konsultacja i brief projektu",
        "3 propozycje koncepcyjne", 
        "2 rundy poprawek włączone",
        "Pliki źródłowe + wersje finalne",
        "Optymalizacja pod różne kanały",
        "30 dni wsparcia po realizacji"
      ],
      popular: false,
      examples: ["Logo & Brand Identity", "Marketing Materials", "Social Media Graphics", "Web Graphics"]
    },
    {
      icon: MessageCircle,
      title: "Konsultacje 1-na-1 Online",
      description: "Indywidualne sesje mentorskie z ekspertem Canvy. Rozwiąż problemy projektowe i naucz się najlepszych praktyk.",
      price: "199 zł/godzinę",
      duration: "Sesje 60-90 min",
      features: [
        "Analiza Twoich aktualnych projektów",
        "Personalized tips & tricks",
        "Nagranie sesji do późniejszego odtworzenia",
        "Plan rozwoju umiejętności",
        "Dostęp do ekskluzywnych zasobów",
        "Follow-up email z podsumowaniem"
      ],
      popular: true,
      examples: ["Design Review", "Workflow Optimization", "Brand Strategy", "Tool Mastery"]
    },
    {
      icon: Users,
      title: "Szkolenia Zespołowe",
      description: "Kompleksowe szkolenia Canvy dla Twojego zespołu. Zwiększ produktywność i jakość projektów w firmie.",
      price: "Od 1,999 zł",
      duration: "Pełny dzień lub 2x4h",
      features: [
        "Dostosowany program szkoleniowy",
        "Materiały dla każdego uczestnika",
        "Praktyczne warsztaty i projekty",
        "Certyfikaty dla uczestników",
        "3 miesiące wsparcia po szkoleniu",
        "Raport z rekomendacjami"
      ],
      popular: false,
      examples: ["Team Workshops", "Brand Guidelines Training", "Process Optimization", "Advanced Techniques"]
    },
    {
      icon: Crown,
      title: "Audyt Wizualny Marki",
      description: "Kompleksowa analiza Twojej obecnej identyfikacji wizualnej i rekomendacje poprawek.",
      price: "499 zł",
      duration: "7 dni roboczych",
      features: [
        "Szczegółowa analiza obecnych materiałów",
        "Raport z identyfikacją problemów",
        "Rekomendacje i plan działania",
        "Przykłady poprawek w Canvie",
        "Wytyczne do dalszego rozwoju",
        "30-minutowa konsultacja online"
      ],
      popular: false,
      examples: ["Brand Consistency Check", "Visual Identity Review", "Competitor Analysis", "Improvement Roadmap"]
    }
  ];

  const portfolio = [
    {
      title: "Kampania Social Media - Tech Startup",
      category: "Social Media Design",
      description: "Kompletna identyfikacja wizualna dla startupu technologicznego + 50 postów na social media",
      thumbnail: "💻",
      results: "+150% engagement, +200% followers"
    },
    {
      title: "Rebrand Restauracji - Kompletny Makeover", 
      category: "Brand Identity",
      description: "Nowe logo, menu, materiały marketingowe i szablony dla restauracji włoskiej",
      thumbnail: "🍝",
      results: "+30% sprzedaży w pierwszym miesiącu"
    },
    {
      title: "Materiały Eventowe - Konferencja Biznesowa",
      category: "Event Design", 
      description: "Zaproszenia, banery, prezentacje, materiały dla uczestników konferencji",
      thumbnail: "🎯",
      results: "500+ uczestników, 98% zadowolenia"
    },
    {
      title: "E-commerce Graphics - Sklep Online",
      category: "E-commerce",
      description: "Grafiki produktowe, banery promocyjne, newsletter templates",
      thumbnail: "🛒",
      results: "+40% conversion rate"
    }
  ];

  const testimonials = [
    {
      name: "Michał Kowalski",
      company: "TechStart Sp. z o.o.",
      avatar: "👨‍💼",
      rating: 5,
      comment: "Profesjonalizm na najwyższym poziomie. Otrzymaliśmy dokładnie to czego potrzebowaliśmy w terminie.",
      service: "Brand Identity Package"
    },
    {
      name: "Anna Nowak", 
      company: "Creative Agency",
      avatar: "👩‍🎨",
      rating: 5,
      comment: "Konsultacje były nieocenione. Nauczyłam się technik, które oszczędzają mi godziny pracy.",
      service: "1-on-1 Consultation"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Konsultacja & Brief",
      description: "Poznajemy Twoje potrzeby, cele i oczekiwania. Ustalamy szczegóły projektu."
    },
    {
      step: "02", 
      title: "Propozycja & Wycena",
      description: "Przygotowujemy szczegółową propozycję współpracy z transparentną wyceną."
    },
    {
      step: "03",
      title: "Realizacja",
      description: "Tworzymy projekt zgodnie z ustaleniami. Regularnie informujemy o postępach."
    },
    {
      step: "04",
      title: "Poprawki & Finalizacja", 
      description: "Wprowadzamy uzgodnione poprawki i dostarczamy gotowe pliki."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-bg py-20 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-primary rounded-full text-primary-foreground text-sm font-medium mb-6">
              <Crown className="w-4 h-4 mr-2" />
              Profesjonalne Usługi Projektowe
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6">
              <span className="text-gradient">Powierz Swoje Projekty</span><br />
              <span className="text-cyber">Ekspertom</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Nie masz czasu lub potrzebujesz profesjonalnego wsparcia? Nasze usługi projektowe 
              pomogą Ci osiągnąć cele wizualne bez stresu i w najwyższej jakości.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-cyber group">
                Sprawdź Nasze Usługi
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass-card border border-secondary/30 px-6 py-3 rounded-xl hover:border-secondary hover-magenta transition-all duration-300">
                Zobacz Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-6">
              <span className="text-gradient">Nasze Usługi</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wybierz usługę dopasowaną do Twoich potrzeb i budżetu
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`glass-card rounded-2xl border overflow-hidden hover-lift transition-all duration-500 relative ${
                  service.popular ? 'border-primary/50 shadow-glow' : 'border-border/50'
                }`}
              >
                {service.popular && (
                  <div className="absolute top-6 right-6 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold z-10">
                    POPULARNE
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                      <div className="text-sm text-muted-foreground">{service.duration}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-bold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Examples */}
                  <div className="border-t border-border/50 pt-6">
                    <h4 className="font-semibold mb-3 text-sm text-gradient">Przykłady realizacji:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="text-xs text-muted-foreground bg-muted/30 px-3 py-2 rounded-lg">
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="btn-cyber w-full mt-6 group">
                    Zamów Usługę
                    <Zap className="w-4 h-4 ml-2 group-hover:animate-bounce" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-6">
              <span className="text-gradient">Jak Przebiega Współpraca</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Prostym i przejrzysty proces od pierwszego kontaktu do finalizacji projektu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="glass-card p-6 rounded-xl border border-primary/20 hover-lift text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                  {step.step}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3 text-gradient">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-6">
              <span className="text-gradient">Nasze Realizacje</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Zobacz przykłady projektów, które wykonaliśmy dla naszych klientów
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="glass-card rounded-2xl border border-primary/20 overflow-hidden hover-lift group">
                <div className="h-48 bg-gradient-card flex items-center justify-center text-6xl border-b border-primary/20">
                  {project.thumbnail}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="glass-card px-4 py-2 rounded-lg text-primary font-semibold">
                      Zobacz Szczegóły
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="text-sm text-green-400 font-semibold">
                    📈 Wyniki: {project.results}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-6">
              <span className="text-gradient">Opinie Naszych Klientów</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl border border-primary/20 hover-lift">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    <div className="text-xs text-primary mt-1">{testimonial.service}</div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
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
              Gotowy na Rozpoczęcie Projektu?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Porozmawiajmy o Twoich potrzebach. Pierwsza konsultacja jest bezpłatna!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-cyber group">
                Zamów Bezpłatną Konsultację
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass-card border border-secondary/30 px-6 py-3 rounded-xl hover:border-secondary hover-magenta transition-all duration-300">
                Zobacz Cennik
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;