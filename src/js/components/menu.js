document.addEventListener("DOMContentLoaded", () => {
  const mainLinks = document.querySelectorAll(".footer__link--main");

  mainLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const navGroup = link.closest(".footer__nav-group");
      const subMenu = navGroup.querySelector(".footer__list");

      if (subMenu) {
        subMenu.classList.toggle("active");
      }
    });
  });
});


