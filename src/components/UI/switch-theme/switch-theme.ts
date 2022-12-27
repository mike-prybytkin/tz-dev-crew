const SwitchTheme = () => {
  const switchButton = document.querySelector('#switch-theme');
  const body = document.querySelector('#body');
  switchButton?.addEventListener('click', () => {
    body?.classList.toggle('light-theme');
  });
};

export default SwitchTheme;
