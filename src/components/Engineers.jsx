import tool from "../assets/tools-icon.png";
import cubes from "../assets/cube-icon.png";
import terminalCode from "../assets/terminal-code.png";
import apiCode from "../assets/api-code.png";

import "../styles/Engineers.css";
import { BsArrowRight } from "react-icons/bs";

function Engineers() {
  return (
    <section className="engineers">
      <section className=" section-container two-column">
        <div className="col-left text-container">
          <p className="subtitle2">Designed for engineers</p>
          <h2>The world's best and most intuitive APIs</h2>
          <p>
            We abstract the hard stuff away so your teams don't can focus on
            building good technology, instead of spending time and money
            reinventing the wheel.
          </p>
          <button className="primary-button with-icon">
            Start now
            <BsArrowRight />
          </button>
          <section className="two-column products">
            <div className="col-left card">
              <img src={tool} alt="tool icon" className="icon" />
              <h3>Tools for all stacks</h3>
              <p className="secondary-text">
                We offer front end and back end libraries in some of the most
                widely used technologies, old and new.
              </p>
              <button className="secondary-button with-icon">
                See libraries
                <BsArrowRight />
              </button>
            </div>
            <div className="col-right card ">
              <img src={cubes} alt="cubes icon" className="icon" />
              <h3>Custom Integrations</h3>
              <p className="secondary-text">
                Use integrations for systems like Shopify, WooCommerce,
                NetSuite, and more.
              </p>
              <button className="secondary-button with-icon">
                Explore partners
                <BsArrowRight />
              </button>
            </div>
          </section>
        </div>
        <div className="col-right code-images-container">
          <img src={apiCode} alt="Api code integration" />
          <img src={terminalCode} alt="terminal code" />
        </div>
      </section>
    </section>
  );
}

export default Engineers;
