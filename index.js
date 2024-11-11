// const crash = new Audio("./sounds/crash.mp3");
// const kick = new Audio("./sounds/kick-bass.mp3");
// const snare = new Audio("./sounds/snare.mp3");
// const tom = new Audio("./sounds/tom-1.mp3");
// const tom2 = new Audio("./sounds/tom-2.mp3");
// const tom3 = new Audio("./sounds/tom-3.mp3");
// const tom4 = new Audio("./sounds/tom-4.mp3");

// console.log(buttons);
// const w = document.querySelector(".w").addEventListener("click", () => {
//   crash.play();
//   crash.currentTime = 0;
//   console.log("h");
// });

// const a = document.querySelector(".a").addEventListener("click", () => {
//   kick.play();
// });
// const s = document.querySelector(".s").addEventListener("click", () => {
//   snare.play();
// });
// const d = document.querySelector(".d").addEventListener("click", () => {
//   tom.play();
// });
// const j = document.querySelector(".j").addEventListener("click", () => {
//   tom2.play();
// });
// const k = document.querySelector(".k").addEventListener("click", () => {
//   tom3.play();
// });
// const l = document.querySelector(".l").addEventListener("click", () => {
//   tom4.play();
// });
// document.addEventListener("keydown", (event) => {

// });
const buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {
  // console.log(buttons[i]);
  buttons[i].addEventListener("click", () => {
    let ClickedButton = buttons[i].innerHTML;
    // console.log(ClickedButton);
    makeSound(ClickedButton);
    buttonAnimation(ClickedButton);
  });
}
document.addEventListener("keydown", (event) => {
  let key = event.key;
  makeSound(key);
  buttonAnimation(key);
});
function makeSound(key) {
  let audio;
  switch (key) {
    case "w":
      audio = new Audio("./sounds/crash.mp3");
      audio.play();

    case "a":
      audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
    case "s":
      audio = new Audio("./sounds/snare.mp3");
      audio.play();
    case "d":
      audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
    case "j":
      audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
    case "k":
      audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
    case "l":
      audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
  }
}
function buttonAnimation(pressedButton) {
  const addAnimation = document.querySelector("." + pressedButton);
  addAnimation.classList.add("pressed");
  setTimeout(() => {
    addAnimation.classList.remove("pressed");
  }, 100);
}
