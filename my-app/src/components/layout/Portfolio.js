import React, { useEffect, useState, Component } from 'react';

import '../../assets/css/Portfolio.css';

/* EXAMPLE of IMPORTING IMAGES */

import Image1 from "../../../src/assets/images/codalorians.png";
/* import Image2 from "../../../src/assets/fitness-tracker.png";
import Image3 from "../../../src/assets/strangers-things.png"; */

import { Link, NavLink } from 'react-router-dom';

export default class Portfolio extends Component {
    render() {
        return (
            <>
            <div id="projects"></div>
            <div>
                <hr className="project-break"></hr>
            </div>
            <div className="project-title">
                <p>My Portfolio</p>
            </div>
            <main id="about-wrapper">
                {/* <div className="hobby1div"> */}
                    <section className="card" data-aos="fade-right">
                        <img src={Image1} alt="codalorians" loading="lazy" id="left-image">
                        
                        </img>
                        <div>
                            <h3>Codalorians Shop</h3>
                                <p>This is ahf
                                    <br />
                                    <br />

                                    <b>
                                    Front End: React, JS
                                    <br />
                                    <br />
                                    Back End: SQL, Node.JS
                                    </b>
                                </p>
                                <div className="linkContainer">
                                    {/* Need to change this to Codalorians */}
                                    <Link
                                        to={{
                                            pathname: "https://github.com/2006-cpu/virtual-velocity",
                                        }}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="projBtn"
                                    >
                                        Github
                                    </Link>
                                    <Link
                                        to={{
                                        pathname: "https://virtual-trader.herokuapp.com/",
                                        }}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="projBtn"
                                    >
                                        Deployed
                                    </Link>
                                </div>
                        </div>
                    </section>
            </main>
            </>
        )
    }
}