import React , {useState, useEffect} from 'react';
import Image1 from "../../../src/assets/images/trin.jpg";

import { CARDS } from "../../utils/index.js";

import './personal_card.css';

/* COMPONENT FOR INTERACTIVE CARDS ON ABOUT ME */
const PersonalCard = (props) => {
   
    const { flip, setFlip, active, setInActive, activeCard, setActiveCard, cardState, changeCardState } = props;

    console.log("what happens when click:", activeCard);

    
/* Helper Function to toggle Active cards */
    function toggleActive(index) {
        changeCardState({...cardState, activeObject: cardState.objects[index]})
    }

/* Helper Function to toggle the classNames that are styled */
    function toggleActiveStyles(index) {
        /* if(cardState.objects[index] === cardState.activeObject) {
            return "card__inner is-flipped active";
        } else {
            return "card__inner";
        } */

        return cardState.objects[index] === cardState.activeObject ? "card__inner is-flipped active" : "card__inner";
    }
    

   

   
    /* console.log("Here is result of mapping cards:", CARDS.map( (classname, index) =>  ) */
    
    /* Toggles the 'active' prop for card flips */
    function handleClassToggle() {
        /* e.preventDefault(); */
        setInActive(!active)
    }

    /* function handleActiveCard(index) {
        setActiveCard([...activeCard])
       
    } */
    

    const cardInfo = [
        { id: 1, name: "card card-1", image: "", header2: "wow", header3: "this", text: "" },
        { id: 2, name: "card card-2",image: "", header2: "yeet", header3: "boi", text: "" },
        { id: 3, name: "card card-3",image: "", header2: "piss", header3:"show" , text: "" }
    ]

    // for the card flip, need a click handler to target "card__inner"
    console.log("This is from the personl card component:", flip)



    const renderCard = (card, index) => {
        return(
            <div className={card.name} key={"card-" + index}>
                <div className={toggleActiveStyles(index)} onClick={() => { toggleActive(index)}}/* {active ? "card__inner" : `card__inner is-flipped active`} onClick={handleClassToggle} */>
                    <div className="card__face card__face--front">
                    <h2>{card.header2}</h2>
                    </div>

                    <div className="card__face card__face--back">
                    <div className="card__header">
                        <img className="pp" src={Image1} alt=""/>
                        <h2>Adventurer</h2>
                    </div>
                    <div className="card__body">
                        <h3>{card.header3}</h3>
                        <p>{card.text}</p>
                    </div>
                    </div>
                </div>
            </div>
            


        )
    }

        return(
            <>
            <div className="card">{cardInfo.map(renderCard)}</div>
            {/* {
                CARDS.map( (cardname, index) =>
                
                <div className="card" key={index}>
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

            } */}

            {/* <div className="card card-1">
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
                <div className={active ? "card__inner" : `card__inner is-flipped`} onClick={handleClassToggle}>
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
                <div className={active ? "card__inner" : `card__inner is-flipped`} onClick={handleClassToggle}>
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
            </div> */}
            
            </>
            
            
        )
    
}

export default PersonalCard;