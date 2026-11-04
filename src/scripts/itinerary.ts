const controls = document.querySelector<HTMLElement>('.accordion-controls');
const days = [...document.querySelectorAll<HTMLDetailsElement>('.day')];
if (controls && days.length) {
  controls.hidden = false;
  controls.querySelector('[data-expand]')?.addEventListener('click', () => days.forEach(day => day.open = true));
  controls.querySelector('[data-collapse]')?.addEventListener('click', () => days.forEach(day => day.open = false));
}
