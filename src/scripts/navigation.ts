const button = document.querySelector<HTMLButtonElement>('.menu-toggle');
const nav = document.querySelector<HTMLElement>('#main-navigation');
const header = document.querySelector<HTMLElement>('.site-header');
if (button && nav && header) {
  button.hidden = false;
  header.classList.add('enhanced');
  const close = (focus = false) => {
    button.setAttribute('aria-expanded', 'false');
    header.classList.remove('menu-open');
    button.querySelector('.menu-label')!.textContent = button.dataset.openLabel!;
    if (focus) button.focus();
  };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    header.classList.toggle('menu-open', open);
    button.querySelector('.menu-label')!.textContent = open ? button.dataset.closeLabel! : button.dataset.openLabel!;
  });
  nav.addEventListener('click', (event) => {
    const link = (event.target as Element).closest<HTMLAnchorElement>('a');
    if (!link) return;
    close();
    const destination = document.querySelector<HTMLElement>(link.hash);
    if (destination) {
      destination.tabIndex = -1;
      destination.focus({preventScroll:true});
    }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') close(true); });
  document.addEventListener('click', e => { if (!header.contains(e.target as Node)) close(); });
  header.addEventListener('focusout', e => { if (!header.contains(e.relatedTarget as Node)) close(); });
  matchMedia('(min-width: 900px)').addEventListener('change', () => close());
  const links = [...nav.querySelectorAll<HTMLAnchorElement>('a')];
  const sections = links.map(link=>document.querySelector<HTMLElement>(link.hash)).filter((section): section is HTMLElement=>!!section);
  const setCurrent = (id: string) => links.forEach(link => { if(link.hash === '#'+id) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current'); });
  let queued = false;
  const update = () => {
    const offset = header.getBoundingClientRect().height + 120;
    let current = '';
    for (const section of sections) if(section.getBoundingClientRect().top <= offset) current = section.id;
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) current = sections.at(-1)?.id || current;
    setCurrent(current);
    queued = false;
  };
  const schedule = () => { if(!queued) { queued = true; requestAnimationFrame(update); } };
  const observer = new IntersectionObserver(schedule, {rootMargin:'-10% 0px -60% 0px'});
  sections.forEach(section=>observer.observe(section));
  addEventListener('scroll',schedule,{passive:true});
  addEventListener('resize',schedule);
  addEventListener('hashchange',()=>{close(); schedule();});
  addEventListener('pageshow',schedule);
  update();
}
