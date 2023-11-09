import { BsArrowRight } from "react-icons/bs";
import phone from "../assets/phone.png";
import invoice from "../assets/slack-invoice.png";
import card from "../assets/credit-card.png";
import dash from "../assets/dash.png";
import "../styles/Platform.css";

function Platform() {
  return (
    <section className="platform">
      <div className=" section-container">
        <p className="subtitle">Unified platform</p>
        <h2>All the payment products you'll ever need</h2>
        <section className="two-column">
          <div className="col-left">
            <p>
              We've got everything you'll need and more to build websites and
              apps that handle payments, payouts, and much more. Swipe's
              products power payments for <a href="#">all kinds of retailers</a>
              , <a href="#">all kinds of businesses</a>,{" "}
              <a href="#">software platforms & marketplaces</a>, and everything
              in between.
            </p>
          </div>
          <div className="col-right">
            <p>
              We also help companies <a href="#">tackle fraud</a>,{" "}
              <a href="#">issue invoices</a>,{" "}
              <a href="#">send virtual and physical cards</a>,{" "}
              <a href="#">manage financing</a>,{" "}
              <a href="#">wrangle business spend</a>, and much more
            </p>
          </div>
        </section>
        <button className="primary-button with-icon">
          Start now
          <BsArrowRight />
        </button>
      </div>
      <section className="platform-images section-container">
        <img src={card} alt="credit card" id="card" />
        <img src={invoice} alt="slack invoice" id="invoice" />
        <img src={phone} alt="phone" id="phone" />
        <img src={dash} alt="dashboard page" id="dash" />
      </section>
    </section>
  );
}

export default Platform;
