import React from "react";

const Videos = () => {
  return (
    <div className="box videos">
      <ul className="lessons-wrap">
        <li className="lesson-item">
          <label className="title label-title">1-Epyur</label>
          <video controls="controls">
            <source
              src="https://nurxona.uz/lessons/materials/12.%20Video/1-Epyur.mp4"
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
            Video sizning brauzeringizda qo'llab quvvatlanmaydi.
          </video>
        </li>
        <li className="lesson-item">
          <label className="title label-title">2-Epyur</label>
          <video controls="controls">
            <source
              src="https://nurxona.uz/lessons/materials/12.%20Video/2-Epyur.mp4"
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
            Video sizning brauzeringizda qo'llab quvvatlanmaydi.
          </video>
        </li>
        <li className="lesson-item">
          <label className="title label-title">3-Epyur</label>
          <video controls="controls">
            <source
              src="https://nurxona.uz/lessons/materials/12.%20Video/3-Epyur.mp4"
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
            Video sizning brauzeringizda qo'llab quvvatlanmaydi.
          </video>
        </li>
        <li className="lesson-item">
          <label className="title label-title">Murakkab detal</label>
          <video controls="controls">
            <source
              src="https://nurxona.uz/lessons/materials/12.%20Video/Murakkab%20detal.mp4"
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
            Video sizning brauzeringizda qo'llab quvvatlanmaydi.
          </video>
        </li>
        <li className="lesson-item">
          <label className="title label-title">Proyeksion chizma</label>
          <video controls="controls">
            <source
              src="https://nurxona.uz/lessons/materials/12.%20Video/Proyeksion%20chizma.mp4"
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
            Video sizning brauzeringizda qo'llab quvvatlanmaydi.
          </video>
        </li>
      </ul>
    </div>
  );
};

export default Videos;
