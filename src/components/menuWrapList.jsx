import React from "react";
import { useSelector } from "react-redux";
import MenuWrapListItem from "./menuWrapListItem";

const MenuWrapList = () => {
  const listItem = useSelector((state) => state.namesList);

  return (
    <ul className="menu-wrap__list">
      {listItem.map((item, index) => {
        return <MenuWrapListItem key={item} item={item} index={index} />;
      })}
    </ul>
  );
};

export default MenuWrapList;
