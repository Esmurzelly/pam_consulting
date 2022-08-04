const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,

    autoplay: {
      delay: 4000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      bulletClass: 	'swiper-pagination-bullet',
      clickable: true,
    },  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });