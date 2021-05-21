import React , {useState, useEffect} from 'react';
import Image1 from "../../../src/assets/images/trin.jpg";

import './personal_card.css';

/* COMPONENT FOR INTERACTIVE CARDS ON ABOUT ME */
const PersonalCard = (props) => {
   
    const { flip, setFlip, active, isActive } = props;

    /* Toggles the 'active' prop for card flips */
    function handleClassToggle(e) {
        e.preventDefault();
        isActive(!active)
    }
    
console.log("this is active:", active)

    // for the card flip, need a click handler to target "card__inner"
    console.log("This is from the personl card component:", flip)
        return(
            <>
            <div className="card card-1">
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

            <div className="card card-2">
                <div className={active ? "card__inner2" : `card__inner2 is-flipped2`} onClick={handleClassToggle}>
                    <div className="card__face card__face--front">
                    <h2>Yeet</h2>
                    </div>

                    <div className="card__face card__face--back">
                    <div className="card__header">
                        <img className="pp" src={Image1} alt=""/>
                        <h2>Guitarist</h2>
                    </div>
                    <div className="card__body">
                        <h3>"In the Deepest Ocean..."</h3>
                        <p>You've found an easter egg</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="card card-3">
                <div className={active ? "card__inner3" : `card__inner3 is-flipped3`} onClick={handleClassToggle}>
                    <div className="card__face card__face--front">
                    <h2>Stoop</h2>
                    </div>

                    <div className="card__face card__face--back">
                    <div className="card__header">
                        <img className="pp" src={Image1} alt=""/>
                        <h2>Adventurer</h2>
                    </div>
                    <div className="card__body">
                        <h3>"One Does Not Simply Walk Into Mordor..."</h3>
                        <p>You've found an easter egg</p>
                    </div>
                    </div>
                </div>
            </div>
            
            </>
            
            
        )
    
}

export default PersonalCard;