import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-primary-glow">MF</span> Confeitarias
              <Heart className="w-6 h-6 text-primary-glow fill-primary-glow" />
            </h3>
            <p className="text-background/80 mb-6 max-w-md">
              Doces artesanais feitos com amor pela Malu Fernandes. 
              Transformando momentos especiais em memórias ainda mais doces.
            </p>
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-background hover:text-primary-glow hover:bg-background/10"
                onClick={() => window.open('https://instagram.com/mfconfeitarias', '_blank')}
              >
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="w-4 h-4" />
                <span>contato@mfconfeitarias.com.br</span>
              </div>
              <div className="flex items-start gap-3 text-background/80">
                <MapPin className="w-4 h-4 mt-1" />
                <span>São Paulo, SP<br />Atendemos toda a região</span>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Funcionamento</h4>
            <div className="space-y-2 text-background/80">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4" />
                <div>
                  <div>Segunda a Sexta</div>
                  <div className="text-sm">8h às 18h</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4" />
                <div>
                  <div>Sábados</div>
                  <div className="text-sm">8h às 16h</div>
                </div>
              </div>
              <div className="text-sm text-background/60 mt-4">
                * Encomendas especiais sob consulta
              </div>
            </div>
          </div>
        </div>

        {/* Links rápidos */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="flex flex-wrap gap-6 justify-center">
            <Button 
              variant="link" 
              className="text-background/80 hover:text-primary-glow p-0"
              onClick={() => window.open('https://ifood.com.br', '_blank')}
            >
              Pedir pelo iFood
            </Button>
            <Button 
              variant="link" 
              className="text-background/80 hover:text-primary-glow p-0"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Encomendas Especiais
            </Button>
            <Button 
              variant="link" 
              className="text-background/80 hover:text-primary-glow p-0"
              onClick={() => window.open('https://instagram.com/mfconfeitarias', '_blank')}
            >
              Instagram
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-background/60 border-t border-background/20 pt-8">
          <p>&copy; 2024 MF Confeitarias. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">Feito com ♥ para adoçar sua vida</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;