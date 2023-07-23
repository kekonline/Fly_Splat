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
    this.startbackgroundMusic();
    this.doHitAnimationc = false;
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
      this.playsmackSound();

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
        this.playOuchSound();
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
    this.stopbackgroundMusic();
  };

  startbackgroundMusic = () => {
    backgroundMusicNode.play();

    backgroundMusicNode.volume = "0.2";
  };

  stopbackgroundMusic = () => {
    backgroundMusicNode.pause();
    backgroundMusicNode.currentTime = 0;
  };

  playsmackSound = () => {
    smackSoundNode.volume = "0.2";
    smackSoundNode.play();
  };

  playOuchSound = () => {
    //RANDOM CHANCE TO PLAY OUCH SOUND SOMETIMES IT DOESNT PLAY NOT USING 0 AND 6

    this.chanceToPlaySound = Math.floor(Math.random() * 4);

    if (this.chanceToPlaySound === 0) {
      // Ouch1SoundNode.volume = "0.8";
      Ouch1SoundNode.play();
    } else if (this.chanceToPlaySound === 1) {
      // Ouch2SoundNode.volume = "0.8";
      Ouch2SoundNode.play();
    } else if (this.chanceToPlaySound === 2) {
      // Ouch3SoundNode.volume = "0.8";
      Ouch3SoundNode.play();
    } else if (this.chanceToPlaySound === 3) {
      // Ouch4SoundNode.volume = "0.8";
      Ouch4SoundNode.play();
    }
  };

  animateFlies = () => {
    this.fliesArray.forEach((flyInFliesArray, index) => {
      this.fliesArray[index].flyFlyAnimation();
    });
  };

  gameLoop = () => {
    // console.log("In the Game Loop")
    this.frames++;
    this.fliesSpawn();
    this.flyToPoopCollision();
    this.animateFlies();
    this.raquet.hitAnimation();

    this.fliesArray.forEach((flyInFliesArray) => {
      flyInFliesArray.move();
    });

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
