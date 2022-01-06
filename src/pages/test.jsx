import React from "react";
import pdfImg from "../img/pdf.png";

const Tests = ({ setDispatch }) => {
  return (
    <div className="box tests">
      <ul className="lessons-wrap">
        <li className="lesson-item">
          <img src={pdfImg} alt="icon"></img>
          <a
            onClick={(e) => {
              e.preventDefault();
              const index = e.target.href.indexOf("materials");
              setDispatch(e.target.href.slice(index));
            }}
            href="./materials/7. Test topshiriqlari/Test topshiriqlari.pdf"
          >
            1. Test topshiriqlari
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Tests;
