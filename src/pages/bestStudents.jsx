import React from "react";
import pdfImg from "../img/pdf.png";

const BestStudents = ({ setDispatch }) => {
  return (
    <div className="box best-students">
      <ul className="lessons-wrap">
        <li className="lesson-item">
          <img src={pdfImg} alt="icon"></img>
          <a
            onClick={(e) => {
              e.preventDefault();
              const index = e.target.href.indexOf("materials");
              setDispatch(e.target.href.slice(index));
            }}
            href="./materials/9. Iqtidorli talabalar uchun amaliy topshiriq/Aksonometrik proyeksiyadan foydalanib, detalning uch tekislikdagi proyeksiyasini qurish.pdf"
          >
            1. Aksonometrik proyeksiyadan foydalanib, detalning uch tekislikdagi
            proyeksiyasini qurish
          </a>
        </li>
        <li className="lesson-item">
          <img src={pdfImg} alt="icon"></img>
          <a
            onClick={(e) => {
              e.preventDefault();
              const index = e.target.href.indexOf("materials");
              setDispatch(e.target.href.slice(index));
            }}
            href="./materials/9. Iqtidorli talabalar uchun amaliy topshiriq/Murakkab detalning uch tekislikdagi proyeksiyasini qurish.pdf"
          >
            2. Murakkab detalning uch tekislikdagi proyeksiyasini qurish
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BestStudents;
