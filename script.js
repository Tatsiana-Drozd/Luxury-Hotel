  const wrapper = document.querySelector('.attraction__slider-wrapper');
  const slides = document.querySelectorAll('.attraction__block');
  const btnPrev = document.querySelector('.attraction__slider-btn--prev');
  const btnNext = document.querySelector('.attraction__slider-btn--next');

  let currentIndex = 0;
  const totalSlides = slides.length;

  function goToSlide(newIndex) {
    if (newIndex < 0) {
      newIndex = totalSlides - 1;
    } else if (newIndex >= totalSlides) {
      newIndex = 0;
    }
    currentIndex = newIndex;
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

 
  btnPrev.addEventListener('click', () => goToSlide(currentIndex - 1));
  btnNext.addEventListener('click', () => goToSlide(currentIndex + 1));
