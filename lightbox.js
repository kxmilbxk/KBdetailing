document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.gallery-grid img');

  images.forEach(img => {
    img.style.cursor = 'zoom-in';

    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.classList.add('lightbox-overlay');

      const bigImg = document.createElement('img');
      bigImg.src = img.src;
      bigImg.alt = img.alt;
      bigImg.classList.add('lightbox-img');

      overlay.appendChild(bigImg);
      document.body.appendChild(overlay);

      overlay.addEventListener('click', () => {
        overlay.remove();
      });
    });
  });
});
