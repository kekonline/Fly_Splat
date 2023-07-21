console.log("Main.js Start");
//* GLOBAL VARIABLES
let gameObj = null;
const startButtonNode = document.querySelector("#startButton");
const splashScreenNode = document.querySelector("#splashScreen");
const gameScreenNode = document.querySelector("#gameScreen");
const gameBoxNode = document.querySelector("#gameBox");

//* GAME STATE MANAGEMENT
function starGame() {
  console.log("startGame Function");
  splashScreenNode.style.display = "none";
  //HIDE MOUSE CURSOR
  gameScreenNode.style.cursor = "none";
  gameScreenNode.style.display = "flex";
  gameObj = new Game();
  console.log(gameObj);
  gameObj.gameLoop();
}

//* EVENT LISTENERS
startButtonNode.addEventListener("click", starGame);
//LIKE THIS WE CAN KNOW WERE THE MOUSE POSTION IS
gameBoxNode.addEventListener("mousemove", (mousePosition) => {
  //SENDING MOUSE POSITION TO MOUSE MOVE METHOD
  const rect = mousePosition.target.getBoundingClientRect();
  //FIX TO MOUSE OFSET
  console.log(rect.left);
  gameObj.raquet.move(
    30 + mousePosition.clientX - rect.left,
    30 + mousePosition.clientY - rect.top
  );

  // console.log(mousePosition.x);
});
