import { images } from "../controllers/images.js";
import { player } from "../controllers/player.js";
import { ctx } from "../game.js";

class Projectile {
  constructor() {
    this.x = player.x + player.width / 2 - (10 * (160 / 71)) / 2;
    this.y = player.y;
    this.speed = 4;
    this.width = 10 * (160 / 71);
    this.height = 60;
    this.laserGreen = images.find((image) => image.id == "laserGreen");
  }

  draw() {
    ctx.drawImage(this.laserGreen, this.x, this.y, this.width, this.height);
  }

  update() {
    this.y -= this.speed;
  }
}

export default Projectile;
