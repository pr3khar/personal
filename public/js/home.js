VANTA.DOTS({
  el: "#bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xc3c3c3,
  color2: 0xffffff,
  backgroundColor: 0xffffff,
});

// VANTA.TOPOLOGY({
//   el: "#bg",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   scale: 1.0,
//   scaleMobile: 1.0,
//   color: 0xe3e3e3,
//   backgroundColor: 0xffffff,
// });

var ticker = document.querySelector(".ticker"),
  list = document.querySelector(".ticker-list"),
  clone = list.cloneNode(true);

ticker.append(clone);
