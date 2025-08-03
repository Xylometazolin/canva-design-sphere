import { Image, Video, FileText, Presentation, Calendar, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const CanvaToolsSection = () => {
  const tools = [
    {
      icon: Image,
      title: "Projektowanie graficzne",
      description: "Plakaty, banery, infografiki i więcej",
      color: "#00C4CC",
      examples: ["Plakaty", "Banery", "Infografiki", "Logo"]
    },
    {
      icon: Video,
      title: "Wideo i animacje",
      description: "Stwórz profesjonalne filmy i animacje",
      color: "#FF5C8D",
      examples: ["Filmy", "Animacje", "Prezentacje", "Reels"]
    },
    {
      icon: FileText,
      title: "Dokumenty",
      description: "CV, listy, broszury i dokumenty",
      color: "#FFD93D",
      examples: ["CV", "Listy", "Broszury", "Raporty"]
    },
    {
      icon: Presentation,
      title: "Prezentacje",
      description: "Stwórz zachwycające prezentacje",
      color: "#00C4CC",
      examples: ["Slajdy", "Pitch deck", "Edukacyjne", "Biznesowe"]
    },
    {
      icon: Calendar,
      title: "Social Media",
      description: "Treści dla wszystkich platform",
      color: "#FF5C8D",
      examples: ["Instagram", "Facebook", "Twitter", "LinkedIn"]
    },
    {
      icon: Instagram,
      title: "Marketing",
      description: "Materiały marketingowe i reklamowe",
      color: "#FFD93D",
      examples: ["Reklamy", "Newsletter", "Landing pages", "Email"]
    }
  ];

  const socialPlatforms = [
    { icon: Instagram, name: "Instagram", color: "#E4405F" },
    { icon: Facebook, name: "Facebook", color: "#1877F2" },
    { icon: Twitter, name: "Twitter", color: "#1DA1F2" },
    { icon: Linkedin, name: "LinkedIn", color: "#0A66C2" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F8F9FA] to-[#E8F4F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2D3748] mb-6">
            Narzędzia dla każdego
            <span className="bg-gradient-to-r from-[#00C4CC] to-[#00A8B0] bg-clip-text text-transparent"> projektu</span>
          </h2>
          <p className="text-xl text-[#4A5568] max-w-3xl mx-auto">
            Od prostych grafik po zaawansowane projekty - Canva ma wszystko czego potrzebujesz 
            do stworzenia profesjonalnych materiałów.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-3xl border border-[#E2E8F0] hover:border-[#00C4CC]/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: `${tool.color}20` }}
                >
                  <tool.icon className="w-8 h-8" style={{ color: tool.color }} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#2D3748] mb-4 group-hover:text-[#00C4CC] transition-colors">
                {tool.title}
              </h3>
              
              <p className="text-[#4A5568] mb-6 leading-relaxed">
                {tool.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {tool.examples.map((example, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{ 
                      backgroundColor: `${tool.color}10`, 
                      color: tool.color 
                    }}
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#2D3748] mb-4">
              Optymalizowane dla Social Media
            </h3>
            <p className="text-[#4A5568] max-w-2xl mx-auto">
              Automatyczne rozmiary dla wszystkich popularnych platform społecznościowych. 
              Stwórz treści, które wyglądają perfekcyjnie wszędzie.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {socialPlatforms.map((platform, index) => (
              <div key={index} className="text-center group">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: `${platform.color}10` }}
                >
                  <platform.icon className="w-10 h-10" style={{ color: platform.color }} />
                </div>
                <h4 className="font-semibold text-[#2D3748] mb-2">{platform.name}</h4>
                <p className="text-sm text-[#4A5568]">
                  Automatyczne rozmiary i formaty
                </p>
              </div>
            ))}
          </div>

          {/* Size Examples */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-[#00C4CC]/10 to-[#00A8B0]/10 p-6 rounded-2xl">
              <h4 className="font-semibold text-[#2D3748] mb-2">Instagram</h4>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <div>• Post: 1080x1080px</div>
                <div>• Story: 1080x1920px</div>
                <div>• Reels: 1080x1920px</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#FF5C8D]/10 to-[#E91E63]/10 p-6 rounded-2xl">
              <h4 className="font-semibold text-[#2D3748] mb-2">Facebook</h4>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <div>• Post: 1200x630px</div>
                <div>• Story: 1080x1920px</div>
                <div>• Cover: 851x315px</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#FFD93D]/10 to-[#FFC107]/10 p-6 rounded-2xl">
              <h4 className="font-semibold text-[#2D3748] mb-2">LinkedIn</h4>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <div>• Post: 1200x627px</div>
                <div>• Banner: 1584x396px</div>
                <div>• Article: 1200x627px</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CanvaToolsSection;