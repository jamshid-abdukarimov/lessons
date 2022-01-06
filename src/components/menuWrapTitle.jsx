import React from "react";
import Title from "./title";
import img from "../img/icon.png";

const MenuWrapTitle = () => {
  return (
    <div className="menu-wrap__title">
      <Title>
        Asosiy menu
        <img src={img} alt="icon"></img>
      </Title>
    </div>
  );
};

export default MenuWrapTitle;
