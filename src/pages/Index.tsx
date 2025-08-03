import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CanvaHeroSection from "@/components/CanvaHeroSection";
import CanvaFeaturesSection from "@/components/CanvaFeaturesSection";
import CanvaToolsSection from "@/components/CanvaToolsSection";
import CanvaTestimonialsSection from "@/components/CanvaTestimonialsSection";
import CanvaCTASection from "@/components/CanvaCTASection";

const Index = () => {
  return (
    <Layout>
      <CanvaHeroSection />
      <CanvaFeaturesSection />
      <CanvaToolsSection />
      <CanvaTestimonialsSection />
      <CanvaCTASection />
    </Layout>
  );
};

export default Index;
