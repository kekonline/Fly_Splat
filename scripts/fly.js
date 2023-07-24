console.log("fly.js Start");

class Fly {
  constructor(
    wallUpRightDownLeft,
    positionWidth,
    positionHeight,
    movementSpeedX,
    movementSpeedY
  ) {
    // CREAT ELEMENT IN DOME
    this.node = document.createElement("img");
    this.node.src = "./images/Fly_1.png";
    gameBoxNode.append(this.node);

    this.startPosition(wallUpRightDownLeft, positionWidth, positionHeight);
    this.w = 81;
    this.h = 25;
    this.movementSpeedX = movementSpeedX;
    this.movementSpeedY = movementSpeedY;
    this.flyActive = true;

    //INITIALIZATION VALUES

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    //UNDRAGABLE
    this.node.setAttribute("draggable", false);

    // console.log("fly constructor")
    this.flyFlyAnimationInFrame = 1;
    this.flyFlyAnimationFps = 2;
  }

  startPosition = (wallUpRightDownLeft, positionWidth, positionHeight) => {
    //FORMULA TO DETERMIN FORM WHAT SIDE FLIES WILL SPAWN AND WHAT POSITION
    if (wallUpRightDownLeft === 0) {
      this.y = 10;
      this.x = positionWidth;
    } else if (wallUpRightDownLeft === 1) {
      this.x = 1200;
      this.y = positionHeight;
    } else if (wallUpRightDownLeft === 2) {
      this.y = 680;
      this.x = positionWidth;
    } else if (wallUpRightDownLeft === 3) {
      this.x = 10;
      this.y = positionHeight;
    }
  };

  //RANDOMIZING TYPE OF MOVEMENT FLY WILL DO X MOVEMENT, Y MOVEMENT OR BOTH
  move = () => {
    this.chooseRandomeMovementAlgo = Math.floor(Math.random() * 3);
    // console.log(this.chooseRandomeMovementAlgo);
    if (this.chooseRandomeMovementAlgo === 0) {
      //   console.log(this.chooseRandomeMovementAlgo);
      this.moveAlgoX();
    } else if (this.chooseRandomeMovementAlgo === 1) {
      //   console.log(this.chooseRandomeMovementAlgo);
      this.moveAlgoY();
    } else if (this.chooseRandomeMovementAlgo === 2) {
      //   console.log(this.chooseRandomeMovementAlgo);
      this.moveAlgoX();
      this.moveAlgoY();
    }

    this.positionUpdate();
  };

  moveAlgoX = () => {
    //ADDING RANDOM MOVEMENT SO IT MOVES LIKE A FLY
    this.flyRandomMovement = Math.floor(Math.random() * this.movementSpeedX);

    if (gameObj.poop.x + 20 >= this.x) {
      this.x = this.x + this.flyRandomMovement;
    } else if (gameObj.poop.x + 20 <= this.x) {
      this.x = this.x - this.flyRandomMovement;
    }
  };

  moveAlgoY = () => {
    //ADDING RANDOM MOVEMENT SO IT MOVES LIKE A FLY
    this.flyRandomMovement = Math.floor(Math.random() * this.movementSpeedY);
    if (gameObj.poop.y + 20 >= this.y) {
      this.y = this.y + this.flyRandomMovement;
    } else if (gameObj.poop.y + 20 <= this.y) {
      this.y = this.y - this.flyRandomMovement;
    }
  };

  positionUpdate = () => {
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  };

  flyFlyAnimation = () => {
    // console.log("flyflylittlefly")

    if (gameObj.frames % this.flyFlyAnimationFps === 0) {
      if (this.flyFlyAnimationInFrame === 1) {
        this.flyFlyAnimationInFrame++;
        this.node.src = `./images/Fly_${this.flyFlyAnimationInFrame}.png`;
      } else if (this.flyFlyAnimationInFrame === 2) {
        this.flyFlyAnimationInFrame = 1;
        this.node.src = `./images/Fly_${this.flyFlyAnimationInFrame}.png`;
      }
    }
  };
}
