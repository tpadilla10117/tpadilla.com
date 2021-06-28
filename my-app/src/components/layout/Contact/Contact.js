import React from "react";
import EmailFormComponent from '../../feature/EmailForm/EmailForm.js';
import Skills from '../../feature/SkillList/Skills';
import './Contact.css';


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