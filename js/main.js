// Current year in footer (inner pages only)
var yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Gallery images: fade in as each finishes loading (instead of popping in)
document.querySelectorAll(".masonry img").forEach(function (img) {
  if (!img.complete) {
    img.classList.add("is-loading");
    img.addEventListener("load", function () {
      img.classList.remove("is-loading");
    }, { once: true });
  }
});

// Splash background slideshow: crossfade through .slide elements
var slides = document.querySelectorAll(".slideshow .slide");
if (slides.length > 1) {
  var current = 0;
  setInterval(function () {
    slides[current].classList.remove("is-active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("is-active");
  }, 5000);
}
