import React, { useEffect, useState } from 'react';
/* import axios from 'axios'; */


/* import '../../assets/css/EmailForm.css' */

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea,
    Button,
    ButtonGroup
  } from "@chakra-ui/react"

  import { SiGithub, SiLinkedin, SiInstagram, SiFacebook  } from "react-icons/si";



  /* 3/30 - NEEDS TO BE REFACTORED TO REFLECT CUSTOM CSS */
const EmailFormComponent = (props) => {

    return <> 
        <div id="form-wrapper">
            <dic className="intro-text">
                <h5>Want to Get in Touch? <br/> Send me an Email!</h5>
            </dic>
            <form className="email-form">
                <FormControl id="first-name" className="input-one" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder="Sasuke" />
                </FormControl>
                <br/>
                <FormControl id="email" className="input-two">
                    <FormLabel>Email</FormLabel>
                    <Input type ="email" placeholder="avenger@uchiha.com" />
                </FormControl>
                <br/>
                <Textarea placeholder="What would you like to ask me?" />
                <ul className="icons contactIcons">
                    <li>{<SiGithub />}</li>
                    <li>{<SiFacebook/>}</li>
                    <li>{<SiInstagram/>}</li>
                    <li> {<SiLinkedin/>}</li>
                </ul>
                <Button mt={4} colorScheme="blue" isLoading={props.isSubmitting} type="submit">Submit</Button>
            </form>
        </div>
    
    </>
}

export default EmailFormComponent;