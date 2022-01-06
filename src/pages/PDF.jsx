import React from "react";
import { useDispatch, useSelector } from "react-redux";
const PDF = () => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.url);
  return (
    <div className="pdf-body" style={url ? { left: "0" } : { left: "100%" }}>
      <div
        className="close-btn"
        onClick={() => dispatch({ type: "SET_URL", payload: null })}
      >
        X
      </div>
      <iframe
        title={url}
        src={`https://nurxona.uz/lessons/${url}`}
        width="100%"
        height="100%"
        allowFullScreen=""
        webkitallowfullscreen=""
      ></iframe>
    </div>
  );
};

export default PDF;
