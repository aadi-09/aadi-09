// TributePage.js
document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for internal links
  const links = document.querySelectorAll('a[href^="#"]');
  
  for (let link of links) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Example of adding click functionality to the tribute link
  const tributeLink = document.getElementById('tribute-link');
  tributeLink.addEventListener('click', function () {
    alert('You are about to leave the page to learn more about Carl Sagan.');
  });
});