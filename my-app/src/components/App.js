/* import logo from './logo.svg'; */

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Profile, Header, Projects, EmailFormComponent, AboutMeComponent, Portfolio } from './index';

function App() {
  return (
    <Router>
            <div>
                <Profile />
                <Header />
                {/* <Projects /> */}
                {/* <EmailFormComponent /> */}
                <Route path="/portfolio">
                    <Portfolio />
                </Route>
                <Route path="/contact">
                    <EmailFormComponent />
                </Route>
                <Route path="/about">
                    <AboutMeComponent />
                </Route>
                
                {/* <Switch>
                    <Route path="/projects" />
                </Switch> */}
            </div>
        </Router>
  );
}

export default App;
