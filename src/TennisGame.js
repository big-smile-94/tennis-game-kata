export default class TennisGame {
  constructor(score) {
    this.score = score;
  }

  static start = () => new TennisGame('love-all');

  // static init = (score) => new TennisGame(score);

  player1Scores = () =>
    gameState.find((g) => g.score === this.score).nextState.player1;

  player2Scores = () =>
    gameState.find((g) => g.score === this.score).nextState.player2;

  getScore = () => this.score;

  endGame = (Player) => `${Player} has won the game already!`;
}

//TODO: HA - as of now I can't move the gameState to another file and import it here because I will get a circular dependency as both classes will reference each other.
//TODO: HA - Tried the init function to get a new TennisGame and also used the new keyword both don't work
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
  {
    score: '30-love',
    nextState: {
      player1: new TennisGame('40-love'),
      player2: new TennisGame('30-15'),
    },
  },
  {
    score: '15-all',
    nextState: {
      player1: new TennisGame('30-15'),
      player2: new TennisGame('15-30'),
    },
  },
  {
    score: 'love-30',
    nextState: {
      player1: new TennisGame('15-30'),
      player2: new TennisGame('love-40'),
    },
  },
  {
    score: '40-love',
    nextState: {
      player1: new TennisGame('1 wins'),
      player2: new TennisGame('40-15'),
    },
  },
  {
    score: '30-15',
    nextState: {
      player1: new TennisGame('40-15'),
      player2: new TennisGame('30-all'),
    },
  },
  {
    score: '15-30',
    nextState: {
      player1: new TennisGame('30-all'),
      player2: new TennisGame('15-40'),
    },
  },
  {
    score: 'love-40',
    nextState: {
      player1: new TennisGame('15-40'),
      player2: new TennisGame('2 wins'),
    },
  },
  {
    score: '40-15',
    nextState: {
      player1: new TennisGame('1 wins'),
      player2: new TennisGame('40-30'),
    },
  },
  {
    score: '30-all',
    nextState: {
      player1: new TennisGame('40-30'),
      player2: new TennisGame('30-40'),
    },
  },
  {
    score: '15-40',
    nextState: {
      player1: new TennisGame('30-40'),
      player2: new TennisGame('2 wins'),
    },
  },
  {
    score: '40-30',
    nextState: {
      player1: new TennisGame('1 wins'),
      player2: new TennisGame('deuce'),
    },
  },
  {
    score: '30-40',
    nextState: {
      player1: new TennisGame('deuce'),
      player2: new TennisGame('2 wins'),
    },
  },
  {
    score: 'adv 1',
    nextState: {
      player1: new TennisGame('1 wins'),
      player2: new TennisGame('deuce'),
    },
  },
  {
    score: 'deuce',
    nextState: {
      player1: new TennisGame('adv 1'),
      player2: new TennisGame('adv 2'),
    },
  },
  {
    score: 'adv 2',
    nextState: {
      player1: new TennisGame('deuce'),
      player2: new TennisGame('2 wins'),
    },
  },
  {
    score: '1 wins',
    nextState: {
      player1: new TennisGame('1 wins').endGame('Player1'),
      player2: new TennisGame('deuce').endGame('Player1'),
    },
  },
  {
    score: '2 wins',
    nextState: {
      player1: new TennisGame('deuce').endGame('Player2'),
      player2: new TennisGame('2 wins').endGame('Player2'),
    },
  },
];
