import React from 'react';
import './EmailForm.css'
import { SiGithub, SiLinkedin, SiInstagram, SiFacebook  } from "react-icons/si";

const EmailFormComponent = (props) => {

    return <> 
        <div id="component-wrapper">
            <div id="form-wrapper">
                
                <form className="email-form" action="https://formsubmit.co/socratesclown@gmail.com" method="POST">
                    <div className="intro-text">
                        <h5>Want to Get in Touch? <br/> Send me an Email!</h5>
                    </div>
                    <div className="name-input">
                        <div className="input-one">
                            <label for="first-name" className="first-name" required>First Name: </label>
                            <input type="text" className="name-txt-box" placeholder="Sasuke" name="email" required></input>
                        </div>

                        <div className="input-two">
                            <label for="last-name" className="last-name" required>Last Name: </label>
                            <input type="text" className="name-txt-box" placeholder="Uchiha" name="name" required></input>
                        </div>
                    </div>
                    <br/>
                    
                    <div className="email-input">
                        <label for="email" id="email" className="input-two">Email: </label>
                        <input type="email" className="name-txt-box" placeholder="avenger@uchiha.com" name="email"></input>
                    </div>
                    <br/>
                    <div className="_subject">
                        <label for="_subject" className="_subject">Subject </label>
                        <input classname="form-input-box" type="text" name="_subject" /* value="New Email From Personal Site!" *//>
                    </div>
                    <div className="btn-box">
                        <p>By sending a message, you agree to not spam</p>
                        <textarea className="message-text" placeholder="What would you like to ask me?" type="text" name="name"/>
                        <button type="submit" value="Submit">Submit</button>
                    </div>
                    {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input> */}
                    <br/>

                    <br/>
                    <div className="other-content">
                        <p>Check me out on Social Media!</p>
                        {/* 4/4: Look at how i sized the github icon */}
                        <div className="links">
                                <a href="https://github.com/tpadilla10117" className="github">{<SiGithub size={35}/>}</a>
                                <a href="#" className="facebook">{<SiFacebook size={35}/>}</a>
                                <a href="#" className="instagram">{<SiInstagram size={35}/>}</a>
                                <a href="https://www.linkedin.com/in/t-p-101/" className="linkedin">{<SiLinkedin size={35}/>}</a>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    
    </>
}

export default EmailFormComponent;