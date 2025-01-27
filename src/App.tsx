import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import "./App.css";
import DaftarReseller from "./components/DaftarReseller";

function App() {
  return (
    <div className="font-raleway">
      <Header />

      {/* Hero Section */}

      <Hero />

      {/* About Section */}

      <About />

      {/* Stats Section */}

      <Stats />

      {/* Testimonials Section */}

      <Testimonials />

      {/* Services Section */}

      <Services />

      {/* FAQ Section */}

      <FAQ />

      {/* Pricing Section */}
      <DaftarReseller />
      <Pricing />

      {/* Contact Section */}

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
