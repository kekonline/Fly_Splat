console.log("Game.js Start");

class Game {
  constructor() {
    this.raquet = new Raquet();
    this.poop = new Poop();
    this.frames = 0;
    this.isGameOn = true;
    //STORE SPAWNED FLIES
    this.fliesArray = [];
    this.fliesSpawnRate = 60; /*DIVIDE BY 60 TO GET SECONDS */
  }

  fliesSpawn = () => {
    if (this.frames % this.fliesSpawnRate === 0) {
      //RANDOMIZING WALL TO SPWAN FROME AND X AND Y VALUES FROM THE SELECTED WALL
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

  raquetTofliesCollision = () => {
    //  console.log(this.fliesArray,length)
    this.fliesArray.forEach((flyInFliesArray, index) => {
      if (
        this.raquet.x < flyInFliesArray.x + flyInFliesArray.w &&
        this.raquet.x + this.raquet.w > flyInFliesArray.x &&
        this.raquet.y < flyInFliesArray.y + flyInFliesArray.h &&
        this.raquet.y + this.raquet.h > flyInFliesArray.y
      ) {
        // Collision detected!
        // console.log(index)
        this.fliesArray[index].node.remove();
        this.fliesArray.splice(index, 1);
      }
    });

    //console.log(this.fliesArray.length)
  };

  flyToPoopCollision = () => {
    this.fliesArray.forEach((flyInFliesArray, index) => {
      if (
        this.poop.x < flyInFliesArray.x + flyInFliesArray.w &&
        this.poop.x + this.poop.w > flyInFliesArray.x &&
        this.poop.y < flyInFliesArray.y + flyInFliesArray.h &&
        this.poop.y + this.poop.h > flyInFliesArray.y
      ) {
        //console.log("Fly is in Poop")
        this.gameOver();
      }
    });
  };

  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "flex";
  };

  gameLoop = () => {
    // console.log("In the Game Loop")
    this.frames++;
    this.fliesSpawn();
    this.flyToPoopCollision();
    this.fliesArray.forEach((flyInFliesArray) => {
      flyInFliesArray.move();
    });

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
