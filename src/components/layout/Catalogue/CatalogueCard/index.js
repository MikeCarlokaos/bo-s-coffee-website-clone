import React from "react";

const CatalogueCard = ({ coverImg, title, link }) => {
  return (
    <div className="catalogue-card">
      <div className="catalogue-img-wrapper">
        <a href={link}>
          <img src={coverImg} alt={title} className="catalogue-img" />
        </a>
      </div>
      <p>{title}</p>
    </div>
  );
};

export default CatalogueCard;
