function openModal(id) {
  document.getElementById(id).style.display = "block";
  showSlides(0, id);
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Slideshow Logic
const slideIndexMap = {};

function showSlides(n, modalId) {
  const slides = document.querySelectorAll(`#${modalId} .modal-slide`);
  if (!slideIndexMap[modalId]) slideIndexMap[modalId] = 0;

  slideIndexMap[modalId] += n;
  if (slideIndexMap[modalId] >= slides.length) slideIndexMap[modalId] = 0;
  if (slideIndexMap[modalId] < 0) slideIndexMap[modalId] = slides.length - 1;

  slides.forEach(slide => (slide.style.display = "none"));
  slides[slideIndexMap[modalId]].style.display = "block";
}

function changeSlide(n, modalId) {
  showSlides(n, modalId);
}

// Optional Auto Slide
setInterval(() => {
  document.querySelectorAll('.modal-container').forEach(modal => {
    if (modal.style.display === 'block') {
      const id = modal.id;
      showSlides(1, id);
    }
  });
}, 5000); // every 5 seconds
