/* ----- NAVIGATION BAR FUNCTION ----- */document.addEventListener('DOMContentLoaded', function() {
    // Toggle navigation menu
    function myMenuFunction() {
      var menuBtn = document.getElementById("myNavMenu");
      menuBtn.classList.toggle("responsive");
  }

  // Add shadow to navigation bar while scrolling
  function headerShadow() {
      const navHeader = document.getElementById("header");
      if (window.scrollY > 50) {
          navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
          navHeader.style.height = "70px";
          navHeader.style.lineHeight = "70px";
      } else {
          navHeader.style.boxShadow = "none";
          navHeader.style.height = "90px";
          navHeader.style.lineHeight = "90px";
      }
  }

  window.addEventListener('scroll', headerShadow);

  // Typing effect
  new Typed(".typedText", {
      strings: ["Market Magician", "Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000
  });

  // Scroll reveal animation
  const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true
  });

  sr.reveal('.featured-text-card');
  sr.reveal('.featured-name', { delay: 100 });
  sr.reveal('.featured-text-info', { delay: 200 });
  sr.reveal('.featured-text-btn', { delay: 200 });
  sr.reveal('.social_icons', { delay: 200 });
  sr.reveal('.featured-image', { delay: 300 });
  sr.reveal('.project-box', { interval: 200 });
  sr.reveal('.top-header');

  // Scroll reveal left-right animation
  const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true
  });

  srLeft.reveal('.about-info', { delay: 100 });
  srLeft.reveal('.contact-info', { delay: 100 });

  const srRight = ScrollReveal({
      origin: 'right',
      distance: '80px',
      duration: 2000,
      reset: true
  });

  srRight.reveal('.skills-box', { delay: 100 });
  srRight.reveal('.form-control', { delay: 100 });

  // Change active link based on scroll position
  const sections = document.querySelectorAll('section[id]');

  function scrollActive() {
      const scrollY = window.scrollY;
      sections.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 50;
          const sectionId = current.getAttribute('id');

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
          } else {
              document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
          }
      });
  }

  window.addEventListener('scroll', scrollActive);

  // Handle form submission
  window.handleFormSubmit = function() {
      const name = document.querySelector('.input-field[placeholder="Name"]').value;
      const email = document.querySelector('.input-field[placeholder="Email"]').value;
      const message = document.querySelector('textarea').value;

      console.log('Form Submission:');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);

      // Optionally, you can add code here to send the form data to a server or API
  };
});
