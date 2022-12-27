const ScrollListener = () =>
  window.addEventListener('scroll', () => {
    const scrollDistance = window.scrollY;
    console.log(scrollDistance);
    const body = document.querySelector('body');
    if (scrollDistance !== 0) {
      body?.classList.add('scrollY');
    } else {
      body?.classList.remove('scrollY');
    }
  });

export default ScrollListener;
