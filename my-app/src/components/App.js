/* import logo from './logo.svg'; */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Header, EmailFormComponent, AboutMeComponent, Portfolio, ContactComponent, Landing, NavbarComponent } from './index';

import { Flipped } from '../utils/index.js';

function App() {
  const location = useLocation();
  const [ flip, setFlip ] = useState(Flipped[0]);
  const [ active, isActive ] = useState("false");
  /* console.log(Flipped[0]) */ //returns the array at its index
  console.log("The flip from App component:", flip)
  return (
    
            <div>
                <Header />
                <TransitionGroup>
                  <CSSTransition
                    timeout={350}
                    classNames='fade'
                    /* Applies Transition */
                    key={location.key}>
                      
                    <Switch location={location}>
                    
                        <Route exact path="/portfolio" exact component={Portfolio} />
                        <Route exact path="/contact" exact component={ContactComponent} />
                        <Route exact path="/about" exact component={() => <AboutMeComponent active={active} isActive={isActive}flip={flip} setFlip={setFlip}/>} />
                        <Route exact path="/landing" exact component={Landing} />
                      
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
        
  );
}

export default App;
