document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Cerrar el menú al hacer clic en un enlace
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', function () {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
});
