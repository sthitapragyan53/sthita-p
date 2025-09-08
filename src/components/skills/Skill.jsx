import React from 'react'
import Frontend from './frontend'
import Backend from './Backend'
import GameDev from './GameDev';
import Corelanguage from './Corelanguage';
import './skill.css';




const Skill = () => {
  return (
    <section className="skills section" id ="skills">
        <h2 className="section__title"> Skills</h2>
        <span className="section__subtitle"> My technical level</span>

        <div className="skills__container container grid">

            <Frontend />
            <Backend />
            <GameDev />
            <Corelanguage />

        </div>

    </section>
  )
}

export default Skill
