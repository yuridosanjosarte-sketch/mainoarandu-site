document.addEventListener("DOMContentLoaded", function () {

const footer = `
<footer class="bg-gray-900 text-gray-400 text-center py-10">
  <div class="max-w-6xl mx-auto px-4">

    <h2 class="text-white text-xl font-bold mb-4">
      Tupi-Guarani
    </h2>

    <div class="social-container">
      <a href="https://instagram.com/seuusuario" target="_blank" class="icon-social">
        <i class="fab fa-instagram"></i>
      </a>

      <a href="https://youtube.com/seucanal" target="_blank" class="icon-social">
        <i class="fab fa-youtube"></i>
      </a>

      <a href="https://facebook.com/seuperfil" target="_blank" class="icon-social">
        <i class="fab fa-facebook"></i>
      </a>

      <a href="https://pin.it/Hh51yHD0O" target="_blank" class="icon-social">
        <i class="fab fa-pinterest"></i>
      </a>
    </div>

    <p class="text-sm mb-6 max-w-md mx-auto">
      Educação e tecnologia unidas pela preservação das raízes brasileiras.
    </p>

    <p class="text-xs mt-4">
      Este site possui recurso de acessibilidade em Libras.
    </p>

    <div class="border-t border-gray-800 pt-6">
      <p class="text-xs">
        © 2026 Mainoarandu • Feito com respeito e propósito
      </p>
    </div>

  </div>
</footer>
`;

document.body.insertAdjacentHTML("beforeend", footer);

});
