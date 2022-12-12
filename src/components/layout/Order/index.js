import React from "react";
import OnlineStore from "./OnlineStore";
import stores from "../../data/layout/stores";

const Order = () => {
  const SelectStore = stores.map((store) => {
    return <OnlineStore key={store.id} {...store} />;
  });
  return <section className="order">{SelectStore}</section>;
};

export default Order;
