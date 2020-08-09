import React, { Component } from 'react';

class Score extends Component {
  render() {
    const { score } = this.props;

    return (
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
    );
  }
}

export default Score;
