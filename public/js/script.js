// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if(window.scrollY > fixednav) {
        header.classList.add('navbar-fixed');
    } 
    else {
        header.classList.remove('navbar-fixed');
    }
};

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger .addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('flex');
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.isIntersecting) {
          document.querySelector(`.nav-link[href="#${id}"]`).classList.add('active');
        } else {
          document.querySelector(`.nav-link[href="#${id}"]`).classList.remove('active');
        }
      });
    }, { threshold: 0.7 });

    sections.forEach(section => {
      observer.observe(section);
    });
  });

  var typed = new Typed(".typewrite", {
    strings: ["Frontend Developer", "Web Developer", "IT Support Specialist"],
    typeSpeed: 100,
    backspeed: 100,
    backdelay: 1000,
    loop: true,
  });