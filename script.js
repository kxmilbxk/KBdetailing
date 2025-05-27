
  $(document).ready(function () {
    // Pokaż/ukryj przycisk przewijania
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $('#scrollTopBtn').fadeIn();
      } else {
        $('#scrollTopBtn').fadeOut();
      }
    });

    // Po kliknięciu przycisku – przewiń do góry
    $('#scrollTopBtn').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 600);
      return false;
    });

    // Płynne przewijanie dla linków w nawigacji
    $('nav a[href^="#"]').click(function (e) {
      e.preventDefault();
      const target = $($(this).attr('href'));
      if (target.length) {
        $('html, body').animate({ scrollTop: target.offset().top }, 600);
      }
    });
  });

  // Przewijanie do sekcji "Opinie"

  function revealOnScroll() {
    const reviews = document.querySelectorAll('.review.animated.hidden');
    const triggerBottom = window.innerHeight * 0.85;

    reviews.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add('revealed');
        el.classList.remove('hidden');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);


//brand strip

document.addEventListener("DOMContentLoaded", function () {
  const strip = document.querySelector(".brand-strip");

  window.addEventListener("scroll", () => {
    const triggerHeight = window.innerHeight * 0.3;

    if (window.scrollY > triggerHeight) {
      strip.classList.add("visible");
    } else {
      strip.classList.remove("visible");
    }
  });
});