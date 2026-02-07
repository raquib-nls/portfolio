
// Scroll Progress Bar logic
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progress-bar').style.width = scrolled + '%';
});

// Mobile nav-toggle ligcs
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', (e) => {
    navLinks.classList.toggle('active');
    e.stopPropagation();
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// closed outside vala
document.addEventListener("click",(e)=>{
    const isClickinside=navLinks.contains(e.target)
    const isclickOnToggle=navToggle.contains(e.target)

    if (!isClickinside && !isclickOnToggle){
        navLinks.classList.remove('active')
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


// logic for animation scroll
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); 
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(el => observer.observe(el));

// certification pop up logic 
function openCert(src) {
    document.getElementById("certModal").style.display = "flex";
    document.getElementById("certModalImg").src = src;
}

function closeCert() {
    document.getElementById("certModal").style.display = "none";
}

