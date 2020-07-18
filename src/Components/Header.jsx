import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import '../App.css';

function Header() {
  const location = useLocation();
  if (location.pathname === "/") {
    return (
        <header className="App-header">
        <h1>
          <a id="headerlink" href="/">Grant Bingham</a>
        </h1>
        <ul id="mainHeaderSubList">
          <li className="OnExperiencePage"><Link to="/">Experience</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Extracurricular">Extracurricular</Link></li>
        </ul>
      </header>
    );  
  } 
  else if (location.pathname === "/Projects") {
    return (
        <header className="App-header">
        <h1>
          <a id="headerlink" href="/">Grant Bingham</a>
        </h1>
        <ul id="mainHeaderSubList">
          <li><Link to="/">Experience</Link></li>
          <li className="OnProjectsPage"><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Extracurricular">Extracurricular</Link></li>
        </ul>
      </header>
    ); 
  }
  else {
    return (
        <header className="App-header">
          <h1>
            <a id="headerlink" href="/">Grant Bingham</a>
          </h1>
          <ul id="mainHeaderSubList">
            <li><Link to="/">Experience</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li className="OnExtracurricularPage"><Link to="/Extracurricular">Extracurricular</Link></li>
          </ul>
        </header>
    ); 
  }
}

export default Header;