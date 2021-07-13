import React from 'react';
import './EmailForm.css';
import { SiGithub, SiLinkedin, SiInstagram, SiFacebook, SiBehance  } from "react-icons/si";

const EmailFormComponent = (props) => {

    return <> 

        
            <div id="form-wrapper">
                
                <form className="email-form" action="https://formsubmit.co/trinpadilla101@gmail.com" method="POST">
                    <div className="intro-text">
                        <h5>Want to Get in Touch? <br/> Send me an Email!</h5>
                    </div>
    
                    <div className="input-one">
                        <label htmlFor="first-name" className="first-name form-label" required>Name: </label>
                        <input type="text" className="txt-box" placeholder="Sasuke Uchiha" name="name" required></input>
                    </div>

                    {/* <div className="input-two">
                        <label htmlFor="last-name" className="last-name" required>Last Name: </label>
                        <input type="text" className="txt-box" placeholder="Uchiha" name="name" required></input>
                    </div> */}
                    
                    
                    <div className="email-input">
                        <label htmlFor="email" id="email" className="form-label">Email: </label>
                        <input type="email" className="txt-box" placeholder="avenger@uchiha.com" name="email"></input>
                    </div>
                    
                    <div className="_subject">
                        <label htmlFor="_subject" className="form-label">Subject: </label>
                        <input className="txt-box" type="text" name="subject" placeholder="S Rank Mission" /* value="New Email From Personal Site!" *//>
                    </div>
                    <div className="btn-box">
                        <p>By sending a message, you agree to not spam</p>
                        <textarea className="message-text" placeholder="What would you like to ask me?" type="text" name="message"/>
                        <button type="submit" className="form-submit" value="Submit">Submit</button>
                    </div>
                    {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input> */}
                    
                    <div className="other-content">
                        {/* <div className="social-txt"><p>Follow</p></div> */}
                        
                        <div className="links">
                                <a href="https://github.com/tpadilla10117" className="github">{<SiGithub size={35}/>}</a>
                                <a href="https://www.instagram.com/tpadilla10117/" className="instagram">{<SiInstagram size={35}/>}</a>
                                <a href="https://www.behance.net/tpadilla10117" className="behance">{<SiBehance size={35}/>}</a>
                                <a href="https://www.linkedin.com/in/t-p-101/" className="linkedin">{<SiLinkedin size={35}/>}</a>
                        </div>
                    </div>

                </form>
            </div>
        
    
    </>
}

export default EmailFormComponent;