// Update copyright year automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Book/Video Filter Functionality (Example)
const filterButtons = document.querySelectorAll('.filter-btn');
const contentItems = document.querySelectorAll('.content-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    
    contentItems.forEach(item => {
      item.style.display = item.classList.contains(filter) ? 'block' : 'none';
    });
  });
});