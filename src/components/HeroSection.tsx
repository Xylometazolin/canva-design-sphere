import { useState, useEffect } from "react";
import { ArrowRight, Play, Star, Users, BookOpen, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    users: 0,
    tutorials: 0,
    rating: 0
  });

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const targets = {
        users: 15000,
        tutorials: 250,
        rating: 4.9
      };

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setAnimatedNumbers({
          users: Math.floor(targets.users * easeOut),
          tutorials: Math.floor(targets.tutorials * easeOut),
          rating: +(targets.rating * easeOut).toFixed(1)
        });

        if (step >= steps) {
          clearInterval(timer);
          setAnimatedNumbers(targets);
        }
      }, interval);

      return () => clearInterval(timer);
    };

    const timer = setTimeout(animateNumbers, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen hero-bg cyber-grid overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="floating absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="floating absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
        <div className="floating absolute bottom-32 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-primary rounded-full text-primary-foreground text-sm font-medium animate-glow">
                <Zap className="w-4 h-4 mr-2" />
                Nowe funkcje AI w Canvie
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                <span className="text-gradient">Opanuj</span><br />
                <span className="text-cyber">Canvę</span><br />
                <span className="text-foreground">jak Pro</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Kompleksowe centrum wiedzy o Canvie. Odkryj wszystkie możliwości platformy, 
                naucz się najnowszych narzędzi AI i stwórz projekty, które zachwycają.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-cyber group">
                Rozpocznij Przygodę
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button size="lg" variant="outline" className="glass-card border-primary/30 hover:border-primary hover-glow">
                <Play className="w-5 h-5 mr-2" />
                Zobacz Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary/20">
              <div className="text-center hover-lift">
                <div className="text-3xl font-heading font-bold text-primary text-shadow-cyber">
                  {animatedNumbers.users.toLocaleString()}+
                </div>
                <div className="text-sm text-muted-foreground">Zadowolonych Użytkowników</div>
              </div>
              
              <div className="text-center hover-lift">
                <div className="text-3xl font-heading font-bold text-secondary">
                  {animatedNumbers.tutorials}+
                </div>
                <div className="text-sm text-muted-foreground">Tutoriali i Poradników</div>
              </div>
              
              <div className="text-center hover-lift">
                <div className="flex items-center justify-center space-x-1">
                  <div className="text-3xl font-heading font-bold text-primary">
                    {animatedNumbers.rating}
                  </div>
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </div>
                <div className="text-sm text-muted-foreground">Średnia Ocena</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:block hidden">
            <div className="relative transform-3d hover-lift">
              {/* Main Card */}
              <div className="glass-card p-8 rounded-2xl border-2 border-primary/30 shadow-glow">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-heading font-semibold text-gradient">
                      Dashboard Canva Pro
                    </h3>
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse-slow"></div>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Feature Items */}
                    {[
                      { icon: Zap, title: "Magic Design AI", progress: 95 },
                      { icon: BookOpen, title: "Brand Kit", progress: 88 },
                      { icon: Users, title: "Team Workspace", progress: 92 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 hover-lift">
                        <div className="w-10 h-10 bg-gradient-card rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-foreground">{item.title}</div>
                          <div className="w-full bg-muted rounded-full h-2 mt-1">
                            <div 
                              className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="text-sm font-mono text-primary">{item.progress}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 glass-card p-4 rounded-xl border border-secondary/30 floating">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-secondary">AI Aktywne</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl border border-primary/30 floating">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">Premium Tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;