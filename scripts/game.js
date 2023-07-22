console.log("Game.js Start");

class Game {
  constructor() {
    this.raquet = new Raquet();
    this.poop = new Poop();
    this.frames = 0;
    this.isGameOn = true;
    //STORE SPAWNED FLIES
    this.fliesArray = [];
    this.fliesSpawnRate = 120; /*DIVIDE BY 60 TO GET SECONDS */
  }

  fliesSpawn = () => {
    if (
      this.fliesArray.length === 0 ||
      this.frames % this.fliesSpawnRate === 0
    ) {
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

  raquetTofliesColition = () => {


    this.fliesArray.forEach((flyInFliesArray)=>{
      if (
        this.raquet.x < flyInFliesArray.x + flyInFliesArray.w &&
        this.raquet.x + this.raquet.w > flyInFliesArray.x &&
        this.raquet.y < flyInFliesArray.y + flyInFliesArray.h &&
        this.raquet.y + this.raquet.h > flyInFliesArray.y
      ) {
        // Collision detected!
        console.log("Splat")
      }
    
    
    
    })







};



  gameLoop = () => {
    // console.log("In the Game Loop")
    this.frames++;
    this.fliesSpawn();

    this.fliesArray.forEach((flyInFliesArray) => {
      flyInFliesArray.move();
    });

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
