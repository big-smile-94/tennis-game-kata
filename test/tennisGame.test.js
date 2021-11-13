import TennisGame from '../src/TennisGame';

describe('Tennis Game Kata', () => {
  test('the score should be love-all', () => {
    const game = TennisGame.init();
    expect(game.score).toBe('love-all');
  });

  test('if player one scores the score should be 15-love', () => {
    const game = TennisGame.init().player1Scores();
    expect(game.score).toBe('15-love');
  });

  test('if player two scores the score should be love-15', () => {
    const game = TennisGame.init().player2Scores();
    expect(game.score).toBe('love-15');
  });

  test('if player one scores two times the score should be 30-love', () => {
    const game = TennisGame.init().player1Scores().player1Scores();
    expect(game.score).toBe('30-love');
  });
});
