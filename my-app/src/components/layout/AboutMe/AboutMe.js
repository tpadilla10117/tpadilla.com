import React from 'react';

import './AboutMe.css';
import PersonalCard from '../../feature/personal_card.jsx';
import Trin from "../../../../src/assets/images/trin.jpg";
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
                                <p>Me, currently being a dweeb</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="sideBio">
                    <h1 className="about-heading">{/* L.O.A.D.I.N.G. */}Hello There!</h1><br/>
                    <h3>{/* Lead On Aspiring Dreamer In Neverending Glory */}Full Stack UX Engineer in Training</h3><br/>
                    <p>I'm a Jack-of-All-Trades: "Master of None though oftentimes better than a Master of One" type who's dediciated his life to both learning and specializing in the following trades: UX Design, Full Stack Web Development, and Pro Audio.  I find myself fascinated with both the creative arts and problem solving, which began when I picked up my first guitar at 16-years-old and continues with each line of code I write.  When I'm not grooving out to a funk jam, you can find me "turtling", (slowly perfecting my craft), it up behind a code editor or DAW.  I have a knack for rapid ideation and creativity in both music and UX design, especially in audio production and frontend development.  Like music, users experience web-applications every day, and one of my many responsibilities is to ensure those user experiences are profound, memorable, and inutitive (to name a few).  Whether behind a guitar, ProTools, pen & paper, Figma, or a code-editor, it's my duty to convey these experiences.   </p>
                    <br/><hr/>
                    <div className="links-about">
                                <a href="https://github.com/tpadilla10117" className="github">{<SiGithub size={45}/>}</a>
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