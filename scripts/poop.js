console.log("Poop.js Start");

class Poop {
  constructor() {
    // CREAT ELEMENT IN DOME
    this.node = document.createElement("img");
    this.node.src = "./images/Poop_1.png";
    gameBoxNode.append(this.node);
    this.poopAnimationInFrame = 1;
    this.poopAnimationFps = 60;

    //POSICION PROPERTIES FOR RAQUET
    this.x = 580;
    this.y = 300;
    this.w = 109;
    this.h = 90;

    //INITIALIZATION VALUES

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    //UNDRAGABLE
    this.node.setAttribute("draggable", false);
  }

  poopAnimation = () => {
    // console.log("flyflylittlefly")

    if (gameObj.frames % this.poopAnimationFps === 0) {
      if (this.poopAnimationInFrame === 0) {
        this.poopAnimationInFrame++;
        this.node.src = `./images/Poop_${this.poopAnimationInFrame}.png`;
      } else if (this.poopAnimationInFrame === 1) {
        this.poopAnimationInFrame=Math.floor(Math.random() * 3)
        this.node.src = `./images/Poop_${this.poopAnimationInFrame}.png`;
      } else if (this.poopAnimationInFrame === 2) {
        this.poopAnimationInFrame--;
        this.node.src = `./images/Poop_${this.poopAnimationInFrame}.png`;
      }




    }
  };




}
