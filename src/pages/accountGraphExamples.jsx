import React from "react";
import pdfImg from "../img/pdf.png";

const AccountGraphExamples = ({ setDispatch }) => {
  return (
    <div className="box account-graph_examples">
      <ul className="lessons-wrap">
        <li className="lesson-item">
          <img src={pdfImg} alt="icon"></img>
          <a
            onClick={(e) => {
              e.preventDefault();
              const index = e.target.href.indexOf("materials");
              setDispatch(e.target.href.slice(index));
            }}
            href="./materials/11. Hisob grafik ishlarini bajarish bo'yicha namunalar/1-Epyur. Nuqta. To’g’ri chiziq.Tekislik.pdf"
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
            href="./materials/11. Hisob grafik ishlarini bajarish bo'yicha namunalar/2-Epyur. Proyeksiya tekisliklarini almashtirish usuli. Aylantirish usuli.pdf"
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
            href="./materials/11. Hisob grafik ishlarini bajarish bo'yicha namunalar/3-Epyur. Ko’pyoqliklar. Ko’pyoqliklarning tekislik bilan kesilishi.pdf"
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
            href="./materials/11. Hisob grafik ishlarini bajarish bo'yicha namunalar/Aksonometrik proyeksiyadan foydalanib, detalning uch.pdf"
          >
            4. Aksonometrik proyeksiyadan foydalanib, detalning uch tekislikdagi
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
            href="./materials/11. Hisob grafik ishlarini bajarish bo'yicha namunalar/Detalning ikki ko‘rinishi bo‘yicha uchinchi ko‘rinishini chizish.pdf"
          >
            5. Detalning ikki ko‘rinishi bo‘yicha uchinchi ko‘rinishini chizish
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AccountGraphExamples;
