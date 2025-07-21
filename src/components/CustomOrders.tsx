import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Gift, MessageCircle } from "lucide-react";

const orderTypes = [
  {
    icon: Calendar,
    title: "Aniversários",
    description: "Bolos personalizados para tornar seu dia especial ainda mais doce.",
    features: ["Temas personalizados", "Todos os tamanhos", "Decoração exclusiva"]
  },
  {
    icon: Users,
    title: "Eventos Corporativos",
    description: "Doces finos para reuniões, lançamentos e confraternizações.",
    features: ["Embalagens elegantes", "Entrega pontual", "Variedade de sabores"]
  },
  {
    icon: Gift,
    title: "Datas Especiais",
    description: "Celebre momentos únicos com doces feitos especialmente para a ocasião.",
    features: ["Dia das mães", "Natal", "Páscoa", "Casamentos"]
  }
];

const CustomOrders = () => {
  const handleWhatsAppContact = () => {
    const message = "Olá! Gostaria de fazer uma encomenda especial pela MF Confeitarias.";
    const phone = "5511999999999"; // Substitua pelo número real
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Encomendas</span> Especiais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformamos suas ocasiões especiais em momentos ainda mais doces. 
            Entre em contato para criar algo único e personalizado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {orderTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <Card key={index} className="card-float p-8 bg-card border-0 text-center">
                <div className="w-16 h-16 bg-primary-glow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <div className="bg-primary-glow/10 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para adoçar seu evento?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco pelo WhatsApp para discutir sua encomenda especial. 
            Planejamos juntos cada detalhe para criar exatamente o que você sonhou.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleWhatsAppContact}
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </Button>
            
            <Button 
              variant="soft" 
              size="lg"
              onClick={() => window.open('mailto:contato@mfconfeitarias.com.br', '_blank')}
            >
              Enviar e-mail
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrders;