// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
//import '../js/offcanvas.js'

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    autoplay:{
      delay : 3000,
    },
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window width is >= 480px
    }
    
  });
  