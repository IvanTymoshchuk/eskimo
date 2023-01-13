// $('.fade').slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// });

$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
  adaptiveHeight: true
});

$('.gallery-slick').slick({
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 500,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000
});