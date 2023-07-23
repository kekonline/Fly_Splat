console.log("Raquet.js Start");

class Raquet {
  constructor() {
    // CREAT ELEMENT IN DOME
    this.node = document.createElement("img");
    this.node.src = "./images/Raquet_1.png";
    gameBoxNode.append(this.node);

    //POSICION PROPERTIES FOR RAQUET
    this.x = 10;
    this.y = 10;
    this.w = 46;
    this.h = 100;

    //INITIALIZATION VALUES

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.zIndex = "99";

    this.hitAnimationInFrame = 1;
    this.hitAnimationFps = 3;
  }

  //MOVE UPDATES RAQUETS X AND Y VARIABLES
  move(x, y) {
    this.x = x;
    this.y = y;
    this.positionUpdate();
    // console.log(x);

    //UNDRAGABLE
    this.node.setAttribute("draggable", false);
  }

  positionUpdate = () => {
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  };

  raquetSplat = () => {
    //console.log("raquet.raquetSpat")
    gameObj.raquetTofliesCollision();
    gameObj.doHitAnimationc = true;
  };

  hitAnimation = () => {
    if (gameObj.doHitAnimationc === true) {
      if (gameObj.frames % this.hitAnimationFps === 0) {
        if (this.hitAnimationInFrame === 1) {
          this.hitAnimationInFrame++;
          this.node.src = `./images/Raquet_${this.hitAnimationInFrame}.png`;
        } else if (this.hitAnimationInFrame === 2) {
          this.hitAnimationInFrame++;
          this.node.src = `./images/Raquet_${this.hitAnimationInFrame}.png`;
        } else if (this.hitAnimationInFrame === 3) {
          this.hitAnimationInFrame = 1;
          this.node.src = `./images/Raquet_${this.hitAnimationInFrame}.png`;
          gameObj.doHitAnimationc = false;
        }
      }

      // console.log("Hit Animation In")
    }
  };
}
