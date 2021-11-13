export default class TennisGame {
  constructor(score) {
    this.score = score;
  }

  static init = () => {
    return new TennisGame('love-all');
  };

  player1Scores() {
    return gameState.find((g) => g.score === this.score).nextState.player1;
  }

  player2Scores() {
    return gameState.find((g) => g.score === this.score).nextState.player2;
  }
}

const gameState = [
  {
    score: 'love-all',
    nextState: {
      player1: new TennisGame('15-love'),
      player2: new TennisGame('love-15'),
    },
  },
  {
    score: '15-love',
    nextState: {
      player1: new TennisGame('30-love'),
      player2: new TennisGame('15-all'),
    },
  },
  {
    score: 'love-15',
    nextState: {
      player1: new TennisGame('15-all'),
      player2: new TennisGame('love-30'),
    },
  },
];
