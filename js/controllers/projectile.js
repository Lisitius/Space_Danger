import Projectile from "../entity/projectileEntity.js";
import { canvas } from "../game.js";

const projectiles = [];
const cooldown = 300;
let isOnCooldown = false;
let isHolding = false;

const clearProjectiles = () => {
  projectiles.length = 0;
};

const updateProjectilesMovement = () => {
  let projectilesToRemove = [];

  projectiles.forEach((projectile, index) => {
    projectile.update();
    projectile.draw();

    if (projectile.x - projectile.width - 20 > canvas.width) {
      projectilesToRemove.push(index);
    }
  });

  projectilesToRemove.forEach((index) => projectiles.splice(index, 1));
};

const keyDown = (event) => {
  if (event.code == "Space" && !isOnCooldown && !isHolding) {
    projectiles.push(new Projectile());
    isOnCooldown = true;
    isHolding = true;
    setTimeout(() => {
      isOnCooldown = false;
    }, cooldown);
  }
};

const keyUp = (event) => {
  if (event.code == "Space") {
    isHolding = false;
  }
};

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

export { updateProjectilesMovement, projectiles, clearProjectiles };
