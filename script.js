

// ===========================
// HAMBURGER MENU TOGGLE
// ===========================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    hamburger.textContent = navLinks.classList.contains('active') ? '✖' : '☰';
  });
}

// ===========================
// SMOOTH SCROLLING FOR NAV LINKS
// ===========================
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });

    if (navLinks && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.textContent = '☰';
      hamburger.classList.remove('active');
    }
  });
});

// ===========================
// REVEAL ANIMATIONS ON SCROLL
// ===========================
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight / 1.2;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) el.classList.add('active');
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ===========================
// SKILL BAR ANIMATION
// ===========================
const skills = document.querySelectorAll('.bar-fill');
const animateSkills = () => {
  const triggerBottom = window.innerHeight / 1.2;
  skills.forEach(skill => {
    const top = skill.getBoundingClientRect().top;
    if (top < triggerBottom && !skill.dataset.filled) {
      const pct = skill.getAttribute('data-pct') || '0%';
      skill.style.width = pct;
      skill.dataset.filled = true;
    }
  });
};
window.addEventListener('scroll', animateSkills);
animateSkills();

// ===========================
// DYNAMIC YEAR IN FOOTER
// ===========================
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===========================
// COPY EMAIL TO CLIPBOARD
// ===========================
const copyBtn = document.getElementById('copyEmail');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('mbaforfoghang@gmail.com').then(() => {
      copyBtn.textContent = 'Copied!';
      setTimeout(() => (copyBtn.textContent = 'Copy Email'), 2000);
    });
  });
}

// ===========================
// HERO TYPING ANIMATION
// ===========================
const heroTitle = document.querySelector('.hero-title span.accent');
const heroText = "Mbafor Joshua";
let index = 0;
const typeHero = () => {
  if (index < heroText.length) {
    heroTitle.textContent += heroText[index];
    index++;
    setTimeout(typeHero, 150);
  }
};
if (heroTitle) {
  heroTitle.textContent = '';
  typeHero();
}

// ===========================
// SCROLL PROGRESS BAR
// ===========================
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = 0;
progressBar.style.left = 0;
progressBar.style.width = '0%';
progressBar.style.height = '5px';
progressBar.style.background = '#f8d210';
progressBar.style.zIndex = 9999;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  progressBar.style.width = `${(scrollTop / docHeight) * 100}%`;
});

// ===========================
// BACK TO TOP BUTTON
// ===========================
const backTop = document.createElement('button');
backTop.textContent = '↑';
backTop.style.position = 'fixed';
backTop.style.bottom = '20px';
backTop.style.right = '20px';
backTop.style.padding = '0.5rem 0.8rem';
backTop.style.borderRadius = '50%';
backTop.style.border = 'none';
backTop.style.background = '#f8d210';
backTop.style.color = '#121212';
backTop.style.fontSize = '1.2rem';
backTop.style.cursor = 'pointer';
backTop.style.display = 'none';
backTop.style.zIndex = '9999';
document.body.appendChild(backTop);

backTop.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);
window.addEventListener('scroll', () => {
  backTop.style.display = window.scrollY > 500 ? 'block' : 'none';
});



// Highlight keywords in About section
function cycleHighlights() {
  const keywords = document.querySelectorAll("#about .highlight");
  let index = 0;

  function showNext() {
    // remove active from all
    keywords.forEach(el => el.classList.remove("active"));

    // add active to the current one
    keywords[index].classList.add("active");

    // move to next
    index = (index + 1) % keywords.length;
  }

  showNext(); // show first
  setInterval(showNext, 2000); // cycle every 2 seconds
}

window.addEventListener("load", cycleHighlights);
