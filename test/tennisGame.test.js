import TennisGame from '../src/TennisGame';

const scenarios = [
  {
    description: 'the score should be love-all when the game starts',
    game: TennisGame.init(),
    expectedScore: 'love-all',
  },
  {
    description: 'player1 scores the first time, the score should be 15-love',
    game: TennisGame.init().player1Scores(),
    expectedScore: '15-love',
  },
  {
    description: 'player2 scores the first time, the score should be 15-love',
    game: TennisGame.init().player2Scores(),
    expectedScore: 'love-15',
  },
  {
    description: 'player1 scores the two times, the score should be 15-love',
    game: TennisGame.init().player1Scores().player1Scores(),
    expectedScore: '30-love',
  },
];

describe('Tennis Game Kata', () => {
  scenarios.forEach(({ description, game, expectedScore }) => {
    test(description, () => {
      expect(game.score).toBe(expectedScore);
    });
  });
});
