import React, { Component } from "react";

import "./FeatureItem.scss";

class FeatureItem extends Component {
  render() {
    const { imgSrc, imgAlt, title, description } = this.props;
    return (
      <div className="feature-item">
        <img src={`./images/${imgSrc}`} alt={imgAlt} className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
}

export default FeatureItem;
