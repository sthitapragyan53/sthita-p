import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        {/* Tabs */}
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
        </div>

        {/* single section wrapper, two content panes (Education & Experience) */}
        <div className="qualification__section">
          {/* EDUCATION */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Item 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2027 - Currently Pursuing
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2027 - Currently Pursuing
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2027 - Currently Pursuing
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Continue in Web3</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2025 - Ongoing
                </div>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Item 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Product Design</h3>
                <span className="qualification__subtitle">YouTube - Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2027 - Currently Pursuing
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2027 - Currently Pursuing
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">Figma - Spain</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2027 - Currently Pursuing
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Continue in Web3</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2025 - Ongoing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
