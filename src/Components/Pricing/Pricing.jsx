import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-heading">
        <p className="pricing-label">MEMBERSHIP PLANS</p>

        <h2>
          INVEST IN
          <br />
          <span>YOURSELF.</span>
        </h2>

        <p className="pricing-description">
          Choose a membership that fits your routine and fitness goals.
        </p>
      </div>

      <div className="pricing-cards">
        {/* Monthly Membership */}
        <div className="pricing-card">
          <p className="plan-name">MONTHLY</p>

          <h3>
            ₹999<span>/month</span>
          </h3>

          <p className="plan-description">
            Flexible membership for your fitness journey.
          </p>

          <ul>
            <li>Gym access</li>
            <li>Access to gym equipment</li>
            <li>Locker access</li>
          </ul>

          <a href="#contact">CHOOSE PLAN ↗</a>
        </div>

        {/* Half-Yearly Membership */}
        <div className="pricing-card pricing-card-featured">
          <p className="plan-name">HALF YEARLY</p>

          <h3>
            ₹7,499<span>/6 months</span>
          </h3>

          <p className="plan-description">
            Six months of training to build consistency.
          </p>

          <ul>
            <li>Full gym access</li>
            <li>One trainer consultation</li>
            <li>Group fitness classes</li>
            <li>Locker access</li>
          </ul>

          <a href="#contact">CHOOSE PLAN ↗</a>
        </div>

        {/* Yearly Membership */}
        <div className="pricing-card">
          <p className="plan-name">YEARLY</p>

          <h3>
            ₹13,999<span>/year</span>
          </h3>

          <p className="plan-description">
            A full year to stay committed to your goals.
          </p>

          <ul>
            <li>Full gym access</li>
            <li>Personal training sessions</li>
            <li>Fitness progress review</li>
            <li>Group fitness classes</li>
            <li>Locker access</li>
          </ul>

          <a href="#contact">CHOOSE PLAN ↗</a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;