import React from 'react';
import { Card } from './components/Card';
import { ICard } from "./Types";
import { data } from "./data";
interface IState{
    cards: ICard[];

}

class CardDesk  extends React.Component<{},IState>{
    selectedCardIds:number[]=[];
    selectedCards:ICard[]=[];
    state:IState={
        cards:data
    }
    cardClickHandler=(card:ICard)=>{
        const { cards }=this.state;
        if(this.selectedCardIds.length<2){
            this.selectedCardIds.push(card.id);
            this.selectedCards.push(card);
            this.setState({
                ...this.state,
                cards:cards.map(c => c.id === card.id ? card:c)
            });
        }
        if(this.selectedCardIds.length === 2){
            setTimeout(() => {
                
            let newCards:ICard[]=[];
            if(this.selectedCards[0].content === this.selectedCards[1].content){
                newCards=cards.map(c=>{
                    if(this.selectedCardIds.includes(c.id)){
                        c.state="matched"
                    }
                    return c;
                })
            }
            else{
                newCards=cards.map(c=>{
                    if(this.selectedCardIds.includes(c.id)){
                        c.state="unmatched"
                    }
                    return c;
                })
            }
            setTimeout(() => {
                this.selectedCardIds=[];
            this.selectedCards=[];
            this.setState({
                ...this.state,
                cards:newCards
            })
            }, 500);
            }, 250);
        }
    }
    render() { 
        const cardList=this.state.cards.map(c=>(<Card key={c.id} card={c} clickHandler={this.cardClickHandler}/>))
        return ( 
            <div className="container p3- bg-dark">
                <div className="card-columns" style={{columnCount:3}}>
                    {cardList}
                </div>
            </div>
            

         );
    }
}
 
export {CardDesk} ;