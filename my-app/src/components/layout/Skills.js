import React from "react";
import '../../assets/css/Skills.css';

import {
    SiJavascript,
    SiJquery,
    SiCss3,
    SiHtml5,
    SiPostgresql,
    SiHeroku,
    SiNetlify,
    SiPostman
} from "react-icons/si";

import {
    FaNode,
    FaReact,
    FaBootstrap,
    FaGithub,
    FaGitAlt
} from "react-icons/fa";

import { AiOutlineConsoleSql } from "react-icons/ai";

const Skills = () => {
    return (
        <>
        <div id="skills"></div>
        <div>
            <hr id="lineBreak"></hr>
        </div>
        <div className="skills-title">
            <p>Fullstack UX Engineer</p>
        </div>
        <div className="skills-container">
            <div className="skills-images" data-aos="fade-in">
                <ul>
                    <li>
                        <SiJavascript
                            size="3em"
                            color="yellow"
                            style={ {backgroundColor: "black"}}
                        />
                    </li>
                    <li>
                        <SiHtml5 size="3em" color="f06529" />
                    </li>
                    <li>
                        <SiCss3 size="3em" color="2965f1" />
                    </li>
                    <li>
                        <AiOutlineConsoleSql size="3em" color="#00758F" />
                    </li>
                    <li>
                        <FaReact size="3em" color="61DBfB" />
                    </li>
                    <li>
                        <SiJquery size="3em" color="#0868AC" />
                    </li>
                    <li>
                        <FaBootstrap size="3em" color="563d7c" />
                    </li>
                    <li>
                        <SiPostgresql size="3em" color="336791" />
                    </li>
                    <li>
                        <FaNode size="3em" color="3C873A" />
                    </li>
                    <li>
                        <FaGithub size="3em" color="black" />
                    </li>
                    <li>
                        <FaGitAlt size="3em" color="f34f29" />
                    </li>
                    <li>
                        <SiPostman size="3em" color="EF5B25" />
                    </li>
                    <li>
                        <SiHeroku size="3em" color="6567a5" />
                    </li>
                    <li>
                        <SiNetlify size="3em" color="00C7B7" />
                    </li>
                </ul>
                <br />
                <div className="skill-list" data-aos="fade-down">
                    <b>
                        Languages: Javascript
                        <br />
                        Frameworks/Libraries: React, JQuery, BootStrap 4 / React BootStrap
                        <br />
                        Database: PostgreSQL
                        <br />
                        Additional Tools: Node.js, Githun, Git, Postman, Heroku, Netlify
                    </b>
                </div>

            </div>

        </div>

        <div className="skills-title">
            <p>Audio Engineer / Musician</p>
        </div>
        <div className="skills-container">
            <div className="skills-images" data-aos="fade-in">
                <ul>
                    <li>
                        <SiJavascript
                            size="3em"
                            color="yellow"
                            style={ {backgroundColor: "black"}}
                        />
                    </li>
                    
                </ul>
                <br />
                <div className="skill-list" data-aos="fade-down">
                    <b>
                        DAW: Avid ProTools, Logic
                        <br />
                        Instruments: Electric Guitar, Acoustic Guitar, Piano
                        <br />
                        Database: PostgreSQL
                        <br />
                        Additional Tools: Node.js, Githun, Git, Postman, Heroku, Netlify
                    </b>
                </div>

            </div>

        </div>



        </>
    )
}

export default Skills;