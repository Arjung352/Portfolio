import React from "react";
import AboutMe from "./ScrollableContant/AboutMe";
import Skills from "./ScrollableContant/Skills";
import ProjectExprerience from "./ScrollableContant/ProjectExprerience";
import Education from "./ScrollableContant/Education";
function ScrollableSection() {
  return (
    <div>
      <AboutMe />
      <Skills />
      <ProjectExprerience />
      <Education />
    </div>
  );
}

export default ScrollableSection;
