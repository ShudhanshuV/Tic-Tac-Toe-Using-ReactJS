import React from 'react'

class Login extends React.Component {
    state ={
        player1: "",
        player2: "",
    }

    handleChange=(event) =>{
        console.log(event.target.value);

        let player = event.target.id;
        this.setState({ [player]: event.target.value});
    }

    handleClick = (event) => {
        event.preventDefault();
        const {player1, player2} = this.state;
        this.props.names(player1, player2);
    }
    
    render(){
        return(
            <div className="form-wrapper">
                <div className="form-container">
                    <form>
                        <h1>Please enter player's name:</h1>
                        <div className="form-group">
                            <label>Player 1:</label>
                            <input type="name" id="player1" className="form-input" onChange={this.handleChange} required/>
                            <br/>
                            <label>Player 2:</label>
                            <input type="text" id="player2" className="form-input" onChange={this.handleChange} required/>
                        </div>

                        <button className="btn primary-btn" onClick={this.handleClick}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;