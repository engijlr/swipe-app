import map from "../assets/global-graphic.png";
import "../styles/Global.css";

function Global() {
  return (
    <section className="global">
      <section className="two-column section-container">
        <div className="col-left">
          <p className="subtitle2">Global scale</p>
          <h2>A structure for global businesses</h2>
          <p>
            Swipe makes moving money simple, borderless, and programmable - just
            like the rest of the internet. We have teams all over the world and
            we process billions and billions of dollars yearly for{" "}
            <a href="#">startups, Fortune 500s, and everything in between.</a>
          </p>
        </div>
        <div className="col-right global-map">
          <img src={map} />
        </div>
      </section>
      <section className="statistics section-container">
        <div className="card">
          <h3>250M+</h3>
          <p className="secondary-text">
            API requests each day, peaking at 15,000 requests a second.
          </p>
        </div>
        <div className="card">
          <h3>97%</h3>
          <p className="secondary-text">
            of US adults have bought from businesses that use Swipe
          </p>
        </div>
        <div className="card">
          <h3>135+</h3>
          <p className="secondary-text">
            currencies and payment methods supported
          </p>
        </div>
        <div className="card">
          <h3>35+</h3>
          <p className="secondary-text">
            countries with local, acquiring, optimizing acceptance rates
          </p>
        </div>
      </section>
    </section>
  );
}

export default Global;
