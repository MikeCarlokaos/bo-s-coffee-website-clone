import React from "react";
import "../../../style/home/locator.css";

const StoreLocator = () => {
  return (
    <section className="locator">
      <div className="locator-img-wrapper">
        <div className="locator-img"></div>
      </div>
      <div className="locator-text-wrapper">
        <div className="locator-text">
          <h2>Find a Bo's Coffee near you</h2>
          <a href="/store-locator"> Store Locator</a>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;
