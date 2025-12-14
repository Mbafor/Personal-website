

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
    const href = link.getAttribute('href');
    
    // Only prevent default and smooth scroll if it's an anchor link on the same page
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
    // For other links (like about.html or index.html#section), let them navigate normally
    
    // Close mobile menu if open
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
// SKILL BAR ANIMATION - Interactive counting from 0 to target
// ===========================
const skillBars = document.querySelectorAll('.skill .bar');
let skillsAnimated = false;

const animateSkills = () => {
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;
  
  const triggerBottom = window.innerHeight / 1.3;
  const sectionTop = skillsSection.getBoundingClientRect().top;
  
  if (sectionTop < triggerBottom && !skillsAnimated) {
    skillsAnimated = true;
    
    skillBars.forEach(bar => {
      const targetPct = parseInt(bar.getAttribute('data-pct')) || 0;
      const valueSpan = bar.querySelector('.bar-value');
      
      // Set the CSS variable for width animation
      bar.style.setProperty('--pct', `${targetPct}%`);
      bar.classList.add('animate');
      
      // Animate the number counting
      let currentPct = 0;
      const duration = 1500; // 1.5 seconds
      const increment = targetPct / (duration / 16); // ~60fps
      
      const counter = setInterval(() => {
        currentPct += increment;
        if (currentPct >= targetPct) {
          currentPct = targetPct;
          clearInterval(counter);
        }
        valueSpan.textContent = Math.round(currentPct) + '%';
      }, 16);
    });
  }
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
progressBar.style.background = '#1e40af';
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
backTop.style.background = '#1e40af';
backTop.style.color = '#eff0f3ff';
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
