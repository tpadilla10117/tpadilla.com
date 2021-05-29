import React  from 'react';
import Resume from "../../../../src/assets/images/resume.png";
import ResumeDl from "../../../../src/assets/resume/FullStackEngGeneralResume.pdf"
import './resume.css';

const ResumeComponent = () => {

    return <>
        <div className="resume__container">
            <a href={ResumeDl} download={ResumeDl}>
                <img className="resume__image" src={Resume} alt="" download={ResumeDl}/>
            </a>
        </div>
    </>

}

export default ResumeComponent;