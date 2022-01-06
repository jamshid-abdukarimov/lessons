import React from "react";
import pdfImg from "../img/pdf.png";

const Books = ({ setDispatch }) => {
  return (
    <div className="box books">
      <ul className="lessons-wrap">
        <li className="lesson-item">
          <img src={pdfImg} alt="icon"></img>
          <a
            onClick={(e) => {
              e.preventDefault();
              const index = e.target.href.indexOf("materials");
              setDispatch(e.target.href.slice(index));
            }}
            href="./materials/13. Adabiyotlar/D.K.Alimova, V.N.Karimova, A.T. Azimov Chizma geometriya. Texnika oliy o‘quv yurtlari uchun darslik. Toshkent, 2018.pdf"
          >
            1. D.K.Alimova, V.N.Karimova, A.T. Azimov Chizma geometriya. Texnika
            oliy o‘quv yurtlari uchun darslik. Toshkent, 2018
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
            href="./materials/13. Adabiyotlar/D.U.Sobirova, A.T.Azimov, V.T.Mirzaraimova, V.N.Karimova. Chizma geometriya va muhandislik grafikasi. O‘quv qo‘llanma. 2019.pdf"
          >
            2. D.U.Sobirova, A.T.Azimov, V.T.Mirzaraimova, V.N.Karimova. Chizma
            geometriya va muhandislik grafikasi. O‘quv qo‘llanma. 2019
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
            href="./materials/13. Adabiyotlar/Sh.Мurodov va boshqalar. Chizma geometriya. Оliy o‘quv yurtlari uchun darslik. -Т. O‘qituvchi, 2008.pdf"
          >
            3. Sh.Мurodov va boshqalar. Chizma geometriya. Оliy o‘quv yurtlari
            uchun darslik. -Т. O‘qituvchi, 2008
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
            href="./materials/13. Adabiyotlar/T.D. Azimov Chizma geometriya. О’quv qo‘llanma. Т.TDTU, 2005.pdf"
          >
            4. T.D. Azimov Chizma geometriya. О’quv qo‘llanma. Т.TDTU, 2005
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Books;
