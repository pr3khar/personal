new Vivus("animation-1", {
  type: "delayed",
  duration: 200,
  animTimingFunction: Vivus.EASE,
});

$(".owl-carousel").owlCarousel({
  items: 1,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 16000,
  autoplayHoverPause: true,
  dots: true,
  dotsEach: true,
  nav: true,
  navText: true,
  center: true,
  margin: 30,
});
