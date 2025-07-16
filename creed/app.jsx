// App.jsx
import React from "react";
import "./style.css";

function Wireframe() {
  return (
    <div className="container">
      {/* Row 1 */}
      <div className="row">
        <section className="hero card">
          <div className="hero-content">
            <div>
              <div className="line short"></div>
              <div className="line medium"></div>
              <div className="line long"></div>
              <button className="btn">Button</button>
            </div>
            <div className="image-placeholder large"></div>
          </div>
        </section>
        <section className="story card">
          <div className="multi-lines"></div>
          <button className="btn">Read Full Story</button>
        </section>
        <section className="portfolio card">
          <h3>Short Portfolio Heading</h3>
          <div className="portfolio-images">
            <div className="image-placeholder medium"></div>
            <div className="image-placeholder medium"></div>
          </div>
        </section>
      </div>
      {/* Row 2 */}
      <div className="row">
        <section className="blog card">
          <h3>Our Latest Blog</h3>
          <div className="blog-list">
            <div className="image-placeholder medium"></div>
            <div className="image-placeholder medium"></div>
          </div>
          <div className="line long"></div>
        </section>
        <section className="testimonial card">
          <h3>Client Testimonial</h3>
          <div className="testimonial-list">
            <div className="testimonial-item">
              <div className="stars"></div>
              <div className="line medium"></div>
              <div className="line short"></div>
            </div>
            <div className="testimonial-item">
              <div className="stars"></div>
              <div className="line medium"></div>
              <div className="line short"></div>
            </div>
            <div className="testimonial-item">
              <div className="stars"></div>
              <div className="line medium"></div>
              <div className="line short"></div>
            </div>
          </div>
        </section>
        <section className="gallery card">
          <h3>Our Gallery</h3>
          <div className="gallery-list">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="image-placeholder small"></div>
            ))}
          </div>
          <button className="btn-outline">View All</button>
        </section>
      </div>
      {/* Row 3 */}
      <div className="row">
        <section className="team card">
          <h3>Our Team</h3>
          <div className="team-list">
            <div className="image-placeholder small"></div>
            <div className="image-placeholder small"></div>
            <div className="image-placeholder small"></div>
            <div className="image-placeholder small"></div>
          </div>
        </section>
        <section className="services card">
          <h3>Our Services</h3>
          <div className="line medium"></div>
        </section>
        <section className="features card">
          <h3>Our Features</h3>
          <button className="btn-dark">Explore Services</button>
          <div className="features-list">
            <div className="feature-item"></div>
            <div className="feature-item"></div>
            <div className="feature-item"></div>
            <div className="feature-item"></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Wireframe;
