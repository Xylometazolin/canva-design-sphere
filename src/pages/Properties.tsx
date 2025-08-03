import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { 
  Search, 
  Filter, 
  MapPin, 
  Bed, 
  Bath, 
  Square,
  Grid3X3,
  List,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const Properties = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock data - in real app this would come from API
  const mockProperties = [
    {
      id: 1,
      title: 'Nowoczesny apartament w centrum',
      location: 'Warszawa, Śródmieście',
      price: 2500000,
      type: 'sale',
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
      price: 3800000,
      type: 'sale',
      bedrooms: 4,
      bathrooms: 3,
      area: 180,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'Stylowy loft do wynajęcia',
      location: 'Wrocław, Stare Miasto',
      price: 4500,
      type: 'rent',
      bedrooms: 2,
      bathrooms: 1,
      area: 85,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: 4,
      title: 'Apartament z widokiem na park',
      location: 'Poznań, Jeżyce',
      price: 1900000,
      type: 'sale',
      bedrooms: 2,
      bathrooms: 2,
      area: 95,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Dom jednorodzinny w spokojnej okolicy',
      location: 'Gdańsk, Oliwa',
      price: 4200000,
      type: 'sale',
      bedrooms: 5,
      bathrooms: 3,
      area: 220,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'Kawalerka w centrum miasta',
      location: 'Łódź, Śródmieście',
      price: 2800,
      type: 'rent',
      bedrooms: 1,
      bathrooms: 1,
      area: 45,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      featured: false
    }
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProperties(mockProperties)
      setLoading(false)
    }, 1000)
  }, [])

  const formatPrice = (price: number, type: string) => {
    if (type === 'rent') {
      return `${price.toLocaleString()} zł/mies.`
    }
    return `${price.toLocaleString()} zł`
  }

  const PropertyCard = ({ property }: { property: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-4 left-4" variant="secondary">
          {property.type === 'sale' ? 'Sprzedaż' : 'Wynajem'}
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
          <span className="text-2xl font-bold text-primary">
            {formatPrice(property.price, property.type)}
          </span>
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
        <Button className="w-full mt-4" variant="outline">
          Zobacz szczegóły
        </Button>
      </CardContent>
    </Card>
  )

  if (loading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Ładowanie nieruchomości...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Nieruchomości</h1>
        <p className="text-muted-foreground">
          Znajdź swoją wymarzoną nieruchomość
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Szukaj nieruchomości..."
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Typ transakcji" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Wszystkie</SelectItem>
                <SelectItem value="sale">Sprzedaż</SelectItem>
                <SelectItem value="rent">Wynajem</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Lokalizacja" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Wszystkie</SelectItem>
                <SelectItem value="warszawa">Warszawa</SelectItem>
                <SelectItem value="krakow">Kraków</SelectItem>
                <SelectItem value="wroclaw">Wrocław</SelectItem>
                <SelectItem value="poznan">Poznań</SelectItem>
                <SelectItem value="gdansk">Gdańsk</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={() => setViewMode('grid')}>
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => setViewMode('list')}>
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Properties Grid */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Properties