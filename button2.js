

document.addEventListener("DOMContentLoaded", function() {
  const audio = new Audio("http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a");

  const musicButton = document.querySelector(".musicButton");

  musicButton.addEventListener('click', () => {
      audio.play();
      alert("Click again after 5 seconds to hear the audio again");
  });

  audio.addEventListener("ended", function() {
      musicButton.textContent = "Play Music";
  });
});
