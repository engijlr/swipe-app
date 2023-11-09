import "../styles/Footer.css";

import logo from "../assets/logo-dark.svg";
import { TbSend } from "react-icons/tb";
import { RiChat3Line } from "react-icons/ri";

function Footer() {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="col">
          <img src={logo} alt="swipe logo dark" />
          <a href="#">
            <TbSend /> United states
          </a>
          <a href="#">
            <RiChat3Line /> English (United States)
          </a>
        </div>
        <div className="col">
          <h6>Products</h6>
          <a href="#">Atlas</a>
          <a href="#">Billing</a>
          <a href="#">Invoicing</a>
          <a href="#">Payments</a>
          <a href="#">Checkout</a>
          <a href="#">Identity</a>
        </div>
        <div className="col">
          <h6>Use Cases</h6>
          <a href="#">eCommerce</a>
          <a href="#">Saas</a>
          <a href="#">Marketplaces</a>
          <a href="#">Embedded Finance</a>
          <a href="#">Crypto</a>
          <a href="#">Creator Economy</a>
        </div>
        <div className="col">
          <h6>Resources</h6>
          <a href="#">Support Center</a>
          <a href="#">Guides</a>
          <a href="#">Blog</a>
          <a href="#">Licenses</a>
          <a href="#">Privacy & Terms</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
