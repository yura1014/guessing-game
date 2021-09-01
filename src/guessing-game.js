class GuessingGame {
  constructor() {
    this.begin = 0;
    this.end = 0;
  }

  setRange(min, max) {
    this.begin = min;
    this.end = max;
  }

  guess() {
    return Math.ceil((this.begin + this.end) / 2);
  }

  lower() {
    this.end = this.guess();
  }

  greater() {
    this.begin = this.guess();
  }
}

const number = 648;
const game = new GuessingGame();
game.setRange(0, 4010);

let result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();
console.log(result);
module.exports = GuessingGame;

/*
0 4048
2024
game.lower();
0 1011
game.lower();
0 505
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.greater();
result = game.guess();
game.lower(); //will be 380 505
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.greater();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
*/
