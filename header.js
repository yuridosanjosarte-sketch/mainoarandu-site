document.addEventListener("DOMContentLoaded", function () {

const header = `
<header class="bg-white backdrop-blur sticky top-0 z-50 shadow-sm">
  <div class="max-w-6xl mx-auto flex items-center justify-between p-4 relative">

    <!-- esquerda vazia -->
    <div class="w-24"></div>

    <!-- LOGO CENTRAL -->
    <div class="absolute left-1/2 transform -translate-x-1/2">
      <div class="relative h-12 md:h-16 w-auto">

        <a href="index.html">
          <img id="logoImg"
               src="mainolindinho.jpeg"
               class="h-12 md:h-16 w-auto object-contain">
        </a>

        <video id="logoVideo"
               src="mainolindinhovideo.mp4"
               class="h-12 md:h-16 w-auto object-contain absolute inset-0 hidden"
               playsinline>
        </video>

      </div>
    </div>

    <!-- botão direita -->
    <div class="w-24 text-right">
      <a href="sobre-idealizadora.html"
         class="bg-[#B8860B] hover:bg-[#FFD700] text-white px-4 py-2 rounded-full shadow-xl transition transform hover:scale-105 font-bold uppercase tracking-wider text-sm">
         Saiba mais
      </a>
    </div>

  </div>
</header>
`;

document.body.insertAdjacentHTML("afterbegin", header);

});
