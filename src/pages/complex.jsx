import React from "react";
import pdfImg from "../img/pdf.png";

const Complex = ({ setDispatch }) => {
  return (
    <div className="box complex">
      <ul className="lessons-wrap">
        <li className="lesson-item">
          <img src={pdfImg} alt="icon"></img>
          <a
            onClick={(e) => {
              e.preventDefault();
              const index = e.target.href.indexOf("materials");
              setDispatch(e.target.href.slice(index));
            }}
            href="/materials/3. Majmua 2021-2022/Majmua 2021-2022.pdf"
          >
            1. Majmua 2021-2022
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Complex;
