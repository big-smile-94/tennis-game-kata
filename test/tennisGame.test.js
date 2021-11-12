import TennisGame from '../src/TennisGame';

describe('Tennis Game Kata', () => {
  //TODO: remove the second describe!
  describe('When the game starts', () => {
    test('the score should be love-all', () => {
      console.log('Some log');
      const game = new TennisGame('love-all');
      expect(game.score).toBe('love-all');
    });

    test('if player one scores the score should be 15-love', () => {
      const tennis = new TennisGame('love-love').player1Scores();
      expect(tennis.score).toBe('15-love');
    });
  });
});
