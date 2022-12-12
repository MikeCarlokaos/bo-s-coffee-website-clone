import React from "react";

const OnlineStore = (props) => {
  const handleCLick = () => {
    alert("This is only a sample");
  };

  return (
    <div className="store">
      <img src={props.img} alt={props.title} onClick={handleCLick} />
    </div>
  );
};

export default OnlineStore;
