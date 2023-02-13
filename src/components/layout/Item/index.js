import React from "react";
import "../../../style/home/item.css";
import ItemCard from "./ItemCard";
import items from "../../data/layout/items";

const Item = () => {
  const RecommendedItem = items.map((item) => {
    return <ItemCard key={item.id} options={item.options} {...item} />;
  });

  return (
    <section className="item">
      <div className="item-container">
        <div className="item-card-wrapper">{RecommendedItem}</div>
      </div>
    </section>
  );
};

export default Item;
