import phone from "../assets/hero-phone.png";
import instacart from "../assets/instacart.png";
import salesforce from "../assets/salesforce.png";
import amazon from "../assets/amazon.png";
import slack from "../assets/slack.png";
import shopify from "../assets/shopify.png";
import google from "../assets/google.png";
import lyft from "../assets/lyft.png";
import zoom from "../assets/zoom.png";

import { BsArrowRight } from "react-icons/bs";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="section-container two-column">
        <div className="col-left">
          <h1>Payments infrastructure for the world</h1>
          <p>
            Tons of companies all over the world use Swipe's seamless platform
            to manage their businesses's entire financial transaction
            infrastructure online.
          </p>
          <div className="hero-btns">
            <button className="primary-button with-icon">
              Start now
              <BsArrowRight />
            </button>
            <button className="secondary-button with-icon">
              Contact sales
              <BsArrowRight />
            </button>
          </div>
        </div>
        <div className="col-right hero-phone">
          <img src={phone} alt="hero phone image" />
        </div>
      </div>
      <section className="partners section-container">
        <img src={instacart} alt="instacart logo" />
        <img src={salesforce} alt="salesforce logo" />
        <img src={amazon} alt="amazon logo" />
        <img src={slack} alt="slack logo" />
        <img src={shopify} alt="shopify logo" />
        <img src={google} alt="google logo" />
        <img src={lyft} alt="lyft logo" />
        <img src={zoom} alt="zoom logo" />
      </section>
    </section>
  );
}

export default Hero;
