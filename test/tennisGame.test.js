import TennisGame from '../src/TennisGame';

describe('Tennis Game Kata', () => {
  //TODO: remove the second describe!
  describe('When the game starts', () => {
    test('the score should be love-all', () => {
      const game = new TennisGame('love-all');
      expect(game.score).toBe('love-all');
    });

    test('if player one scores the score should be 15-love', () => {
      const tennis = new TennisGame('love-all').player1Scores();
      expect(tennis.score).toBe('15-love');
    });

    test('if player two scores the score should be love-15', () => {
      const tennis = new TennisGame('love-all').player2Scores();
      expect(tennis.score).toBe('love-15');
    });
  });
});
