import React from 'react';
import '../App.css';
import ExperienceSection from '../Components/Sections/ExperienceSection.jsx'
import Header from '/Users/grantbingham/Downloads/personalwebsite/src/Components/Header.jsx'
import Footer from '../Components/Footer.jsx'

function Experience() {
  return (
    <div className="Experience">
      <Header></Header>
      <ExperienceSection></ExperienceSection>
      <Footer></Footer>
    </div>
  );
}

export default Experience;