import React from "react";
import DeviceDiagram from "../assets/img/devices/device-diagram.jpg";

export default ({ deviceLinks }) => {
  return (
    <section className="page-section" id="devices">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">System Devices</h2>
          <h3 className="text-muted">
            The system can accommodate different sensors to measure
            physical attributes of interests in the area of deployment and
            communicate measured data to local and remote destinations
            as desired.
          </h3>
        </div>
        <div className="row text-center">
          {deviceLinks &&
            deviceLinks.map(({ image, title, caption }, index) => (
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <div className="device-image">
                    <img
                      className=" rounded-circle img-fluid"
                      src={image}
                      alt="devices_img"
                    />
                  </div>
                </span>
                <h4 className="my-3">{title}</h4>
                <p className="text-muted">{caption}</p>
              </div>
            ))}
        </div>
        <div className="device-list">
          <img src={DeviceDiagram}></img>
          <li>Multiple diverse wireless channels for reliable data transfer</li>
          <li>Short-range radio frequency transmissions, include</li>
          <li>Wireless sensor network-1 (WSN1)</li>
          Wireless sensor network-2 (WSN2)
          <li>
            Short-range underwater acoustic channels for submerged condition
          </li>
          <li>long-range cellular and satellite links</li>
          <li>
            Wired communication channels for connection through penetration
          </li>
          <li>
            Fault-tolerant design with redundancy, diversity and independence
          </li>
          <li>Modular and customizable devices with maximal feasibility</li>
        </div>
      </div>
    </section>
  );
};
