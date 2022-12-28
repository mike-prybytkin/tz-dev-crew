const ScrollListener = () =>
  window.addEventListener('scroll', () => {
    const scrollDistance = window.scrollY;
    const body = document.querySelector('#body');
    if (scrollDistance !== 0) {
      body?.classList.add('scrollY');
    } else {
      body?.classList.remove('scrollY');
    }
  });

export default ScrollListener;
