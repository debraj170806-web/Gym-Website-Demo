import React from "react";
import "./Features.css";

function Features() {
  return (
    <section className="features" id="about">
      <div className="features-heading">
        <p className="features-label">WHY IRONVAULT</p>
        <h2>
          YOUR TRAINING.
          <br />
          <span>OUR COMMITMENT.</span>
        </h2>
      </div>

      <div className="features-cards">
        <div className="feature-card">
          <span>01</span>
          <h3>Expert Coaches</h3>
          <p>
            Get guidance from experienced trainers who help you
            train safely and reach your goals.
          </p>
        </div>

        <div className="feature-card">
          <span>02</span>
          <h3>Modern Equipment</h3>
          <p>
            Train with quality equipment designed to support
            strength, fitness, and progress.
          </p>
        </div>

        <div className="feature-card">
          <span>03</span>
          <h3>Training for Everyone</h3>
          <p>
            Whether you're a beginner or experienced, find a
            training approach that works for you.
          </p>
        </div>

        <div className="feature-card">
            <span>04</span>
            <h3>Recovery & Wellness</h3>
            <p>
            Make recovery part of your routine and support your
            fitness journey with a balanced approach.
            </p>
        </div>

        <div className="feature-card">
            <span>05</span>
            <h3>Community & Motivation</h3>
            <p>
            Train alongside a supportive community that keeps
            you motivated and moving forward.
        </p>
    </div>

        <div className="feature-card">
        <span>06</span>
        <h3>Progress Tracking</h3>
        <p>
            Track your workouts and milestones to see how far
            you've come and stay focused on your goals.
        </p>
    </div>
      </div>
    </section>
  );
}

export default Features;