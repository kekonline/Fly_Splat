console.log("Game.js Start");

class Game {
  constructor() {
    this.raquet = new Raquet();
    this.poop = new Poop();
    this.frames = 0;
    this.isGameOn = true;
    //STORE SPAWNED FLIES
    this.fliesArray = [];
  }

  fliesSpawn = () => {
    if (this.fliesArray.length === 0) {
      this.randomWallUpRightDownLeft = Math.floor(Math.random() * 4);
      this.randomWidth = Math.floor(Math.random() * 1280);
      this.randomHeight = Math.floor(Math.random() * 720);

      // console.log(randomWallUpRightDownLeft)

      //console.log("Spawned A Fly")
      let newFly = new Fly(
        this.randomWallUpRightDownLeft,
        this.randomWidth,
        this.randomHeight
      );
      this.fliesArray.push(newFly);
      console.log(gameBoxNode.offsetWidth);
      console.log(gameBoxNode.offsetHeight);
    }
  };

  gameLoop = () => {
    // console.log("In the Game Loop")
    this.frames++;
    this.fliesSpawn();

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
