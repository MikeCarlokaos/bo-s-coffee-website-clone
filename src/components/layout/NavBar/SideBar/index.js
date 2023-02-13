import React from "react";
import "../../../../style/nav/offCanvas.css";

const SideBar = ({ toggleCart }) => {
  return (
    <section className="off-canvas">
      <div className="off-canvas-wrapper">
        <div className="off-canvas-content">
          <h2>Shopping Cart</h2>
          <button onClick={toggleCart}>
            <span className="x-line x-line1"></span>
            <span className="x-line x-line2"></span>
            <span className="x-line x-line3"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
