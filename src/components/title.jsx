import React from "react";
import "./css/title.css";

const Title = ({ children, ...props }) => {
  return (
    <h1 className="title" {...props}>
      {children}
    </h1>
  );
};

export default Title;
