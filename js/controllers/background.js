import { canvas, ctx } from "../game.js";
import { images } from "./images.js";

let backgrounds = [];

const createBackgroundElements = (image, number, speed) => {
  for (let i = 0; i < number; i++) {
    backgrounds.push({
      id: image,
      width: image.width,
      height: image.height,
      x: getRandomXPosition(image.width),
      y: -image.height - Math.random() * canvas.height,
      speed: speed,
    });
  }
};

const getBackgroundImages = () => {
  backgrounds = [];

  const starBig = images.find((image) => image.id == "starBig");
  const starSmall = images.find((image) => image.id == "starSmall");
  const speedLine = images.find((image) => image.id == "speedLine");

  createBackgroundElements(starBig, 5 + Math.floor(Math.random() * 6), 2);
  createBackgroundElements(starSmall, 5 + Math.floor(Math.random() * 6), 2);
  createBackgroundElements(speedLine, 4 + Math.floor(Math.random() * 5), 2);
};

const updateBackgroundScene = () => {
  ctx.fillStyle = "#603c6c";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  backgrounds.forEach((background) => {
    background.y += background.speed;

    if (background.y > canvas.height) {
      background.y = -background.height;
      background.x = getRandomXPosition(background.width);
    }

    ctx.drawImage(
      background.id,
      background.x,
      background.y,
      background.width,
      background.height
    );
  });
};

function getRandomXPosition(imageWidth) {
  return Math.random() * (canvas.width - imageWidth);
}

export { getBackgroundImages, updateBackgroundScene };
