window.addEventListener("DOMContentLoaded", main);

function main() {
  hamburgerMenuAnimation();
  topFunction();
  scrollFunction();
  SwiperSlider();
}

function hamburgerMenuAnimation() {
  let menu = document.querySelector(".hamburger-menu-icon");

  menu.onclick = () => {
    menu.classList.toggle("move");
  };
}

function logoReturnHome() {
  location.href = "homepage.html";
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let toTopButton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
  console.log("hej");
}

function SwiperSlider() {
  const swiper = new Swiper(".swiper", {
    effect: 'creative',
    creativeEffect: {
     prev: {
      translate: [0, 0, -400],
     },
     next: {
      translate: ['100%', 0, 0],
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
