import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./App.css";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-raleway">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Testimonials />
      <Services />
      <FAQ/>
      <Pricing/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
