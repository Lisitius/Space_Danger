const littleScore = document.querySelector("#score");
const bigScore = document.querySelector("#bigScore");

let score = 0;

const setScore = (value) => {
  score = value;
  littleScore.innerHTML = score;
  bigScore.innerHTML = score;
};

const getScore = () => {
  return score;
};

export { setScore, getScore, littleScore, bigScore };
