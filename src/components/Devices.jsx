import React from "react";
import DeviceDiagram from "../assets/img/devices/device-diagram.jpg";
import SystemDiagram from "../assets/img/devices/system-highlights.jpg";

export default ({ deviceLinks }) => {
  return (
    <section className="page-section" id="devices">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">System Devices</h2>
          <p className="text-muted">
            The system can accommodate different sensors to measure physical
            attributes of interests in the area of deployment and communicate
            measured data to local and remote destinations as desired.
          </p>
        </div>
        <div className="device-list"></div>
        <div className="container">
          <h5 className="text-center">Device Highlights</h5>
          <img src={DeviceDiagram}></img>
          <p className="text-muted">
            Multiple diverse wireless channels for reliable data transfer
          </p>
          <h5 className="text-center">System Highlights</h5>
          <img src={SystemDiagram}></img>
          <p className="text-muted">
            Can be deployed in harsh areas in the presence of obstacles
          </p>
        </div>
      </div>
    </section>
  );
};
