$(document).ready(function(){
    $('.slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        arrows:false,
        slidesToScroll: 3
      });

      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
  });