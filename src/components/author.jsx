import React from "react";
import { Link } from "react-router-dom";
import "./css/author.css";
import { useDispatch } from "react-redux";

const Author = () => {
  const dispatch = useDispatch();
  return (
    <Link
      to="/muallif"
      onClick={() => {
        dispatch({ type: "SET_NAME", payload: "muallif" });
        document
          .querySelectorAll("a.menu-wrap__item")
          .forEach((items) => items.classList.remove("active"));
      }}
    >
      <div className="author">
        <p className="menu-wrap__item">
          MUALLIF: MUXITDINOV ABDUVAXOB ABDUVALIYEVICH
        </p>
      </div>
    </Link>
  );
};

export default Author;
