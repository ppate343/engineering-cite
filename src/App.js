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

function App() {
  const applicationLinks = [
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
    {
      title: "Lines",
      caption: "Branding",
    },
    {
      title: "Southwest",
      caption: "Website Design",
    },
    {
      title: "Window",
      caption: "Photography",
    },
    {
      title: "Pizza",
      caption: "I love pizza!",
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
        <Devices />
        <Applications />
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
