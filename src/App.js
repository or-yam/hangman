import React, { Component } from 'react';
import './App.css';
import Letters from './components/Letters.jsx';
import Score from './components/Score.jsx';
import Solution from './components/Solution.jsx';
import EndGame from './components/EndGame.jsx';
import riddles from './Riddles';

class App extends Component {
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLettersStatus(),
      solution: {
        word: this.generateRiddle().word,
        hint: this.generateRiddle().hint,
      },
      score: 100,
    };
  }

  generateRiddle() {
    let rndNum = Math.floor(Math.random() * riddles.length);
    let solution = riddles[rndNum];
    return solution;
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
    isFound ? this.updateScore('plus') : this.updateScore('minus');
  };

  updateScore = (operation) => {
    let newScore = this.state.score;
    operation === 'plus' ? (newScore += 10) : (newScore -= 10);
    if (newScore > 100) {
      this.setState({ score: 100 });
    } else {
      this.setState({ score: newScore });
    }
  };

  endGame = () => {
    let word = this.state.solution.word.split('').map((l) => l.toUpperCase());
    let wordChecked = word.every((l) => this.state.letterStatus[l]);
    return wordChecked ? 'win' : !this.state.score ? 'lost' : false;
  };

  rematch = () => {
    this.setState({ score: 100, letterStatus: this.generateLettersStatus() });
  };

  render() {
    const { letterStatus, solution, score } = this.state;
    return !this.endGame() ? (
      <div className="game-container">
        <Score score={score} />
        <div className="letters-container">
          <Letters selectLetter={this.selectLetter} letters={letterStatus} />
        </div>
        <Solution solution={solution} letters={letterStatus} />
      </div>
    ) : (
      <EndGame rematch={this.rematch} status={this.endGame()} />
    );
  }
}

export default App;
