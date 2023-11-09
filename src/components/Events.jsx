import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import swipeSessions from "../assets/swipe-sessions.png";
import shield from "../assets/shield-icon.png";
import bar from "../assets/bars-icon.png";

import { BsArrowRight } from "react-icons/bs";
import "../styles/Events.css";

function Events() {
  return (
    <section className="virtual-events section-container">
      <div className="two-column">
        <div className="col-left">
          <p className="subtitle">Virtual events</p>
          <h2>Check out Sessions now!</h2>
          <p>
            Swipe Sessions is our annual conference - it's now available to
            watch on demand! Check it out and become an "internet economy"
            genius, and see how Swipe can transform the way you do business
            online.
          </p>
          <button className="primary-button with-icon">
            Start now
            <BsArrowRight />
          </button>
        </div>
        <div className="col-right">
          <div className="session-card">
            <div className="swipe-session">
              <img src={swipeSessions} alt="swipe sessions logo" />
            </div>
            <div className="session-text">
              <img id="girl-icon" src={avatar1} alt="Girl's avatar" />
              <img id="boy-icon" src={avatar2} alt="Boy's avatar" />
              <p className="subtitle">Keynote</p>
              <p className="secondary-text">
                Everything you need to know about the internet economy
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="two-column">
        <div className="col-left">
          <h2>What are you waiting for?</h2>
          <p>
            Explore <a href="#">Swipe</a> now, or create an account and start
            accepting payments today! If you need a custom package for your
            business, let's chat today.
          </p>
          <button className="primary-button with-icon">
            Start now
            <BsArrowRight />
          </button>
        </div>
        <div className="col-right ">
          <div className="two-column">
            <div className="card col-left">
              <img className="icon" src={shield} alt="shield icon" />
              <h3>Always know what you pay</h3>
              <p className="secondary-text">
                Integrated per-transaction pricing with no hidden fees.
              </p>
              <button className="secondary-button with-icon">
                Pricing details
                <BsArrowRight />
              </button>
            </div>
            <div className="card col-right">
              <img className="icon" src={bar} alt="bars icon" />
              <h3>Start your integration</h3>
              <p className="secondary-text">
                Get up and running with Stripe in as little as 10 minutes.
              </p>
              <button className="secondary-button with-icon">
                API reference
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
