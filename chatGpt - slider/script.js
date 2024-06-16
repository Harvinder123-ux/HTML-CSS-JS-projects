let currentSlideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');

  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[currentSlideIndex].style.display = 'block';
}

function changeSlide(n) {
  showSlide(currentSlideIndex + n);
}

document.getElementById('prevBtn').addEventListener('click', () => {
  changeSlide(-1);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  changeSlide(1);
});

// // Auto advance the slides every 3 seconds
// setInterval(() => {
//   changeSlide(1);
// }, 3000);

// // Show the first slide on page load
// showSlide(currentSlideIndex);
