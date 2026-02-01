import "@/App.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ProductsSection } from "./components/ProductsSection";
import { ConfiguratorSection } from "./components/ConfiguratorSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App bg-[#0F1115] min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <ConfiguratorSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
