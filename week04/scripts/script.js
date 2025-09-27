// Theme toggle and store in localStorage
const themeToggle = document.getElementById('theme-toggle');
const rootEl = document.documentElement;
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
const menuOpenClass = 'nav-open';

function applyTheme(dark){
  if(dark){
    rootEl.classList.add('dark');
    themeToggle.textContent = '☀️';
  } else {
    rootEl.classList.remove('dark');
    themeToggle.textContent = '🌙';
  }
  localStorage.setItem('prefers-dark', dark ? '1' : '0');
}

themeToggle.addEventListener('click', ()=>{
  applyTheme(!rootEl.classList.contains('dark'));
});

// initialize theme from preference or system
(function(){
  const saved = localStorage.getItem('prefers-dark');
  if(saved === null){
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark);
  } else {
    applyTheme(saved === '1');
  }
})();

// mobile menu toggle
menuToggle.addEventListener('click', ()=>{
  if(mainNav.style.display === 'block'){
    mainNav.style.display = '';
  } else {
    mainNav.style.display = 'block';
  }
});

// Close mobile menu when link clicked
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click', ()=>{
  if(window.innerWidth < 720) mainNav.style.display = '';
}));

// Projects modal
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalStack = document.getElementById('modal-stack');
const modalLive = document.getElementById('modal-live');
const modalCode = document.getElementById('modal-code');
const modalClose = document.getElementById('modal-close');

document.getElementById('projects-grid').addEventListener('click', e => {
  const card = e.target.closest('.project-card');
  if(!card || card.classList.contains('coming-soon')) return;
  const title = card.dataset.title;
  const desc = card.dataset.desc;
  const stack = card.dataset.stack;
  modalTitle.textContent = title;
  modalDesc.textContent = desc;
  modalStack.textContent = stack;
  modalLive.href = '#';
  modalCode.href = '#';
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=> { if(e.target === modal) closeModal(); });

function closeModal(){
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

// Contact form (client-side only)
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim()
  };
  if(!data.name || !data.email || !data.message){
    formStatus.textContent = 'Please fill in all fields.';
    return;
  }
  // Simulate send (replace with real backend or email service)
  formStatus.textContent = 'Sending message...';
  setTimeout(()=>{
    formStatus.textContent = 'Message submitted. I will reply to your email soon.';
    form.reset();
  }, 900);
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();