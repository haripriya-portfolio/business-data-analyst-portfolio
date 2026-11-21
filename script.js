
document.addEventListener("DOMContentLoaded", function () {

  // Automatically display the current year
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile navigation
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });

    // Close the menu after selecting a section
    navLinks.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });

    });

  }

});
