import React from "react";

const ViewMenu = (props) => {
  return (
    <div className="view-menu">
      <div>
        <img src={props.coverImg} alt={props.title} />
      </div>
      <h3>{props.title}</h3>
      <button>
        <a href="/in-store-menu">View in-store menu</a>{" "}
      </button>
    </div>
  );
};

export default ViewMenu;
