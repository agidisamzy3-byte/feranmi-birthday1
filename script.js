const button =
  document.querySelector("button");
button.addEventListener("click", function() {
    const surprise = document.querySelector("#surprise");
  surprise.style.display = "block";
  button.style.display = "none";
      const music = document.querySelector("#birthdayMusic");
    music.play();
});
const finalButton = document.querySelector("#finalButton");
const finalMessage = document.querySelector("#finalMessage");
finalButton.addEventListener("click", function() {
    finalMessage.style.display = "block";
});
const secretButton = document.querySelector("#secretButton");
const anonymousMessage = document.querySelector("#anonymousMessage");

secretButton.addEventListener("click", function() {
    anonymousMessage.style.display = "block";
});