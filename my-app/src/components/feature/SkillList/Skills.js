import React from "react";
import './Skills.css';

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
        {/* <div id="skills"></div> */}
        <div className="skills-title">
            <h4>Fullstack UX Engineer</h4>
        </div>
        <div className="skills-container">
            <div className="skills-images" data-aos="fade-in">
                <ul>
                    <li>
                        <SiJavascript
                            size="2.5em"
                            color="yellow"
                            style={ {backgroundColor: "black"}}
                        />
                    </li>
                    <li>
                        <SiHtml5 size="2.5em" color="f06529" />
                    </li>
                    <li>
                        <SiCss3 size="2.5em" color="2965f1" />
                    </li>
                    <li>
                        <AiOutlineConsoleSql size="2.5em" color="#00758F" />
                    </li>
                    <li>
                        <FaReact size="2.5em" color="61DBfB" />
                    </li>
                    <li>
                        <SiJquery size="2.5em" color="#0868AC" />
                    </li>
                    <li>
                        <FaBootstrap size="2.5em" color="563d7c" />
                    </li>
                    <li>
                        <SiPostgresql size="2.5em" color="336791" />
                    </li>
                    <li>
                        <FaNode size="2.5em" color="3C873A" />
                    </li>
                    <li>
                        <FaGithub size="2.5em" color="black" />
                    </li>
                    <li>
                        <FaGitAlt size="2.5em" color="f34f29" />
                    </li>
                    <li>
                        <SiPostman size="2.5em" color="EF5B25" />
                    </li>
                    <li>
                        <SiHeroku size="2.5em" color="6567a5" />
                    </li>
                    <li>
                        <SiNetlify size="2.5em" color="00C7B7" />
                    </li>
                </ul>
                <br />

            </div>

        </div>
        </>
    )
}

export default Skills;