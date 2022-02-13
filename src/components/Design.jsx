import React from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import ProtectionDiagram from "../assets/img/protection.jpg"
import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles(() => ({
  container: {
    // justifyContent: 'center',

    backgroundColor: 'transparent',
    height: 800,
    width: 'auto',
  },

  leftBox: {
    position: 'absolute',
    justifyContent: 'center',

    backgroundColor: 'white',
    height: 500,
    width: 600,
    marginTop: 150,

  },
  RightBox: {


    backgroundColor: "black",
    height: 800,
    width: 700,
    marginLeft: 400,

  },
  ImageContainer: {
    display: 'flex',
    margin: 'auto',
    justifyContent: 'center',
    marginTop: 50,

  },
  containterText: {
    color: 'white',
    fontSize: 80,


  }
}))







export default ({ designLinks }) => {


  const style = useStyles();

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
                    <img className="rounded" src={image} alt="..." href="" />
                    <h4 className="design-imagetitle">{imgTitle}</h4>
                    <p className="text-muted">{imagedesc} </p>
                  </div>
                </div>
              )
            )}
        </div>

        <div className={style.container}>
          <div className={style.leftBox}>
            <div className={style.ImageContainer}><img className="img-thumbnail" src={ProtectionDiagram}></img></div>
            <p className="text-muted">Protection Under Accident Controls</p>
          </div >
          <div className={style.RightBox}>
            <div className="text-muted">

              <li>Explosion-proof casing</li>
              <li>Peak temperature: 650oC</li>
              <li>Pressure: 1.6MPa</li>
              <li>Resistance to Fire, corrosion, humidity, gas and air born particles</li>
              <li>Radiation Shielding</li>

            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
