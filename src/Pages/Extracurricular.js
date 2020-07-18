import React from 'react';
import '../App.css';
import Header from '../Components/Header.jsx'
import ExtracurricularSection from '../Components/Sections/ExtracurricularSection.jsx'
import Footer from '../Components/Footer.jsx'

function Extracurricular() {
  return (
    <div className="Extracurriculars">
      <Header></Header>
      <ExtracurricularSection></ExtracurricularSection>
      <Footer></Footer>
    </div>
  );
}

export default Extracurricular;