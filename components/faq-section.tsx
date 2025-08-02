"use client"

import { Button } from "@/components/ui/button"

import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function FAQSection() {
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

  return (
    <section className="py-20 px-4">
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
  )
}
