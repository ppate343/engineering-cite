import React from "react";

export default ({ deviceLinks }) => {
  return (
    <section className="page-section" id="devices">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">System Devices</h2>
          <h3 className="section-subheading text-muted">
            A data communication system that is highly reliable, resistant to
            damages due to harsh deployment environments, and self-contained
            with own independent power source and independent communication
            infrastructure
          </h3>
        </div>
        <div className="row text-center">
          {deviceLinks &&
            deviceLinks.map(({ title, caption }, index) => (
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">{title}</h4>
                <p className="text-muted">{caption}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
