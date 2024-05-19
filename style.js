const element = document.querySelectorAll('.flip-box');


  element.addEventListener('touch', () => {
    element.classList.add('touch-hover-effect');
  });

  element.addEventListener('touch', {passive: false}, () => {

    element.classList.remove('touch-hover-effect');
  });