import { getBackgroundImages } from "./background.js";

const imagesLoad = [
  //background
  {
    src: "background/speedLine.png",
    id: "speedLine",
  },
  {
    src: "background/starBig.png",
    id: "starBig",
  },
  {
    src: "background/starSmall.png",
    id: "starSmall",
  },
  //player
  {
    src: "hero/player.png",
    id: "player",
  },
  //projectile
  {
    src: "hero/laserGreen.png",
    id: "laserGreen",
  },
  {
    src: "hero/laserGreenShot.png",
    id: "laserGreenShot",
  },
  //ennemy
  {
    src: "ennemy/enemyUFO.png",
    id: "ennemyUFO",
  },
  {
    src: "background/meteorBig.png",
    id: "meteorBig",
  },
];

const images = [];
let imagesLoaded = false;
const basePath = "../assets/img/";

const loadImages = (onComplete) => {
  imagesLoad.forEach((imageData) => {
    const img = new Image();
    img.addEventListener("load", () => {
      images.push(img);

      if (images.length === imagesLoad.length) {
        getBackgroundImages();
        imagesLoaded = true;
        onComplete();
      }
    });
    img.src = basePath + imageData.src;
    img.id = imageData.id;
  });
};

export { images, loadImages, imagesLoaded };
