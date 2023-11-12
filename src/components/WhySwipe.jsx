import "../styles/WhySwipe.css";
import cloud from "../assets/cloud-icon.png";
import cycle from "../assets/cycle-icon.png";
import shield from "../assets/shield-icon.png";
import bars from "../assets/bars-icon.png";

function WhySwipe() {
  return (
    <section className="why-swipe">
      <section className="section-container ">
        <p className="subtitle">Why Swipe</p>
        <h2>A tech-first approach to finance</h2>
        <section>
          <div className="card">
            <img src={cloud} alt="cloud icon" className="icon" />
            <h3>Efficient Always</h3>
            <p className="secondary-text">
              We've optimized every level of the finance stack, from
              integrations to prebuilt checkout flows - no detail has been
              spared.
            </p>
          </div>
          <div className="card">
            <img src={cycle} alt="cycle icon" className="icon" />
            <h3>Fast-Improving</h3>
            <p className="secondary-text">
              We make constant updates and improvements to help you stay on the
              cutting edge of your industry, deploying to production around 20X
              per day!
            </p>
          </div>
          <div className="card">
            <img src={shield} alt="shield icon" className="icon" />
            <h3>Tried and true</h3>
            <p className="secondary-text">
              Our systems operate with 100% uptime, with scalability and uptime
              as a guarantee. Swipe is super duper certified so don't worry
            </p>
          </div>
          <div className="card">
            <img src={bars} alt="bars icon" className="icon" />
            <h3>Crazy Optimized</h3>
            <p className="secondary-text">
              We use machine learning trained on billions of data points to help
              optimize all products, from fraud to revenue recovery and more.
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}

export default WhySwipe;
