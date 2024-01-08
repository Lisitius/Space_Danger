import { canvas, ctx } from "../game.js";
import { images } from "../controllers/images.js";

class Player {
  constructor() {
    this.width = 100 * (1013 / 557);
    this.height = 100;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height - this.height;
    this.plane = images.find((image) => image.id == "player");
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
  }

  update() {
    const speed = 8;
    if (this.up) this.y = Math.max(this.y - speed, 0);
    if (this.down)
      this.y = Math.min(this.y + speed, canvas.height - this.height);
    if (this.left) this.x = Math.max(this.x - speed, 0);
    if (this.right)
      this.x = Math.min(this.x + speed, canvas.width - this.width);
  }

  draw() {
    ctx.drawImage(this.plane, this.x, this.y, this.width, this.height);
  }
}

export default Player;
