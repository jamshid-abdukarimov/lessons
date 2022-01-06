import React from "react";
import pdfImg from "../img/pdf.png";

const Lectures = ({ setDispatch }) => {
  return (
    <div className="box lectures">
      <ul className="lessons-wrap">
        <li className="lesson-item">
          <img src={pdfImg} alt="icon"></img>
          <a
            onClick={(e) => {
              e.preventDefault();
              const index = e.target.href.indexOf("materials");
              setDispatch(e.target.href.slice(index));
            }}
            href="./materials/4. Ma'ruza matnlari/1-mavzu. Kirish. Muxandislik va kompyuter grafikasi fani, uning vazifalari va bakalavrlar tayyorlashdagi o’rni.pdf"
          >
            1. Kirish. Muxandislik va kompyuter grafikasi fani, uning vazifalari
            va bakalavrlar tayyorlashdagi o’rni
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
            href="./materials/4. Ma'ruza matnlari/2-mavzu. To‘g‘ri chiziqning ortogonal proyeksiyalashdagi invariant xossalari.pdf"
          >
            2. To‘g‘ri chiziqning ortogonal proyeksiyalashdagi invariant
            xossalari
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
            href="./materials/4. Ma'ruza matnlari/3-mavzu. To‘g‘ri burchak proyeksiyasi xaqida teorema. Teorema algoritmi. Tekislik. Tekislikning epyurda berilishi.pdf"
          >
            3. To‘g‘ri burchak proyeksiyasi xaqida teorema. Teorema algoritmi.
            Tekislik. Tekislikning epyurda berilishi
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
            href="./materials/4. Ma'ruza matnlari/4-mavzu. Tekislikda yotuvchi to‘g‘ri chiziq va nuqta. Ularning alomatlari. Tekislikning bosh chiziqlari.pdf"
          >
            4. Tekislikda yotuvchi to‘g‘ri chiziq va nuqta. Ularning alomatlari.
            Tekislikning bosh chiziqlari
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
            href="./materials/4. Ma'ruza matnlari/5-mavzu. To‘g‘ri chiziqning xususiy vaziyatdagi tekislik bilan kesishishi. Umumiy va xususiy vaziyada bo‘lgan tekisliklar.pdf"
          >
            5. To‘g‘ri chiziqning xususiy vaziyatdagi tekislik bilan kesishishi.
            Umumiy va xususiy vaziyada bo‘lgan tekisliklar
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
            href="./materials/4. Ma'ruza matnlari/6-mavzu. Umumiy vaziyatdagi tekisliklarning o‘zaro kesishishi. Umumiy vaziyatdagi to‘g‘ri chiziqning umumiy vaziyatdagi tekislik.pdf"
          >
            6. Umumiy vaziyatdagi tekisliklarning o‘zaro kesishishi. Umumiy
            vaziyatdagi to‘g‘ri chiziqning umumiy vaziyatdagi tekislik
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
            href="./materials/4. Ma'ruza matnlari/7-mavzu. To‘g‘ri chiziqning tekislikka perpendikulyarligi sharti. Ularning algoritmi. Masalalarni yechish algoritmi.pdf"
          >
            7. To‘g‘ri chiziqning tekislikka perpendikulyarligi sharti. Ularning
            algoritmi. Masalalarni yechish algoritmi
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
            href="./materials/4. Ma'ruza matnlari/8-mavzu. To‘g‘ri chiziqning tekislikka parallelligi Ta’rifi va uning algoritmi.  Ikki tekislikning o‘zaro parallelligi.pdf"
          >
            8. To‘g‘ri chiziqning tekislikka parallelligi Ta’rifi va uning
            algoritmi. Ikki tekislikning o‘zaro parallelligi
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
            href="./materials/4. Ma'ruza matnlari/9-mavzu. Epyurani qayta tuzish usullari. Almashtirish usuli. Masalalarni yechish algoritmi.pdf"
          >
            9. Epyurani qayta tuzish usullari. Almashtirish usuli. Masalalarni
            yechish algoritmi
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
            href="./materials/4. Ma'ruza matnlari/10-mavzu. Aylantirish usuli. Masalalarni yechish algoritmi.pdf"
          >
            10. Aylantirish usuli. Masalalarni yechish algoritmi
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
            href="./materials/4. Ma'ruza matnlari/11-mavzu. Joylashtirish usuli. Xususiy vaziyatdagi tekisliklarni joylashtirish.pdf"
          >
            11. Joylashtirish usuli. Xususiy vaziyatdagi tekisliklarni
            joylashtirish
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
            href="./materials/4. Ma'ruza matnlari/12-mavzu. Sirtlar. Sirtlarning tasnifi. Konus sirti. Silindr sirti. Piramida sirti. Prizma sirti.pdf"
          >
            12. Sirtlar. Sirtlarning tasnifi. Konus sirti. Silindr sirti.
            Piramida sirti. Prizma sirti
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
            href="./materials/4. Ma'ruza matnlari/13-mavzu. Sirtlarni xususiy vaziyatdagi tekisliklar bilan kesishishi. Prizmani xususiy vaziyatdagi tekislik bilan kesishishi.pdf"
          >
            13. Sirtlarni xususiy vaziyatdagi tekisliklar bilan kesishishi.
            Prizmani xususiy vaziyatdagi tekislik bilan kesishishi
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
            href="./materials/4. Ma'ruza matnlari/14-mavzu. Sirtlarning o‘zaro kesishishi. Yordamchi kesuvchi tekislik usuli.pdf"
          >
            14. Sirtlarning o‘zaro kesishishi. Yordamchi kesuvchi tekislik usuli
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
            href="./materials/4. Ma'ruza matnlari/15-mavzu. Yordamchi sferalar usuli. Usulning mohiyati.pdf"
          >
            15. Yordamchi sferalar usuli. Usulning mohiyati
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Lectures;
