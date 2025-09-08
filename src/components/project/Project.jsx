import React, { useState } from "react";
import "./project.css";

const Project = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="project section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Some basic projects</span>

      <div className="project__container container grid">
        {/* ---------- CARD 1 ---------- */}
        <div className="project__content">
          <i className="uil uil-web-grid project__icon"></i>
          <h3 className="project__title">
            Product <br /> Designer
          </h3>
          <span className="project__button" onClick={() => toggleTab(1)}>
            View More <i className="uil uil-arrow-right project__button-icon"></i>
          </span>

          {/* Modal */}
          <div className={toggleState === 1 ? "project__modal active-modal" : "project__modal"}>
            <div className="project__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close"></i>

              <h3 className="project__modal-title">Product Designer</h3>
              <p className="project__modal-description">
                With 2 years of experience, I have made these projects
              </p>

              <ul className="project__modal-project grid">
                <li className="project__modal-project">
                  <i className="uil uil-check-circle project__modal-icon"></i>
                  <p className="project__modal-info">I develop the user interface</p>
                </li>
                <li className="project__modal-project">
                  <i className="uil uil-check-circle project__modal-icon"></i>
                  <p className="project__modal-info">Todo App</p>
                </li>
                <li className="project__modal-project">
                  <i className="uil uil-check-circle project__modal-icon"></i>
                  <p className="project__modal-info">Web Page</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ---------- CARD 2 ---------- */}
        <div className="project__content">
          <i className="uil uil-brush-alt project__icon"></i>
          <h3 className="project__title">
            UI/UX <br /> Designer
          </h3>
          <span className="project__button" onClick={() => toggleTab(2)}>
            View More <i className="uil uil-arrow-right project__button-icon"></i>
          </span>

          {/* Modal */}
          <div className={toggleState === 2 ? "project__modal active-modal" : "project__modal"}>
            <div className="project__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close"></i>

              <h3 className="project__modal-title">UI/UX Designer</h3>
              <p className="project__modal-description">
                With 2 years of experience, I have made these projects
              </p>

              <ul className="project__modal-project grid">
                <li className="project__modal-project">
                  <i className="uil uil-check-circle project__modal-icon"></i>
                  <p className="project__modal-info">I create UX element interactions</p>
                </li>
                <li className="project__modal-project">
                  <i className="uil uil-check-circle project__modal-icon"></i>
                  <p className="project__modal-info">I position your company brand</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ---------- CARD 3 ---------- */}
        <div className="project__content">
          <i className="uil uil-game-structure project__icon"></i>
          <h3 className="project__title">
            Web <br /> Developer
          </h3>
          <span className="project__button" onClick={() => toggleTab(3)}>
            View More <i className="uil uil-arrow-right project__button-icon"></i>
          </span>

          {/* Modal */}
          <div className={toggleState === 3 ? "project__modal active-modal" : "project__modal"}>
            <div className="project__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close"></i>

              <h3 className="project__modal-title">Web Developer</h3>
              <p className="project__modal-description">
                With 2 years of experience, I have made these projects
              </p>

              <ul className="project__modal-project grid">
                <li className="project__modal-project">
                  <i className="uil uil-check-circle project__modal-icon"></i>
                  <p className="project__modal-info">I create web games</p>
                </li>
                <li className="project__modal-project">
                  <i className="uil uil-check-circle project__modal-icon"></i>
                  <p className="project__modal-info">I have built real-life implementation apps</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
