document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("nav ul");

  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("is-active");
    navToggle.classList.toggle("is-active"); // To animate the hamburger icon if needed
  });
});
