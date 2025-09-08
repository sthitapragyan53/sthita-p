import React from 'react'

const GameDev = () => {
  return (
     
    <div className="skills__content">
      <h3 className="skills__title">Game development and Blockchain</h3>

      <div className="skills__box">
        {/* Left Column */}
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">C# for GameDev</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Solidity for blockchain</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Unity engine for Game-dev</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Blender</h3>
              <span className="skills__level"> for assests designing and Modeling</span>
            </div>
          </div>
        </div>

        

      </div>
    </div>
  )
  
}

export default GameDev
