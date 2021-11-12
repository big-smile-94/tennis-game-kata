class TenisGame {
  constructor(score) {
    this.score = score;
  }
}

describe('Tennis Game Kata', () => {
  describe('When the game starts', () => {
    test('the score should be love-all', () => {
      const game = new TenisGame('love-all');
      expect(game.score).toBe('love-all');
    });
  });
});
