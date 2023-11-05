import "./App.css";
import Engineers from "./components/Engineers";
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
    </>
  );
}

export default App;
