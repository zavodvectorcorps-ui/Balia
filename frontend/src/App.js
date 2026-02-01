import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ProductsSection } from "./components/ProductsSection";
import { ConfiguratorSection } from "./components/ConfiguratorSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ConfiguratorPage } from "./components/ConfiguratorPage";

const LandingPage = () => (
  <>
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
  </>
);

function App() {
  return (
    <div className="App bg-[#0F1115] min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/konfigurator" element={<ConfiguratorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
