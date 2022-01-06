import React from "react";
import pdfImg from "../img/pdf.png";

const AccountGraph = ({ setDispatch }) => {
  return (
    <div className="box account-graph">
      <ul className="lessons-wrap">
        <li className="lesson-item">
          <img src={pdfImg} alt="icon"></img>
          <a
            onClick={(e) => {
              e.preventDefault();
              const index = e.target.href.indexOf("materials");
              setDispatch(e.target.href.slice(index));
            }}
            href="./materials/10. Hisob grafik ishlarini bajarish bo'yicha uslubiy ko'rsatmalar/1-Hisob grafik ishi.pdf"
          >
            1-Hisob grafik ishi
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
            href="./materials/10. Hisob grafik ishlarini bajarish bo'yicha uslubiy ko'rsatmalar/2-Hisob grafik ishi.pdf"
          >
            2-Hisob grafik ishi
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
            href="./materials/10. Hisob grafik ishlarini bajarish bo'yicha uslubiy ko'rsatmalar/3-Hisob grafik ishi.pdf"
          >
            3-Hisob grafik ishi
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
            href="./materials/10. Hisob grafik ishlarini bajarish bo'yicha uslubiy ko'rsatmalar/4-Hisob grafik ishi.pdf"
          >
            4-Hisob grafik ishi
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AccountGraph;
