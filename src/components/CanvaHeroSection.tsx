import { useState, useEffect } from "react";
import { ArrowRight, Play, Star, Users, Sparkles, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CanvaHeroSection = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    users: 0,
    templates: 0,
    rating: 0
  });

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const targets = {
        users: 100000000,
        templates: 500000,
        rating: 4.8
      };

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setAnimatedNumbers({
          users: Math.floor(targets.users * easeOut),
          templates: Math.floor(targets.templates * easeOut),
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
    <section className="relative min-h-screen bg-gradient-to-br from-[#F8F9FA] via-white to-[#E8F4F8] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#00C4CC]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-[#FF5C8D]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-[#FFD93D]/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00C4CC]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00C4CC] to-[#00A8B0] rounded-full text-white text-sm font-medium shadow-lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Nowe funkcje AI w Canvie
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-[#2D3748]">Stwórz</span><br />
                <span className="bg-gradient-to-r from-[#00C4CC] to-[#00A8B0] bg-clip-text text-transparent">piękne</span><br />
                <span className="text-[#2D3748]">projekty</span>
              </h1>
              
              <p className="text-xl text-[#4A5568] leading-relaxed max-w-xl">
                Odkryj potęgę Canvy - najpopularniejszej platformy do projektowania graficznego. 
                Stwórz profesjonalne projekty w kilka minut z pomocą AI.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-[#00C4CC] to-[#00A8B0] hover:from-[#00A8B0] hover:to-[#0099A0] text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                Rozpocznij za darmo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button size="lg" variant="outline" className="border-[#00C4CC] text-[#00C4CC] hover:bg-[#00C4CC] hover:text-white transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Zobacz Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#E2E8F0]">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00C4CC]">
                  {animatedNumbers.users.toLocaleString()}+
                </div>
                <div className="text-sm text-[#4A5568]">Użytkowników</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF5C8D]">
                  {animatedNumbers.templates.toLocaleString()}+
                </div>
                <div className="text-sm text-[#4A5568]">Szablonów</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <div className="text-3xl font-bold text-[#FFD93D]">
                    {animatedNumbers.rating}
                  </div>
                  <Star className="w-6 h-6 text-[#FFD93D] fill-current" />
                </div>
                <div className="text-sm text-[#4A5568]">Średnia Ocena</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:block hidden">
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              {/* Main Card */}
              <div className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#2D3748]">
                      Canva Pro Dashboard
                    </h3>
                    <div className="w-3 h-3 bg-[#00C4CC] rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Feature Items */}
                    {[
                      { icon: Zap, title: "Magic Design AI", progress: 95, color: "#00C4CC" },
                      { icon: Palette, title: "Brand Kit", progress: 88, color: "#FF5C8D" },
                      { icon: Users, title: "Team Workspace", progress: 92, color: "#FFD93D" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 hover:bg-[#F8F9FA] p-2 rounded-lg transition-colors">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                          <item.icon className="w-5 h-5" style={{ color: item.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-[#2D3748]">{item.title}</div>
                          <div className="w-full bg-[#E2E8F0] rounded-full h-2 mt-1">
                            <div 
                              className="h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${item.progress}%`, backgroundColor: item.color }}
                            ></div>
                          </div>
                        </div>
                        <div className="text-sm font-mono" style={{ color: item.color }}>{item.progress}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl border border-[#FF5C8D]/30 shadow-lg animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#FF5C8D] rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-[#FF5C8D]">AI Aktywne</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl border border-[#FFD93D]/30 shadow-lg animate-bounce delay-1000">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-[#FFD93D] fill-current" />
                  <span className="text-sm font-medium text-[#2D3748]">Premium Tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CanvaHeroSection;