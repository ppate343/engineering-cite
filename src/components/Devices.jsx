import React from "react";
import DeviceDiagram from "../assets/img/devices/device-diagram.jpg";
import SystemDiagram from "../assets/img/devices/system-highlights.jpg";
import { makeStyles } from "@material-ui/core";






const useStyles = makeStyles(() => ({
  container: {
    // justifyContent: 'center',

    backgroundColor: 'transparent',
    height: 800,
    width: 'auto',
  },

  leftBox: {

    backgroundColor: "black",
    height: 700,
    width: 600,
    marginRight: 400,


  },
  RightBox: {

    position: 'absolute',
    backgroundColor: 'white',
    height: 500,
    width: 600,
    marginTop: 100,
    marginLeft: 500,


  }
}))









export default () => {

  const style = useStyles();

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
        <div className={style.container}>
          <div className={style.RightBox}>
          </div>
          <div className={style.leftBox}>
          </div >

        </div>
      </div>
    </section>
  );
};
