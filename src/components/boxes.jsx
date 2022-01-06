import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import AccountGraph from "../pages/accountGraph";
import AccountGraphExamples from "../pages/accountGraphExamples";
import Assignments from "../pages/assignments";
import Author from "../pages/author";
import BestStudents from "../pages/bestStudents";
import Books from "../pages/books";
import Complex from "../pages/complex";
import IndependentWork from "../pages/independentWork";
import Lectures from "../pages/lectures";
import PDF from "../pages/PDF";
import Practises from "../pages/practises";
import SamplePrograms from "../pages/samplePrograms";
import SubjectSyllabus from "../pages/subjectSyllabus";
import Tests from "../pages/test";
import Videos from "../pages/videos";
import "./css/boxes.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Boxes = () => {
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();
  const routes = [
    { path: "/namunaviy dastur", Component: SamplePrograms },
    { path: "/fan sillabusi", Component: SubjectSyllabus },
    { path: `/majmua 2021-2022`, Component: Complex },
    { path: "/ma'ruza matnlari", Component: Lectures },
    { path: "/amaliy mashg'ulot", Component: Practises },
    { path: "/mustaqil ish", Component: IndependentWork },
    { path: "/test topshiriqlari", Component: Tests },
    { path: "/topshiriqlar", Component: Assignments },
    {
      path: "/iqtidorli talabalar uchun amaliy topshiriq",
      Component: BestStudents,
    },
    {
      path: "/hisob grafik ishlarini bajarish bo'yicha uslubiy ko'rsatmalar",
      Component: AccountGraph,
    },
    {
      path: "/hisob grafik ishlarini bajarish bo'yicha namunalar",
      Component: AccountGraphExamples,
    },
    { path: "/video dars", Component: Videos },
    { path: "/adabiyotlar", Component: Books },
    { path: "/muallif", Component: Author },
  ];

  function setDispatch(arg) {
    dispatch({ type: "SET_URL", payload: arg });
  }

  return (
    <div className="boxes">
      {name && <h3 className="boxes-title title">{name}</h3>}
      <PDF />
      {name &&
        routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                timeout={1000}
                classNames="box"
                unmountOnExit
                in={match != null}
              >
                <Component setDispatch={setDispatch} />
              </CSSTransition>
            )}
          </Route>
        ))}
    </div>
  );
};

export default Boxes;
