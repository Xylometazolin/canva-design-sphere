import Layout from "@/components/Layout";
import { GraduationCap, Star, Clock, Users, CheckCircle, Crown, Zap, ArrowRight } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Canva Master Class - Od Zera do Profesjonalisty",
      description: "Kompletny kurs obejmujący wszystkie aspekty pracy w Canvie. Od podstawowych funkcji po zaawansowane techniki projektowania.",
      price: "399 zł",
      originalPrice: "599 zł",
      duration: "12 godzin",
      students: "2,847",
      rating: 4.9,
      lessons: 45,
      level: "Wszystkie poziomy",
      badge: "BESTSELLER",
      features: [
        "45 szczegółowych lekcji wideo",
        "Projekty praktyczne do portfolio",
        "Dostęp do ekskluzywnych szablonów",
        "Certyfikat ukończenia",
        "Dożywotni dostęp do materiałów",
        "Wsparcie na forum prywatnym"
      ],
      modules: [
        "Podstawy Canvy i interfejs",
        "Narzędzia projektowania",
        "Praca z tekstem i typografią",
        "Brand Kit i spójność marki",
        "Canva AI i Magic Studio",
        "Animacje i efekty specjalne",
        "Export i optymalizacja"
      ]
    },
    {
      title: "Canva AI Revolution - Przyszłość Projektowania",
      description: "Specjalistyczny kurs skupiony na najnowszych narzędziach sztucznej inteligencji w Canvie.",
      price: "249 zł",
      originalPrice: "349 zł",
      duration: "6 godzin",
      students: "1,234",
      rating: 4.8,
      lessons: 22,
      level: "Średniozaawansowany",
      badge: "NOWOŚĆ",
      features: [
        "22 lekcje o narzędziach AI",
        "Magic Design w praktyce",
        "Text to Image mastery",
        "Magic Write for marketers",
        "Automacje i workflow",
        "Bonus: AI prompting guide"
      ],
      modules: [
        "Wprowadzenie do Canva AI",
        "Magic Design Generator",
        "Text to Image AI",
        "Magic Write & Copy",
        "Background Remover Pro",
        "Automacja procesów"
      ]
    },
    {
      title: "Social Media Design Bootcamp",
      description: "Intensywny kurs projektowania grafik na media społecznościowe. Instagram, Facebook, TikTok, YouTube.",
      price: "199 zł",
      originalPrice: "299 zł",
      duration: "8 godzin",
      students: "3,421",
      rating: 4.7,
      lessons: 32,
      level: "Początkujący",
      badge: "POPULARNE",
      features: [
        "32 lekcje step-by-step",
        "Szablony dla każdej platformy",
        "Strategie content marketingu",
        "Trends & best practices",
        "Kalendarz publikacji",
        "Analytics i optymalizacja"
      ],
      modules: [
        "Instagram Stories & Posts",
        "Facebook Marketing Graphics",
        "YouTube Thumbnails",
        "TikTok Video Covers",
        "Pinterest Pin Design",
        "LinkedIn Company Posts"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Anna Kowalska",
      role: "Marketing Manager",
      avatar: "👩‍💼",
      rating: 5,
      comment: "Fantastyczny kurs! Nauczyłam się więcej w 12 godzin niż przez rok eksperymentowania samodzielnie."
    },
    {
      name: "Marcin Nowak",
      role: "Freelancer",
      avatar: "👨‍💻", 
      rating: 5,
      comment: "Dzięki kursowi mogłem podnieść ceny swoich usług o 150%. ROI w pierwszym miesiącu!"
    },
    {
      name: "Ewa Jankowska",
      role: "Właścicielka sklepu online",
      avatar: "👩‍🚀",
      rating: 5,
      comment: "Teraz tworzę wszystkie grafiki marketingowe sama. Oszczędzam tysiące złotych rocznie!"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-bg py-20 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-primary rounded-full text-primary-foreground text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4 mr-2" />
              Kursy Premium - Inwestycja w Przyszłość
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6">
              <span className="text-gradient">Profesjonalne Kursy</span><br />
              <span className="text-cyber">Canva Online</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Stań się ekspertem Canvy dzięki naszym premium kursom. Strukturyzowana nauka, 
              praktyczne projekty i wsparcie mentorów na każdym kroku.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="btn-cyber group">
                Przeglądaj Kursy
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass-card border border-secondary/30 px-6 py-3 rounded-xl hover:border-secondary hover-magenta transition-all duration-300">
                Otrzymaj 30% Zniżki
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-primary" />
                7,500+ Zadowolonych Uczniów
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                Średnia Ocena 4.8/5
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                30 Dni Gwarancji Zwrotu
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`glass-card rounded-2xl border overflow-hidden hover-lift transition-all duration-500 relative ${
                  course.badge === 'BESTSELLER' ? 'border-primary/50 shadow-glow' :
                  course.badge === 'NOWOŚĆ' ? 'border-secondary/50 shadow-magenta' :
                  'border-border/50'
                }`}
              >
                {/* Badge */}
                {course.badge && (
                  <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold z-10 ${
                    course.badge === 'BESTSELLER' ? 'bg-primary text-primary-foreground' :
                    course.badge === 'NOWOŚĆ' ? 'bg-secondary text-secondary-foreground' :
                    'bg-accent text-accent-foreground'
                  }`}>
                    {course.badge}
                  </div>
                )}

                {/* Header */}
                <div className="p-8 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-semibold">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-bold mb-4 leading-tight">
                    {course.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-card rounded-xl">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{course.lessons}</div>
                      <div className="text-xs text-muted-foreground">Lekcji</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{course.students}</div>
                      <div className="text-xs text-muted-foreground">Uczniów</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{course.level}</div>
                      <div className="text-xs text-muted-foreground">Poziom</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="px-8 pb-6">
                  <h4 className="font-semibold mb-3 text-gradient">Co otrzymasz:</h4>
                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="p-8 pt-0 border-t border-border/50">
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-primary">{course.price}</span>
                    <span className="text-lg text-muted-foreground line-through ml-3">{course.originalPrice}</span>
                  </div>
                  
                  <button className="btn-cyber w-full group">
                    Zapisz się na kurs
                    <Crown className="w-4 h-4 ml-2 group-hover:animate-bounce" />
                  </button>
                  
                  <div className="text-center mt-3">
                    <span className="text-xs text-muted-foreground">
                      Płatność jednorazowa • Dostęp dożywotni
                    </span>
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
              <span className="text-gradient">Co Mówią Nasi Uczniowie</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dołącz do tysięcy zadowolonych uczniów, którzy rozwinęli swoje umiejętności dzięki naszym kursom
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl border border-primary/20 hover-lift">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
            <Zap className="w-16 h-16 text-primary mx-auto mb-6 animate-glow" />
            <h2 className="text-3xl font-heading font-bold mb-6 text-gradient">
              Zaczynaj Już Dziś!
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Nie czekaj dłużej. Każdy dzień bez nowych umiejętności to stracona okazja. 
              Rozpocznij swoją przygodę z profesjonalnym projektowaniem już dziś.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-cyber group">
                Zapisz się na Kurs Premium
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass-card border border-secondary/30 px-6 py-3 rounded-xl hover:border-secondary hover-magenta transition-all duration-300">
                Porozmawiaj z Doradcą
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;