import React from "react";
import "./Footer.css";

const reviews = [
  {
    name: "Ishan Shaw",
    review: "Great equipment and an energetic atmosphere. Love training here!",
    rating: "★★★★★",
  },
  {
    name: "Samir Kar",
    review: "The gym keeps me motivated. Every workout feels productive.",
    rating: "★★★★★",
  },
  {
    name: "Rahul Yadav",
    review: "Clean space, solid equipment, and a great place to train.",
    rating: "★★★★",
  },
  {
    name: "Mainak Roy",
    review: "A welcoming environment that makes fitness enjoyable.",
    rating: "★★★★★",
  },
];

function Footer() {
  return (
    <section className="reviews" aria-label="Sample member reviews">
      <div className="reviews-heading">
        <p className="reviews-label">MEMBER LOVE</p>
        <h2>
          GOOD ENERGY.
          <br />
          <span>REAL PROGRESS.</span>
        </h2>
      </div>

      <div className="reviews-marquee">
        <div className="reviews-track">
          {[...reviews, ...reviews].map((review, index) => (
            <div className="review-card" key={index}>
              <p className="review-rating">{review.rating}</p>
              <p className="review-text">“{review.review}”</p>
              <p className="review-name">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="reviews-note">
        Testimonials shown are fictional examples for this website demo.
      </p>
    </section>
  );
}

export default Footer;