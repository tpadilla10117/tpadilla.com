import React from 'react';

import '../../assets/css/AboutMe.css';
import PersonalCard from './personal_card.jsx';
import Trin from "../../../src/assets/images/trin.jpg";
import { SiGithub, SiLinkedin, SiInstagram, SiFacebook  } from "react-icons/si";

const AboutMeComponent = (props) => {

    const { cardState, changeCardState } = props;

    return <> 
        <div id="mainPage-wrapper">
            <div id="bio-wrapper">

            {/* THIS IS FOR THE IMAGE OF ME*/}
                <div className="overlay-practice">
                    <div className="img-box">
                        <div className="img-container">
                            <img src={Trin} className="about-picture" alt="Trin Padilla" loading="lazy" id="left-image"></img>
                            
                        </div>
                        <div className="img-content">
                            <div>
                                <p>"Hello There"</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="sideBio">
                    <h1 className="about-heading">L.O.A.D.I.N.G.</h1><br/>
                    <h3>Lead On Aspiring Dreamer In Neverending Glory</h3><br/>
                    <p>I'm a Jack-of-All-Trades: "Master of None though oftentimes better than a Master of One" type who's dediciated his life to learning and specializing in a handful of trades.  I find myself fascinated with both the creative arts and problem solving, which began when I picked up my first guitar at 16-years-old.  When I'm not melting faces with a rock solo or grooving out to a funk jam, you can find me "turtling" (yes - it's a thing!) it up behind a code editor or DAW.  I have a knack for rapid ideation in both music and design, especially in audio production and on digital mediums.  Like music and audio, users experience web-applications every day, and one of my many responsibilities is to ensure those experiences are profound, memorable, and inutitive (to name a few).  Whether behind a guitar, ProTools, pen & paper, or a code-editor, it's my duty to convey these experiences.   </p>
                    <br/><hr/><br/><br/>
                    <div className="links-about">
                                <a href="#" className="github">{<SiGithub size={45}/>}</a>
                                <a href="#" className="facebook">{<SiFacebook size={45}/>}</a>
                                <a href="#" className="instagram">{<SiInstagram size={45}/>}</a>
                                <a href="https://www.linkedin.com/in/t-p-101/" className="linkedin">{<SiLinkedin size={45}/>}</a>
                    </div>
                </div>
            </div>

            <div className="container">
                <PersonalCard cardState={cardState} changeCardState={changeCardState}/>
            </div>
            
        </div>
    
    </>
}

export default AboutMeComponent;