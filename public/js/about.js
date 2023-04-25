$(".owl-carousel").owlCarousel({
  loop: true,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  stagePadding: 50,
  margin: 40,
  dots: true,
  dotsEach: true,
  nav: false,
  navText: false,
  responsive: {
    0: {
      items: 1,
      nav: true,
      stagePadding: 0,
      margin: 16,
    },
    400: {
      items: 1.25,
      nav: true,
      stagePadding: 0,
      margin: 16,
    },
    750: {
      items: 2,
      nav: true,
    },
    1000: {
      items: 3,
      nav: true,
    },
  },
});
