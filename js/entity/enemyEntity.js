import { canvas, ctx } from "../game.js";
import { images } from "../controllers/images.js";

class Enemy {
  constructor() {
    this.id = "_" + Math.random().toString(36).slice(2, 9);
    this.x = Math.random() * (canvas.width - 50 * (498 / 187));
    this.speed = Math.random() * (2 - 1) + 1;

    const enemyType = Math.random() < 0.5 ? "ennemyUFO" : "meteorBig";
    const scaleFactor = 50 * (498 / 187);

    let imageId;

    if (enemyType === "ennemyUFO") {
      this.width = scaleFactor;
      this.height = 70;
      imageId = "ennemyUFO";
    } else {
      this.width = scaleFactor;
      this.height = 80;
      imageId = "meteorBig";
    }

    this.image = images.find((image) => image.id == imageId);
    this.y = -this.height;
  }

  update() {
    this.y += this.speed;
  }

  draw() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

export default Enemy;
