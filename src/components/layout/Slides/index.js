import "../../../style/home/slides.css";
import React, { useState } from "react";

const Slides = () => {
  const [change, setChange] = useState(false);

  const changeImage = (fileName) => {
    let img = document.querySelector("#bannerImg");
    img.setAttribute("src", fileName);
    setChange(!change);
  };

  const handleCLick = () => {
    alert("This is only a sample");
  };

  return (
    <section className="slide">
      <div className="slide-bg">
        <img
          height="100%"
          id="bannerImg"
          src="https://cdn.shopify.com/s/files/1/0405/8411/8424/files/BOxed_brew_copy_1944x.jpg?v=1664419016"
          alt="Phil Coffee Bo's Coffee"
          className="slide-img"
        />
      </div>
      <div className="shop-btn-container">
        <button className="shop-btn" onClick={handleCLick}>
          Shop Now
        </button>
      </div>
      <div className="select-container">
        <div className="option-container ">
          <button
            className="option"
            onClick={() =>
              changeImage(
                "https://cdn.shopify.com/s/files/1/0405/8411/8424/files/BOxed_brew_copy_1944x.jpg?v=1664419016"
              )
            }
          >
            <span> Boxed Brew</span>
          </button>
        </div>
        <div className="option-container ">
          <button
            className="option"
            onClick={() =>
              changeImage(
                "https://cdn.shopify.com/s/files/1/0405/8411/8424/files/MicrosoftTeams-image_3716f7bf-05a1-465a-80d0-daebd9897909_1944x.jpg?v=1664755355"
              )
            }
          >
            <span>Coffee Subscription</span>
          </button>
        </div>
        <div className="option-container ">
          <button
            className="option"
            onClick={() =>
              changeImage(
                "https://cdn.shopify.com/s/files/1/0405/8411/8424/files/MicrosoftTeams-image_1_1944x.jpg?v=1664755392"
              )
            }
          >
            <span>Iced Brew Subscription</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slides;
