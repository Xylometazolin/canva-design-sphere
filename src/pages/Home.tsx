import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Building2, 
  Home, 
  Users, 
  Award, 
  Star,
  Bed,
  Bath,
  Square,
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react'

const Home = () => {
  const featuredProperties = [
    {
      id: 1,
      title: 'Nowoczesny apartament w centrum',
      location: 'Warszawa, Śródmieście',
      price: '2,500,000 zł',
      type: 'Sprzedaż',
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Przestronny dom z ogrodem',
      location: 'Kraków, Podgórze',
      price: '3,800,000 zł',
      type: 'Sprzedaż',
      bedrooms: 4,
      bathrooms: 3,
      area: 180,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: 3,
      title: 'Stylowy loft do wynajęcia',
      location: 'Wrocław, Stare Miasto',
      price: '4,500 zł/mies.',
      type: 'Wynajem',
      bedrooms: 2,
      bathrooms: 1,
      area: 85,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      featured: true
    }
  ]

  const stats = [
    { label: 'Sprzedanych nieruchomości', value: '150+', icon: Home },
    { label: 'Zadowolonych klientów', value: '500+', icon: Users },
    { label: 'Lat doświadczenia', value: '15+', icon: Award },
    { label: 'Ocena klientów', value: '4.9/5', icon: Star }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Znajdź swój
            <span className="text-primary block">wymarzony dom</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Profesjonalne usługi nieruchomościowe. Pomagamy znaleźć idealną nieruchomość 
            lub sprzedać Twoją w najlepszej cenie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/properties">
                <Search className="mr-2 h-5 w-5" />
                Przeglądaj nieruchomości
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Bezpłatna konsultacja
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Polecane nieruchomości</h2>
            <p className="text-muted-foreground text-lg">
              Sprawdź nasze najnowsze oferty
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {property.type}
                  </Badge>
                  {property.featured && (
                    <Badge className="absolute top-4 right-4" variant="default">
                      Polecane
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{property.title}</CardTitle>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{property.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {property.bedrooms}
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {property.bathrooms}
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      {property.area} m²
                    </div>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link to={`/properties/${property.id}`}>
                      Zobacz szczegóły
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/properties">
                Zobacz wszystkie nieruchomości
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nasze usługi</h2>
            <p className="text-muted-foreground text-lg">
              Kompleksowe wsparcie w każdej transakcji
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sprzedaż nieruchomości</h3>
              <p className="text-muted-foreground">
                Profesjonalna sprzedaż z maksymalną wartością dla klienta
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mx-auto mb-4">
                <Home className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wynajem nieruchomości</h3>
              <p className="text-muted-foreground">
                Bezpieczne wynajmowanie z pełną obsługą prawną
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wycena nieruchomości</h3>
              <p className="text-muted-foreground">
                Dokładna wycena oparta na aktualnych cenach rynkowych
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Potrzebujesz pomocy w znalezieniu nieruchomości?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Skontaktuj się z nami i otrzymaj bezpłatną konsultację
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Zadzwoń teraz
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Napisz wiadomość
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Home