document
  .querySelectorAll(".watch-control, .controls a, .iphone-btn")
  .forEach((control) => {
    control.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

//Cube
let x = 0;
let y = 20;
let z = 0;
let bool = true;
let interval;

const cube = document.querySelector(".cube");

document.querySelector(".top-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".bottom-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".left-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg)`;
});

document.querySelector(".right-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y += 20)}deg) rotateZ(${z}deg)`;
});

document.querySelector(".top-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg)`;
});

document.querySelector(".bottom-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg)`;
});

document.querySelector(".reset").addEventListener("click", () => {
  x = 0;
  y = 0;
  z = 0;
  cube.style.transform = `rotateX(${x}) rotateY(${y}) rotateZ(${z})`;
  cube.style.transition = `transform 0.2s`;
});

const rotateCube = () => {
  if (bool) {
    interval = setInterval(() => {
      cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
      cube.style.transition = `transform 0.5s`;
    }, 100);
  } else {
    clearInterval(interval);
  }
};
rotateCube();

document.querySelector(".controls").addEventListener("mouseover", () => {
  bool = false;
  rotateCube();
});
document.querySelector(".controls").addEventListener("mouseout", () => {
  bool = true;
  rotateCube();
});
//End of Cube

//SlideShow
const slideshowDivs = (() => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement("div");

    div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

    if (i === 1) {
      div.classList.add("change");
    }

    document.querySelector(".slideshow").appendChild(div);
  }
})();

const divs = document.querySelectorAll(".slideshow div");

let a = 1;

const slideshow = (() => {
  setInterval(() => {
    a++;
    const div = document.querySelector(".slideshow .change");

    div.classList.remove("change");

    if (a < divs.length) {
      div.nextElementSibling.classList.add("change");
    } else {
      divs[0].classList.add("change");
      a = 1;
    }
  }, 20000);
})();
// End of SlideShow

// Section 3
const section3Content = document.querySelector(".section-3-content");

window.addEventListener("scroll", () => {
  if (
    window.pageYOffset + window.innerHeight >=
    section3Content.offsetTop + section3Content.offsetHeight / 2
  ) {
    section3Content.classList.add("change");
  }
});
// End of Section 3

// Section 4
const watchBands = document.querySelector(".watch-bands");
const watchCases = document.querySelector(".watch-cases");

const watchTopControl = document.querySelector(".watch-top-control");
const watchRightControl = document.querySelector(".watch-right-control");
const watchBottomControl = document.querySelector(".watch-bottom-control");
const watchLeftControl = document.querySelector(".watch-left-control");

let axisX = 0;
let axisY = 0;

const hideControl = () => {
  if (axisY === -280) {
    watchTopControl.classList.add("hide-control");
  } else {
    watchTopControl.classList.remove("hide-control");
  }

  if (axisY === 280) {
    watchBottomControl.classList.add("hide-control");
  } else {
    watchBottomControl.classList.remove("hide-control");
  }

  if (axisX === 280) {
    watchRightControl.classList.add("hide-control");
  } else {
    watchRightControl.classList.remove("hide-control");
  }

  if (axisX === -280) {
    watchLeftControl.classList.add("hide-control");
  } else {
    watchLeftControl.classList.remove("hide-control");
  }
};

watchTopControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${(axisY -= 70)}rem`;
  hideControl();
});

watchBottomControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${(axisY += 70)}rem`;
  hideControl();
});

watchRightControl.addEventListener("click", () => {
  watchBands.style.marginRight = `${(axisX += 70)}rem`;
  hideControl();
});

watchLeftControl.addEventListener("click", () => {
  watchBands.style.marginRight = `${(axisX -= 70)}rem`;
  hideControl();
});
// End of Section 4
