const element = document.querySelectorAll('.flip-box-inner');


  element.addEventListener('touchstart', () => {
    element.classList.add('touch-hover-effect');
  });

  element.addEventListener('touchend', () => {

    element.classList.remove('touch-hover-effect');
  });