import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <p className="contact-label">READY TO GET STARTED?</p>

        <h2>
          YOUR NEXT
          <br />
          <span>LEVEL STARTS HERE.</span>
        </h2>

        <p className="contact-description">
          Have questions about membership or training?
          Get in touch with us and take your first step.
        </p>

        <div className="contact-details">
          <p><strong>Phone:</strong> +91 00000 00000</p>
          <p><strong>Email:</strong> hello@ironvault.com</p>
          <p><strong>Location:</strong> 24 Ironworks Avenue, Block C
New Town, Kolkata, West Bengal 700156, India(Demo)</p>
        </div>

        <a className="contact-button" href="mailto:hello@ironvault.com">
          CONTACT US ↗
        </a>
      </div>
    </section>
  );
}

export default Contact;