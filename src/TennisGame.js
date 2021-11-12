export default class TennisGame {
  constructor(score) {
    this.score = score;
  }

  player1Scores() {
    return new TennisGame('15-love');
  }
}
