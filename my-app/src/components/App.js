/* import logo from './logo.svg'; */

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Header, EmailFormComponent, AboutMeComponent, Portfolio, ContactComponent, Landing, NavbarComponent } from './index';

function App() {
  return (
    <Router>
            
                <Header />
                <Switch>
                    <Route path="/portfolio" exact component={Portfolio} />
                    <Route path="/contact" exact component={ContactComponent} />
                    <Route path="/about" exact component={AboutMeComponent}/>
                    <Route path="/landing" exact component={Landing} />
                </Switch>
            
        </Router>
  );
}

export default App;
