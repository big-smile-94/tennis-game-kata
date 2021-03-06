import TennisGame from '../../src/TennisGame';

const getDescription = (player1Score, player2Score, score) =>
  `player1 scores x${player1Score} and player2 scores x${player2Score}, score will be ${score}`;

const tennisGameScenarios = [
  {
    description: getDescription(0, 0, 'love-all'),
    actualScore: TennisGame.start().getScore(),
    expectedScore: 'love-all',
  },
  {
    description: getDescription(1, 0, '15-love'),
    actualScore: TennisGame.start().player1Scores().getScore(),
    expectedScore: '15-love',
  },
  {
    description: getDescription(0, 1, 'love-15'),
    actualScore: TennisGame.start().player2Scores().getScore(),
    expectedScore: 'love-15',
  },
  {
    description: getDescription(2, 0, '30-love'),
    actualScore: TennisGame.start().player1Scores().player1Scores().getScore(),
    expectedScore: '30-love',
  },
  {
    description: getDescription(1, 1, '15-all'),
    actualScore: TennisGame.start().player1Scores().player2Scores().getScore(),
    expectedScore: '15-all',
  },
  {
    description: getDescription(0, 2, 'love-30'),
    actualScore: TennisGame.start().player2Scores().player2Scores().getScore(),
    expectedScore: 'love-30',
  },
  {
    description: getDescription(3, 0, '40-love'),
    actualScore: TennisGame.start()
      .player1Scores()
      .player1Scores()
      .player1Scores()
      .getScore(),
    expectedScore: '40-love',
  },
  {
    description: getDescription(2, 1, '30-15'),
    actualScore: TennisGame.start()
      .player1Scores()
      .player1Scores()
      .player2Scores()
      .getScore(),
    expectedScore: '30-15',
  },
  {
    description: getDescription(1, 2, '15-30'),
    actualScore: TennisGame.start()
      .player2Scores()
      .player1Scores()
      .player2Scores()
      .getScore(),
    expectedScore: '15-30',
  },
  {
    description: getDescription(0, 3, 'love-40'),
    actualScore: TennisGame.start()
      .player2Scores()
      .player2Scores()
      .player2Scores()
      .getScore(),
    expectedScore: 'love-40',
  },
  {
    description: getDescription(3, 1, '40-15'),
    actualScore: TennisGame.start()
      .player1Scores()
      .player1Scores()
      .player2Scores()
      .player1Scores()
      .getScore(),
    expectedScore: '40-15',
  },
  {
    description: getDescription(2, 2, '30-all'),
    actualScore: TennisGame.start()
      .player2Scores()
      .player1Scores()
      .player2Scores()
      .player1Scores()
      .getScore(),
    expectedScore: '30-all',
  },
  {
    description: getDescription(1, 3, '15-40'),
    actualScore: TennisGame.start()
      .player2Scores()
      .player2Scores()
      .player1Scores()
      .player2Scores()
      .getScore(),
    expectedScore: '15-40',
  },
  {
    description: getDescription(3, 2, '40-30'),
    actualScore: TennisGame.start()
      .player1Scores()
      .player1Scores()
      .player1Scores()
      .player2Scores()
      .player2Scores()
      .getScore(),
    expectedScore: '40-30',
  },
  {
    description: getDescription(2, 3, '30-40'),
    actualScore: TennisGame.start()
      .player1Scores()
      .player1Scores()
      .player2Scores()
      .player2Scores()
      .player2Scores()
      .getScore(),
    expectedScore: '30-40',
  },
  {
    description: getDescription(3, 3, 'deuce'),
    actualScore: TennisGame.start()
      .player1Scores()
      .player1Scores()
      .player1Scores()
      .player2Scores()
      .player2Scores()
      .player2Scores()
      .getScore(),
    expectedScore: 'deuce',
  },
  {
    description: getDescription(4, 3, 'adv 1'),
    actualScore: TennisGame.start()
      .player1Scores()
      .player1Scores()
      .player1Scores()
      .player2Scores()
      .player2Scores()
      .player2Scores()
      .player1Scores()
      .getScore(),
    expectedScore: 'adv 1',
  },
  {
    description: getDescription(3, 4, 'adv 2'),
    actualScore: TennisGame.start()
      .player2Scores()
      .player2Scores()
      .player2Scores()
      .player1Scores()
      .player1Scores()
      .player1Scores()
      .player2Scores()
      .getScore(),
    expectedScore: 'adv 2',
  },
  {
    description: getDescription(5, 3, '1 wins'),
    actualScore: TennisGame.start()
      .player2Scores()
      .player2Scores()
      .player2Scores()
      .player1Scores()
      .player1Scores()
      .player1Scores()
      .player1Scores()
      .player1Scores()
      .getScore(),
    expectedScore: '1 wins',
  },
  {
    description: getDescription(3, 5, '2 wins'),
    actualScore: TennisGame.start()
      .player1Scores()
      .player2Scores()
      .player2Scores()
      .player1Scores()
      .player1Scores()
      .player2Scores()
      .player2Scores()
      .player2Scores()
      .getScore(),
    expectedScore: '2 wins',
  },
  {
    description: getDescription(5, 0, 'Player1 has won the game already!'),
    actualScore: TennisGame.start()
      .player1Scores()
      .player1Scores()
      .player1Scores()
      .player1Scores()
      .player1Scores(),
    expectedScore: 'Player1 has won the game already!',
  },
  {
    description: getDescription(0, 5, 'Player2 has won the game already!'),
    actualScore: TennisGame.start()
      .player2Scores()
      .player2Scores()
      .player2Scores()
      .player2Scores()
      .player2Scores(),
    expectedScore: 'Player2 has won the game already!',
  },
];

export default tennisGameScenarios;
