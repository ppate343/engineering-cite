import React from "react";
import Fukushima from "../assets/img/applications/7.jpg";
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
    alignContent: 'center',
    alignItems: 'center',
  },
  containterText: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',


  }
}))





const Applications = ({ applicationLinks }) => {

  const style = useStyles();

  return (
    <section className="bg-light page-section" id="applications">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">applications</h2>


          </div>
        </div>
        <div className="row">
          {applicationLinks &&
            applicationLinks.map(({ image, title, caption }, index) => (
              <div className="col-md-4 col-sm-6 applications-item">
                <a
                  className="applications-link"
                  data-toggle="modal"
                  href="#applicationsModal1"
                >
                  <div className="applications-hover">
                    <div className="applications-hover-content">
                      <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={image}
                    alt="applications_img"
                  />
                </a>
                <div className="applications-caption">
                  <h4>{title}</h4>
                  <p className="text-muted">{caption}</p>
                </div>
              </div>
            ))}
          <h5> Applications Where: </h5>
          <h3 className="section-subheading text-muted">
            Data collected MUST be communicated in a timely, reliably and
            securely manner. The environment can be subject to high temperature,
            explosions, radiation, leaks, etc. causing damages to conventional
            communication infrastructure & systems.
          </h3>
          <div className={style.container}>
            <div className={style.leftBox}>
              <div className={style.ImageContainer}>
                <img className="img-thumbnail" src={Fukushima} alt=''>
                </img>
              </div>
              <p className="text-muted">Fukushima Nuclear Disaster, 2011</p>
            </div >
            <div className={style.RightBox}>
              <div className={style.containterText}>
                Fukushima nuclear disaster, 2011. Measured data could not be
                collected during the first few hours of the accident because all
                communication systems were down. The developed system could have
                provided much needed information about the plant during that
                critical time to help with accident mitigation.

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;



