import { updateBackgroundScene } from "./controllers/background.js";
import { clearEnemies, manageEnemyInteractions } from "./controllers/enemy.js";
import { imagesLoaded, loadImages } from "./controllers/images.js";
import { createPlayer, updatePlayerState } from "./controllers/player.js";
import {
  clearProjectiles,
  updateProjectilesMovement,
} from "./controllers/projectile.js";
import { setScore } from "./controllers/score.js";

const canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext("2d");

const gameStart = document.querySelector("#gameStart");
const modal = document.querySelector("#modalStart");

let gameFrame = 0;
let gameOver = false;
let animationId;

const setGameOver = () => {
  gameOver = true;
};

const animate = () => {
  animationId = requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateBackgroundScene();
  updatePlayerState();
  manageEnemyInteractions();
  updateProjectilesMovement();
  gameFrame++;
  if (gameOver) {
    cancelAnimationFrame(animationId);
    modal.classList.remove("hidden");
  }
};

const init = () => {
  gameOver = false;
  createPlayer();
  setScore(0);
  clearEnemies();
  clearProjectiles();
  animate();
};

gameStart.addEventListener("click", () => {
  if (imagesLoaded) {
    init();
  } else {
    loadImages(init);
  }
  modal.classList.add("hidden");
});

export { canvas, ctx, gameFrame, setGameOver };
