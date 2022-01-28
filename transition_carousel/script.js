const btnPrevious = document.querySelector("button.carousel__button--previous");
const btnNext = document.querySelector("button.carousel__button--next");
const images = [...document.querySelectorAll("img.carousel__image")];

// set initail values
let position = 0;
const DURATION = 500; // value set in stone - constant
let animating = false;

const getPositions = (direction) => {
  const currentPosition = position;
  let newPosition;

  if (direction === "next") {
    newPosition = position === images.length - 1 ? 0 : position + 1;
  } else if (direction === "previous") {
    newPosition = position === 0 ? images.length - 1 : position - 1;
  }

  return { currentPosition, newPosition };
};

const getImages = (currentPosition, newPosition) => {
  const currentImage = images[currentPosition];
  const newImage = images[newPosition];
  return { currentImage, newImage };
};

const setAnimatingToTrue = () => (animating = true);

const transitionImages = (direction) => {
  if (animating) return;

  const { currentPosition, newPosition } = getPositions(direction);
  const { currentImage, newImage } = getImages(currentPosition, newPosition);
  // console.log({ currentPosition, newPosition });
  // console.log({ currentImage, newImage });

  setAnimatingToTrue();
  runAnimations(currentImage, newImage);
};

const handleDirectionButton = (e) => {
  const button = e.target.closest("button");
  const direction = button.dataset.direction;
  transitionImages(direction);
};

window.addEventListener("DOMContentLoaded", () => {
  btnPrevious.addEventListener("click", handleDirectionButton);
  btnNext.addEventListener("click", handleDirectionButton);
});
