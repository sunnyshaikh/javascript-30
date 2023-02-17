const hrEle = document.querySelector(".hr")
const minEle = document.querySelector(".mn")
const secEle = document.querySelector(".sc")

function clock() {
  const date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let hrRotate = 30 * hr + min / 2;
  let minRotate = 6 * min;
  let secRotate = 6 * sec;

  hrEle.style.transform = `rotate(${hrRotate}deg)`;
  minEle.style.transform = `rotate(${minRotate}deg)`;
  secEle.style.transform = `rotate(${secRotate}deg)`;
}

setInterval(clock, 1000)