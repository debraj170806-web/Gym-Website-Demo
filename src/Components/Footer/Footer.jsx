import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#home" className="footer-logo">
          IRON<span>VAULT</span>
        </a>

        <p>BUILT THROUGH DISCIPLINE. POWERED BY YOU.</p>

        <div className="footer-links">
          <a href="#programs">Programs</a>
          <a href="#features">Why Us</a>
          <a href="#pricing">Membership</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 IRONVAULT. All rights reserved.</p>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}

export default Footer;