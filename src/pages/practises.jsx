import React from "react";
import pdfImg from "../img/pdf.png";

const Practises = ({ setDispatch }) => {
  return (
    <div className="box practises">
      <ul className="lessons-wrap">
        <li className="lesson-item">
          <img src={pdfImg} alt="icon"></img>
          <a
            onClick={(e) => {
              e.preventDefault();
              const index = e.target.href.indexOf("materials");
              setDispatch(e.target.href.slice(index));
            }}
            href="./materials/5. Amaliy mashg'ulot/1-mavzu. Davlat standartlari. O‘z.DS2.301-97 - 2.304-97. Formatlar. Masshtablar. Chiziqlar. Shriftlar.pdf"
          >
            1. Davlat standartlari. O‘z.DS2.301-97 - 2.304-97. Formatlar.
            Masshtablar. Chiziqlar. Shriftlar
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
            href="./materials/5. Amaliy mashg'ulot/2-mavzu. To‘g‘ri chiziq. To‘g‘ri chiziq kesmasining xaqiqiy uzunligi va proyeksiya tekisliklariga og‘ish burchaklarini aniqlash.pdf"
          >
            2. To‘g‘ri chiziq. To‘g‘ri chiziq kesmasining xaqiqiy uzunligi va
            proyeksiya tekisliklariga og‘ish burchaklarini aniqlash
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
            href="./materials/5. Amaliy mashg'ulot/3-mavzu. To‘g‘ri chiziqning izlari. To‘g‘ri chiziqdagi nuqta. To‘g‘ri burchakni proyeksiyalash haqida teorema.pdf"
          >
            3. To‘g‘ri chiziqning izlari. To‘g‘ri chiziqdagi nuqta. To‘g‘ri
            burchakni proyeksiyalash haqida teorema
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
            href="./materials/5. Amaliy mashg'ulot/4-mavzu. Tekislik. Tekislikda yotuvchi nuqta va to‘g‘ri chiziq. Tekislikning bosh chiziqlari. Xususiy vaziyatdagi tekisliklar.pdf"
          >
            4. Tekislik. Tekislikda yotuvchi nuqta va to‘g‘ri chiziq.
            Tekislikning bosh chiziqlari. Xususiy vaziyatdagi tekisliklar
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
            href="./materials/5. Amaliy mashg'ulot/5-mavzu. To‘g‘ri chiziqning tekislikka va tekisliklarning o‘zaro perpendikulyarligi.pdf"
          >
            5. To‘g‘ri chiziqning tekislikka va tekisliklarning o‘zaro
            perpendikulyarligi
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
            href="./materials/5. Amaliy mashg'ulot/6-mavzu. Proyeksiya tekisliklarini almashtirish usuli. Aylantirish usuli. Joylashtirish usuli.pdf"
          >
            6. Proyeksiya tekisliklarini almashtirish usuli. Aylantirish usuli.
            Joylashtirish usuli
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
            href="./materials/5. Amaliy mashg'ulot/7-mavzu. Oddiy geometrik sirtlar. Sirtlarda yotuvchi nuqta va to‘g‘ri chiziq. Aylanma sirtlar va ularda yotuvchi nuqta va to‘g‘ri chiziq.pdf"
          >
            7. Oddiy geometrik sirtlar. Sirtlarda yotuvchi nuqta va to‘g‘ri
            chiziq. Aylanma sirtlar va ularda yotuvchi nuqta va to‘g‘ri chiziq
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
            href="./materials/5. Amaliy mashg'ulot/8-mavzu. Umumlashgan pozision masalalar. Sirtlarning kesishish chizig‘i proyeksiyalarini chizish.pdf"
          >
            8. Umumlashgan pozision masalalar. Sirtlarning kesishish chizig‘i
            proyeksiyalarini chizish
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
            href="./materials/5. Amaliy mashg'ulot/9-mavzu. Muhandislik grafikasi o‘quv materiallarining mazmuni. Konstruktorlik xujjatlar. Standartlar.pdf"
          >
            9. Muhandislik grafikasi o‘quv materiallarining mazmuni.
            Konstruktorlik xujjatlar. Standartlar
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
            href="./materials/5. Amaliy mashg'ulot/10-mavzu. Ko‘rinishlar. Detalning yaqqol tasviriga qarabuning ko‘rinishlarini chizish. Detallarga o‘lcham qo‘yish usullari va belgilari.pdf"
          >
            10. Ko‘rinishlar. Detalning yaqqol tasviriga qarabuning
            ko‘rinishlarini chizish. Detallarga o‘lcham qo‘yish usullari va
            belgilari
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
            href="./materials/5. Amaliy mashg'ulot/11-mavzu. Detalning ikki ko‘rinishi bo‘yicha uning uchinchi ko‘rinishini chizish. Aksonometrik proyeksiyalar chizish usullari.pdf"
          >
            11. Detalning ikki ko‘rinishi bo‘yicha uning uchinchi ko‘rinishini
            chizish. Aksonometrik proyeksiyalar chizish usullari
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
            href="./materials/5. Amaliy mashg'ulot/12-mavzu. Murakkab qirqimlar va kesimlar. GOST 2.305-97. Murakkab qirqimli detalning ikki ko‘rinishiga qarab uchinchi ko‘rinishi.pdf"
          >
            12. Murakkab qirqimlar va kesimlar. GOST 2.305-97. Murakkab qirqimli
            detalning ikki ko‘rinishiga qarab uchinchi ko‘rinishi
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
            href="./materials/5. Amaliy mashg'ulot/13-mavzu. Birikmalar va ularning turlari. Boltli birikma. Shpilkali birikma.pdf"
          >
            13. Birikmalar va ularning turlari. Boltli birikma. Shpilkali
            birikma
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
            href="./materials/5. Amaliy mashg'ulot/14-mavzu. Mashinasozlik detallarining eskiz chizmasini chizish. Eskiz asosida detalning ish chizmasini bajarish.pdf"
          >
            14. Mashinasozlik detallarining eskiz chizmasini chizish. Eskiz
            asosida detalning ish chizmasini bajarish
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
            href="./materials/5. Amaliy mashg'ulot/15-mavzu. Umumiy ko‘rinish chizmalari. Chizmalarning asosiy yozuvlari va spesifikasiyalari.pdf"
          >
            15. Umumiy ko‘rinish chizmalari. Chizmalarning asosiy yozuvlari va
            spesifikasiyalari
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Practises;
