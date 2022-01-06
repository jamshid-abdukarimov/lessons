import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

const MenuWrapListItem = ({ item, index }) => {
  const dispatch = useDispatch();
  function removeClass() {
    document
      .querySelectorAll("a.menu-wrap__item")
      .forEach((items) => items.classList.remove("active"));
  }

  return (
    <li>
      <NavLink
        onClick={(e) => {
          removeClass();
          dispatch({ type: "SET_NAME", payload: item });
          dispatch({ type: "SET_URL", payload: null });
          e.target.parentElement.classList.add("active");
        }}
        className="menu-wrap__item"
        to={item}
      >
        <p>
          {index + 1}. {item}
        </p>
      </NavLink>
    </li>
  );
};

export default MenuWrapListItem;
