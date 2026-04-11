document.addEventListener("DOMContentLoaded", function () {

const logoImg = document.getElementById("logoImg");
const logoVideo = document.getElementById("logoVideo");

if (!logoImg || !logoVideo) return;

let animando = false;

document.addEventListener("click", function (e) {

const link = e.target.closest("a, button");
if (!link) return;

const href = link.getAttribute("href");

if (!href) return;

/* não animar âncoras */
if (href.startsWith("#")) return;

/* não animar links externos */
if (href.startsWith("http")) return;

/* não animar downloads */
if (link.hasAttribute("download")) return;

/* não animar target blank */
if (link.target === "_blank") return;

if (animando) return;
animando = true;

e.preventDefault();

/* esconder logo */
logoImg.style.opacity = "0";

/* mostrar vídeo */
logoVideo.classList.remove("hidden");
logoVideo.style.display = "block";

logoVideo.currentTime = 0;
logoVideo.play();

logoVideo.onended = function () {
window.location.href = href;
};

});

});
