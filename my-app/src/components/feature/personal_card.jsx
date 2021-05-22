import React  from 'react';
import Hike from "../../../src/assets/images/hike.jpeg";
import GuitarSelfie from "../../../src/assets/images/GuitarSelfie.jpeg";
import mtdiablo from "../../../src/assets/images/mtdiablo.jpeg";
import SanDiego from "../../../src/assets/images/SanDiego.jpeg";

import './personal_card.css';

/* COMPONENT FOR INTERACTIVE CARDS ON ABOUT ME */
const PersonalCard = (props) => {
   
    const { cardState, changeCardState } = props;

    
/* Helper Function to toggle Active cards */
    function toggleActive(index) {
        changeCardState({...cardState, activeObject: cardState.objects[index]})
    }

/* Helper Function to toggle the classNames that are styled */
    function toggleActiveStyles(index) {
        return cardState.objects[index] === cardState.activeObject ? "card__inner is-flipped active" : "card__inner";
    }
    
    

    const cardInfo = [
        { id: 1, name: "card card-1", image: `${Hike}`, frontHeader: "Fitness", backHeader2: '"Health is Wealth"', backHeader3: "Peace of Mind", text: "My greatest competitor is myself.  I don't compete with anyone.  Instead, I strive to push myself and constantly improve" },
        { id: 2, name: "card card-2",image: `${GuitarSelfie}`, frontHeader: "Guitarist", backHeader2: '"In the Deepest Ocean..."', backHeader3: "Music", text: "In my spare time I like to jam" },
        { id: 3, name: "card card-3",image: `${SanDiego}`, frontHeader: "Adventurer", backHeader2:'"One Does Not Simply Walk into Mordor..."' , backHeader3: "Traversing the Earth", text: "As a suburb kid, I've dreamed of leaving my confounds and..." }
    ]


    const renderCard = (card, index) => {
        return(
            <div className={card.name} key={"card-" + index}>
                <div className={toggleActiveStyles(index)} onClick={() => { toggleActive(index)}}/* {active ? "card__inner" : `card__inner is-flipped active`} onClick={handleClassToggle} */>
                    <div className="card__face card__face--front">
                    <h2>{card.frontHeader}</h2>
                    {/* <img className="" src={card.image} alt=""/> */}
                    </div>

                    <div className="card__face card__face--back">
                    <div className="card__header">
                        <img className="pp" src={card.image} alt=""/>
                        <h2>{card.backHeader2}</h2>
                    </div>
                    <div className="card__body">
                        <h3>{card.backHeader3}</h3>
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
            </>
            
            
        )
    
}

export default PersonalCard;