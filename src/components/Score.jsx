import React, { Component } from 'react';

class Score extends Component {
  render() {
    const { score } = this.props;

    return (
      <div>
        <div className="hangman">
          <img src={`../../assets/${score}.png`} alt="" />
        </div>

        <div
          className={
            score >= 80
              ? 'highScore'
              : score < 80 && score >= 50
              ? 'mediumScore'
              : 'lowScore'
          }
        >
          {score}
        </div>
      </div>
    );
  }
}

export default Score;
