import React from "react";
import pdfImg from "../img/pdf.png";

const Assignments = ({ setDispatch }) => {
  return (
    <div className="box assignments">
      <ul className="lessons-wrap">
        <li className="lesson-item">
          <img src={pdfImg} alt="icon"></img>
          <a
            onClick={(e) => {
              e.preventDefault();
              const index = e.target.href.indexOf("materials");
              setDispatch(e.target.href.slice(index));
            }}
            href="./materials/8. Topshiriqlar/1-HGI topshirig'i.1-Epyur. Nuqta. To’g’ri chiziq.Tekislik.pdf"
          >
            1. Epyur. Nuqta. To’g’ri chiziq.Tekislik
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
            href="./materials/8. Topshiriqlar/2-HGI topshirig'i. 2-Epyur. Proyeksiya tekisliklarini almashtirish usuli. Aylantirish usuli.pdf"
          >
            2. Epyur. Proyeksiya tekisliklarini almashtirish usuli. Aylantirish
            usuli
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
            href="./materials/8. Topshiriqlar/3-HGI topshirig'i. 3-Epyur. Ko’pyoqliklar. Ko’pyoqliklarning tekislik bilan kesilishi.pdf"
          >
            3. Epyur. Ko’pyoqliklar. Ko’pyoqliklarning tekislik bilan kesilishi
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
            href="./materials/8. Topshiriqlar/4-HGI topshirig'i. Detalning ikki ko‘rinishi bo‘yicha uchinchi ko‘rinishini chizish. Aksonometrik proyeksiyalar chizish.pdf"
          >
            4. Detalning ikki ko‘rinishi bo‘yicha uchinchi ko‘rinishini chizish.
            Aksonometrik proyeksiyalar chizish
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Assignments;
