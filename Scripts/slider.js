const slider = document.querySelector('.slider');

function slide() {
  const firstSlide = slider.firstElementChild.cloneNode(true);
  slider.appendChild(firstSlide);
  slider.removeChild(slider.firstElementChild);
}

setInterval(slide, 10000); // Adjust the interval to match animation duration
