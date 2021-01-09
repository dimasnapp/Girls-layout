import * as $ from "jquery"
import './css/style.css'
import './scss/style.scss'
import Swiper, { Navigation, Pagination } from 'swiper'

//Swiper ------------

Swiper.use([Navigation, Pagination]);
const mySwiper = new Swiper('.swiper-container', {
  centeredSlides: true,
  slidesPerView: 1.7,
  loop: true,
  speed: 600,

  breakpoints: {
    1025:{
      slidesPerView: 1.7,
    },
    770: {
      slidesPerView: 1.5,
    },
    415: {
      slidesPerView: 1.38,
    },
    376: {
      slidesPerView: 1.45,
    },
    100: {
      slidesPerView: 1.35,
    },

  }
})

// SVG animation ------------

new Vivus(
  'sign',
  {
    type: 'sync',
    duration: 80,
  },
);

// Cursor ----------------

let mouseCursor = document.querySelector(".cursor");
let slideHover = document.querySelectorAll('.swiper-slide');

window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

slideHover.forEach(slide => {
  slide.addEventListener('mouseover', () => {
    mouseCursor.classList.add("cursor_text");
  });
  slide.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove("cursor_text");
  });

});

 // Burger-menu

let nav = $('#nav');

$("#navToggle").on('click', function(event){
  event.preventDefault();

  nav.toggleClass("show");
})