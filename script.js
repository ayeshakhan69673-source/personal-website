// Scroll-spy: highlight the active nav link based on visible section
const sections = document.querySelectorAll('main .section');
const navLinks = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.dataset.section === id);
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach((section) => navObserver.observe(section));

// Animate skill bars when the resume section scrolls into view
const skillRows = document.querySelectorAll('.skill-row');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.skill-fill');
      const level = entry.target.dataset.level;
      fill.style.width = level + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillRows.forEach((row) => skillObserver.observe(row));