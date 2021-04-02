import React, { useEffect, useState, Component } from 'react';

import '../../assets/css/Portfolio.css';

/* EXAMPLE of IMPORTING IMAGES */

/* import Image1 from "../../../src/assets/virtual-traders.png";
import Image2 from "../../../src/assets/fitness-tracker.png";
import Image3 from "../../../src/assets/strangers-things.png"; */

import { Link, NavLink } from 'react-router-dom';

export default class Portfolio extends Component {
    render() {
        return (
            /* same as container */
            <main id="about-wrapper">
                {/* <div className="hobby1div"> */}
                    <section className="card" data-aos="fade-right">
                        {/* <img src={Image1} alt="virtual-velocity" loading="lazy" id="left-image">
                        
                        </img> */}
                        <div>
                            <h3>Codalorians Shop</h3>
                                <p>This is ahfewhhqwvuihrehvbiurephqbvirehbqfirebkfqbrefberbferbhfrefiueqhfheriqfbeiwp
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


                    {/* <h2 className="hobby1">Guitar & Pro Audio</h2>
                    <hr/>
                   
                   
                    <p> Programming is my vocation of choice for the foreseeable future; however, <em><strong>music</strong></em> is my true passion.  I've played guitar for over 10 years and strive to continuously push my limits.  In addition, I have studied Audio Engineering and enjoy mixing & creating tracks in my spare time.  A typical routine involves drilling finger dexterity, arpeggios, and learning new chord voicings.  Once I am warmed-up, I practice "freestyling" over jam-tracks that other musicians have shared over the internet.  The last hour of practice consists of repertoire learning, of which I generally seek more challenging pieces. </p>  */}
                {/* </div> */}
                
                <div className="hobby1div">
                    <section>
                        <h1>When I'm not coding, I do my best to invest in myself & build upon my skillsets</h1><hr/>
                    </section>
                    <h2 className="hobby1">Guitar & Pro Audio</h2>
                    <hr/>
                   
                    <img className="guitar" src="https://cdn.mos.cms.futurecdn.net/nehUr3a7ijCq4hTkfjQT7U-1024-80.jpg" alt="Guitar Player" width="200" height="150" />
                    <p> Programming is my vocation of choice for the foreseeable future; however, <em><strong>music</strong></em> is my true passion.  I've played guitar for over 10 years and strive to continuously push my limits.  In addition, I have studied Audio Engineering and enjoy mixing & creating tracks in my spare time.  A typical routine involves drilling finger dexterity, arpeggios, and learning new chord voicings.  Once I am warmed-up, I practice "freestyling" over jam-tracks that other musicians have shared over the internet.  The last hour of practice consists of repertoire learning, of which I generally seek more challenging pieces. </p> 
                </div>
            </main>
        )
    }
}