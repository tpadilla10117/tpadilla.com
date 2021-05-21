import React , {useState, useEffect} from 'react';
import Image1 from "../../../src/assets/images/trin.jpg";

import './personal_card.css';

/* COMPONENT FOR INTERACTIVE CARDS ON ABOUT ME */
const PersonalCard = (props) => {
   
    const { flip, setFlip, active, isActive } = props;

    /* Functionality works, but need a way to toggle the className "is__flipped" */
    function handleClassToggle(e) {
        e.preventDefault();
        isActive(!active)
        /* setFlip('card__inner is-flipped')
        console.log("the flip from handleCLassToggle:", flip) */
    }
console.log("this is active:", active)

    // for the card flip, need a click handler to target "card__inner"
    console.log("This is from the personl card component:", flip)
        return(
            <div className="card">
                <div className={active ? "card__inner" : `card__inner is-flipped`} onClick={handleClassToggle}>
                    <div className="card__face card__face--front">
                    <h2>Developer Card</h2>
                    </div>

                    <div className="card__face card__face--back">
                    <div className="card__header">
                        <img className="pp" src={Image1} alt=""/>
                        <h2>Trin Padilla</h2>
                    </div>
                    <div className="card__body">
                        <h3>"Hello There"</h3>
                        <p>You've found an easter egg</p>
                    </div>
                    </div>
                </div>


                
            </div>
            
        )
    
}

export default PersonalCard;