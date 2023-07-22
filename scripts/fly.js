console.log("fly.js Start");

class Fly {
  constructor(wallUpRightDownLeft, positionWidth, positionHeight) {
    // CREAT ELEMENT IN DOME
    this.node = document.createElement("img");
    this.node.src = "./images/Fly.png";
    gameBoxNode.append(this.node);

    //FORMULA TO DETERMIN FORM WHAT SIDE FLIES WILL SPAWN AND WHAT POSITION

    if (wallUpRightDownLeft === 0) {
      this.y = 10;
      this.x = positionWidth;
      console.log(wallUpRightDownLeft);
    } else if (wallUpRightDownLeft === 1) {
      this.x = 1200;
      this.y = positionHeight;
      console.log(wallUpRightDownLeft);
    } else if (wallUpRightDownLeft === 2) {
      this.y = 680;
      this.x = positionWidth;
      console.log(wallUpRightDownLeft);
    } else if (wallUpRightDownLeft === 3) {
      this.x = 10;
      this.y = positionHeight;
      console.log(wallUpRightDownLeft);
    }

    this.w = 81;
    this.h = 25;

    //INITIALIZATION VALUES

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    //UNDRAGABLE
    this.node.setAttribute("draggable", false);
    // console.log("fly constructor")
  }

  move() {}
}
