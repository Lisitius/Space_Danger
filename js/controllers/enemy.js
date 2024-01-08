import Enemy from "../entity/enemyEntity.js";
import { canvas, gameFrame, setGameOver } from "../game.js";
import { player } from "./player.js";
import { projectiles } from "./projectile.js";
import { setScore, getScore } from "./score.js";
import Explosion from "../entity/explosionEntity.js";

const enemies = [];
const explosions = [];

const clearEnemies = () => {
  enemies.length = 0;
  explosions.length = 0;
};

let enemySpawnRate = 100;

const updateEnemySpawnRate = () => {
  enemySpawnRate = 100 - Math.floor(getScore() / 150) * 10;
  enemySpawnRate = Math.max(40, enemySpawnRate);
};

const manageEnemyInteractions = () => {
  updateEnemySpawnRate();

  if (gameFrame % enemySpawnRate === 0) {
    enemies.push(new Enemy());
  }

  let enemiesToRemove = [];
  let projectilesToRemove = [];

  enemies.forEach((enemy, enemyIndex) => {
    enemy.update();
    enemy.draw();

    if (enemy.y > canvas.height) {
      setGameOver();
    }

    projectiles.forEach((projectile, projectileIndex) => {
      if (collisionDetected(enemy, projectile)) {
        setScore(getScore() + 10);
        explosions.push(new Explosion(enemy.x, enemy.y));
        enemiesToRemove.push(enemyIndex);
        projectilesToRemove.push(projectileIndex);
      }
    });

    if (collisionDetected(enemy, player)) {
      setGameOver();
    }
  });

  enemiesToRemove.forEach((index) => enemies.splice(index, 1));
  projectilesToRemove.forEach((index) => projectiles.splice(index, 1));

  explosions.forEach((explosion, index) => {
    explosion.draw();
    if (explosion.finished) {
      explosions.splice(index, 1);
    }
  });
};

function collisionDetected(obj1, obj2) {
  return (
    obj1.x < obj2.x + obj2.width &&
    obj1.x + obj1.width > obj2.x &&
    obj1.y < obj2.y + obj2.height &&
    obj1.height + obj1.y > obj2.y
  );
}

export { enemies, clearEnemies, manageEnemyInteractions };
