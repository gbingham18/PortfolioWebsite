import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Footer() {
    return (
      <div className="App-footer">
        <div className="copyright"> 
            <h3>© Grant Bingham 2020</h3>
        </div>
        <ul id="mainFooterSubList">
          <li><a href="https://github.com/gbingham18?tab=repositories"><img src={require("../Data/Images/Github.png")}></img></a></li>
          <li><a href="https://twitter.com/grant_bingham?lang=en"><img src={require("../Data/Images/Twitter.png")}></img></a></li>
          <li><a href="https://www.instagram.com/grant_bingham/"><img src={require("../Data/Images/Insta.png")}></img></a></li>
          <li><a href="https://www.linkedin.com/in/grant-bingham-2913a1113/"><img src={require("../Data/Images/LinkedIn.png")}></img></a></li>
        </ul>
      </div>
    );   
}

export default Footer;