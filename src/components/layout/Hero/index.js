import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-wrapper">
          <div className="hero-text">
            <h2>Your in-store homegrown favorites right at your doorstep</h2>
            <p>
              <em>
                <strong>For pick-up and delivery</strong>
              </em>
            </p>
          </div>
          <div className="hero-order">
            <a href="/order-ahead" className="hero-btn">
              order ahead
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
