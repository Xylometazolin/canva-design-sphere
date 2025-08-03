import { Sparkles, Palette, Users, Zap, Globe, Shield, Clock, Star } from "lucide-react";

const CanvaFeaturesSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI Magic Design",
      description: "Stwórz profesjonalne projekty w sekundy z pomocą sztucznej inteligencji",
      color: "#00C4CC",
      gradient: "from-[#00C4CC] to-[#00A8B0]"
    },
    {
      icon: Palette,
      title: "500,000+ Szablonów",
      description: "Dostęp do ogromnej biblioteki profesjonalnych szablonów",
      color: "#FF5C8D",
      gradient: "from-[#FF5C8D] to-[#E91E63]"
    },
    {
      icon: Users,
      title: "Praca zespołowa",
      description: "Współpracuj z zespołem w czasie rzeczywistym",
      color: "#FFD93D",
      gradient: "from-[#FFD93D] to-[#FFC107]"
    },
    {
      icon: Zap,
      title: "Szybkie edycje",
      description: "Intuicyjne narzędzia do błyskawicznego projektowania",
      color: "#00C4CC",
      gradient: "from-[#00C4CC] to-[#00A8B0]"
    },
    {
      icon: Globe,
      title: "Dostęp wszędzie",
      description: "Pracuj na dowolnym urządzeniu, synchronizuj w chmurze",
      color: "#FF5C8D",
      gradient: "from-[#FF5C8D] to-[#E91E63]"
    },
    {
      icon: Shield,
      title: "Bezpieczeństwo",
      description: "Twoje projekty są bezpieczne i chronione",
      color: "#FFD93D",
      gradient: "from-[#FFD93D] to-[#FFC107]"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00C4CC] to-[#00A8B0] rounded-full text-white text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Dlaczego Canva?
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2D3748] mb-6">
            Wszystko czego potrzebujesz do
            <span className="bg-gradient-to-r from-[#00C4CC] to-[#00A8B0] bg-clip-text text-transparent"> projektowania</span>
          </h2>
          <p className="text-xl text-[#4A5568] max-w-3xl mx-auto">
            Od początkujących po profesjonalistów - Canva ma narzędzia dla każdego. 
            Stwórz projekty, które zachwycają i inspirują.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-3xl border border-[#E2E8F0] hover:border-[#00C4CC]/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6">
                <div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#2D3748] mb-4 group-hover:text-[#00C4CC] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-[#4A5568] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-[#F8F9FA] to-[#E8F4F8] rounded-3xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#00C4CC]">100M+</div>
              <div className="text-[#4A5568]">Aktywnych użytkowników</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#FF5C8D]">500K+</div>
              <div className="text-[#4A5568]">Profesjonalnych szablonów</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#FFD93D]">190+</div>
              <div className="text-[#4A5568]">Krajów na świecie</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#00C4CC]">24/7</div>
              <div className="text-[#4A5568]">Wsparcie techniczne</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CanvaFeaturesSection;