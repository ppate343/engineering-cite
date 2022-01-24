import React from "react";

export default ({ designLinks }) => {
  return (
    <section className="page-section bg-light" id="design">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Design</h2>
          <p className="text-muted">The system is designed to work reliably in harsh
            environments, for example, an aftermath after a natural
            or man-made disaster, an accident or a hostile activity by
            some adversaries. Such environments inlude but not limited to excessively high temperatures pressure, humidty, overly corrosive  and toxic media, explosive atmosphere, damage to existing communication and power infrastructure, high levels of nuclear radiation or biological hazards, electromagnetic interference, pulses and narrowband jamming, flooding and submerged conditions.</p>
          <h3 className="section-subheading text-muted"></h3>
        </div>
        <div className="row">
          {designLinks &&
            designLinks.map(
              (
                { title, desc, minidesc, image, imgTitle, imagedesc },
                index
              ) => (
                <div className="col-lg-4">
                  <div className="team-member">
                    <h4>{title}</h4>
                    <p className="text-muted">{desc}</p>
                    <p className="text-muted">{minidesc}</p>
                    <img className="rounded" src={image} alt="..." />
                    <h4 className="design-imagetitle">{imgTitle}</h4>
                    <p className="text-muted">{imagedesc} </p>
                  </div>
                </div>
              )
            )}
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h4>Approaches Applied to Achieve Reliable Communication</h4>
            <p className="large text-muted">
              This system utilizes a unique combination of long- and short-range
              wireless communication technologies to deliver data to
              destinations reliably. The key approaches employed to achieve
              reliable communication include:
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

            <h4>Flexibilities in Deployment and Operation</h4>

            <p className="large text-muted">
              <li>
                the system does not require any existing established
                communication or power infrastructurea
              </li>

              <li>
                the system can be pre-deployed at strategic locations or can be
                deployed in ad-hoc manner, on need bases, to deal with an
                emergency
              </li>
              <li>
                once deployed, the system can self-form a network and
                communicate data autonomously
              </li>
              <li>
                in the event of a fault or damage by environmental factors in a
                module or a device or a channel, the system can self-reconfigure
                to continue communication tasks
              </li>
              <li>
                attempts will be made for self- diagnostics and selfrecovery if
                any component/module has experienced malfunctions
              </li>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
