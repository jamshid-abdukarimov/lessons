import React from "react";
import pdfImg from "../img/pdf.png";

const SubjectSyllabus = ({ setDispatch }) => {
  return (
    <div className="box subject-syllabus">
      <ul className="lessons-wrap">
        <li className="lesson-item">
          <img src={pdfImg} alt="icon"></img>
          <a
            onClick={(e) => {
              e.preventDefault();
              const index = e.target.href.indexOf("materials");
              setDispatch(e.target.href.slice(index));
            }}
            href="/materials/2. Fan sillabusi/3. Fan sillabusi.pdf"
          >
            1. Fan sillabusi
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SubjectSyllabus;
