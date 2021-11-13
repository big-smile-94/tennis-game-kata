import TennisGame from '../src/TennisGame';

const generateDescription = (player1Score, player2Score, score) =>
  `player1 scores x${player1Score} and player2 scores x${player2Score}, score will be ${score}`;

const scenarios = [
  {
    description: generateDescription(0, 0, 'love-all'),
    game: TennisGame.init(),
    expectedScore: 'love-all',
  },
  {
    description: generateDescription(1, 0, '15-love'),
    game: TennisGame.init().player1Scores(),
    expectedScore: '15-love',
  },
  {
    description: generateDescription(0, 1, 'love-15'),
    game: TennisGame.init().player2Scores(),
    expectedScore: 'love-15',
  },
  {
    description: generateDescription(2, 0, '30-love'),
    game: TennisGame.init().player1Scores().player1Scores(),
    expectedScore: '30-love',
  },
  {
    description: generateDescription(1, 1, '15-all'),
    game: TennisGame.init().player1Scores().player2Scores(),
    expectedScore: '15-all',
  },
  {
    description: generateDescription(0, 2, 'love-30'),
    game: TennisGame.init().player2Scores().player2Scores(),
    expectedScore: 'love-30',
  },
  {
    description: generateDescription(3, 0, '40-love'),
    game: TennisGame.init().player1Scores().player1Scores().player1Scores(),
    expectedScore: '40-love',
  },
  {
    description: generateDescription(2, 1, '30-15'),
    game: TennisGame.init().player1Scores().player1Scores().player2Scores(),
    expectedScore: '30-15',
  },
  {
    description: generateDescription(1, 2, '15-30'),
    game: TennisGame.init().player2Scores().player1Scores().player2Scores(),
    expectedScore: '15-30',
  },
  {
    description: generateDescription(0, 3, 'love-40'),
    game: TennisGame.init().player2Scores().player2Scores().player2Scores(),
    expectedScore: 'love-40',
  },
];

describe('Tennis Game Kata', () => {
  scenarios.forEach(({ description, game, expectedScore }) => {
    test(description, () => {
      expect(game.score).toBe(expectedScore);
    });
  });
});
