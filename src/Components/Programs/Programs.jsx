import React from "react";
import "./Programs.css";

import ST from "../../assets/ST.jpg";
import PT from "../../assets/PT.jpg";
import FT from "../../assets/FT.jpg";
import Yoga from "../../assets/Yoga.jpg"; 

function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="programs-heading">
        <p className="programs-label">TRAIN YOUR WAY</p>

        <h2>
          BUILT FOR
          <br />
          <span>YOUR GOALS.</span>
        </h2>

        <p className="programs-description">
          From building serious strength to improving your
          conditioning, find the training that moves you forward.
        </p>
      </div>

      <div className="programs-cards">
        <div className="program-card">
          <img src={ST} alt="Strength training" />

          <div className="program-card-content">
            <p>01 / BUILD STRENGTH</p>
            <h3>Strength Training</h3>
            <a href="#contact">EXPLORE PROGRAM ↗</a>
          </div>
        </div>

        <div className="program-card">
          <img src={PT} alt="Personal training" />

          <div className="program-card-content">
            <p>02 / TRAIN SMARTER</p>
            <h3>Personal Training</h3>
            <a href="#contact">EXPLORE PROGRAM ↗</a>
          </div>
        </div>

        <div className="program-card">
          <img src={FT} alt="Functional fitness" />

          <div className="program-card-content">
            <p>03 / MOVE BETTER</p>
            <h3>Functional Fitness</h3>
            <a href="#contact">EXPLORE PROGRAM ↗</a>
          </div>
        </div>

        <div className="program-card">
  <img src={Yoga} alt="Yoga practice" />

  <div className="program-card-content">
    <p>04 / FIND YOUR BALANCE</p>
    <h3>Yoga</h3>
    <a href="#contact">EXPLORE PROGRAM ↗</a>
  </div>
</div>
      </div>
    </section>
  );
}

export default Programs;