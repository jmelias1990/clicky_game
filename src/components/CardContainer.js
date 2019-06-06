import React, {Component} from 'react';
import Card from './Card';
import Pusheens from "./../pusheens.json"
import shuffle from "shuffle-array";

class CardContainer extends Component {

    constructor(props) {
        super(props);

   
        this.state = {
            score: 1,
            pusheens: Pusheens,
            selectedPusheens: []
        };
    }

    

    handleClick = (e) => {

    
        let id = e.target.id;

  
        let exists = false;


        this.state.selectedPusheens.forEach(pusheen => {

   
            if (pusheen.id == id) {
 
       
                exists = true;
            }
        })


        if (exists) {

            this.endGame();
        }


        else {
 
            this.state.pusheens.forEach(pusheen => {
          
                if (pusheen.id == id) {
        
                    this.setState({selectedPusheens: [...this.state.selectedPusheens, pusheen]});
                    console.log(this.state.selectedPusheens);

     
                    this.updateScore();
                }
            })  
        }
        


        this.setState({ pusheens: shuffle(this.state.pusheens)});
        console.log("Shuffling Pusheens");

    }


    updateScore = () => {

        this.setState({score: this.state.score + 1});
  
        this.props.updateCurrentScore(this.state.score);
        console.log("Score: " + this.state.score);
    }


    endGame = () => {
        console.log("End!");

        this.props.updateTopScore(this.state.score);

        this.setState({score: 1, selectedPusheens: []});

        this.props.updateCurrentScore(0);
    }

    render() {
        return (
            <div className="container" id="card-container">
                <div className="row">
                    {Pusheens.map(pusheen => <Card src={pusheen.image} key={pusheen.id} id={pusheen.id} alt={pusheen.name} endGame={this.endGame} handleClick={this.handleClick} score={this.state.score} />)}
                </div>
            </div>
        );
    }
}

export default CardContainer;