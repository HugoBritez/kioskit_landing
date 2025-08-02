import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Star } from "lucide-react"

export function PricingSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-kioskit-bg-secondary/10 to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes que se adaptan a tu negocio</h2>
          <p className="text-xl text-kioskit-text-secondary max-w-2xl mx-auto">
            Desde emprendedores hasta cadenas de tiendas. Encuentra el plan perfecto para ti.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Plan Básico */}
          <Card className="bg-kioskit-bg-secondary/80 border-kioskit-border backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-kioskit-text-primary">Básico</CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold text-kioskit-text-primary">$9</span>
                <span className="text-kioskit-text-secondary">/mes</span>
              </div>
              <p className="text-sm text-kioskit-text-secondary">Perfecto para empezar</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-kioskit-accent" />
                  <span className="text-sm text-kioskit-text-primary">Hasta 100 productos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-kioskit-accent" />
                  <span className="text-sm text-kioskit-text-primary">Ventas ilimitadas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-kioskit-accent" />
                  <span className="text-sm text-kioskit-text-primary">Reportes básicos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-kioskit-accent" />
                  <span className="text-sm text-kioskit-text-primary">Soporte por email</span>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full border-kioskit-border text-kioskit-text-primary hover:bg-kioskit-accent hover:text-white bg-transparent"
              >
                Comenzar Gratis
              </Button>
            </CardContent>
          </Card>

          {/* Plan Pro */}
          <Card className="bg-kioskit-bg-secondary/80 border-kioskit-accent backdrop-blur-sm relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-kioskit-accent text-white px-4 py-1 rounded-full text-xs font-medium flex items-center">
                <Star className="w-3 h-3 mr-1" />
                Más Popular
              </div>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-kioskit-text-primary">Pro</CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold text-kioskit-accent">$19</span>
                <span className="text-kioskit-text-secondary">/mes</span>
              </div>
              <p className="text-sm text-kioskit-text-secondary">Para negocios en crecimiento</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-kioskit-accent" />
                  <span className="text-sm text-kioskit-text-primary">Productos ilimitados</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-kioskit-accent" />
                  <span className="text-sm text-kioskit-text-primary">Gestión de clientes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-kioskit-accent" />
                  <span className="text-sm text-kioskit-text-primary">Reportes avanzados</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-kioskit-accent" />
                  <span className="text-sm text-kioskit-text-primary">Soporte prioritario</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-kioskit-accent" />
                  <span className="text-sm text-kioskit-text-primary">Múltiples usuarios</span>
                </div>
              </div>
              <Button className="w-full bg-kioskit-accent hover:bg-green-600 text-white">Comenzar Prueba</Button>
            </CardContent>
          </Card>

          {/* Plan Enterprise */}
          <Card className="bg-kioskit-bg-secondary/80 border-kioskit-border backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-kioskit-text-primary">Enterprise</CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold text-kioskit-text-primary">$49</span>
                <span className="text-kioskit-text-secondary">/mes</span>
              </div>
              <p className="text-sm text-kioskit-text-secondary">Para cadenas y franquicias</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-kioskit-accent" />
                  <span className="text-sm text-kioskit-text-primary">Múltiples sucursales</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-kioskit-accent" />
                  <span className="text-sm text-kioskit-text-primary">API personalizada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-kioskit-accent" />
                  <span className="text-sm text-kioskit-text-primary">Integraciones avanzadas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-kioskit-accent" />
                  <span className="text-sm text-kioskit-text-primary">Soporte 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-kioskit-accent" />
                  <span className="text-sm text-kioskit-text-primary">Capacitación incluida</span>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full border-kioskit-border text-kioskit-text-primary hover:bg-kioskit-accent hover:text-white bg-transparent"
              >
                Contactar Ventas
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-kioskit-text-secondary mb-4">
            ¿No estás seguro? Prueba gratis por 30 días, sin tarjeta de crédito
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-kioskit-text-secondary">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-kioskit-accent mr-2" />
              Cancela cuando quieras
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-kioskit-accent mr-2" />
              Migración gratuita
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-kioskit-accent mr-2" />
              Soporte en español
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
