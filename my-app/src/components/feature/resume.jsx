import React  from 'react';
import Resume from "../../../src/assets/images/resume.png";
import './resume.css';

const ResumeComponent = (props) => {

    return <>
        <div className="resume__container">
            <img className="resume__image" src={Resume} alt=""/>
        </div>
    </>

}


export default ResumeComponent;

