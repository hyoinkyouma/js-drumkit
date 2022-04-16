import "../node_modules/bootstrap/dist/js/bootstrap.js";

let drumBtn = document.querySelectorAll(".drum");
//play audio files mp3
function playDrum(src) {
  var audio = new Audio(`./sounds/${src}.mp3`);
  audio.play();
}

//handle btn animation and call drum audio function
function playSound(i) {
  switch (i) {
    case "a":
    case 0:
      drumBtn[0].classList.add("pressed");
      setTimeout(function () {
        drumBtn[0].classList.remove("pressed");
      }, 100);

      playDrum("tom-3");
      break;
    case "s":
    case 1:
      drumBtn[1].classList.add("pressed");
      setTimeout(function () {
        drumBtn[1].classList.remove("pressed");
      }, 100);

      playDrum("tom-1");

      break;
    case "d":
    case 2:
      drumBtn[2].classList.add("pressed");
      setTimeout(function () {
        drumBtn[2].classList.remove("pressed");
      }, 100);

      playDrum("tom-2");

      break;
    case "f":
    case 3:
      playDrum("snare");

      drumBtn[3].classList.add("pressed");
      setTimeout(function () {
        drumBtn[3].classList.remove("pressed");
      }, 100);

      break;
    case "g":
    case 4:
      drumBtn[4].classList.add("pressed");
      setTimeout(function () {
        drumBtn[4].classList.remove("pressed");
      }, 100);

      playDrum("kick-bass");
      break;

    case "h":
    case 5:
      drumBtn[5].classList.add("pressed");
      setTimeout(function () {
        drumBtn[5].classList.remove("pressed");
      }, 100);

      playDrum("crash");
      break;
  }
}

//loop through drum btns
for (let i = 0; i < drumBtn.length; i++) {
  drumBtn[i].addEventListener("click", () => {
    playSound(i);
    animateBtn(i);
  });
}
document.addEventListener("keydown", (e) => {
  playSound(e.key);
});
