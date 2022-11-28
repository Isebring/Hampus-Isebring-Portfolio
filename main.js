window.addEventListener("DOMContentLoaded", main);

function main() {
  addEventListeners();
  SwiperSlider();
}

function addEventListeners() {
  headerBackgroundChange();
  arrowBacktoTop();
  // headerListColorChange();
  hamburgerMenuAnimationAndSidebarToggle();
  removeSidebarOnScroll();
}

function SwiperSlider() {
  const swiper = new Swiper(".swiper", {
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    direction: "horizontal",
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

function hamburgerMenuAnimationAndSidebarToggle() {
  let menu = document.querySelector(".hamburger-menu-icon");
  let navbar = document.querySelector(".navbar");

  menu.onclick = () => {
    navbar.classList.toggle("toggle-sidebar");
    menu.classList.toggle("move");
  };
}

function removeSidebarOnScroll() {
  let menu = document.querySelector(".hamburger-menu-icon");
  let navbar = document.querySelector(".navbar");
window.onscroll = () => {
  navbar.classList.remove("toggle-sidebar");
  menu.classList.remove("move");
};
}

// function openSidebar() {
// let navbar = document.querySelector(".navbar");

// navbar.onclick = () => {
// navbar.classList.toggle("open-sidebar");
// };

// }



function logoReturnHome() {
  location.href = "homepage.html";
}

function headerBackgroundChange() {
  let header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
  });
}

// function headerListColorChange() {
//   let colorChange = document.querySelector(".nav-link");
//  window.addEventListener("scroll", () => {
//   colorChange.classList.toggle("list-active", window.scrollY > 0);
//   console.log('yoyooyo');
//  });
// }

function arrowBacktoTop() {
  let arrowScrollTop = document.querySelector(".scroll-back-to-top");
  window.addEventListener("scroll", () => {
    arrowScrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
  });
}

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   let toTopButton = document.getElementById("myBtn");
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     toTopButton.style.display = "block";
//   } else {
//     toTopButton.style.display = "none";
//   }
// }

// function topFunction() {
//   document.documentElement.scrollTop = 0;
//   console.log("hej");
// }

// function reRunTypewriter() {
//   typeWriter = document.querySelector("#typewriter");
//   const index = 0;
//   const text = "I am a junior UI...";
//   setInterval(typeChar, 800);

//   function typeChar() {
//     typeWriter.textContent += text[index];
//     index++;
//   }
// }
