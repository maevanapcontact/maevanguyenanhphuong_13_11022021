import React, { Component } from "react";
import { features } from "../../data";
import "./Homepage.scss";

import FeatureItem from "./FeatureItem";

class Homepage extends Component {
  render() {
    return (
      <main>
        <div
          className="hero"
          style={{ backgroundImage: "url(./images/bank-tree.jpeg)" }}
        >
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {features.map((elt) => (
            <FeatureItem
              key={elt.id}
              imgSrc={elt.imgSrc}
              imgAlt={elt.imgAlt}
              title={elt.title}
              description={elt.description}
            />
          ))}
        </section>
      </main>
    );
  }
}

export default Homepage;
