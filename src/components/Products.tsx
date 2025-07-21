import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import boloChocolate from "@/assets/bolo-chocolate.jpg";
import macarons from "@/assets/macarons.jpg";
import cupcakes from "@/assets/cupcakes.jpg";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Bolo de Chocolate Especial",
    description: "Massa de chocolate com recheio de brigadeiro gourmet e cobertura de ganache.",
    image: boloChocolate,
    price: "A partir de R$ 45",
    category: "Bolos"
  },
  {
    id: 2,
    name: "Macarons Franceses",
    description: "Delicados macarons em sabores únicos: lavanda, rosa, pistache e chocolate.",
    image: macarons,
    price: "R$ 8 cada",
    category: "Macarons"
  },
  {
    id: 3,
    name: "Cupcakes Artesanais",
    description: "Cupcakes fofos com coberturas criativas e decorações encantadoras.",
    image: cupcakes,
    price: "R$ 12 cada",
    category: "Cupcakes"
  }
];

const Products = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-gradient">Produtos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada doce é uma obra de arte comestível, preparada com ingredientes selecionados 
            e técnicas refinadas para proporcionar uma experiência única.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="card-float overflow-hidden bg-card border-0">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-glow/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <Button 
                    variant="soft" 
                    size="sm"
                    onClick={() => window.open('https://ifood.com.br', '_blank')}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Pedir
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://ifood.com.br', '_blank')}
          >
            Ver cardápio completo no iFood
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;