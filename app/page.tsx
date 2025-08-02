"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle,
  BarChart3,
  Users,
  Zap,
  Star,
  ArrowRight,
  Package,
  ShoppingCart,
  DollarSign,
  Plus,
  AlertTriangle,
  Eye,
  Clock,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"
import { useState } from "react"

const dailyTips = [
  {
    title: "💡 Consejo del día",
    message:
      "El 80% de tus ventas vienen del 20% de tus productos. ¿Ya identificaste cuáles son tus productos estrella?",
    type: "tip",
  },
  {
    title: "🎯 Punto de equilibrio",
    message: "Necesitas vender ₲28.500.000 este mes para cubrir todos tus gastos. ¡Vas por buen camino!",
    type: "financial",
  },
  {
    title: "💪 Motivación",
    message: '"El éxito es la suma de pequeños esfuerzos repetidos día tras día" - Robert Collier',
    type: "quote",
  },
  {
    title: "📈 Cash Flow",
    message: "Tu flujo de efectivo es positivo. Esto significa que entra más dinero del que sale. ¡Excelente gestión!",
    type: "education",
  },
]

const financialInsights = {
  breakEven: {
    current: 28500000,
    target: 32000000,
    percentage: 89,
    status: "good",
    explanation: "Punto de equilibrio: Es el mínimo que necesitas vender para no perder dinero. ¡Estás muy cerca!",
  },
  cashFlow: {
    value: 15200000,
    trend: "positive",
    explanation: "Cash Flow: Es la diferencia entre lo que entra y sale de dinero. Positivo = ¡vas bien!",
  },
  profitMargin: {
    value: 34,
    status: "excellent",
    explanation: "Margen de utilidad: De cada ₲100.000 que vendes, ₲34.000 son ganancia pura. ¡Excelente!",
  },
  inventory: {
    turnover: 2.3,
    status: "good",
    explanation: "Rotación de inventario: Vendes tu inventario 2.3 veces al mes. Ideal es entre 2-4 veces.",
  },
}

const salesData = [
  { name: "Ene", ventas: 12000000, meta: 15000000 },
  { name: "Feb", ventas: 19000000, meta: 18000000 },
  { name: "Mar", ventas: 15000000, meta: 20000000 },
  { name: "Apr", ventas: 25000000, meta: 22000000 },
  { name: "May", ventas: 22000000, meta: 25000000 },
  { name: "Jun", ventas: 30000000, meta: 28000000 },
  { name: "Jul", ventas: 28000000, meta: 30000000 },
  { name: "Ago", ventas: 35000000, meta: 32000000 },
  { name: "Sep", ventas: 32000000, meta: 35000000 },
  { name: "Oct", ventas: 40000000, meta: 38000000 },
  { name: "Nov", ventas: 38000000, meta: 40000000 },
  { name: "Dec", ventas: 45000000, meta: 42000000 },
]

const weeklyData = [
  { day: "Lun", ventas: 4200000 },
  { day: "Mar", ventas: 3800000 },
  { day: "Mié", ventas: 5100000 },
  { day: "Jue", ventas: 4600000 },
  { day: "Vie", ventas: 6200000 },
  { day: "Sáb", ventas: 7800000 },
  { day: "Dom", ventas: 5900000 },
]

