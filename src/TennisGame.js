export default class TennisGame {
  constructor(score) {
    this.score = score;
  }

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
];
