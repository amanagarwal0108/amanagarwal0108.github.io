const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
menu?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', open); menu.textContent = open ? 'Close' : 'Menu'; });
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); if (menu) menu.textContent = 'Menu'; }));
document.querySelector('#year').textContent = new Date().getFullYear();
