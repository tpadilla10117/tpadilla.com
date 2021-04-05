import React, { useEffect, useState } from 'react';
import '../../assets/css/EmailForm.css'

  import { SiGithub, SiLinkedin, SiInstagram, SiFacebook  } from "react-icons/si";



  /* 3/30 - NEEDS TO BE REFACTORED TO REFLECT CUSTOM CSS */
const EmailFormComponent = (props) => {

    return <> 
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
                    <div className="links">
                            <a href="https://github.com/tpadilla10117" className="github">{<SiGithub />}</a>
                            <a href="#" className="facebook">{<SiFacebook />}</a>
                            <a href="#" className="instagram">{<SiInstagram />}</a>
                            <a href="https://www.linkedin.com/in/t-p-101/" className="linkedin">{<SiLinkedin />}</a>
                    </div>
                </div>

            </form>
        </div>
    
    </>
}

export default EmailFormComponent;