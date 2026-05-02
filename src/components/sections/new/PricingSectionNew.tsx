import { useState } from "react";
import { Check, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AgendarSessaoDialog from "@/components/AgendarSessaoDialog";

const plans = [
  {
    name: "Basic",
    description: "Perfeito para começar",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "3 ebooks por dia",
      "Acesso à plataforma ScribIA",
      "Biblioteca ScribIA de eventos",
      "Ebooks compactos não personalizados",
    ],
    cta: "Começar Grátis",
    featured: false,
  },
  {
    name: "Plus",
    description: "Para quem quer ilimitado",
    monthlyPrice: 68,
    annualPrice: 48,
    features: [
      "Livebooks personalizados ilimitados",
      "Tutor IA completo",
      "Dashboard avançado",
      "Integrações com plataformas",
      "Suporte prioritário",
    ],
    cta: "Assinar Agora",
    featured: true,
  },
  {
    name: "Eventos, Patrocinadores e Influenciadores",
    description: "Soluções exclusivas",
    monthlyPrice: null,
    annualPrice: null,
    features: ["Ferramentas personalizadas para eventos", "Suporte dedicado", "Configuração conforme necessidade"],
    cta: "Agende sua Sessão",
    featured: false,
  },
];

const PricingSectionNew = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="precos" className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Tag className="h-4 w-4" /> Planos e Preços
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Escolha o Plano Ideal para Seu Evento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções flexíveis que crescem com suas necessidades
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="text-sm font-medium">Mensal</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-14 h-7 rounded-full transition-colors ${isAnnual ? "bg-primary" : "bg-muted"}`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-background shadow transition-transform ${
                isAnnual ? "translate-x-7" : ""
              }`}
            />
          </button>
          <span className="text-sm font-medium">
            Anual <span className="text-primary font-semibold">(-30%)</span>
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.featured ? "border-primary shadow-lg scale-[1.02]" : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Mais Popular
                </div>
              )}
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

                {plan.monthlyPrice !== null ? (
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold">
                      R$ {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                ) : (
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-primary">Sob Consulta</span>
                  </div>
                )}

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.featured ? "cta" : "outline"}
                  onClick={() => {
                    if (plan.monthlyPrice === null) {
                      setIsDialogOpen(true);
                    }
                  }}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <AgendarSessaoDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      </div>
    </section>
  );
};

export default PricingSectionNew;
