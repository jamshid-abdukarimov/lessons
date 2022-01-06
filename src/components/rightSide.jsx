import React from "react";
import { Col } from "react-bootstrap";
import Author from "./author";
import Boxes from "./boxes";

const RightSide = () => {
  return (
    <Col
      xs="12"
      lg="6"
      className="position-relative right-side"
      style={{ paddingBottom: "55px" }}
    >
      <Boxes />
      <Author />
    </Col>
  );
};

export default RightSide;
