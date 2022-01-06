import React from "react";
import { Col } from "react-bootstrap";
import MenuWrap from "./menuWrap";

const LeftSide = () => {
  return (
    <Col xs="12" lg="6" className="position-relative left-side">
      <MenuWrap />
    </Col>
  );
};

export default LeftSide;
