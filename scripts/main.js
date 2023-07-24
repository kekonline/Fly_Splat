console.log("Main.js Start");
//* GLOBAL VARIABLES
let gameObj = null;
const startButtonNode = document.querySelector("#startButton");
const splashScreenNode = document.querySelector("#splashScreen");
const gameScreenNode = document.querySelector("#gameScreen");
const gameBoxNode = document.querySelector("#gameBox");
const gameOverScreenNode = document.querySelector("#gameOverScreen");
const restartButtonNode = document.querySelector("#restartButton");
const backgroundMusicNode = document.querySelector("#backgroundMusic");
const smackSoundNode = document.querySelector("#smackSound");
const Ouch1SoundNode = document.querySelector("#Ouch1Sound");
const Ouch2SoundNode = document.querySelector("#Ouch2Sound");
const Ouch3SoundNode = document.querySelector("#Ouch3Sound");
const Ouch4SoundNode = document.querySelector("#Ouch4Sound");
const Uh_OhSoundNode = document.querySelector("#Uh_Oh");

//* GAME STATE MANAGEMENT
function starGame() {
  document.documentElement.requestFullscreen();
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

  console.log(gameBoxNode.innerHTML);

  // gameObj.fliesArray.forEach((flyInFliesArray, index) => {
  //   gameObj.fliesArray[index].node.remove();
  // });
  // gameObj.splatArray.forEach((splatInSplatArray, index) => {
  //   gameObj.splatArray[index].node.remove();
  // });

  // gameObj.poop.node.remove();
  // gameObj.raquet.node.remove();

  gameBoxNode.innerHTML = `   <!-- UNDRAGABLE IMAGES -->
  <img
    src="./images/Game_Background.jpg"
    alt="Game Background Picture"
    onmousedown="return false;"
    ondragstart="return false;"
    draggable="false"
  />
  <div id="gameScore">
    <h2 id="hiScore">Hi-Score: 0</h2>
    <h2 id="score">Score: 0</h2>
  </div>`;

  gameObj.clear;
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
  if (gameObj !== null && gameObj.gamePause === false) {
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
window.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "m") {
    backgroundMusicNode.pause();
  } else if (event.key === "p") {
    if (gameObj.gamePause === true) {
      backgroundMusicNode.play();
      gameObj.gamePause = false;
      gameObj.gameLoop();
    } else if (gameObj.gamePause === false) {
      gameObj.gamePause = true;
      backgroundMusicNode.pause();
    }
  }
});
