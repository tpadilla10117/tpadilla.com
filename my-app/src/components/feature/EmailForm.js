import React from 'react';
import '../../assets/css/EmailForm.css'
import Skills from '../layout/Skills';
import { SiGithub, SiLinkedin, SiInstagram, SiFacebook  } from "react-icons/si";



  /* 3/30 - NEEDS TO BE REFACTORED TO REFLECT CUSTOM CSS */
const EmailFormComponent = (props) => {

    return <> 
        <div id="component-wrapper">
            {/* <div className="skills-component"> <Skills /> </div> */}
            <div id="form-wrapper">
                
                <form className="email-form">
                    <div className="intro-text">
                        <h5>Want to Get in Touch? <br/> Send me an Email!</h5>
                    </div>
                    <div className="name-input">
                        <div id="input-one">
                            <label for="first-name" className="first-name" required>First Name: </label>
                            <input type="text" placeholder="Sasuke"></input>
                        </div>

                        <div id="input-two">
                            <label for="last-name" className="last-name" required>Last Name: </label>
                            <input type="text" placeholder="Uchiha"></input>
                        </div>
                    </div>
                    <br/>
                    <div className="email-input">
                        <label for="email" id="email" className="input-two">Email: </label>
                        <input type="email" placeholder="avenger@uchiha.com" name="email"></input>
                    </div>
                    <div className="btn-box">
                        <p>By sending a message, you agree to not spam</p>
                        <textarea className="message-text" placeholder="What would you like to ask me?" />
                        <button type="submit" value="Submit">Submit</button>
                    </div>
                    <br/>

                    {/* <textarea placeholder="What would you like to ask me?" /> */}

                    <br/>
                    <div className="other-content">
                        <p>Check me out on Social Media!</p>
                        {/* 4/4: Look at how i sized the github icon */}
                        <div className="links">
                                <a href="#" className="github">{<SiGithub /* size={70} *//>}</a>
                                <a href="#" className="facebook">{<SiFacebook />}</a>
                                <a href="#" className="instagram">{<SiInstagram />}</a>
                                <a href="https://www.linkedin.com/in/t-p-101/" className="linkedin">{<SiLinkedin />}</a>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    
    </>
}

export default EmailFormComponent;