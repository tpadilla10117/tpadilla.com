import React from 'react';

import './personal_card.css';

/* COMPONENT FOR INTERACTIVE CARDS ON ABOUT ME */
class PersonalCard extends React.Component {
   /* constructor(props) {
       super(props);
   } */
   
    
    render() {
        return(
            <div className="card">
                <div className="card__inner">
                    <div className="card__face card__face--front">
                    <h2>Developer Card</h2>
                    </div>

                    <div className="card__face card__face--back">
                    <div className="card__header">
                        <img className="pp" src="" alt=""/>
                        <h2>Trinidad Padilla</h2>
                    </div>
                    <div className="card__body">
                        <h3>Trin P</h3>
                        <p>Lorem ipsum lorem fefefheff fewf ewfew fewfew fewfe, fewfewf ewfew fe wf ewf ewf, few few,f ewf ew,fe . few, few few f ewf ewf ew few few few few fe wf ew few few few,f ewf ewfewfwe,f ewf ewfewfewfewfewfewfewfewfewfewfewfewfewfewfew.</p>
                    </div>
                    </div>
                </div>


                
            </div>
            
        )
    }
}

export default PersonalCard;