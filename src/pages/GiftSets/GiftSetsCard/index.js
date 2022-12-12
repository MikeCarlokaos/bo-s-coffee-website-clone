import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const GiftSetsCard = ({ coverImg, title, price }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-once={true}
      className="page-catalogue-card-tertiary"
    >
      <div className="page-catalouge-content">
        <div className="page-catalogue-img-wrapper">
          <img src={coverImg} alt={title} />
        </div>
        <div className="page-catalouge-card-detail">
          <p>Bo's Coffee</p>
          <h3>{title}</h3>
          <p>&#8369;{price}</p>
        </div>
      </div>
    </div>
  );
};

export default GiftSetsCard;
