import Player from "../entity/playerEntity.js";
let player;

const createPlayer = () => {
  player = new Player();
};

const updatePlayerState = () => {
  player.update();
  player.draw();
};

document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowUp":
    case "KeyW":
      player.up = true;
      break;
    case "ArrowDown":
    case "KeyS":
      player.down = true;
      break;
    case "ArrowLeft":
    case "KeyA":
      player.left = true;
      break;
    case "ArrowRight":
    case "KeyD":
      player.right = true;
      break;
  }
});

document.addEventListener("keyup", (event) => {
  switch (event.code) {
    case "ArrowUp":
    case "KeyW":
      player.up = false;
      break;
    case "ArrowDown":
    case "KeyS":
      player.down = false;
      break;
    case "ArrowLeft":
    case "KeyA":
      player.left = false;
      break;
    case "ArrowRight":
    case "KeyD":
      player.right = false;
      break;
  }
});

export { player, createPlayer, updatePlayerState };
