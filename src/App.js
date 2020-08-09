import React, { Component } from 'react';
import './App.css';
import Letters from './components/Letters.jsx';
import Score from './components/Score.jsx';
import Solution from './components/Solution.jsx';
import EndGame from './components/EndGame.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLettersStatus(),
      solution: {
        word: 'mountain',
        hint:
          'What has roots as nobody sees,Is taller than treesUp, up it goes,And yet never grows?',
      },
      score: 80,
    };
  }

  generateLettersStatus() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }

  selectLetter = (letter) => {
    const { letterStatus, solution } = this.state;

    let tempLetters = letterStatus;
    tempLetters[letter] = true;
    this.setState({
      letterStatus: tempLetters,
    });

    let isFound = solution.word
      .split('')
      .find((l) => l.toUpperCase() === letter);

    isFound ? this.upDateScore('plus') : this.upDateScore('minus');
  };

  upDateScore = (operation) => {
    let newScore = this.state.score;
    operation === 'plus' ? (newScore += 10) : (newScore -= 10);
    this.setState({ score: newScore });
  };

  endGame = () => {
    let word = this.state.solution.word.split('').map((l) => l.toUpperCase());
    let allChecked = Object.keys(this.state.letterStatus).every(
      (l) => this.state.letterStatus[l]
    );
    let wordChecked = word.every((l) => this.state.letterStatus[l]);
    return wordChecked ? 'win' : allChecked ? 'lost' : false;
  };

  render() {
    const { letterStatus, solution, score } = this.state;
    return !this.endGame() ? (
      <div>
        <Score score={score} />
        <Solution
          className="solution"
          solution={solution}
          letters={letterStatus}
        />
        <Letters selectLetter={this.selectLetter} letters={letterStatus} />
      </div>
    ) : (
      <div>
        <EndGame status={this.endGame()} />
      </div>
    );
  }
}

export default App;
