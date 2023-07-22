console.log("Main.js Start");
//* GLOBAL VARIABLES
let gameObj = null;
const startButtonNode = document.querySelector("#startButton");
const splashScreenNode = document.querySelector("#splashScreen");
const gameScreenNode = document.querySelector("#gameScreen");
const gameBoxNode = document.querySelector("#gameBox");
const gameOverScreenNode = document.querySelector("#gameOverScreen");
const restartButtonNode = document.querySelector("#restartButton");

//* GAME STATE MANAGEMENT
function starGame() {
  console.log("startGame Function");
  splashScreenNode.style.display = "none";
  //HIDE MOUSE CURSOR

  gameScreenNode.style.cursor = "none";
  gameScreenNode.style.display = "flex";

  gameObj = new Game();
  //console.log(gameObj);
  gameObj.gameLoop();
  // console.log(window);
}

function restarGame() {
  //TWO WAY OF RESTARTING THE GAME 1, RELOADING ALL THE PAGE. 2, DELETING ALL THE NODES ON SCREEN AND RESETTING gameObj.
  
 // location.reload();


   gameObj.fliesArray.forEach((flyInFliesArray, index) => {
   gameObj.fliesArray[index].node.remove();
   });

   gameObj.poop.node.remove();
   gameObj.raquet.node.remove();

   gameObj = {};
   console.log(gameObj);

   gameOverScreenNode.style.display = "none";
   starGame();
}

//* EVENT LISTENERS
startButtonNode.addEventListener("click", starGame);
restartButtonNode.addEventListener("click", restarGame);
gameBoxNode.addEventListener("click", () => {
  gameObj.raquet.raquetSplat();
});
//LIKE THIS WE CAN KNOW WERE THE MOUSE POSTION IS
window.addEventListener("mousemove", (mousePosition) => {
  if (gameObj !== null) {
    //CALCULATING GAMEBOX OFFSET FROM THE DOCUMENT TO KEEP POINTER ALIGNED
    const hOffSetCalculation = (document.body.clientHeight - 720) / 2;
    const wOffSetCalculation = (document.body.clientWidth - 1280) / 2;

    //SENDIND X, Y VALUES TO UPDATE RAQUET POSICION
    gameObj.raquet.move(
      mousePosition.x - wOffSetCalculation - 20,
      mousePosition.y - hOffSetCalculation - 20
    );
  }
});
