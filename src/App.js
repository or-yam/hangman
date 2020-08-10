import React, { Component } from 'react';
import './App.css';
import Letters from './components/Letters.jsx';
import Score from './components/Score.jsx';
import Solution from './components/Solution.jsx';
import EndGame from './components/EndGame.jsx';

const riddles = [
  {
    word: 'mountain',
    hint:
      'What has roots as nobody sees, Is taller than trees, Up, up it goes,And yet never grows?',
  },
  {
    word: 'Teeth',
    hint:
      'Thirty white horses on a red hill, First they champ, Then they stamp, Then they stand still.',
  },
  {
    word: 'Wind',
    hint:
      'Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.',
  },
  {
    word: 'Sun',
    hint:
      'An eye in a blue face Saw an eye in a green face. "That eye is like to this eye" Said the first eye,"But in low place,Not in high place."',
  },
  {
    word: 'Dark',
    hint:
      'It cannot be seen, cannot be felt, Cannot be heard, cannot be smelt. It lies behind stars and under hills, And empty holes it fills. It comes first and follows after, Ends life, kills laughter.',
  },
  {
    word: 'Egg',
    hint:
      'A box without hinges, key, or lid, Yet golden treasure inside is hid.',
  },
  {
    word: 'Time',
    hint:
      'This thing all things devours: Birds, beasts, trees, flowers; Gnaws iron, bites steel; Grinds hard stones to meal; Slays king, ruins town, And beats high mountain down.',
  },
];
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

    isFound ? this.upDateScore('plus') : this.upDateScore('minus');
  };

  upDateScore = (operation) => {
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
        <div className="stats-container"></div>
        <div className="score-container">
          {' '}
          <Score score={score} />
        </div>
        <div className="letters-container">
          {' '}
          <Letters selectLetter={this.selectLetter} letters={letterStatus} />
        </div>
        <div className="solution-container">
          {' '}
          <Solution solution={solution} letters={letterStatus} />{' '}
        </div>
      </div>
    ) : (
      <div>
        <EndGame rematch={this.rematch} status={this.endGame()} />
      </div>
    );
  }
}

export default App;
