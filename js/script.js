let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};




var swiper = new Swiper(".home-slid", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});



var swiper = new Swiper(".team-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      "0": {
        slidesPerView: 1,
        autoplay:{
            delay:700,
            disableOnInteraction:false,
        },
      },
      "768": {
        slidesPerView: 2,

      },
      "1020": {
        slidesPerView: 3,

      },
    },
  });

  let accordions = document.querySelectorAll('.faqs .row .content .box');

accordions.forEach(acco =>{
    acco.onclick = () =>{
        accordions.forEach(subAcco => {subAcco.classList.remove('active')});
        acco.classList.add('active');
    }
})



var swiper = new Swiper(".portfolio-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grabCursor:true,
  centeredSlides:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
   
    },
    768: {
      slidesPerView: 2,
      
    },
    991: {
      slidesPerView: 3,

    },
  },
});
