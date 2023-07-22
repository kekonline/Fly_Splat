console.log("Poop.js Start");

class Poop {
  constructor() {
    // CREAT ELEMENT IN DOME
    this.node = document.createElement("img");
    this.node.src = "./images/Poop.png";
    gameBoxNode.append(this.node);

    //POSICION PROPERTIES FOR RAQUET
    this.x = 10;
    this.y = 10;
    this.w = 406;
    this.h = 100;

    //INITIALIZATION VALUES

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    //INITIALIZATION POSITION
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    //UNDRAGABLE
    // this.node.removeEventListener("mousemove",);
    //  this.node.style.addEventListener("ondragstart", false);
  }
}
