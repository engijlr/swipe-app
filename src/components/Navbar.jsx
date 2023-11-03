import logowhite from "../assets/logo-white.svg";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar section-container">
      <img src={logowhite} alt="swipe-logo" />
      <section className="links-section">
        <a href="#">Products</a>
        <a href="#">Solutions</a>
        <a href="#">Developers</a>
        <a href="#">Resources</a>
        <a href="#">Pricing</a>
      </section>
      <button className="primary-button navbar-btn">Sing In</button>
    </nav>
  );
}

export default Navbar;
