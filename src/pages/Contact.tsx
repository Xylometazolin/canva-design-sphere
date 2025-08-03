import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  User, 
  Building2,
  MessageSquare,
  Send
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '+48 123 456 789',
      description: 'Pon-Pt: 9:00-18:00'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'kontakt@realestatepro.pl',
      description: 'Odpowiemy w ciągu 24h'
    },
    {
      icon: MapPin,
      title: 'Adres',
      value: 'ul. Przykładowa 123, 00-000 Warszawa',
      description: 'Biuro w centrum miasta'
    },
    {
      icon: Clock,
      title: 'Godziny pracy',
      value: 'Poniedziałek - Piątek',
      description: '9:00 - 18:00'
    }
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Skontaktuj się z nami</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Jesteśmy tutaj, aby pomóc Ci znaleźć wymarzoną nieruchomość. 
          Skontaktuj się z nami i otrzymaj profesjonalną pomoc.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Wyślij wiadomość
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Imię i nazwisko *
                    </label>
                    <Input
                      placeholder="Wprowadź swoje imię i nazwisko"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="Wprowadź swój email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Telefon
                    </label>
                    <Input
                      type="tel"
                      placeholder="Wprowadź swój telefon"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Temat *
                    </label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => handleInputChange('subject', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Wybierz temat" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sale">Sprzedaż nieruchomości</SelectItem>
                        <SelectItem value="rent">Wynajem nieruchomości</SelectItem>
                        <SelectItem value="valuation">Wycena nieruchomości</SelectItem>
                        <SelectItem value="consultation">Konsultacja</SelectItem>
                        <SelectItem value="other">Inne</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Wiadomość *
                  </label>
                  <Textarea
                    placeholder="Opisz swoje potrzeby..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Wyślij wiadomość
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Office Hours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Godziny pracy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Poniedziałek - Piątek</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobota</span>
                  <span className="font-medium">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Niedziela</span>
                  <span className="font-medium">Zamknięte</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="text-primary font-medium mb-1">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Office Location */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building2 className="h-5 w-5 mr-2" />
                Nasze biuro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground">Mapa będzie tutaj</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">RealEstate Pro</h4>
                  <p className="text-muted-foreground">
                    ul. Przykładowa 123<br />
                    00-000 Warszawa<br />
                    Polska
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Bezpłatna konsultacja</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Potrzebujesz szybkiej odpowiedzi? Zadzwoń do nas lub umów się na bezpłatną konsultację.
              </p>
              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  <Phone className="h-4 w-4 mr-2" />
                  Zadzwoń teraz
                </Button>
                <Button className="w-full" variant="outline" size="lg">
                  <Mail className="h-4 w-4 mr-2" />
                  Umów konsultację
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Często zadawane pytania</h2>
          <p className="text-muted-foreground">
            Odpowiedzi na najczęściej zadawane pytania
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Jak długo trwa proces sprzedaży?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Czas sprzedaży zależy od wielu czynników, ale średnio trwa 2-3 miesiące. 
                Nasze doświadczenie pozwala przyspieszyć ten proces.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Czy oferujecie wycenę nieruchomości?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Tak, oferujemy bezpłatną wycenę nieruchomości. Nasi eksperci dokonają 
                szczegółowej analizy rynku i przedstawią aktualną wartość.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Jakie dokumenty są potrzebne do wynajmu?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Potrzebne są: zaświadczenie o dochodach, zaświadczenie z banku, 
                kopie dokumentów tożsamości oraz wpłata kaucji.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Czy pomagacie w kredycie hipotecznym?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Tak, współpracujemy z bankami i pomagamy w uzyskaniu najlepszych 
                warunków kredytu hipotecznego.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Contact