import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Car, 
  Calendar,
  Phone,
  Mail,
  User,
  Star,
  Share2,
  Heart,
  ArrowLeft,
  Building2
} from 'lucide-react'

const PropertyDetails = () => {
  const { id } = useParams()
  const [activeImage, setActiveImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  // Mock property data - in real app this would come from API
  const property = {
    id: 1,
    title: 'Nowoczesny apartament w centrum Warszawy',
    location: 'Warszawa, Śródmieście, ul. Marszałkowska 123',
    price: 2500000,
    type: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    parking: 1,
    yearBuilt: 2020,
    description: 'Przestronny apartament w nowoczesnym budynku w samym centrum Warszawy. Mieszkanie składa się z 3 sypialni, 2 łazienek, przestronnego salonu z aneksem kuchennym oraz balkonu z widokiem na miasto. Lokalizacja zapewnia doskonały dostęp do komunikacji miejskiej, centrów handlowych i restauracji.',
    features: [
      'Balkon',
      'Aneks kuchenny',
      'Winda',
      'Monitoring',
      'Ogrzewanie miejskie',
      'Internet światłowodowy'
    ],
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop'
    ],
    agent: {
      name: 'Anna Kowalska',
      phone: '+48 123 456 789',
      email: 'anna.kowalska@realestatepro.pl',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    }
  }

  const similarProperties = [
    {
      id: 2,
      title: 'Apartament z widokiem na park',
      location: 'Warszawa, Mokotów',
      price: 1900000,
      type: 'sale',
      bedrooms: 2,
      bathrooms: 2,
      area: 95,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'Stylowy loft do wynajęcia',
      location: 'Warszawa, Wola',
      price: 4500,
      type: 'rent',
      bedrooms: 2,
      bathrooms: 1,
      area: 85,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'
    }
  ]

  const formatPrice = (price: number, type: string) => {
    if (type === 'rent') {
      return `${price.toLocaleString()} zł/mies.`
    }
    return `${price.toLocaleString()} zł`
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link to="/properties" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Powrót do listy nieruchomości
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src={property.images[activeImage]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button variant="secondary" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-video rounded-lg overflow-hidden ${
                    activeImage === index ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`Zdjęcie ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Property Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold">{property.title}</h1>
                <Badge variant="secondary">
                  {property.type === 'sale' ? 'Sprzedaż' : 'Wynajem'}
                </Badge>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                {property.location}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <Bed className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{property.bedrooms}</div>
                <div className="text-sm text-muted-foreground">Sypialnie</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <Bath className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{property.bathrooms}</div>
                <div className="text-sm text-muted-foreground">Łazienki</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <Square className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{property.area} m²</div>
                <div className="text-sm text-muted-foreground">Powierzchnia</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <Car className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{property.parking}</div>
                <div className="text-sm text-muted-foreground">Miejsca parkingowe</div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Opis</h2>
              <p className="text-muted-foreground leading-relaxed">
                {property.description}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Udogodnienia</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Price Card */}
          <Card>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {formatPrice(property.price, property.type)}
                </div>
                <div className="text-muted-foreground">
                  {property.type === 'sale' ? 'Cena sprzedaży' : 'Czynsz miesięczny'}
                </div>
              </div>
              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  <Phone className="h-4 w-4 mr-2" />
                  Zadzwoń teraz
                </Button>
                <Button className="w-full" variant="outline" size="lg">
                  <Mail className="h-4 w-4 mr-2" />
                  Wyślij wiadomość
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Agent Card */}
          <Card>
            <CardHeader>
              <CardTitle>Agent nieruchomości</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src={property.agent.avatar}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{property.agent.name}</div>
                  <div className="text-sm text-muted-foreground">Agent RealEstate Pro</div>
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span>4.9 (127 opinii)</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{property.agent.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{property.agent.email}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Wyślij zapytanie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Imię i nazwisko" />
              <Input placeholder="Email" type="email" />
              <Input placeholder="Telefon" type="tel" />
              <Textarea placeholder="Twoja wiadomość..." rows={4} />
              <Button className="w-full">Wyślij wiadomość</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Similar Properties */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Podobne nieruchomości</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {similarProperties.map((prop) => (
            <Card key={prop.id} className="group hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4" variant="secondary">
                  {prop.type === 'sale' ? 'Sprzedaż' : 'Wynajem'}
                </Badge>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{prop.title}</CardTitle>
                <div className="flex items-center text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  {prop.location}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-primary">
                    {formatPrice(prop.price, prop.type)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    {prop.bedrooms}
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    {prop.bathrooms}
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    {prop.area} m²
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" asChild>
                  <Link to={`/properties/${prop.id}`}>
                    Zobacz szczegóły
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails