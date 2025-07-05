import { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="glass-card border-t border-primary/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="font-heading font-bold text-xl text-gradient mb-4">
                Canva Knowledge Hub
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Kompleksowe centrum wiedzy o Canvie. Tutoriale, kursy, narzędzia AI 
                i wszystko co potrzebujesz do opanowania platformy.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover-glow cursor-pointer">
                  📧
                </div>
                <div className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover-glow cursor-pointer">
                  📱
                </div>
                <div className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover-glow cursor-pointer">
                  🎥
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Szybkie Linki</h4>
              <div className="space-y-2">
                {["O Canvie", "Poradniki", "Kursy", "Usługi"].map((link) => (
                  <div key={link} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {link}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Wsparcie</h4>
              <div className="space-y-2">
                {["Kontakt", "FAQ", "Regulamin", "Prywatność"].map((link) => (
                  <div key={link} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {link}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary/20 pt-8 mt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Canva Knowledge Hub. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;