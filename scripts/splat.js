console.log("Splat.js Start");

class Splat {
  constructor(positionX, positionY) {
    // CREAT ELEMENT IN DOME
    this.node = document.createElement("img");
    this.node.src = "./images/Splat_1.png";
    gameBoxNode.append(this.node);
    this.x = positionX - 40;
    this.y = positionY - 60;

    this.w = 150;
    this.h = 150;
    this.splatActive = true;

    //INITIALIZATION VALUES

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    this.splatAnimationInFrame = 1;
    this.splatAnimationFps = 3;
  }

  splatAnimation = () => {
    // console.log("flyflylittlefly")

    if (this.splatActive === true) {
      if (gameObj.frames % this.splatAnimationFps === 0) {
        if (this.splatAnimationInFrame === 1) {
          this.node.src = `./images/Splat_${this.splatAnimationInFrame}.png`;
          this.splatAnimationInFrame++;
        } else if (this.splatAnimationInFrame === 2) {
          this.node.src = `./images/Splat_${this.splatAnimationInFrame}.png`;
          this.splatAnimationInFrame++;
        } else {
          this.splatActive = false;
        }
      }
    }
  };
}
