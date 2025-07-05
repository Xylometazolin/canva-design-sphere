import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Zap, BookOpen, Palette, Users, Image, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  const menuItems = [
    {
      title: "O Canvie",
      href: "/about",
      icon: Zap,
      dropdown: [
        { title: "Możliwości Platformy", href: "/about/features" },
        { title: "Narzędzia i Funkcje", href: "/about/tools" },
        { title: "Canva AI", href: "/about/ai" },
        { title: "Integracje", href: "/about/integrations" },
        { title: "Nowości", href: "/about/news" }
      ]
    },
    {
      title: "Poradniki",
      href: "/tutorials",
      icon: BookOpen
    },
    {
      title: "Kursy Premium",
      href: "/courses",
      icon: Palette
    },
    {
      title: "Usługi",
      href: "/services",
      icon: Users
    },
    {
      title: "Galeria",
      href: "/gallery",
      icon: Image
    },
    {
      title: "Blog",
      href: "/blog",
      icon: PenTool
    }
  ];

  const isActiveRoute = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group hover-lift">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-glow">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl text-gradient">
              Canva Hub
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.dropdown && setDropdownOpen(item.title)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActiveRoute(item.href)
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.title}
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && dropdownOpen === item.title && (
                  <div className="absolute top-full left-0 mt-2 w-64 glass-card border border-primary/20 rounded-xl shadow-glow animate-scale-in">
                    <div className="py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.href}
                          className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all duration-200"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="btn-cyber">
              Rozpocznij Naukę
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-primary/20 mt-4 py-4 animate-fade-in-up">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <div key={item.title}>
                  <Link
                    to={item.href}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActiveRoute(item.href)
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.title}
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="mt-6 px-4">
                <Button className="btn-cyber w-full">
                  Rozpocznij Naukę
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;