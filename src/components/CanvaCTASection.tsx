import { ArrowRight, Sparkles, Star, Zap, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const CanvaCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#00C4CC] via-[#00A8B0] to-[#0099A0] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-white/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Rozpocznij swoją przygodę z Canvą
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Gotowy na tworzenie
              <br />
              <span className="bg-gradient-to-r from-[#FFD93D] to-[#FFC107] bg-clip-text text-transparent">
                pięknych projektów?
              </span>
            </h2>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Dołącz do milionów użytkowników, którzy już odkryli potęgę Canvy. 
              Stwórz profesjonalne projekty w kilka minut - zupełnie za darmo.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-[#00C4CC] hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 group font-semibold">
              Rozpocznij za darmo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#00C4CC] transition-all duration-300 font-semibold">
              Zobacz szablony
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Magic Design</h3>
              <p className="text-white/80 text-sm">
                Stwórz projekty w sekundy z pomocą sztucznej inteligencji
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">500K+ Szablonów</h3>
              <p className="text-white/80 text-sm">
                Profesjonalne szablony dla każdego typu projektu
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Bezpłatne</h3>
              <p className="text-white/80 text-sm">
                Rozpocznij bezpłatnie - bez ukrytych kosztów
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">100M+</div>
                <div className="text-white/80 text-sm">Użytkowników</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">4.8/5</div>
                <div className="text-white/80 text-sm">Średnia ocena</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">190+</div>
                <div className="text-white/80 text-sm">Krajów</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-white/80 text-sm">Wsparcie</div>
              </div>
            </div>
          </div>

          {/* Footer Text */}
          <div className="mt-12 text-center">
            <p className="text-white/70 text-sm">
              Nie wymaga karty kredytowej • Bezpłatne rozpoczęcie • Anuluj w dowolnym momencie
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CanvaCTASection;