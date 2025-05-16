document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.carousel-item');
  let current = 0;

  // S'assurer qu'il y a au moins un élément
  if (items.length > 0) {
    items[current].classList.add('active');
  }

  document.getElementById('next-btn').addEventListener('click', () => {
    items[current].classList.remove('active');
    current = (current + 1) % items.length;
    items[current].classList.add('active');
  });
  document.getElementById('before-btn').addEventListener('click', () => {
    items[current].classList.remove('active');
    current = (current - 1) % items.length;
    if (current < 0) {
      current = items.length - 1;
    }
    items[current].classList.add('active');
  });

});
