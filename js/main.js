/* ============================================
   PORTFOLIO — main.js
   ============================================ */

// ── Dark mode ──────────────────────────────
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Apply saved or OS preference on load
(function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
})();

// ── Scroll reveal ──────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Stagger skill cards and project items
document.querySelectorAll('.skills-grid .skill-group, .projects-list .project-item')
  .forEach((el, i) => { el.style.transitionDelay = `${i * 0.07}s`; });

// ── Contact form ───────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target;
  btn.textContent = 'Sent ✓';
  btn.style.background = '#22c55e';
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.style.background = '';
  }, 3000);
}
