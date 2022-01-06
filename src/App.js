import React from "react";
import MainWrap from "./components/mainWrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import TopSection from "./components/topSection";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Container className="position-relative">
        <TopSection />
        <MainWrap />
      </Container>
    </BrowserRouter>
  );
};

export default App;
