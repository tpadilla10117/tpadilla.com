/* import logo from './logo.svg'; */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Header, EmailFormComponent, AboutMeComponent, Portfolio, ContactComponent, Landing, NavbarComponent } from './index';

import { Flipped } from '../utils/index.js';

function App() {

  const [ flip, setFlip ] = useState(Flipped[0]);
  const [ active, isActive ] = useState("false");
  /* console.log(Flipped[0]) */ //returns the array at its index
  console.log("The flip from App component:", flip)
  return (
    
    <Router>
                <Header />
                <Switch>
                    <Route path="/portfolio" exact component={Portfolio} />
                    <Route path="/contact" exact component={ContactComponent} />
                    <Route path="/about" exact component={() => <AboutMeComponent active={active} isActive={isActive}flip={flip} setFlip={setFlip}/>} />
                    <Route path="/landing" exact component={Landing} />
                </Switch>
            
        </Router>
  );
}

export default App;
