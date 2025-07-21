import { Card } from "@/components/ui/card";
import { Star, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Conheça a <span className="text-gradient">Malu Fernandes</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Com mais de 10 anos de experiência na confeitaria, Malu transformou sua paixão por doces 
            em uma arte. Cada receita é cuidadosamente desenvolvida para criar momentos especiais 
            e despertar sorrisos em cada mordida.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="card-float p-8 text-center bg-card border-0">
            <div className="w-16 h-16 bg-primary-glow/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Receitas Exclusivas</h3>
            <p className="text-muted-foreground">
              Desenvolvidas com técnicas artesanais e ingredientes premium selecionados.
            </p>
          </Card>

          <Card className="card-float p-8 text-center bg-card border-0">
            <div className="w-16 h-16 bg-primary-glow/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Qualidade Garantida</h3>
            <p className="text-muted-foreground">
              Cada doce é preparado com o máximo cuidado e atenção aos detalhes.
            </p>
          </Card>

          <Card className="card-float p-8 text-center bg-card border-0">
            <div className="w-16 h-16 bg-primary-glow/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-primary fill-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Feito com Amor</h3>
            <p className="text-muted-foreground">
              Cada produto carrega o carinho e a dedicação que fazem a diferença.
            </p>
          </Card>
        </div>

        <div className="bg-primary-glow/10 rounded-3xl p-8 md:p-12 text-center">
          <blockquote className="text-xl md:text-2xl italic text-foreground mb-4">
            "Meu objetivo é criar doces que não apenas satisfaçam o paladar, 
            mas que também criem memórias afetivas especiais para cada cliente."
          </blockquote>
          <cite className="text-lg font-medium text-primary">— Malu Fernandes</cite>
        </div>
      </div>
    </section>
  );
};

export default About;