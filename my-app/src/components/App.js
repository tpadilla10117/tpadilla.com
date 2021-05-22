/* import logo from './logo.svg'; */

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, AboutMeComponent, Portfolio, ContactComponent, Landing } from './index';

function App() {

/* State for Animated Cards */
  const [cardState, changeCardState] = useState({
    activeObject: null,
    objects: [{ id:1 }, {id: 2}, {id:3}]
  })

  return (
    
            <div>
                <Header />
                <div className="route-container">
                  
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
                      <AboutMeComponent cardState={cardState} changeCardState={changeCardState}/>

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

                </div>
              </div>          
        
  );
}

export default App;