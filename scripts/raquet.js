console.log("Raquet.js Start");

class Raquet {
  constructor() {
    // CREAT ELEMENT IN DOME
    this.node = document.createElement("img");
    this.node.src = "./images/raquet.png";
    gameBoxNode.append(this.node);

    //POSICION PROPERTIES FOR RAQUET
    this.x = 50;
    this.y = 50;
    this.w = 40;
    this.h = 35;

    //INITIALIZATION VALUES

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  //MOVE UPDATES RAQUETS X AND Y VARIABLES
  move(x, y) {
    this.x = x;
    this.y = y;
    // positionUpdate()
    console.log(x);
  }

  positionUpdate = () => {
    this.node.style.top = `${this.x}px`;
    this.node.style.left = `${this.y}px`;
  };
}
