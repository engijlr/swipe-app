import "./App.css";
import Engineers from "./components/Engineers";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Global from "./components/Global";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Platform from "./components/Platform";
import WhySwipe from "./components/WhySwipe";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Platform />
      <Engineers />
      <WhySwipe />
      <Global />
      <Events />
      <Footer />
    </>
  );
}

export default App;
