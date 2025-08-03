import { Link } from 'react-router-dom'
import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Building2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">RealEstate Pro</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Profesjonalne usługi nieruchomościowe. Pomagamy znaleźć dom Twoich marzeń 
              lub sprzedać nieruchomość w najlepszej cenie.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Szybkie linki</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Wszystkie nieruchomości
                </Link>
              </li>
              <li>
                <Link to="/properties?type=sale" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Nieruchomości na sprzedaż
                </Link>
              </li>
              <li>
                <Link to="/properties?type=rent" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Nieruchomości do wynajęcia
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  O nas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Usługi</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">
                Sprzedaż nieruchomości
              </li>
              <li className="text-muted-foreground text-sm">
                Wynajem nieruchomości
              </li>
              <li className="text-muted-foreground text-sm">
                Wycena nieruchomości
              </li>
              <li className="text-muted-foreground text-sm">
                Doradztwo inwestycyjne
              </li>
              <li className="text-muted-foreground text-sm">
                Obsługa prawna transakcji
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">+48 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">kontakt@realestatepro.pl</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  ul. Przykładowa 123<br />
                  00-000 Warszawa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 RealEstate Pro. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Polityka prywatności
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer