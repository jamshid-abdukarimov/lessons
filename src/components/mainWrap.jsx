import React from "react";
import { Row } from "react-bootstrap";
import LeftSide from "./leftSide";
import RightSide from "./rightSide";

const MainWrap = () => {
  return (
    <Row style={{ margin: "70px 0 30px" }} className="main-wrap">
      <LeftSide />
      <RightSide />
    </Row>
  );
};

export default MainWrap;
