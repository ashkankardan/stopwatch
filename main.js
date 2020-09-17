var m10 = document.querySelector("#m10");
var m1 = document.querySelector("#m1");
var s10 = document.querySelector("#s10");
var s1 = document.querySelector("#s1");
var ms10 = document.querySelector("#ms10");
var ms1 = document.querySelector("#ms1");

var restartBtn = document.querySelector("#restartBtn");
var startBtn = document.querySelector("#startBtn");
var stopBtn = document.querySelector("#stopBtn");
var lapBtn = document.querySelector("#lapBtn");
var lapBox = document.querySelector("#lapBox");

var m10Count = 0;
var m1Count = 0;
var s10Count = 0;
var s1Count = 0;
var ms1Count = 0;
var ms10Count = 0;
var lapCount = 0;
var lap = "00:00";

startBtn.addEventListener("click", start);

function start() {
  console.log("clicked");

  var intervalIDVar = setInterval(function () {
    startBtn.classList.add("hide");
    stopBtn.classList.remove("hide");

    console.log("counting");

    if (ms1Count < 9) {
      ms1Count++;
      ms1.textContent = ms1Count;
    } else if (ms1Count === 9 && ms10Count < 9) {
      ms1Count = 0;
      ms10Count++;
      ms1.textContent = ms1Count;
      ms10.textContent = ms10Count;
    } else if (ms1Count === 9 && ms10Count === 9 && s1Count < 9) {
      ms1Count = 0;
      ms10Count = 0;
      s1Count++;
      s1.textContent = s1Count;
      ms1.textContent = ms1Count;
      ms10.textContent = ms10Count;
    } else if (
      ms1Count === 9 &&
      ms10Count === 9 &&
      s1Count === 9 &&
      s10Count < 5
    ) {
      ms1Count = 0;
      ms10Count = 0;
      s1Count = 0;
      s10Count++;
      s1.textContent = s1Count;
      s10.textContent = s10Count;
      ms1.textContent = ms1Count;
      ms10.textContent = ms10Count;
    } else if (
      ms1Count === 9 &&
      ms10Count === 9 &&
      s10Count === 5 &&
      s1Count === 9 &&
      m1Count < 9
    ) {
      ms1Count = 0;
      ms10Count = 0;
      s1Count = 0;
      s10Count = 0;
      m1Count++;
      s1.textContent = s1Count;
      s10.textContent = s10Count;
      m1.textContent = m1Count;
      ms1.textContent = ms1Count;
      ms10.textContent = ms10Count;
    } else if (
      ms1Count === 9 &&
      ms10Count === 9 &&
      s10Count === 5 &&
      s1Count === 9 &&
      m1Count === 9
    ) {
      ms1Count = 0;
      ms10Count = 0;
      s1Count = 0;
      s10Count = 0;
      m1Count = 0;
      m10Count++;
      s1.textContent = s1Count;
      s10.textContent = s10Count;
      m1.textContent = m1Count;
      m10.textContent = m10Count;
      ms1.textContent = ms1Count;
      ms10.textContent = ms10Count;
    } else {
      ms1Count = 0;
      ms10Count = 0;
      s1Count = 0;
      s10Count = 0;
      m1Count = 0;
      m10Count = 0;
      s1.textContent = s1Count;
      s10.textContent = s10Count;
      m1.textContent = m1Count;
      m10.textContent = m10Count;
      ms1.textContent = ms1Count;
      ms10.textContent = ms10Count;
    }
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
    ms1Count = 0;
    ms10Count = 0;
    lapCount = 0;
    s1Count = 0;
    s10Count = 0;
    m1Count = 0;
    m10Count = 0;
    s1.textContent = s1Count;
    s10.textContent = s10Count;
    m1.textContent = m1Count;
    m10.textContent = m10Count;
    ms1.textContent = ms1Count;
    ms10.textContent = ms10Count;
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
    "" +
    m10Count +
    m1Count +
    ":" +
    s10Count +
    s1Count +
    ":" +
    ms10Count +
    ms1Count;
  lapTimePEl.textContent = lapTimePElContent;

  newLapEl.append(lapPEl, lapTimePEl);
  lapBox.appendChild(newLapEl);
});
