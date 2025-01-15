import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="font-raleway">
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
