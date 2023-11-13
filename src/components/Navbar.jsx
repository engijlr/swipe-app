import { useState, useEffect } from "react";
import logowhite from "../assets/logo-white.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import "../styles/Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="navbar section-container">
      <img src={logowhite} alt="swipe-logo" />
      {!isMobile && (
        <section className="links-section">
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Developers</a>
          <a href="#">Resources</a>
          <a href="#">Pricing</a>
        </section>
      )}
      <button className="primary-button navbar-btn">
        {isMobile ? <RxHamburgerMenu size={16} /> : "Sign In"}
      </button>
    </nav>
  );
}

export default Navbar;
