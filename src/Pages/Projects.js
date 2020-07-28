import React from 'react';
import '../App.css';
import Header from '../Components/Header.jsx'
import ProjectSection from '../Components/Sections/ProjectSection.jsx'
import Footer from '../Components/Footer.jsx'

function Projects() {
  return (
    <div className="Projects">
      <Header location="/Projects"></Header>
      <ProjectSection></ProjectSection>
      <Footer></Footer>
    </div>
  );
}

export default Projects;