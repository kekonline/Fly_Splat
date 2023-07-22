console.log("Game.js Start");

class Game {
  constructor() {
    this.raquet = new Raquet();
    this.poop = new Poop();
    this.frames = 0;
    this.isGameOn = true;
  }

  gameLoop = () => {
    // console.log("In the Game Loop")
    this.frames++;

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
