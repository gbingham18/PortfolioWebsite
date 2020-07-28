import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import '../App.css';
import { Component } from "react";

class Header extends Component{
  constructor (props) {
    super(props)
    this.state = {
      arrowClass: "fas fa-arrow-circle-down",
      headerClass: "App-header"
    }
  }

  switchArrow = (e) => {
    const { arrowClass } = this.state;
    const { headerClass } = this.state;
    let newArrow = arrowClass
    let newHeader = headerClass
    if (arrowClass === "fas fa-arrow-circle-down") {
      newArrow = "fas fa-arrow-circle-up"
    }
    else {
      newArrow = "fas fa-arrow-circle-down" 
    }
    if (newArrow === "fas fa-arrow-circle-up") {
      newHeader = "Mobile-header"
    }
    else {
      newHeader = "App-header"
    }
    this.setState(() => ({
      arrowClass: newArrow,
      headerClass: newHeader
    }))
  }

  render () {
    if (this.props.location === "/") {
      return (
        <header className={this.state.headerClass}>
          <h1>
            <i class={this.state.arrowClass} onClick={this.switchArrow}></i>
            <a id="headerlink" href="/">Grant Bingham</a>
          </h1>
          <ul>
            <li className="OnExperiencePage"><Link to="/">Experience</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Extracurricular">Extracurricular</Link></li>
          </ul>
        </header>
      );  
    } 
    else if (this.props.location === "/Projects") {
      return (
        <header className={this.state.headerClass}>
          <h1>
            <i class={this.state.arrowClass} onClick={this.switchArrow}></i>
            <a id="headerlink" href="/">Grant Bingham</a>
          </h1>
          <ul>
            <li><Link to="/">Experience</Link></li>
            <li className="OnProjectsPage"><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Extracurricular">Extracurricular</Link></li>
          </ul>
        </header>
      ); 
    }
    else {
      return (
          <header className={this.state.headerClass}>
            <h1>
              <i class={this.state.arrowClass} onClick={this.switchArrow}></i>
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
}

export default Header;