export default function LandingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Cómo empiezo a usar Kioskit?",
      answer:
        "Es súper fácil. Te registras, cargas tus productos y ya puedes empezar a vender. Todo el proceso toma menos de 15 minutos.",
    },
    {
      question: "¿Puedo usar Kioskit sin internet?",
      answer:
        "Kioskit funciona mejor con internet, pero tiene modo offline básico para ventas de emergencia. Los datos se sincronizan cuando vuelve la conexión.",
    },
    {
      question: "¿Qué pasa si necesito ayuda?",
      answer:
        "Tenemos soporte en español por chat, email y teléfono. También hay tutoriales en video y una base de conocimientos completa.",
    },
    {
      question: "¿Puedo cambiar de plan cuando quiera?",
      answer:
        "¡Por supuesto! Puedes cambiar de plan en cualquier momento. Si subes de plan, los cambios son inmediatos. Si bajas, se aplican al siguiente ciclo.",
    },
    {
      question: "¿Mis datos están seguros?",
      answer:
        "Absolutamente. Usamos encriptación de nivel bancario y respaldos automáticos. Tus datos están más seguros que en una computadora local.",
    },
    {
      question: "¿Puedo importar mis productos existentes?",
      answer:
        "Sí, puedes importar productos desde Excel, CSV o desde otras aplicaciones. También ofrecemos migración gratuita desde otros sistemas.",
    },
  ]

  const customStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  .animate-pulse-slow {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
`

  return (
    <div className="min-h-screen bg-kioskit-bg-primary text-kioskit-text-primary font-poppins relative overflow-hidden">
      <style jsx>{customStyles}</style>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-kioskit-bg-primary via-kioskit-bg-secondary/20 to-kioskit-bg-primary"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-kioskit-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-kioskit-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${`#2ecc71`}40 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-kioskit-border bg-kioskit-bg-secondary/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold">Kioskit</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-kioskit-text-secondary hover:text-kioskit-accent transition-colors"
              >
                Características
              </Link>
              <Link
                href="#dashboard"
                className="text-kioskit-text-secondary hover:text-kioskit-accent transition-colors"
              >
                Dashboard
              </Link>
              <Link href="#pricing" className="text-kioskit-text-secondary hover:text-kioskit-accent transition-colors">
                Precios
              </Link>
              <Link
                href="#testimonials"
                className="text-kioskit-text-secondary hover:text-kioskit-accent transition-colors"
              >
                Testimonios
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-kioskit-text-secondary hover:text-kioskit-accent">
                Iniciar Sesión
              </Button>
              <Button className="bg-kioskit-accent hover:bg-green-600 text-white">Comenzar Gratis</Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-kioskit-text-primary to-kioskit-accent bg-clip-text text-transparent">
              Gestiona tu negocio de forma simple y efectiva
            </h1>
            <p className="text-xl text-kioskit-text-secondary mb-8 max-w-2xl mx-auto">
              Kioskit es la aplicación perfecta para pequeños negocios y emprendedores. Controla inventario, ventas y
              clientes desde un solo lugar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-kioskit-accent hover:bg-green-600 text-white px-8 py-3 text-lg">
                Comenzar Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-kioskit-border text-kioskit-text-primary hover:bg-kioskit-bg-secondary px-8 py-3 text-lg bg-transparent"
              >
                <Eye className="mr-2 w-5 h-5" />
                Ver Demo
              </Button>
            </div>

            {/* Hero Dashboard Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-kioskit-bg-secondary/80 to-kioskit-border/50 rounded-xl shadow-2xl p-8 mx-auto max-w-5xl backdrop-blur-sm border border-kioskit-border/50">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <Card className="bg-kioskit-bg-primary/50 border-kioskit-border/50 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-kioskit-text-secondary">Ventas Hoy</CardTitle>
                      <DollarSign className="h-4 w-4 text-kioskit-accent" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-kioskit-text-primary">₲45.230.000</div>
                      <p className="text-xs text-kioskit-accent">+12% desde ayer</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-kioskit-bg-primary/50 border-kioskit-border/50 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-kioskit-text-secondary">Productos</CardTitle>
                      <Package className="h-4 w-4 text-kioskit-accent" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-kioskit-text-primary">127</div>
                      <p className="text-xs text-kioskit-text-secondary">En inventario</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-kioskit-bg-primary/50 border-kioskit-border/50 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-kioskit-text-secondary">Transacciones</CardTitle>
                      <ShoppingCart className="h-4 w-4 text-kioskit-accent" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-kioskit-text-primary">23</div>
                      <p className="text-xs text-kioskit-accent">+3 en la última hora</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-kioskit-bg-primary/50 border-kioskit-border/50 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-kioskit-text-secondary">Stock Bajo</CardTitle>
                      <AlertTriangle className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-orange-500">4</div>
                      <p className="text-xs text-kioskit-text-secondary">Productos por reponer</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Advanced Chart Preview */}
                <div className="bg-kioskit-bg-primary/30 rounded-lg p-6 border border-kioskit-border/30">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-kioskit-text-primary">Ventas del Año</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-kioskit-accent rounded-full mr-2"></div>
                        <span className="text-kioskit-text-secondary">Ventas</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                        <span className="text-kioskit-text-secondary">Meta</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={salesData}>
                        <defs>
                          <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2ecc71" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#2ecc71" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#3c3d50" opacity={0.3} />
                        <XAxis
                          dataKey="name"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#a0a0a0", fontSize: 12 }}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#a0a0a0", fontSize: 12 }}
                          tickFormatter={(value) => `₲${value / 1000000}M`}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#2a2b3d",
                            border: "1px solid #3c3d50",
                            borderRadius: "8px",
                            color: "#e0e0e0",
                          }}
                          formatter={(value, name) => [
                            `₲${value.toLocaleString()}`,
                            name === "ventas" ? "Ventas" : "Meta",
                          ]}
                        />
                        <Line
                          type="monotone"
                          dataKey="ventas"
                          stroke="#2ecc71"
                          strokeWidth={3}
                          dot={{ fill: "#2ecc71", strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 6, stroke: "#2ecc71", strokeWidth: 2, fill: "#1e1e2f" }}
                        />
                        <Line
                          type="monotone"
                          dataKey="meta"
                          stroke="#f39c12"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          dot={{ fill: "#f39c12", strokeWidth: 2, r: 3 }}
                          activeDot={{ r: 5, stroke: "#f39c12", strokeWidth: 2, fill: "#1e1e2f" }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Device Preview Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-kioskit-bg-secondary/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Disponible en todos tus dispositivos</h2>
              <p className="text-xl text-kioskit-text-secondary max-w-2xl mx-auto">
                Gestiona tu negocio desde cualquier lugar. Kioskit se adapta perfectamente a móviles, tablets y
                computadoras.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              {/* Mobile Preview */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Mobile Device Frame */}
                  <div className="relative w-72 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                    {/* Screen */}
                    <div className="w-full h-full bg-kioskit-bg-primary rounded-[2.5rem] overflow-hidden relative border-4 border-gray-700">
                      {/* Status Bar */}
                      <div className="absolute top-0 left-0 right-0 h-8 bg-kioskit-bg-secondary/50 flex items-center justify-between px-6 text-xs text-kioskit-text-secondary">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 border border-kioskit-text-secondary rounded-sm">
                            <div className="w-3 h-1 bg-kioskit-accent rounded-sm"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Content Placeholder */}
                      <div className="pt-8 h-full">
                        <img
                          src="/placeholder.svg?height=560&width=280&text=Kioskit+Mobile+App"
                          alt="Kioskit Mobile App"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-kioskit-accent/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-green-500/10 rounded-full blur-2xl"></div>
                </div>
              </div>

              {/* Mobile Features */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Perfecta para móviles</h3>
                  <p className="text-kioskit-text-secondary mb-6">
                    Interfaz optimizada para pantallas táctiles. Vende, consulta inventario y revisa reportes desde tu
                    teléfono.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-kioskit-accent/20 rounded-lg flex items-center justify-center mt-1">
                      <ShoppingCart className="w-4 h-4 text-kioskit-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-kioskit-text-primary">Ventas rápidas</h4>
                      <p className="text-sm text-kioskit-text-secondary">Procesa ventas con unos pocos toques</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-kioskit-accent/20 rounded-lg flex items-center justify-center mt-1">
                      <Package className="w-4 h-4 text-kioskit-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-kioskit-text-primary">Inventario al instante</h4>
                      <p className="text-sm text-kioskit-text-secondary">Consulta stock y precios en tiempo real</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-kioskit-accent/20 rounded-lg flex items-center justify-center mt-1">
                      <BarChart3 className="w-4 h-4 text-kioskit-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-kioskit-text-primary">Reportes móviles</h4>
                      <p className="text-sm text-kioskit-text-secondary">Estadísticas claras optimizadas para móvil</p>
                    </div>
                  </div>
                </div>

                <Button className="bg-kioskit-accent hover:bg-green-600 text-white">
                  <Eye className="w-4 h-4 mr-2" />
                  Ver Demo Móvil
                </Button>
              </div>
            </div>

            {/* Laptop Preview */}
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mt-24">
              {/* Laptop Features */}
              <div className="space-y-8 order-2 lg:order-1">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Potencia completa en desktop</h3>
                  <p className="text-kioskit-text-secondary mb-6">
                    Aprovecha al máximo todas las funciones desde tu computadora. Dashboard completo, reportes avanzados
                    y gestión total.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-kioskit-accent/20 rounded-lg flex items-center justify-center mt-1">
                      <BarChart3 className="w-4 h-4 text-kioskit-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-kioskit-text-primary">Dashboard completo</h4>
                      <p className="text-sm text-kioskit-text-secondary">
                        Toda la información de tu negocio en una pantalla
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-kioskit-accent/20 rounded-lg flex items-center justify-center mt-1">
                      <Users className="w-4 h-4 text-kioskit-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-kioskit-text-primary">Gestión avanzada</h4>
                      <p className="text-sm text-kioskit-text-secondary">
                        Clientes, productos y ventas con máximo detalle
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-kioskit-accent/20 rounded-lg flex items-center justify-center mt-1">
                      <Zap className="w-4 h-4 text-kioskit-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-kioskit-text-primary">Reportes profesionales</h4>
                      <p className="text-sm text-kioskit-text-secondary">Gráficos detallados y análisis profundo</p>
                    </div>
                  </div>
                </div>

                <Button className="bg-kioskit-accent hover:bg-green-600 text-white">
                  <Eye className="w-4 h-4 mr-2" />
                  Ver Demo Desktop
                </Button>
              </div>

              {/* Laptop Preview */}
              <div className="flex justify-center lg:justify-start order-1 lg:order-2">
                <div className="relative">
                  {/* Laptop Device Frame */}
                  <div className="relative">
                    {/* Screen */}
                    <div className="w-[500px] h-[320px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-2xl p-3 shadow-2xl">
                      <div className="w-full h-full bg-kioskit-bg-primary rounded-xl overflow-hidden border-2 border-gray-700">
                        {/* Browser Bar */}
                        <div className="h-8 bg-kioskit-bg-secondary/50 flex items-center px-4 border-b border-kioskit-border/30">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="flex-1 flex justify-center">
                            <div className="bg-kioskit-bg-primary/50 px-4 py-1 rounded text-xs text-kioskit-text-secondary">
                              app.kioskit.com
                            </div>
                          </div>
                        </div>

                        {/* App Content Placeholder */}
                        <div className="h-[calc(100%-2rem)]">
                          <img
                            src="/placeholder.svg?height=280&width=480&text=Kioskit+Desktop+Dashboard"
                            alt="Kioskit Desktop Dashboard"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Laptop Base */}
                    <div className="w-[520px] h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl -mt-1 relative">
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-8 -left-8 w-20 h-20 bg-kioskit-accent/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500/20 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>

            {/* Sync Feature */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-br from-kioskit-bg-secondary/80 to-kioskit-border/50 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm border border-kioskit-border/50">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-kioskit-accent/20 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-kioskit-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Sincronización automática</h3>
                <p className="text-kioskit-text-secondary max-w-2xl mx-auto">
                  Todos tus datos se sincronizan automáticamente entre dispositivos. Empieza una venta en el móvil y
                  termínala en la computadora sin problemas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section - LAYOUT MEJORADO */}
        <section id="dashboard" className="py-20 px-4 bg-gradient-to-r from-kioskit-bg-secondary/20 to-transparent">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dashboard completo y fácil de usar</h2>
              <p className="text-xl text-kioskit-text-secondary max-w-2xl mx-auto">
                Toda la información de tu negocio en una sola pantalla. Datos claros, decisiones inteligentes.
              </p>
            </div>

            {/* NUEVO LAYOUT MEJORADO */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
              {/* Products Management - Ocupa más espacio */}
              <div className="xl:col-span-7">
                <Card className="bg-kioskit-bg-secondary/80 border-kioskit-border backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-kioskit-text-primary">Gestión de Productos</CardTitle>
                      <Button size="sm" className="bg-kioskit-accent hover:bg-green-600 text-white">
                        <Plus className="w-4 h-4 mr-2" />
                        Agregar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { nombre: "Coca Cola 500ml", precio: 2500000, stock: 24, categoria: "Bebidas", trend: "+5%" },
                        { nombre: "Papas Lays", precio: 1800000, stock: 12, categoria: "Snacks", trend: "+12%" },
                        { nombre: "Agua Mineral", precio: 1200000, stock: 36, categoria: "Bebidas", trend: "+8%" },
                        { nombre: "Chocolate Milka", precio: 3200000, stock: 8, categoria: "Dulces", trend: "-2%" },
                        { nombre: "Galletas Oreo", precio: 2800000, stock: 15, categoria: "Dulces", trend: "+7%" },
                        { nombre: "Café Nescafé", precio: 3500000, stock: 9, categoria: "Bebidas", trend: "+3%" },
                      ].map((producto, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 bg-kioskit-bg-primary/50 rounded-lg border border-kioskit-border/50"
                        >
                          <div className="flex-1">
                            <h3 className="font-medium text-kioskit-text-primary">{producto.nombre}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge
                                variant="outline"
                                className="text-xs border-kioskit-border text-kioskit-text-secondary"
                              >
                                {producto.categoria}
                              </Badge>
                              <span className="text-xs text-kioskit-text-secondary">Stock: {producto.stock}</span>
                              <span
                                className={`text-xs ${producto.trend.startsWith("+") ? "text-kioskit-accent" : "text-orange-500"}`}
                              >
                                {producto.trend}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold text-kioskit-accent">
                              ₲{producto.precio.toLocaleString()}
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              className="mt-1 border-kioskit-border text-kioskit-text-secondary hover:bg-kioskit-accent hover:text-white bg-transparent"
                            >
                              Vender
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar con widgets en grid 2x3 */}
              <div className="xl:col-span-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-6">
                  {/* Sales Analytics - Ocupa toda la fila */}
                  <div className="lg:col-span-2 xl:col-span-1">
                    <Card className="bg-kioskit-bg-secondary/80 border-kioskit-border backdrop-blur-sm hover:border-kioskit-accent/30 transition-all duration-500">
                      <CardHeader>
                        <CardTitle className="text-kioskit-text-primary">Análisis de Ventas</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-kioskit-text-secondary">Meta del Mes</span>
                              <span className="text-kioskit-text-primary font-semibold">₲38.500.000 / ₲42.000.000</span>
                            </div>
                            <Progress value={92} className="h-3" />
                            <p className="text-xs text-kioskit-accent mt-1">92% completado</p>
                          </div>

                          <div className="h-48">
                            <h4 className="text-sm font-medium text-kioskit-text-secondary mb-3">
                              Ventas de la Semana
                            </h4>
                            <ResponsiveContainer width="100%" height="100%">
                              <AreaChart data={weeklyData}>
                                <defs>
                                  <linearGradient id="weeklyGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#2ecc71" stopOpacity={0.4} />
                                    <stop offset="95%" stopColor="#2ecc71" stopOpacity={0.1} />
                                  </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#3c3d50" opacity={0.2} />
                                <XAxis
                                  dataKey="day"
                                  axisLine={false}
                                  tickLine={false}
                                  tick={{ fill: "#a0a0a0", fontSize: 10 }}
                                />
                                <YAxis hide />
                                <Tooltip
                                  contentStyle={{
                                    backgroundColor: "#2a2b3d",
                                    border: "1px solid #3c3d50",
                                    borderRadius: "6px",
                                    color: "#e0e0e0",
                                    fontSize: "12px",
                                  }}
                                  formatter={(value) => [`₲${value.toLocaleString()}`, "Ventas"]}
                                />
                                <Area
                                  type="monotone"
                                  dataKey="ventas"
                                  stroke="#2ecc71"
                                  strokeWidth={2}
                                  fill="url(#weeklyGradient)"
                                />
                              </AreaChart>
                            </ResponsiveContainer>
                          </div>

                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-kioskit-text-secondary">Productos Más Vendidos</span>
                            </div>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-kioskit-text-primary text-sm">Coca Cola</span>
                                <div className="flex items-center space-x-2">
                                  <div className="w-16 bg-kioskit-border rounded-full h-2">
                                    <div className="w-3/4 bg-kioskit-accent h-2 rounded-full transition-all duration-700"></div>
                                  </div>
                                  <span className="text-kioskit-accent text-sm font-medium">45</span>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-kioskit-text-primary text-sm">Papas Lays</span>
                                <div className="flex items-center space-x-2">
                                  <div className="w-16 bg-kioskit-border rounded-full h-2">
                                    <div className="w-2/3 bg-kioskit-accent h-2 rounded-full transition-all duration-700"></div>
                                  </div>
                                  <span className="text-kioskit-accent text-sm font-medium">32</span>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-kioskit-text-primary text-sm">Agua Mineral</span>
                                <div className="flex items-center space-x-2">
                                  <div className="w-16 bg-kioskit-border rounded-full h-2">
                                    <div className="w-1/2 bg-kioskit-accent h-2 rounded-full transition-all duration-700"></div>
                                  </div>
                                  <span className="text-kioskit-accent text-sm font-medium">28</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Grid 2x2 para los widgets más pequeños */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                    {/* Quick Actions */}
                    <Card className="bg-kioskit-bg-secondary/80 border-kioskit-border backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-kioskit-text-primary text-sm">Acciones Rápidas</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <Button
                          size="sm"
                          className="w-full bg-kioskit-accent hover:bg-green-600 text-white justify-start text-xs"
                        >
                          <ShoppingCart className="w-3 h-3 mr-2" />
                          Nueva Venta
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full border-kioskit-border text-kioskit-text-secondary hover:bg-kioskit-accent hover:text-white justify-start bg-transparent text-xs"
                        >
                          <Package className="w-3 h-3 mr-2" />
                          Agregar Producto
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full border-kioskit-border text-kioskit-text-secondary hover:bg-kioskit-accent hover:text-white justify-start bg-transparent text-xs"
                        >
                          <BarChart3 className="w-3 h-3 mr-2" />
                          Ver Reportes
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Alertas */}
                    <Card className="bg-kioskit-bg-secondary/80 border-kioskit-border backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-kioskit-text-primary flex items-center text-sm">
                          <AlertTriangle className="w-3 h-3 mr-2 text-orange-500" />
                          Alertas
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center space-x-2 p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
                          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                          <div className="flex-1">
                            <p className="text-xs font-medium text-kioskit-text-primary">Stock Bajo</p>
                            <p className="text-xs text-kioskit-text-secondary">4 productos</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 p-2 rounded-lg bg-kioskit-accent/10 border border-kioskit-accent/20">
                          <div className="w-2 h-2 bg-kioskit-accent rounded-full"></div>
                          <div className="flex-1">
                            <p className="text-xs font-medium text-kioskit-text-primary">Meta Alcanzada</p>
                            <p className="text-xs text-kioskit-text-secondary">¡Superaste la meta!</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Clientes */}
                    <Card className="bg-kioskit-bg-secondary/80 border-kioskit-border backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-kioskit-text-primary flex items-center text-sm">
                          <Users className="w-3 h-3 mr-2 text-kioskit-accent" />
                          Clientes Hoy
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-kioskit-text-secondary">Nuevos</span>
                            <span className="text-sm font-semibold text-kioskit-accent">+3</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-kioskit-text-secondary">Recurrentes</span>
                            <span className="text-sm font-semibold text-kioskit-text-primary">12</span>
                          </div>
                          <div className="pt-2 border-t border-kioskit-border/30">
                            <div className="flex items-center">
                              <div className="w-5 h-5 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mr-2">
                                <span className="text-white text-xs font-semibold">J</span>
                              </div>
                              <span className="text-xs text-kioskit-text-primary">Juan Pérez</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Estado del Negocio */}
                    <Card className="bg-kioskit-bg-secondary/80 border-kioskit-border backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-kioskit-text-primary flex items-center text-sm">
                          <Clock className="w-3 h-3 mr-2 text-kioskit-accent" />
                          Estado
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-kioskit-text-secondary">Estado</span>
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-kioskit-accent rounded-full mr-2 animate-pulse"></div>
                              <span className="text-xs font-medium text-kioskit-accent">Abierto</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-kioskit-text-secondary">Cierra en</span>
                            <span className="text-xs text-kioskit-text-primary">5h 21m</span>
                          </div>
                          <div className="pt-2 border-t border-kioskit-border/30">
                            <div className="text-xs text-kioskit-text-secondary mb-1">Rendimiento</div>
                            <div className="flex items-center space-x-2">
                              <div className="flex-1 bg-kioskit-border rounded-full h-2">
                                <div className="w-3/4 bg-gradient-to-r from-kioskit-accent to-green-400 h-2 rounded-full transition-all duration-700"></div>
                              </div>
                              <span className="text-xs text-kioskit-accent font-medium">75%</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Actividad Reciente - Ocupa toda la fila */}
                  <div className="lg:col-span-2 xl:col-span-1">
                    <Card className="bg-kioskit-bg-secondary/80 border-kioskit-border backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-kioskit-text-primary">Actividad Reciente</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {[
                            { action: "Venta realizada", item: "Coca Cola x2", time: "Hace 5 min", icon: ShoppingCart },
                            { action: "Producto agregado", item: "Galletas Oreo", time: "Hace 15 min", icon: Plus },
                            { action: "Stock actualizado", item: "Papas Lays", time: "Hace 1 hora", icon: Package },
                          ].map((activity, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-3 p-2 rounded-lg bg-kioskit-bg-primary/30"
                            >
                              <div className="w-8 h-8 bg-kioskit-accent/20 rounded-full flex items-center justify-center">
                                <activity.icon className="w-4 h-4 text-kioskit-accent" />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-kioskit-text-primary">{activity.action}</p>
                                <p className="text-xs text-kioskit-text-secondary">{activity.item}</p>
                              </div>
                              <div className="text-xs text-kioskit-text-secondary flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                {activity.time}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            {/* Nuevos widgets educativos y motivacionales */}
            <div className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                {/* Consejo del día */}
                <Card className="bg-gradient-to-br from-kioskit-accent/10 to-kioskit-accent/5 border-kioskit-accent/30 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-kioskit-accent/20 rounded-full flex items-center justify-center mt-1">
                        <span className="text-lg">💡</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-kioskit-text-primary text-sm mb-2">Consejo del día</h4>
                        <p className="text-xs text-kioskit-text-secondary leading-relaxed">
                          El 80% de tus ventas vienen del 20% de tus productos. ¿Ya identificaste cuáles son tus
                          productos estrella?
                        </p>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="mt-2 text-kioskit-accent hover:text-kioskit-accent hover:bg-kioskit-accent/10 p-0 h-auto text-xs"
                        >
                          Ver más consejos →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Salud Financiera */}
                <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/30 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                        <span className="text-lg">📊</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-kioskit-text-primary text-sm mb-2">Salud Financiera</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-kioskit-text-secondary">Punto de equilibrio</span>
                            <span className="text-xs font-medium text-blue-400">89%</span>
                          </div>
                          <div className="w-full bg-kioskit-border rounded-full h-1.5">
                            <div className="w-[89%] bg-blue-500 h-1.5 rounded-full transition-all duration-700"></div>
                          </div>
                          <p className="text-xs text-kioskit-text-secondary">
                            Necesitas ₲3.500.000 más para cubrir todos tus gastos este mes
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Motivación */}
                <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/30 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mt-1">
                        <span className="text-lg">💪</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-kioskit-text-primary text-sm mb-2">Motivación</h4>
                        <p className="text-xs text-kioskit-text-secondary leading-relaxed italic">
                          "El éxito es la suma de pequeños esfuerzos repetidos día tras día"
                        </p>
                        <p className="text-xs text-purple-400 mt-1">- Robert Collier</p>
                        <div className="flex items-center mt-2">
                          <span className="text-xs text-kioskit-text-secondary">¡Llevas</span>
                          <span className="text-xs font-semibold text-kioskit-accent mx-1">127 días</span>
                          <span className="text-xs text-kioskit-text-secondary">construyendo tu sueño!</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Educación Financiera */}
                <Card className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/30 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center mt-1">
                        <span className="text-lg">🎓</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-kioskit-text-primary text-sm mb-2">¿Sabías que...?</h4>
                        <p className="text-xs text-kioskit-text-secondary leading-relaxed">
                          <strong className="text-orange-400">Cash Flow positivo</strong> significa que entra más dinero
                          del que sale. El tuyo es de <strong className="text-kioskit-accent">+₲15.200.000</strong> este
                          mes.
                        </p>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="mt-2 text-orange-400 hover:text-orange-400 hover:bg-orange-500/10 p-0 h-auto text-xs"
                        >
                          Aprender más →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Widget de métricas financieras educativas */}
            <div className="mt-8">
              <Card className="bg-kioskit-bg-secondary/80 border-kioskit-border backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-kioskit-text-primary flex items-center">
                      <span className="text-lg mr-2">🧠</span>
                      Tu Mentor Financiero
                    </CardTitle>
                    <Badge className="bg-kioskit-accent/20 text-kioskit-accent border-kioskit-accent/30">
                      Nivel: Emprendedor
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Margen de Utilidad */}
                    <div className="text-center">
                      <div className="relative w-16 h-16 mx-auto mb-3">
                        <div className="absolute inset-0 bg-kioskit-accent/20 rounded-full"></div>
                        <div className="absolute inset-2 bg-kioskit-accent rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">34%</span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-kioskit-text-primary text-sm">Margen de Utilidad</h4>
                      <p className="text-xs text-kioskit-text-secondary mt-1">
                        De cada ₲100.000 que vendes, ₲34.000 son ganancia pura. ¡Excelente!
                      </p>
                      <div className="flex items-center justify-center mt-2">
                        <span className="text-xs text-kioskit-accent">●</span>
                        <span className="text-xs text-kioskit-text-secondary ml-1">Saludable</span>
                      </div>
                    </div>

                    {/* Rotación de Inventario */}
                    <div className="text-center">
                      <div className="relative w-16 h-16 mx-auto mb-3">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full"></div>
                        <div className="absolute inset-2 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">2.3x</span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-kioskit-text-primary text-sm">Rotación de Inventario</h4>
                      <p className="text-xs text-kioskit-text-secondary mt-1">
                        Vendes tu inventario 2.3 veces al mes. Ideal: 2-4 veces.
                      </p>
                      <div className="flex items-center justify-center mt-2">
                        <span className="text-xs text-blue-400">●</span>
                        <span className="text-xs text-kioskit-text-secondary ml-1">Óptimo</span>
                      </div>
                    </div>

                    {/* Días de Inventario */}
                    <div className="text-center">
                      <div className="relative w-16 h-16 mx-auto mb-3">
                        <div className="absolute inset-0 bg-purple-500/20 rounded-full"></div>
                        <div className="absolute inset-2 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">13</span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-kioskit-text-primary text-sm">Días de Inventario</h4>
                      <p className="text-xs text-kioskit-text-secondary mt-1">
                        Tu inventario actual te dura 13 días. Perfecto para no quedarte sin stock.
                      </p>
                      <div className="flex items-center justify-center mt-2">
                        <span className="text-xs text-purple-400">●</span>
                        <span className="text-xs text-kioskit-text-secondary ml-1">Perfecto</span>
                      </div>
                    </div>

                    {/* ROI */}
                    <div className="text-center">
                      <div className="relative w-16 h-16 mx-auto mb-3">
                        <div className="absolute inset-0 bg-orange-500/20 rounded-full"></div>
                        <div className="absolute inset-2 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">28%</span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-kioskit-text-primary text-sm">ROI Mensual</h4>
                      <p className="text-xs text-kioskit-text-secondary mt-1">
                        Por cada ₲100.000 invertidos, generas ₲28.000 de ganancia. ¡Increíble!
                      </p>
                      <div className="flex items-center justify-center mt-2">
                        <span className="text-xs text-orange-400">●</span>
                        <span className="text-xs text-kioskit-text-secondary ml-1">Excelente</span>
                      </div>
                    </div>
                  </div>

                  {/* Mensaje personalizado del mentor */}
                  <div className="mt-6 p-4 bg-kioskit-accent/10 rounded-lg border border-kioskit-accent/20">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-kioskit-accent to-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">K</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-kioskit-text-primary text-sm mb-1">
                          ¡Hola! Soy tu mentor financiero 👋
                        </h4>
                        <p className="text-sm text-kioskit-text-secondary leading-relaxed">
                          Tus números se ven fantásticos. Tu margen de utilidad del 34% está por encima del promedio de
                          tu sector (25%).
                          <strong className="text-kioskit-accent"> Mi recomendación:</strong> Considera aumentar tu
                          inventario de productos estrella para aprovechar esta excelente rentabilidad.
                        </p>
                        <div className="flex items-center mt-3 space-x-4">
                          <Button size="sm" className="bg-kioskit-accent hover:bg-green-600 text-white text-xs">
                            Ver recomendaciones
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-kioskit-accent hover:text-kioskit-accent hover:bg-kioskit-accent/10 text-xs"
                          >
                            Aprender más sobre ROI
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Todo lo que necesitas para crecer</h2>
              <p className="text-xl text-kioskit-text-secondary max-w-2xl mx-auto">
                Herramientas diseñadas especialmente para pequeños negocios que quieren profesionalizarse
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-kioskit-bg-secondary/80 border-kioskit-border hover:border-kioskit-accent/50 transition-all duration-500 backdrop-blur-sm group hover:shadow-xl hover:shadow-kioskit-accent/10 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-kioskit-accent/20 to-kioskit-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-6 h-6 text-kioskit-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Control de Inventario</h3>
                  <p className="text-kioskit-text-secondary">
                    Mantén el control total de tus productos. Alertas automáticas cuando el stock esté bajo.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-kioskit-bg-secondary/80 border-kioskit-border hover:border-kioskit-accent/50 transition-all duration-500 backdrop-blur-sm group hover:shadow-xl hover:shadow-kioskit-accent/10 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-kioskit-accent/20 to-kioskit-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-kioskit-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Gestión de Clientes</h3>
                  <p className="text-kioskit-text-secondary">
                    Conoce mejor a tus clientes. Historial de compras y preferencias en un solo lugar.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-kioskit-bg-secondary/80 border-kioskit-border hover:border-kioskit-accent/50 transition-all duration-500 backdrop-blur-sm group hover:shadow-xl hover:shadow-kioskit-accent/10 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-kioskit-accent/20 to-kioskit-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-kioskit-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Reportes Inteligentes</h3>
                  <p className="text-kioskit-text-secondary">
                    Datos claros sobre tus ventas. Toma decisiones informadas para hacer crecer tu negocio.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-kioskit-bg-secondary/10 to-transparent">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes que se adaptan a tu negocio</h2>
              <p className="text-xl text-kioskit-text-secondary max-w-2xl mx-auto">
                Desde emprendedores hasta cadenas de tiendas. Encuentra el plan perfecto para ti.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Plan Básico */}
              <Card className="bg-kioskit-bg-secondary/80 border-kioskit-border backdrop-blur-sm hover:border-kioskit-accent/30 transition-all duration-500">
                <CardHeader className="text-center">
                  <CardTitle className="text-kioskit-text-primary">Básico</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-kioskit-text-primary">₲9.000</span>
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
              <Card className="bg-kioskit-bg-secondary/80 border-kioskit-accent backdrop-blur-sm relative hover:shadow-xl hover:shadow-kioskit-accent/20 transition-all duration-500">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-kioskit-accent text-white px-4 py-1 rounded-full text-xs font-medium flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Más Popular
                  </div>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-kioskit-text-primary">Pro</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-kioskit-accent">₲19.000</span>
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
              <Card className="bg-kioskit-bg-secondary/80 border-kioskit-border backdrop-blur-sm hover:border-kioskit-accent/30 transition-all duration-500">
                <CardHeader className="text-center">
                  <CardTitle className="text-kioskit-text-primary">Enterprise</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-kioskit-text-primary">₲49.000</span>
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

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-l from-kioskit-bg-secondary/20 to-transparent">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Diseñado para emprendedores como tú</h2>
                <p className="text-xl text-kioskit-text-secondary mb-8">
                  Sabemos lo que es empezar desde cero. Por eso creamos Kioskit: una herramienta simple pero poderosa
                  para hacer crecer tu negocio.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-kioskit-accent mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Fácil de usar</h4>
                      <p className="text-kioskit-text-secondary">No necesitas ser experto en tecnología</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-kioskit-accent mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Precio accesible</h4>
                      <p className="text-kioskit-text-secondary">Planes que se adaptan a tu presupuesto</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-kioskit-accent mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Soporte en español</h4>
                      <p className="text-kioskit-text-secondary">Te ayudamos cuando lo necesites</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-kioskit-bg-secondary/80 to-kioskit-border/50 rounded-xl p-8 shadow-2xl backdrop-blur-sm border border-kioskit-border/50">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-kioskit-bg-primary/50 rounded-lg">
                      <span className="text-kioskit-text-primary">Configuración inicial</span>
                      <CheckCircle className="w-5 h-5 text-kioskit-accent" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-kioskit-bg-primary/50 rounded-lg">
                      <span className="text-kioskit-text-primary">Importar productos</span>
                      <CheckCircle className="w-5 h-5 text-kioskit-accent" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-kioskit-bg-primary/50 rounded-lg">
                      <span className="text-kioskit-text-primary">Primera venta</span>
                      <div className="w-5 h-5 border-2 border-kioskit-accent rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros usuarios</h2>
              <p className="text-xl text-kioskit-text-secondary">Miles de emprendedores ya confían en Kioskit</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-kioskit-bg-secondary/80 border-kioskit-border backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-kioskit-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-kioskit-text-secondary mb-4">
                    "Kioskit me ayudó a organizar mi tienda de ropa. Ahora sé exactamente qué productos se venden más y
                    cuándo reabastecer."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold">M</span>
                    </div>
                    <div>
                      <p className="font-semibold">María González</p>
                      <p className="text-sm text-kioskit-text-secondary">Boutique María</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-kioskit-bg-secondary/80 border-kioskit-border backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-kioskit-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-kioskit-text-secondary mb-4">
                    "Súper fácil de usar. En una semana ya tenía todo mi inventario cargado y funcionando
                    perfectamente."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold">C</span>
                    </div>
                    <div>
                      <p className="font-semibold">Carlos Ruiz</p>
                      <p className="text-sm text-kioskit-text-secondary">Ferretería El Martillo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-kioskit-bg-secondary/80 border-kioskit-border backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-kioskit-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-kioskit-text-secondary mb-4">
                    "Los reportes me ayudan a entender mejor mi negocio. Ahora sé cuáles son mis mejores días de venta."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold">A</span>
                    </div>
                    <div>
                      <p className="font-semibold">Ana Morales</p>
                      <p className="text-sm text-kioskit-text-secondary">Panadería Doña Ana</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-kioskit-bg-secondary/10 to-transparent">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
              <p className="text-xl text-kioskit-text-secondary">Resolvemos las dudas más comunes sobre Kioskit</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-kioskit-bg-secondary/80 border-kioskit-border backdrop-blur-sm">
                  <CardContent className="p-0">
                    <button
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-kioskit-bg-primary/20 transition-colors"
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <span className="font-semibold text-kioskit-text-primary">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-kioskit-text-secondary transition-transform ${
                          openFAQ === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-6">
                        <p className="text-kioskit-text-secondary leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-kioskit-text-secondary mb-4">¿No encuentras lo que buscas?</p>
              <Button className="bg-kioskit-accent hover:bg-green-600 text-white">Contactar Soporte</Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-gradient-to-br from-kioskit-bg-secondary/80 to-kioskit-border/50 rounded-2xl p-12 shadow-2xl max-w-4xl mx-auto backdrop-blur-sm border border-kioskit-border/50">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para hacer crecer tu negocio?</h2>
              <p className="text-xl text-kioskit-text-secondary mb-8 max-w-2xl mx-auto">
                Únete a miles de emprendedores que ya están usando Kioskit para gestionar sus negocios de manera
                profesional.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-kioskit-accent hover:bg-green-600 text-white px-8 py-3 text-lg">
                  Comenzar Gratis por 30 días
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-kioskit-border text-kioskit-text-primary hover:bg-kioskit-bg-primary px-8 py-3 text-lg bg-transparent"
                >
                  Hablar con Ventas
                </Button>
              </div>

              <p className="text-sm text-kioskit-text-secondary mt-4">
                Sin tarjeta de crédito • Cancela cuando quieras
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-gradient-to-br from-kioskit-bg-secondary/80 to-kioskit-border/50 rounded-2xl p-12 shadow-2xl max-w-4xl mx-auto backdrop-blur-sm border border-kioskit-border/50">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para hacer crecer tu negocio?</h2>
              <p className="text-xl text-kioskit-text-secondary mb-8 max-w-2xl mx-auto">
                Únete a miles de emprendedores que ya están usando Kioskit para gestionar sus negocios de manera
                profesional.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-kioskit-accent hover:bg-green-600 text-white px-8 py-3 text-lg">
                  Comenzar Gratis por 30 días
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-kioskit-border text-kioskit-text-primary hover:bg-kioskit-bg-primary px-8 py-3 text-lg bg-transparent"
                >
                  Hablar con Ventas
                </Button>
              </div>

              <p className="text-sm text-kioskit-text-secondary mt-4">
                Sin tarjeta de crédito • Cancela cuando quieras
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-kioskit-border bg-kioskit-bg-secondary/50 py-12 px-4 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">K</span>
                  </div>
                  <span className="text-xl font-bold">Kioskit</span>
                </div>
                <p className="text-kioskit-text-secondary">
                  La herramienta perfecta para gestionar tu pequeño negocio.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Producto</h4>
                <ul className="space-y-2 text-kioskit-text-secondary">
                  <li>
                    <Link href="#" className="hover:text-kioskit-accent transition-colors">
                      Características
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-kioskit-accent transition-colors">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-kioskit-accent transition-colors">
                      Demo
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Soporte</h4>
                <ul className="space-y-2 text-kioskit-text-secondary">
                  <li>
                    <Link href="#" className="hover:text-kioskit-accent transition-colors">
                      Centro de Ayuda
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-kioskit-accent transition-colors">
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-kioskit-accent transition-colors">
                      Tutoriales
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Empresa</h4>
                <ul className="space-y-2 text-kioskit-text-secondary">
                  <li>
                    <Link href="#" className="hover:text-kioskit-accent transition-colors">
                      Sobre Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-kioskit-accent transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-kioskit-accent transition-colors">
                      Privacidad
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-kioskit-border mt-8 pt-8 text-center text-kioskit-text-secondary">
              <p>&copy; 2024 Kioskit. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
