import React from 'react';
import './App.css';
import Experience from '../src/Pages/Experience.js'
import Projects from '../src/Pages/Projects.js'
import Extracurricular from '../src/Pages/Extracurricular.js'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Experience}/>
        <Route exact path="/Projects" component={Projects}/>
        <Route exact path="/Extracurricular" component={Extracurricular}/>
      </Switch>
    </Router>
  );
}

export default App;
