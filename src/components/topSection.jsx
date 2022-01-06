import React from "react";
import { Row } from "react-bootstrap";
import Title from "./title";
import "./css/topSection.css";

const TopSection = () => {
  return (
    <Row className="top-section">
      <div className="top-section__title col-12 col-lg-9">
        <Title> Muhandislik va kompyuter grafikasi materiallari</Title>
      </div>
    </Row>
  );
};

export default TopSection;
