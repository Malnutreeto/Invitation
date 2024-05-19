const element = document.querySelectorAll('.flip-box');


  element.addEventListener('touch', () => {
    element.classList.add('touch-hover-effect');
  });

  element.addEventListener('touch', () => {
    // Remove touch effect
    element.classList.remove('touch-hover-effect');
  });