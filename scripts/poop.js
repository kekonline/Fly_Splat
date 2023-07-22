console.log("Poop.js Start");

class Poop {
  constructor() {
    // CREAT ELEMENT IN DOME
    this.node = document.createElement("img");
    this.node.src = "./images/Poop.png";
    gameBoxNode.append(this.node);

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
}
