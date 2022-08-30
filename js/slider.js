let isVertical = true,
    direction = 'vertical';
let swiper = initSwiper(direction);

function initSwiper(direction) {
  return new Swiper('.swiper1', {
    direction: direction,
    autoplay: {
      delay: 4000,
    },
  
    pagination: {
      el: '.swiper-pagination',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      bulletClass: 	'swiper-pagination-bullet',
      clickable: true
    },  
    
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  }) 
}


if(window.innerWidth <= 700) {
  isVertical =!isVertical;
  direction = isVertical ? 'vertical' : 'horizontal';
  let slideIndex = swiper.activeIndex;
  swiper.destroy(true, true);
  swiper = initSwiper(direction);
  swiper.slideTo(slideIndex,0);
}


// const swiper = new Swiper('.swiper1', {
//   direction: 'vertical',
//   loop: true,
  
//   autoplay: {
//     delay: 4000,
//   },

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     bulletActiveClass: 'swiper-pagination-bullet-active',
//     bulletClass: 	'swiper-pagination-bullet',
//     clickable: true
//   },  
//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true,
//   },
// });


  var Myswiper = new Swiper(".swiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      240: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      1440: {
        slidesPerView: 3,
        spaceBetween: 20
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });

