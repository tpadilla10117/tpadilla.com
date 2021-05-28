import React from "react";
import EmailFormComponent from '../feature/EmailForm.js';
import Skills from './Skills.js';
import '../../assets/css/Contact.css';


/* RENDERS THE SKILLS AND EMAILFORM COMPONENTS */
const Contact = () => {
    return (
        <>
            <div id="contact">
                <div className="skills">
                    <Skills />
                </div>
                <div className="email">
                    <EmailFormComponent />
                </div>
                
            </div>
        </>
    )
}

export default Contact;