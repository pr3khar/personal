const ticker = document.querySelector(".ticker-content");
const tickerItems = ticker.getElementsByTagName("li");
let i = 0;

function tickerLoop() {
  const itemWidth = tickerItems[i].offsetWidth;
  ticker.style.transform = `translateX(-${itemWidth}px)`;
  setTimeout(tickerLoop, 5000);
  i = (i + 1) % tickerItems.length;
}

tickerLoop();
