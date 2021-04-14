/* import logo from './logo.svg'; */

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Profile, Header, EmailFormComponent, AboutMeComponent, Portfolio, SkillsComponent, ContactComponent } from './index';

function App() {
  return (
    <Router>
            <div>
                <Profile />
                <Header />
                <Switch>
                    <Route path="/portfolio" exact component={Portfolio} />
                    <Route path="/contact" exact component={ContactComponent} />
                    <Route path="/about" exact component={AboutMeComponent}/>
                    <Route path='/skills' exact component={SkillsComponent}/>
                </Switch>
            </div>
        </Router>
  );
}

export default App;
