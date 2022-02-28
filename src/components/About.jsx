import React from "react";
import System from "../assets/img/system.jpg"

const About = () => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <p className="text-muted">
            The monitoring system consists of devices that are highly reliable,
            robust against accident environment, self-contained with own
            independent power source, and independent communication
            infrastructure. The system can be used to transfer measured critical
            plant parameters to Emergency Operations Centers in the event of a
            severe accident in a NPP.
          </p>
        </div>
        <img src={System} alt=''></img>
        <p className="text-muted"></p>
      </div>
    </section>
  );
};
export default About; 
