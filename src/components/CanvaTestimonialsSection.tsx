import { Star, Quote } from "lucide-react";

const CanvaTestimonialsSection = () => {
  const testimonials = [
    {
      name: "Anna Kowalska",
      role: "Marketing Manager",
      company: "TechCorp",
      avatar: "AK",
      rating: 5,
      content: "Canva zmieniła sposób w jaki tworzymy materiały marketingowe. Wszystko jest teraz szybsze, piękniejsze i bardziej profesjonalne.",
      color: "#00C4CC"
    },
    {
      name: "Marek Nowak",
      role: "Freelancer",
      company: "Design Studio",
      avatar: "MN",
      rating: 5,
      content: "Jako freelancer potrzebuję szybkich i profesjonalnych rozwiązań. Canva daje mi wszystko czego potrzebuję do tworzenia projektów dla klientów.",
      color: "#FF5C8D"
    },
    {
      name: "Karolina Wiśniewska",
      role: "Content Creator",
      company: "Social Media",
      avatar: "KW",
      rating: 5,
      content: "Tworzenie treści dla social media nigdy nie było łatwiejsze. Szablony są piękne, a AI pomaga mi w kreatywnych pomysłach.",
      color: "#FFD93D"
    },
    {
      name: "Piotr Zieliński",
      role: "Startup Founder",
      company: "InnovateLab",
      avatar: "PZ",
      rating: 5,
      content: "Canva Pro to najlepsza inwestycja dla naszego startupu. Profesjonalne materiały w ułamku czasu i kosztów.",
      color: "#00C4CC"
    },
    {
      name: "Magdalena Adamska",
      role: "Event Manager",
      company: "EventPro",
      avatar: "MA",
      rating: 5,
      content: "Organizuję duże wydarzenia i potrzebuję szybkich materiałów. Canva ma wszystko - od plakatów po prezentacje.",
      color: "#FF5C8D"
    },
    {
      name: "Tomasz Lewandowski",
      role: "Teacher",
      company: "EduTech",
      avatar: "TL",
      rating: 5,
      content: "Używam Canvy do tworzenia materiałów edukacyjnych. Uczniowie uwielbiają piękne prezentacje i infografiki.",
      color: "#FFD93D"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2D3748] mb-6">
            Co mówią o nas
            <span className="bg-gradient-to-r from-[#00C4CC] to-[#00A8B0] bg-clip-text text-transparent"> użytkownicy</span>
          </h2>
          <p className="text-xl text-[#4A5568] max-w-3xl mx-auto">
            Dołącz do milionów zadowolonych użytkowników, którzy już odkryli potęgę Canvy 
            w tworzeniu profesjonalnych projektów.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-3xl border border-[#E2E8F0] hover:border-[#00C4CC]/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${testimonial.color}10` }}
                >
                  <Quote className="w-6 h-6" style={{ color: testimonial.color }} />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFD93D] fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-[#4A5568] leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                  style={{ backgroundColor: testimonial.color }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-[#2D3748]">{testimonial.name}</div>
                  <div className="text-sm text-[#4A5568]">{testimonial.role} • {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-[#F8F9FA] to-[#E8F4F8] rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#2D3748] mb-4">
              Zaufanie milionów użytkowników
            </h3>
            <p className="text-[#4A5568] max-w-2xl mx-auto">
              Dołącz do społeczności, która już odkryła potęgę Canvy w tworzeniu 
              profesjonalnych projektów.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#00C4CC]">4.8/5</div>
              <div className="text-[#4A5568]">Średnia ocena</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#FF5C8D]">100M+</div>
              <div className="text-[#4A5568]">Aktywnych użytkowników</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#FFD93D]">190+</div>
              <div className="text-[#4A5568]">Krajów</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#00C4CC]">99.9%</div>
              <div className="text-[#4A5568]">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CanvaTestimonialsSection;