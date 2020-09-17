var min = document.querySelector("#min");
var sec = document.querySelector("#sec");
var ms = document.querySelector("#ms");

var restartBtn = document.querySelector("#restartBtn");
var startBtn = document.querySelector("#startBtn");
var stopBtn = document.querySelector("#stopBtn");
var lapBtn = document.querySelector("#lapBtn");
var lapBox = document.querySelector("#lapBox");

var secCount = 0;
var minCount = 0;
var counter = 0;
var lapCount = 0;
var lap = "00:00";

startBtn.addEventListener("click", start);

function start() {
  console.log("clicked");

  var intervalIDVar = setInterval(function () {
    startBtn.classList.add("hide");
    stopBtn.classList.remove("hide");

    counter++;
    secCount += 0.01;
    minCount += 0.01 / 60;

    if (secCount > 60) {
      secCount = 00;
    }

    ms.textContent = counter.toString().slice(-2);
    sec.textContent = ("0" + Math.floor(secCount)).slice(-2);
    min.textContent = ("0" + Math.floor(minCount)).slice(-2);
  }, 10);

  stopBtn.addEventListener("click", function () {
    clearInterval(intervalIDVar);
    startBtn.classList.remove("hide");
    stopBtn.classList.add("hide");
  });

  restartBtn.addEventListener("click", function () {
    clearInterval(intervalIDVar);
    lapBox.textContent = "";
    startBtn.className = "btns";
    stopBtn.className = "btns hide";
    counter = 0;
    msCount = 0;
    secCount = 0;
    minCount = 0;
    lapCount = 0;
    ms.textContent = "0" + msCount;
    sec.textContent = "0" + secCount;
    min.textContent = "0" + minCount;
  });
}

lapBtn.addEventListener("click", function () {
  lapCount++;
  var newLapEl = document.createElement("div");
  newLapEl.classList.add("newLap");
  var lapPEl = document.createElement("p");
  lapPEl.classList.add("lapP");
  var newLapContent = "Lap " + lapCount + ": ";
  lapPEl.textContent = newLapContent;
  var lapTimePEl = document.createElement("p");
  lapTimePEl.classList.add("lapTime");
  lapTimePElContent =
    "" + min.textContent + ":" + sec.textContent + ":" + ms.textContent;
  lapTimePEl.textContent = lapTimePElContent;

  newLapEl.append(lapPEl, lapTimePEl);
  lapBox.appendChild(newLapEl);
});
