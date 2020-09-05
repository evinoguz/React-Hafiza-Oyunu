import * as React from 'react';
import { ICard } from "../Types";
export interface IProps {
    card:ICard;
    clickHandler:(card:ICard)=>void;
}
 
const Card: React.FunctionComponent<IProps> = ({card,clickHandler}) => {
    const onClickHandler=()=>{
        card.state="selected"
        clickHandler(card)

    }
        switch (card.state) {
            case "matched":
                return(
                <div className="card mb-3 matched" style={{height:185}}>
                  <div className="card-body text-center" style={{fontSize:100}}>
                  </div>
                </div>
                )
            case "selected":
                return(
                <div className="card mb-3 selected" style={{height:185}}>
                  <div className="card-body text-center" style={{fontSize:100}}>{card.content}
                  </div>
                </div>
                )
            default:
                return(
                <div className="card mb-3 unmatched clickable" style={{height:185}}  onClick={onClickHandler}>
                  <div className="card-body text-center" style={{fontSize:100}}>?
                  </div>
                </div>
                )
        }
        
        
    
}
 
export {Card};