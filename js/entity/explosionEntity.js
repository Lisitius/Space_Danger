import { ctx } from "../game.js";
import { images } from "../controllers/images.js";

class Explosion {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = images.find((image) => image.id == "laserGreenShot");
    this.frame = 0;
    this.maxFrame = 10;
    this.finished = false;
    this.scale = 1.5;

    this.scaledWidth = this.sprite.width * this.scale;
    this.scaledHeight = this.sprite.height * this.scale;
    this.centerX = this.x - (this.scaledWidth - this.sprite.width) / 2;
    this.centerY = this.y - (this.scaledHeight - this.sprite.height) / 2;
  }

  draw() {
    if (this.frame < this.maxFrame) {
      ctx.drawImage(
        this.sprite,
        this.centerX,
        this.centerY,
        this.scaledWidth,
        this.scaledHeight
      );
      this.frame++;
    } else {
      this.finished = true;
    }
  }
}

export default Explosion;
