import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  namesList: [
    "namunaviy dastur",
    "fan sillabusi",
    "majmua 2021-2022",
    "ma'ruza matnlari",
    "amaliy mashg'ulot",
    "mustaqil ish",
    "test topshiriqlari",
    "topshiriqlar",
    "iqtidorli talabalar uchun amaliy topshiriq",
    "hisob grafik ishlarini bajarish bo'yicha uslubiy ko'rsatmalar",
    "hisob grafik ishlarini bajarish bo'yicha namunalar",
    "video dars",
    "adabiyotlar",
  ],
  name: "",
  url: "",
};
const SET_NAME = "SET_NAME";
const SET_URL = "SET_URL";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    case SET_URL:
      return { ...state, url: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
