/* import logo from './logo.svg'; */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Header, EmailFormComponent, AboutMeComponent, Portfolio, ContactComponent, Landing } from './index';

import { Flipped, CARDS } from '../utils/index.js';

function App() {
  
  const [ flip, setFlip ] = useState(Flipped[0]);
  const [ active, setInActive ] = useState("true");
  const [cardState, changeCardState] = useState({
    activeObject: null,
    objects: [{ id:1 }, {id: 2}, {id:3}]
})

  const [ activeCard, setActiveCard ] = useState(CARDS[0]);


  /* const routes = [
    { path: '/landing', name: 'Home', Component: Landing },
    { path: '/about', name: 'About', Component: AboutMeComponent },
    { path: '/contact', name: 'Contact', Component: ContactComponent },
  ] */

  return (
    
            <div>
                <Header />
                <div className="route-container">
                  {/* {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                      {({ match }) => (
                        <CSSTransition
                          in={match != null}
                          timeout={300}
                          classNames="fade"
                          unmountOnExit
                        >
                          <div className="fade">
                            <Component />
            
                          </div>
                        </CSSTransition>
                      )}
                    </Route>
                  ))} */}
<Route exact path="/portfolio">{({ match }) => (
  <CSSTransition
  in={match != null}
  timeout={300}
  classNames="fade"
  unmountOnExit>
    <div className="fade">
      <Portfolio />

    </div>
  </CSSTransition>
)}
</Route>

<Route exact path="/about">{({ match }) => (
  <CSSTransition
  in={match != null}
  timeout={300}
  classNames="fade"
  unmountOnExit>
    <div className="fade">
      <AboutMeComponent active={active} setInActive={setInActive}flip={flip} setFlip={setFlip} activeCard={activeCard} setActiveCard={setActiveCard} cardState={cardState} changeCardState={changeCardState}/>

    </div>
  </CSSTransition>
)}
</Route>

<Route exact path="/landing">{({ match }) => (
  <CSSTransition
  in={match != null}
  timeout={300}
  classNames="fade"
  unmountOnExit>
    <div className="fade">
      <Landing />

    </div>
  </CSSTransition>
)}
</Route>

<Route exact path="/contact">{({ match }) => (
  <CSSTransition
  in={match != null}
  timeout={300}
  classNames="fade"
  unmountOnExit>
    <div className="fade">
      <ContactComponent />

    </div>
  </CSSTransition>
)}
</Route>





                        {/* <Route exact path="/contact" exact component={ContactComponent} />
                        <Route exact path="/about" exact component={() => <AboutMeComponent active={active} isActive={isActive}flip={flip} setFlip={setFlip}/>} />
                        <Route exact path="/landing" exact component={Landing} />
                   */}
                </div>
              </div>          
        
  );
}

export default App;










/* <TransitionGroup>
<CSSTransition
                    timeout={300}
                    classNames='fade'
                    
                    key={location.key}>
                      
                    <Switch location={location}>
                    
                        <Route exact path="/portfolio" exact component={Portfolio} />
                        <Route exact path="/contact" exact component={ContactComponent} />
                        <Route exact path="/about" exact component={() => <AboutMeComponent active={active} isActive={isActive}flip={flip} setFlip={setFlip}/>} />
                        <Route exact path="/landing" exact component={Landing} />
                      
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div> */