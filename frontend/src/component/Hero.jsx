import React from "react";
// import "../Css.css";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container" style={{ backgroundColor: "#f2ffff" }}>
        <div className="banner">
          <h1>{title}</h1>
          <p>
            ZEE HealthCare Medical Institute is a state-of-the-art facility dedicated
            to providing comprehensive healthcare services with compassion and
            expertise. Our team of skilled professionals is committed to
            delivering personalized care tailored to each patient's needs. At
            ZeeCare, we prioritize your well-being, ensuring a harmonious
            journey towards optimal health and wellness.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
