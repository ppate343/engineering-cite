import React from "react";

export default ({ aboutLinks, aboutLinksInverted }) => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">
            This system is designed to work reliably in harsh environment, for
            example, an aftermath after a natural oor man-made disaster, an
            accident or a hostile activity by some adversaries. Features of such
            environments can be characterized by, but not limited to:
            <li>Excessively high tempurates, pressure and humidity</li>
            <li>Overly corrosive and toxic media</li>
            <li>Damage to existing communication and power</li>
            <li>High levels of nuclear radiation or biological hazards</li>
            <li>Electromagnetic interference, pulses and narrowband jamming</li>
            <li>Flooding and submerded conditions</li>
            <li>Explosive atmosphere</li>
          </h3>
        </div>

        <ul className="timeline">
          {aboutLinks &&
            aboutLinks.map(({ image, heading, subheading, desc }, index) => (
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src={image}
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>{heading}</h4>
                    <h4 className="subheading">{subheading}</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">{desc}</p>
                  </div>
                </div>
              </li>
            ))}
          {aboutLinksInverted &&
            aboutLinksInverted.map(({ image, heading, subheading, desc }) => (
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src={image}
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>{heading}</h4>
                    <h4 className="subheading">{subheading}</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">{desc}</p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
