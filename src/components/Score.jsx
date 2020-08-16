import React, { Component } from 'react';

class Score extends Component {
  render() {
    const { score } = this.props;

    return (
      <div className="score-container">
        <div className="hangman">
          <h1>Riddles from The Hobbit</h1>
          <img src={`../../assets/${score}.png`} alt="" />
        </div>

        <div
          className={
            score >= 80
              ? 'highScore score'
              : score < 80 && score >= 50
              ? 'mediumScore score'
              : 'lowScore score'
          }
        >
          {score}
        </div>
      </div>
    );
  }
}

export default Score;
