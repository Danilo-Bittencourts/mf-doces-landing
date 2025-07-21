import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula Silva",
    rating: 5,
    comment: "Os doces da Malu são simplesmente perfeitos! Encomendei um bolo para o aniversário da minha filha e foi um sucesso total. Qualidade excepcional!",
    occasion: "Aniversário infantil"
  },
  {
    name: "Carlos Roberto",
    rating: 5,
    comment: "Melhor cupcake que já provei! A textura é incrível e o sabor é inesquecível. Virei cliente fiel da MF Confeitarias.",
    occasion: "Pedido pelo iFood"
  },
  {
    name: "Marina Santos",
    rating: 5,
    comment: "Fiz uma encomenda para o casamento e superou todas as expectativas. Os convidados não paravam de elogiar! Muito obrigada, Malu!",
    occasion: "Casamento"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary-glow/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa. 
            Veja alguns depoimentos de quem já experimentou nossos doces.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-float p-8 bg-card border-0">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 italic">
                "{testimonial.comment}"
              </blockquote>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.occasion}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Quer compartilhar sua experiência conosco?
          </p>
          <Button 
            variant="soft" 
            onClick={() => window.open('https://instagram.com/mfconfeitarias', '_blank')}
          >
            Nos marque no Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;