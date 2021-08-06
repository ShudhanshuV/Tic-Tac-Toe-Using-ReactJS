import React from 'react';

class Result extends React.Component {
    state = {
        tied: "Match tied 🙄",
        playerwin: "Yeah! You won " + this.props.winner + "🤩"
    };

    handleClick = () =>{
        this.props.result(false);
    };

    render(){
        const{winner} = this.props;
        const {tied, playerwin} = this.state;

        return(
            <div className="form-wrapper">
                <div className="form-container">
                    <p>{winner === "Tied" ? tied : playerwin}</p>

                    <button className="btn primary-btn" onClick={this.handleClick}>Play Again</button>
                </div>
            </div>
        );
    }  
}

export default Result;