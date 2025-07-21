import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-doces.jpg";
import { ExternalLink, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary-glow/10 to-accent/20 py-20 lg:py-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                Feito com amor
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">MF</span>{" "}
              <span className="text-foreground">Confeitarias</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Os doces mais encantadores da cidade, feitos pela <strong>Malu Fernandes</strong> 
              com ingredientes selecionados e muito carinho.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => window.open('https://ifood.com.br', '_blank')}
              >
                <ExternalLink className="w-5 h-5" />
                Peça agora pelo iFood!
              </Button>
              
              <Button 
                variant="soft" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Encomendas especiais
              </Button>
            </div>
          </div>
          
          {/* Imagem */}
          <div className="relative">
            <div className="card-float rounded-3xl overflow-hidden bg-card">
              <img 
                src={heroImage} 
                alt="Doces deliciosos da MF Confeitarias" 
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-glow/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;