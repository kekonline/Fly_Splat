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
    this.fliesSpeedX = 3;
    this.fliesSpeedY = 2;
    this.startbackgroundMusic();
    this.doHitAnimation = false;
    this.splatArray = [];
    this.score = 0;
    this.hiScore = 0;
    this.scoreNode = document.querySelector("#score");
    this.hiScoreNode = document.querySelector("#hiScore");
    this.loadHiScore();
    this.randomDificulty = 0;
  }

  dificulyController = () => {
    switch (this.frames) {
      case 300:
        // IN GAME 5 SECONDS
        this.fliesSpeedX = 4;
        this.fliesSpeedY = 3;
        this.fliesSpawnRate = 60;
        break;
      case 600:
        // IN GAME 10 SECONDS
        this.fliesSpeedX = 6;
        this.fliesSpeedY = 3;
        this.fliesSpawnRate = 120;
        break;
      case 900:
        // IN GAME 15 SECONDS
        this.fliesSpeedX = 2;
        this.fliesSpeedY = 2;
        this.fliesSpawnRate = 20;
        break;
      case 1200:
        // IN GAME 20 SECONDS
        this.fliesSpeedX = 4;
        this.fliesSpeedY = 3;
        this.fliesSpawnRate = 60;
        break;
      case 1500:
        // IN GAME 25 SECONDS
        this.fliesSpeedX = 6;
        this.fliesSpeedY = 3;
        this.fliesSpawnRate = 60;
        break;
      case 1800:
        // IN GAME 30 SECONDS
        this.fliesSpeedX = 3;
        this.fliesSpeedY = 3;
        this.fliesSpawnRate = 20;
        break;
      case 2100:
        // IN GAME 35 SECONDS
        this.fliesSpeedX = 10;
        this.fliesSpeedY = 6;
        this.fliesSpawnRate = 120;
        break;
      case 2400:
        // IN GAME 40 SECONDS
        this.fliesSpeedX = 15;
        this.fliesSpeedY = 7;
        this.fliesSpawnRate = 90;
        break;
      case 2700:
        // IN GAME 45 SECONDS
        this.fliesSpeedX = 4;
        this.fliesSpeedY = 4;
        this.fliesSpawnRate = 20;
        break;
      // IN GAME 50 SECONDS
      case 3000:
        this.fliesSpeedX = 6;
        this.fliesSpeedY = 3;
        this.fliesSpawnRate = 60;
        break;
    }

    if (this.frames > 3000 && this.frames % 60 === 0) {
      this.randomDificulty = Math.floor(Math.random() * 4);

      if (this.randomDificulty === 0) {
        this.fliesSpeedX++;
      } else if (this.randomDificulty === 1) {
        this.fliesSpeedY++;
      } else if (this.randomDificulty === 2) {
        this.fliesSpawnRate = this.fliesSpawnRate - 10;
      }
    }
  };

  scoreUP = () => {
    this.score++;

    this.scoreNode.innerText = `Score: ${this.score}`;
  };

  scoreReset = () => {
    this.scoreNode.innerText = `Score: 0`;
  };

  loadHiScore = () => {
    if (
      localStorage.getItem("highScore") === undefined ||
      localStorage.getItem("highScore") === null
    ) {
      this.hiScoreNode.innerText = `Hi-Score: 0`;
    } else {
      this.hiScore = localStorage.getItem("highScore");
      this.hiScoreNode.innerText = `Hi-Score: ${this.hiScore}`;
    }
  };

  saveHiScore = () => {
    if (this.score > this.hiScore) {
      localStorage.setItem("highScore", this.score);
    }
  };

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
        this.randomHeight,
        this.fliesSpeedX,
        this.fliesSpeedY
      );
      this.fliesArray.push(newFly);
    }
  };

  splatSpawn = (flyPosiionX, flyPosiionY) => {
    let newSplat = new Splat(flyPosiionX, flyPosiionY);
    this.splatArray.push(newSplat);
  };

  splatControl = () => {
    this.splatArray.forEach((splatInSplatArray, index) => {
      if (splatInSplatArray.splatActive === true) {
        this.splatArray[index].splatAnimation();
      } else if (splatInSplatArray.splatActive === false) {
        this.splatArray[index].node.remove();
        this.splatArray.splice(index, 1);
      }
    });
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
        this.splatSpawn(flyInFliesArray.x, flyInFliesArray.y);

        this.fliesArray[index].node.remove();
        this.fliesArray.splice(index, 1);
        this.playOuchSound();
        this.scoreUP();
      }
    });

    //console.log(this.fliesArray.length)
  };

  flyToPoopCollision = () => {
    this.fliesArray.forEach((flyInFliesArray) => {
      if (
        this.poop.x < flyInFliesArray.x + flyInFliesArray.w - 20 &&
        this.poop.x + this.poop.w - 20 > flyInFliesArray.x &&
        this.poop.y < flyInFliesArray.y + flyInFliesArray.h - 20 &&
        this.poop.y + this.poop.h - 20 > flyInFliesArray.y
      ) {
        //console.log("Fly is in Poop")
        this.gameOver();
      }
    });
  };

  gameOver = () => {
    this.saveHiScore();
    this.scoreReset();
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "flex";
    this.stopbackgroundMusic();
    Uh_OhSoundNode.play();
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
    this.dificulyController();
    this.frames++;
    this.fliesSpawn();
    this.flyToPoopCollision();
    this.animateFlies();
    this.splatControl();
    this.raquet.hitAnimation();
    this.poop.poopAnimation();
    this.fliesArray.forEach((flyInFliesArray) => {
      flyInFliesArray.move();
    });

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
