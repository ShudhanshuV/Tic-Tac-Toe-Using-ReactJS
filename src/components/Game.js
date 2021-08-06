import React from 'react';
import Board from "./Board";

class Game extends React.Component {
    state ={
        player1: true,
        player2: false,
        check: true
    };

    handleTurn = (firstPlayer, firstBoolean, secondPlayer, secondBoolean) => {
        this.setState({
            [firstPlayer]: firstBoolean,
            [secondPlayer]: secondBoolean
        })
    }

    render(){
        const {player1, player2} = this.state;
        const {userName1, userName2, result} = this.props;

        return(
            <div className="game">
                <p>Your turn now, {player1 ? userName1 : userName2}</p>

                <Board
                    turn = {this.handleTurn}
                    player1 = {player1}
                    player2 = {player2}
                    handleScore = {this.props.handleScore}
                    result={result}
                /> 

            </div>
        )
    }
    
}

export default Game;
