const ctaBtns = document.querySelectorAll('.cta-button');
ctaBtns.forEach(function(btn) {
  btn.addEventListener('click', function () {
    alert('Thank you for your interest! Please contact us for details.');
    document.getElementById('donate').scrollIntoView({behavior: 'smooth'});
  });
});



function setActive(btn) {
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));