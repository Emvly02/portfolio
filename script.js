const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");

const projectVideos = document.querySelectorAll(".project-image video");

projectVideos.forEach(video => {
  video.addEventListener("click", () => {

    modal.classList.add("active");

    const source = video.querySelector("source").src;
    modalVideo.src = source;

    modalVideo.currentTime = 0;
    modalVideo.play();

  });
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    modalVideo.pause();
    modalVideo.src = "";
  }
});