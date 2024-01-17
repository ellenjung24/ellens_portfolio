import "./HeroSectionStyles.css";
import React from 'react';

const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="hero--section--title">Hello, I'm <span className="hero--section--title--color">Ellen!</span></p>
          <p className="hero--section--title">
            I'm a&nbsp;
            <span className="hero--section--title--color">Full-Stack Developer</span>{" "}
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" width={500} />
      </div>
    </section>
  )
}

export default HeroSection