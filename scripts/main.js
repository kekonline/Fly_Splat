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
  console.log(window);
}

//* EVENT LISTENERS
startButtonNode.addEventListener("click", starGame);

//LIKE THIS WE CAN KNOW WERE THE MOUSE POSTION IS
window.addEventListener("mousemove", (mousePosition) => {
  //CALCULATING GAMEBOX OFFSET FROM THE DOCUMENT TO KEEP POINTER ALIGNED
  const hOffSetCalculation = (document.body.clientHeight - 720) / 2;
  const wOffSetCalculation = (document.body.clientWidth - 1280) / 2;

  //SENDIND X, Y VALUES TO UPDATE RAQUET POSICION
  gameObj.raquet.move(
    mousePosition.x - wOffSetCalculation,
    mousePosition.y - hOffSetCalculation
  );
});
