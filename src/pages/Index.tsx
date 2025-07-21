import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import CustomOrders from "@/components/CustomOrders";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Products />
      <CustomOrders />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
