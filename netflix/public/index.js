const nav = document.getElementById("top-logo");
const navHeight = nav.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navHeight) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});

window.addEventListener("scroll", function () {
  console.log(scrollY);
});

//

let grid0 = document.getElementById("grid0");
let main3img1 = document.querySelector(".main3img1");
let main3img2 = document.querySelector(".main3img2");
let main3img3 = document.querySelector(".main3img3");
let grid1 = document.getElementById("grid1");
let grid2 = document.getElementById("grid2");
let grid3 = document.getElementById("grid3");
let grid4 = document.getElementById("grid4");
let noticeimg = document.querySelector(".noticeimg");
let grid4item2 = document.querySelector(".grid4item2");

document.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 3520) {
    grid4.style.transform = "translateY(-60px)";
    setTimeout(function () {
      grid4item2.style.transform = "translateY(-60px)";
    }, 500);
  } else {
    grid4.style.transform = "translateY(0)";
    grid4item2.style.transform = "translateY(0)";
  }

  if (window.scrollY > 3520) {
    grid3.style.transform = "translateY(-60px)";
  } else {
    grid3.style.transform = "translateY(0)";
  }

  if (window.scrollY > 2780) {
    grid2.style.transform = "translateY(-60px)";
  } else {
    grid2.style.transform = "translateY(0)";
  }

  if (window.scrollY > 2780) {
    grid1.style.transform = "translateY(-60px)";
    setTimeout(function () {
      noticeimg.style.transform = "translateY(-60px)";
    }, 300);
  } else {
    grid1.style.transform = "translateY(0)";
    noticeimg.style.transform = "translateY(0)";
  }

  if (window.scrollY > 2200) {
    grid0.style.transform = "translateY(-60px)";
    setTimeout(function () {
      main3img1.style.transform = "translateY(-60px)";
    }, 100);
    setTimeout(function () {
      main3img2.style.transform = "translateY(-60px)";
    }, 100);
    setTimeout(function () {
      main3img3.style.transform = "translateY(-60px)";
    }, 100);
  } else {
    grid0.style.transform = "translateY(0)";
    main3img1.style.transform = "translateY(0)";
    main3img2.style.transform = "translateY(0)";
    main3img3.style.transform = "translateY(0)";
  }
});
