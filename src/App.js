import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Applications from "./components/Applications";
import Devices from "./components/Devices";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import NPP from "./assets/img/applications/1.jpg";
import MiningOp from "./assets/img/applications/2.jpg";
import MilitaryOp from "./assets/img/applications/3.jpg";
import SpaceOp from "./assets/img/applications/4.jpg";
import NavalShip from "./assets/img/applications/5.jpg";
import HealthCare from "./assets/img/applications/6.jpg";

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
      title: "Threads",
      caption: "Illustration",
    },
    {
      title: "Explore",
      caption: "Graphic Design",
    },
    {
      title: "Finish",
      caption: "Identity",
    },
  ];
  return (
    <>
      <div className="App">
        <NavBar />
        <Header />
        <Devices deviceLinks={deviceLinks} />
        <Applications applicationLinks={applicationLinks} />
        <About />
        <Team />
        <Contact />
        <Socials />
        <Footer />
      </div>
    </>
  );
}

export default App;
