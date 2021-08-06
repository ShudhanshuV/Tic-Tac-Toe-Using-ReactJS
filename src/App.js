import React from 'react';
import Login from './components/Login';
import Result from './components/Result';
import Nav from './components/Nav';
import Game from './components/Game';
import './App.css';

class App extends React.Component {
  state = {
    ties: 0,
    userName1: "Player1",
    userName2: "Player2",
    winner: "",
    player1: 0,
    player2: 0,
    showLogin: true,
    showResult: false
  };

  handleScore = (player) => {
    const {userName1, userName2} = this.state;
    let winner;

    if(player === "player1") {
      winner = userName1
    } else if (player === "player2") {
      winner = userName2
    } else {
      winner = "Tied"
    }

    this.setState ({
      [player]: this.state[player] + 1,
      winner: winner
    })
  }

  handleName = (player1, player2) => {
    this.setState({
      userName1: player1,
      userName2: player2,
      showLogin: false
    })
  }

  handleResult = (input) => {
    this.setState({
      showResult: input
    })
  }

  render(){
    const {
      ties,
      player1,
      player2,
      showLogin,
      userName1,
      userName2,
      showResult,
      winner
    } = this.state

    return (
      <div className="App">
          {showResult ? (<Result winner={winner} result= {this.handleResult} />) : null}

          {showLogin ? <Login names={this.handleName} /> : null}

          <Nav 
            ties={ties}
            userName1 ={userName1}
            userName2 = {userName2}
            player1 = {player1}
            player2 = {player2}
          />

          <Game
            userName1 = {userName1}
            userName2 = {userName2}
            result = {this.handleResult}
            handleScore = {this.handleScore}
          />
      </div>
    )
  }
}


export default App;
