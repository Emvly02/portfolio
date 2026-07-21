const slider = document.querySelector(".project-scroll");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("pointerdown", (e) => {
  isDown = true;
  slider.setPointerCapture(e.pointerId);

  startX = e.clientX;
  scrollLeft = slider.scrollLeft;

  slider.classList.add("dragging");
});

slider.addEventListener("pointermove", (e) => {
  if (!isDown) return;

  const x = e.clientX;
  const walk = (x - startX) * 1.5;

  slider.scrollLeft = scrollLeft - walk;
});

function stopDrag() {
  isDown = false;
  slider.classList.remove("dragging");
}

slider.addEventListener("pointerup", stopDrag);
slider.addEventListener("pointercancel", stopDrag);

const meinWegBtn = document.getElementById("meinWegBtn");

meinWegBtn.addEventListener("click", () => {
  window.location.href = "meinWeg.html";
});
