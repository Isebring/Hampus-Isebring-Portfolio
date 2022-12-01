window.addEventListener("DOMContentLoaded", main);
/** Here marks the start of the page, the main function which loads after the DOM content is loaded */
function main() {
  addEventListeners();
  SwiperSlider();
}
/** This function serves as the first thing the main function loads after the DOM content is loaded, which is the event listeners */
function addEventListeners() {
  headerBackgroundChange();
  arrowBacktoTop();
  hamburgerMenuAnimationAndSidebarToggle();
  removeSidebarOnScroll();
}
/**
 * This function is imported from the Swiper.js library and serves as the slider/carousel containing images
 */
function SwiperSlider() {
  if(this.Swiper === undefined) {return};
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
      delay: 5000,
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
/**
 * This function serves as the toggle and removal of the sidebar with the hamburger-menu icon. The icon appears on screen sizes 775px and smaller.
 */
function hamburgerMenuAnimationAndSidebarToggle() {
  let menu = document.querySelector(".hamburger-menu-icon");
  let navbar = document.querySelector(".navbar");

  menu.onclick = () => {
    navbar.classList.toggle("toggle-sidebar");
    menu.classList.toggle("move");
  };
}
/** The purpose of this function is to close the sidebar if the user starts to scroll on the page */
function removeSidebarOnScroll() {
  let menu = document.querySelector(".hamburger-menu-icon");
  let navbar = document.querySelector(".navbar");
  window.onscroll = () => {
    navbar.classList.remove("toggle-sidebar");
    menu.classList.remove("move");
  };
}

/** This simple function enables the logo to be clickable and return the user to the top of the page */
function logoReturnHome() {
  location.href = "#home";
}

/** This function enables a background color instead of the transparent one for the header when the user scrolls. This to avoid the elements contained in the header from colliding with the elements within the page */
function headerBackgroundChange() {
  let header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
  });
}

/** This function provides another way for the user to get back to the top of the page. This code also make the arrow pop up after the user have scrolled down a bit */
function arrowBacktoTop() {
  let arrowScrollTop = document.querySelector(".scroll-back-to-top");
  window.addEventListener("scroll", () => {
    arrowScrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
  });
}
