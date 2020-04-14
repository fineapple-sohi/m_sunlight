$(document).ready(function(){

  var pointNum = new Swiper('.point-num', {
    effect: 'fade',
    loop: true,
  });

    var pointSlide = new Swiper('.point-slide', {
        slidesPerView: 1.4,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
        loopedSlides: 3,
        thumbs: {
          swiper: pointNum,
        },
      });

});