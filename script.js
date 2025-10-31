// JavaScript para atualizar indicadores de navegação
document.addEventListener("DOMContentLoaded", function () {
  const slideContainer = document.querySelector(".slide-container");
  const indicators = document.querySelectorAll(".slide-indicator");

  // Atualiza indicadores quando o usuário rola
  slideContainer.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const scrollPosition = slideContainer.scrollTop;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop - sectionHeight / 3 &&
        scrollPosition < sectionTop + sectionHeight - sectionHeight / 3
      ) {
        // Remove classe active de todos os indicadores
        indicators.forEach((indicator) => {
          indicator.classList.remove("active");
        });

        // Adiciona classe active ao indicador correspondente
        indicators[index].classList.add("active");
      }
    });
  });

  // Permite clicar nos indicadores para navegar
  indicators.forEach((indicator) => {
    indicator.addEventListener("click", function () {
      const slideIndex = parseInt(this.getAttribute("data-slide"));
      const sections = document.querySelectorAll("section");

      if (sections[slideIndex]) {
        slideContainer.scrollTo({
          top: sections[slideIndex].offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
