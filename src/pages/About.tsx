import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Award, 
  Users, 
  Target, 
  Heart, 
  Shield, 
  TrendingUp,
  Building2,
  Star,
  MapPin,
  Phone,
  Mail
} from 'lucide-react'

const About = () => {
  const teamMembers = [
    {
      name: 'Anna Kowalska',
      position: 'Dyrektor Generalny',
      experience: '15 lat doświadczenia',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      phone: '+48 123 456 789',
      email: 'anna.kowalska@realestatepro.pl'
    },
    {
      name: 'Marek Nowak',
      position: 'Agent Senior',
      experience: '12 lat doświadczenia',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      phone: '+48 123 456 790',
      email: 'marek.nowak@realestatepro.pl'
    },
    {
      name: 'Karolina Wiśniewska',
      position: 'Agent Nieruchomości',
      experience: '8 lat doświadczenia',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      phone: '+48 123 456 791',
      email: 'karolina.wisniewska@realestatepro.pl'
    },
    {
      name: 'Tomasz Lewandowski',
      position: 'Doradca Inwestycyjny',
      experience: '10 lat doświadczenia',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      phone: '+48 123 456 792',
      email: 'tomasz.lewandowski@realestatepro.pl'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Pasja do nieruchomości',
      description: 'Kochamy to, co robimy i wkładamy serce w każdą transakcję.'
    },
    {
      icon: Shield,
      title: 'Bezpieczeństwo klientów',
      description: 'Zapewniamy pełne bezpieczeństwo i transparentność wszystkich transakcji.'
    },
    {
      icon: Target,
      title: 'Precyzja i dokładność',
      description: 'Każdy szczegół ma znaczenie - dbamy o najwyższą jakość usług.'
    },
    {
      icon: TrendingUp,
      title: 'Stały rozwój',
      description: 'Nieustannie się rozwijamy, aby oferować najlepsze rozwiązania.'
    }
  ]

  const achievements = [
    { number: '150+', label: 'Sprzedanych nieruchomości' },
    { number: '500+', label: 'Zadowolonych klientów' },
    { number: '15+', label: 'Lat doświadczenia' },
    { number: '4.9/5', label: 'Ocena klientów' }
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">O nas</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          RealEstate Pro to wiodąca agencja nieruchomości w Polsce, 
          która od ponad 15 lat pomaga klientom w realizacji ich marzeń o idealnym domu.
        </p>
      </div>

      {/* Company Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Nasza historia</h2>
          <p className="text-muted-foreground leading-relaxed">
            RealEstate Pro powstało w 2009 roku z pasji do nieruchomości i chęci pomocy 
            ludziom w znalezieniu ich wymarzonego domu. Od początku stawialiśmy na 
            profesjonalizm, uczciwość i indywidualne podejście do każdego klienta.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Przez lata rozwinęliśmy się z małego biura w Warszawie do jednej z 
            największych agencji nieruchomości w Polsce, obsługując klientów w całym kraju. 
            Nasz zespół składa się z doświadczonych ekspertów, którzy znają rynek 
            nieruchomości od podszewki.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Dziś jesteśmy dumni z tego, że pomogliśmy setkom rodzin znaleźć ich 
            wymarzony dom i tysiącom inwestorów zrealizować ich plany finansowe.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Building2 className="h-24 w-24 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Zdjęcie biura będzie tutaj</p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {achievements.map((achievement, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
            <div className="text-muted-foreground">{achievement.label}</div>
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nasze wartości</h2>
          <p className="text-muted-foreground">
            To, co nas wyróżnia i co jest fundamentem naszej działalności
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nasz zespół</h2>
          <p className="text-muted-foreground">
            Poznaj ekspertów, którzy pomogą Ci znaleźć wymarzoną nieruchomość
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.position}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.experience}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{member.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{member.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nasze usługi</h2>
          <p className="text-muted-foreground">
            Kompleksowe wsparcie w każdej transakcji nieruchomości
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building2 className="h-5 w-5 mr-2" />
                Sprzedaż nieruchomości
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Profesjonalna sprzedaż z maksymalną wartością dla klienta. 
                Oferujemy kompleksową obsługę od wyceny po podpisanie aktu notarialnego.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Bezpłatna wycena</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Profesjonalne zdjęcia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Marketing i promocja</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Wynajem nieruchomości
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Bezpieczne wynajmowanie z pełną obsługą prawną. 
                Pomagamy zarówno wynajmującym, jak i najemcom.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Weryfikacja najemców</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Umowy najmu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Obsługa prawna</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Wycena nieruchomości
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Dokładna wycena oparta na aktualnych cenach rynkowych. 
                Oferujemy bezpłatne wyceny dla naszych klientów.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Analiza rynku</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Raport wyceny</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Bezpłatna usługa</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Gotowy na współpracę?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Skontaktuj się z nami i rozpocznij swoją przygodę z nieruchomościami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+48123456789" className="inline-flex items-center justify-center px-6 py-3 bg-primary-foreground text-primary font-medium rounded-lg hover:bg-primary-foreground/90 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              Zadzwoń teraz
            </a>
            <a href="mailto:kontakt@realestatepro.pl" className="inline-flex items-center justify-center px-6 py-3 border border-primary-foreground text-primary-foreground font-medium rounded-lg hover:bg-primary-foreground/10 transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              Napisz wiadomość
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default About