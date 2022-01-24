import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Applications from "./components/Applications";
import Devices from "./components/Devices";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Design from "./components/Design";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import NPP from "./assets/img/applications/1.jpg";
import MiningOp from "./assets/img/applications/2.jpg";
import MilitaryOp from "./assets/img/applications/3.jpg";
import SpaceOp from "./assets/img/applications/4.jpg";
import NavalShip from "./assets/img/applications/5.jpg";
import HealthCare from "./assets/img/applications/6.jpg";
import device1 from "./assets/img/devices/d1.jpg";
import gateway from "./assets/img/devices/g1.jpg";
import gatewayShield from "./assets/img/devices/g1s.jpg";
import gatewayWShield from "./assets/img/devices/g1ws.jpg";
import portable from "./assets/img/devices/p1.jpg";
import displayPic from "./assets/img/dp.png";
import filler from "./assets/img/npp.jpg";

function App() {
  const applicationLinks = [
    {
      title: "Energy/Power Systems",
      caption: "including Nuclear Power Plants",
      image: NPP,
    },
    {
      title: "Mining Operations",
      caption: " ",
      image: MiningOp,
    },
    {
      title: "Military Operations",
      caption: " ",
      image: MilitaryOp,
    },
    {
      title: "Space Exploration",
      caption: " ",
      image: SpaceOp,
    },
    {
      title: "Naval Ships/ Vessel Monitoring",
      caption: " ",
      image: NavalShip,
    },
    {
      title: "Health Care Applications",
      caption: " ",
      image: HealthCare,
    },
  ];

  const deviceLinks = [
    {
      title: "Device",
      caption: "filler",
      image: device1,
    },
    {
      title: "Portable Monitoring System",
      caption: "filler",
      image: portable,
    },
    {
      title: "Gateway",
      caption: "filler",
      image: gateway,
    },
    {
      title: "Gateway with Shielding",
      caption: "filler",
      image: gatewayShield,
    },
    {
      title: "Gateway without Shielding",
      caption: "filler",
      image: gatewayWShield,
    },
  ];

  const aboutLinks = [
    {
      heading: "timeline 1",
      subheading: " ",
      desc: "filler text",
    },
  ];

  const aboutLinksInverted = [
    {
      heading: "timeline 2 ",
      subheading: " ",
      desc: "filler text",
    },
  ];

  const teamLinks = [
    {
      image: displayPic,
      name: "Ataul Bari",
      role: "engineering prof",
      email: "abari2@uwo.cauwo.ca",
    },
    {
      image: displayPic,
      name: "Jin Jiang",
      role: "Professor at University of Western Ontario",
      email: "jjiang@eng.uwo.ca",
    },
  ];

  const designLinks = [
    {
      image: filler,
      imgTitle: "Modular Design",
      imagedesc:
        "The system employs a modular design approach where each module supports one specific communication network technology",
    },
    {
      image: filler,
      imgTitle: "Communication over Multiple Media",
      imagedesc:
        "The system uses propriety wireless network-based communication technologies to transmit data ",
    },
    {
      image: filler,
      imgTitle: "Reliable and Fault-tolerant Design",
      imagedesc:
        "This system utilizes a unique combination of long- and short-range wireless communication technologies to deliver data to destinations reliably",
    },
  ];
  return (
    <>
      <div className="App">
        <NavBar />
        <Header />
        <Design designLinks={designLinks} />
        <Devices deviceLinks={deviceLinks} />
        <Applications applicationLinks={applicationLinks} />
        <About
          aboutLinks={aboutLinks}
          aboutLinksInverted={aboutLinksInverted}
        />
        <Team teamLinks={teamLinks} />
        <Contact />

        <Footer />
      </div>
    </>
  );
}

export default App;
