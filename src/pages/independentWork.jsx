import React from "react";
import pdfImg from "../img/pdf.png";

const IndependentWork = ({ setDispatch }) => {
  return (
    <div className="box independent-work">
      <ul className="lessons-wrap">
        <li className="lesson-item">
          <img src={pdfImg} alt="icon"></img>
          <a
            onClick={(e) => {
              e.preventDefault();
              const index = e.target.href.indexOf("materials");
              setDispatch(e.target.href.slice(index));
            }}
            href="./materials/6. Mustaqil ish/1-Mavzu. Koordinata oʻqlarining fazoviy dekart tizimida va fazo choraklari, nim-choraklarida umumiy holatda joylashgan nuqtalar.pdf"
          >
            1. Koordinata oʻqlarining fazoviy dekart tizimida va fazo
            choraklari, nim-choraklarida umumiy holatda joylashgan nuqtalar
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
            href="./materials/6. Mustaqil ish/2-Mavzu. Proeksiya tekisliklariga nisbatan umumiy vaziyatda joylashgan toʻgʻri chiziq kesmalarining haqiqiy uzunliklari.pdf"
          >
            2. Proeksiya tekisliklariga nisbatan umumiy vaziyatda joylashgan
            toʻgʻri chiziq kesmalarining haqiqiy uzunliklari
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
            href="./materials/6. Mustaqil ish/3-Mavzu. Eskiz va ish chizma chizish.pdf"
          >
            3. Eskiz va ish chizma chizish
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
            href="./materials/6. Mustaqil ish/4-Mavzu. Yig‘ma birlikning tarkibiga kiruvchi nostandart detallarning eskizlarini chizish.pdf"
          >
            4. Yig‘ma birlikning tarkibiga kiruvchi nostandart detallarning
            eskizlarini chizish
          </a>
        </li>
      </ul>
    </div>
  );
};

export default IndependentWork;
