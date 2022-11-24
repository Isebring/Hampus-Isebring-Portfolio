window.addEventListener('DOMContentLoaded', main);

function main() {
  hamburgerMenuAnimation();
  reRunTypewriter();
  }


function hamburgerMenuAnimation() {
  let menu = document.querySelector('.hamburger-menu-icon');
  
  menu.onclick = () => {
    menu.classList.toggle("move");
  };
  }

  function logoReturnHome() {
    location.href= 'homepage.html';
  }

  function reRunTypewriter() {
  let goAgain; 
  goAgain = setInterval(reRun, 5000);

  function reRun() {
    typeWriter = document.querySelector('#typewriter');
    typeWriter.goAgain;
  }
  }
