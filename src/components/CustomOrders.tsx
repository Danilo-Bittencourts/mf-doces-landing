import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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

const galleryImages = [
  {
    id: 1,
    title: "Bolo de Aniversário Personalizado",
    description: "Bolo temático para festa de 15 anos",
    image: "/src/assets/bolo-chocolate.jpg"
  },
  {
    id: 2,
    title: "Mesa de Doces para Casamento",
    description: "Seleção especial para cerimônia",
    image: "/src/assets/macarons.jpg"
  },
  {
    id: 3,
    title: "Cupcakes Corporativos",
    description: "Para evento de lançamento de produto",
    image: "/src/assets/cupcakes.jpg"
  },
  {
    id: 4,
    title: "Doces Finos para Festa",
    description: "Variedade especial para evento",
    image: "/src/assets/hero-doces.jpg"
  },
  {
    id: 5,
    title: "Bolo Temático Infantil",
    description: "Personagem favorito da criança",
    image: "/src/assets/bolo-chocolate.jpg"
  },
  {
    id: 6,
    title: "Macarons Coloridos",
    description: "Para evento especial",
    image: "/src/assets/macarons.jpg"
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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
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

        {/* Galeria de Trabalhos Anteriores */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Nossos <span className="text-gradient">Trabalhos</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja alguns dos trabalhos especiais que já realizamos para nossos clientes
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {galleryImages.map((item) => (
                  <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden card-float bg-card border-0">
                      <div className="aspect-square relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                            <p className="text-xs opacity-90">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
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