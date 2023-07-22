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
      this.randomWidth = Math.floor(Math.random() * gameBoxNode.offsetWidth);
      this.randomHeight = Math.floor(Math.random() * gameBoxNode.offsetHeight);

      // console.log(randomWallUpRightDownLeft)

      //console.log("Spawned A Fly")
      let newFly = new Fly(
        this.randomWallUpRightDownLeft,
        this.randomWidth,
        this.randomHeight
      );
      this.fliesArray.push(newFly);
    }
  };

  gameLoop = () => {
    // console.log("In the Game Loop")
    this.frames++;
    this.fliesSpawn();
    this.fliesArray[0].move();
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
