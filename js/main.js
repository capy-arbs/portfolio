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
const LIMITS = { name: 100, email: 254, message: 2000 };
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]+\.[^\s@]{2,}$/;
const HTML_RE = /<[^>]*>/;
let lastSubmit = 0;

function sanitize(str) {
  return str.trim().replace(/[\u0000-\u001F\u007F]/g, '');
}

function validateForm(name, email, message) {
  if (!name || name.length > LIMITS.name)        return 'Please enter a name (max 100 chars).';
  if (HTML_RE.test(name) || HTML_RE.test(message)) return 'No HTML allowed.';
  if (!EMAIL_RE.test(email))                      return 'Please enter a valid email address.';
  if (!message || message.length < 10)            return 'Message must be at least 10 characters.';
  if (message.length > LIMITS.message)            return 'Message is too long (max 2000 chars).';
  return null;
}

function handleSubmit(e) {
  e.preventDefault();

  const now = Date.now();
  if (now - lastSubmit < 30000) {
    alert('Please wait 30 seconds before submitting again.');
    return;
  }

  const name    = sanitize(document.getElementById('name').value);
  const email   = sanitize(document.getElementById('email').value);
  const message = sanitize(document.getElementById('message').value);

  const error = validateForm(name, email, message);
  if (error) { alert(error); return; }

  lastSubmit = now;

  const subject = encodeURIComponent('Portfolio Contact: ' + name);
  const body    = encodeURIComponent('From: ' + name + '\nEmail: ' + email + '\n\n' + message);
  window.location.href = 'mailto:arbon.graham@gmail.com?subject=' + subject + '&body=' + body;

  const btn = e.target;
  btn.textContent = 'Sent ✓';
  btn.style.background = '#22c55e';
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.style.background = '';
  }, 3000);
}
