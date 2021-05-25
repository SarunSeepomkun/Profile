import React from "react";
import "./style.css";
import "./timeline.css";
import "./utilities.css";
import Header from "./components/header";
import Personal from "./components/personal";
import Skills from "./components/skills";
import WorkExperience from "./components/work_exp";
import Hobbies from "./components/hobbies";
import Certificates from "./components/certificate";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Personal />
      <Skills />
      <WorkExperience />
      <Certificates />
      <Projects />
      <Hobbies />
      <Footer />
    </>
  );
}

export default App;
