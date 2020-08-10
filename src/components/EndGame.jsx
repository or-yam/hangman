import React, { Component } from 'react';

class EndGame extends Component {
  render() {
    return (
      <div className="end-game">
        <div className="back-container">
          <button onClick={this.props.rematch}>
            <img
              alt="back"
              src="https://img.icons8.com/color/30/000000/replay.png"
            />
          </button>
          Rematch
        </div>
        {this.props.status === 'win' ? (
          <div className="win-container">
            You Won!{' '}
            <span role="img" aria-label="sad">
              😄
            </span>{' '}
          </div>
        ) : (
          <div className="lost-container">
            You Lost{' '}
            <span role="img" aria-label="sad">
              😔
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default EndGame;
