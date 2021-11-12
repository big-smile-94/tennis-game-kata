import TennisGame from '../src/TennisGame';

describe('Tennis Game Kata', () => {
  describe('When the game starts', () => {
    test('the score should be love-all', () => {
      console.log('Some log');
      const game = new TennisGame('love-all');
      expect(game.score).toBe('love-all');
    });
  });
});
