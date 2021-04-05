import React from "react";

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
            <p>My Skillz</p>
        </div>
        <div className="skillsContainer">
            <div className="skillsImages" data-aos="fade-in">
                <ul>
                    <li>
                        <SiJavascript
                            size="3em"
                            color="yellow"
                            style={ {backgroundColor: "black"}}
                        />
                    </li>
                </ul>

            </div>

        </div>



        </>
    )
}

export default Skills;