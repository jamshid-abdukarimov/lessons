import React from "react";
import MenuWrapTitle from "./menuWrapTitle";
import "./css/menuWrap.css";
import MenuWrapList from "./menuWrapList";

const MenuWrap = () => {
  return (
    <div className="menu-wrap">
      <MenuWrapTitle />
      <MenuWrapList />
    </div>
  );
};

export default MenuWrap;
