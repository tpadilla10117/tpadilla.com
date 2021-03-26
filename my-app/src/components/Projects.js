import React, { Component } from 'react';

export default class Projects extends Component {
    render() {
        return (
            <div>
                {/* This is where you will put the deploy link */}
                <div className="projectheader-div">
                    <h2>Codalorians</h2>
                    <ul className="icons project-icon">
                        <li>
                            {/* This is where you'll put the link to the repo with a github icon */}
                        </li>
                    </ul>
                </div>
                <p>
                    Capstone from Fullstack...
                </p>
                <h4 className="stack-head">Tech-Stack</h4>
                <ul>
                    <li>JS</li>
                    <li>React.js</li>
                    <li>PostgreSQL</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Stripe</li>
                </ul>
                <hr />

            </div>
        )
    }
}