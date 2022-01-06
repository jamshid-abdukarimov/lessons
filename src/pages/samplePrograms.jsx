import React from "react";
import pdfImg from "../img/pdf.png";

const SamplePrograms = ({ setDispatch }) => {
  return (
    <div className="box sample-programs">
      <ul className="lessons-wrap">
        <li className="lesson-item">
          <img src={pdfImg} alt="icon"></img>
          <a
            onClick={(e) => {
              e.preventDefault();
              const index = e.target.href.indexOf("materials");
              setDispatch(e.target.href.slice(index));
            }}
            href="/materials/1. Namunaviy dastur/2. Namunaviy dastur.pdf"
          >
            1. Namunaviy dastur
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SamplePrograms;
