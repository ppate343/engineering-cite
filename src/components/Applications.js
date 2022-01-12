import React from "react";

function Applications(props) {
  return (
    <section className="page-section bg-light" id="applications">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">applications</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div className="row">
        {
            props && props.map((a.item, index) =>
            <div className="col-lg-4 col-sm-6 mb-4">
            <div className="applications-item">
              <a
                className="applications-link"
                data-bs-toggle="modal"
                href="#applicationsModal1"
              >
                <div className="applications-hover">
                  <div className="applications-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="img/applications/1.jpg"
                  alt="..."
                />
              </a>
              <div className="applications-caption">
                <div className="applications-caption-heading">
                  Energy/Power Systems
                </div>
                <div className="applications-caption-subheading text-muted">
                  Including Nuclear Power Plants
                </div>
              </div>
            </div>
          </div> 
                )
        }
          
        </div>
      </div>
    </section>
  );
}

export default Applications;
