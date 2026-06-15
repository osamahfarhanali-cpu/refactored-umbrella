import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './sections/hero/HeroSection';
import AboutSection from './sections/about/AboutSection';
import GallerySection from './sections/gallery/GallerySection';
import ServicesSection from './sections/services/ServicesSection';
import TestimonialsSection from './sections/testimonials/TestimonialsSection';
import ContactSection from './sections/contact/ContactSection';
import FooterSection from './sections/footer/FooterSection';

function App() {
  return (
    <div className="app">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
