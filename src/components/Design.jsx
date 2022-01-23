import React from "react";

export default ({ designLinks }) => {
  return (
    <section className="page-section bg-light" id="design">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Design</h2>
          <h3 className="section-subheading text-muted"></h3>
        </div>
        <div className="row">
          {designLinks &&
            designLinks.map(({ image, title, desc, minidesc }, index) => (
              <div className="col-lg-4">
                <div className="team-member">
                  <img className="rounded" src={image} alt="..." />
                  <h4>{title}</h4>
                  <p className="text-muted">{desc}</p>
                  <p className="text-muted">{minidesc}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h4>Reliable and Fault tolerant design</h4>
            <p className="large text-muted">
              This system utilizes a unique combination of long- and short-range
              wireless communication technologies to deliver data to
              destinations reliably. The key approaches employed to achieve
              reliable communication include
            </p>
            <p className="large text-muted">
              <li>
                a novel hardware/software design that exploits redundancy,
                diversity and independence to form multiple channels to ensure
                an effective fault-tolerant communication system
              </li>
              <li>
                a modular system design to incorporate multiple redundant
                network channels working in parallel, which improves overall
                system reliability as compared to that of any single network
                configuration
              </li>
              <li>
                effective application of fault-tolerance mechanisms at both
                system and device level
              </li>
              <li>
                Application-depended design of protective enclosures to
                safeguard the device components physically from hazardous
                environmental conditions
              </li>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
