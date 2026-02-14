window.addEventListener("load", () => {
  const video = document.createElement("video");
  const divVideo = document.querySelector(".divVideo");

    // O VILÃO É O SRC
  video.src = "img/video-monstrinho-otimizado.mp4";
  video.autoplay = true;
  video.muted = true;
  video.playsInline = true;
  video.loop = true;

  video.style.opacity = 0

  video.addEventListener("canplaythrough", ()=> {
    video.style.opacity = 1
  })

  divVideo.appendChild(video);
});



