 // Controle de slides
 let slideIndex = 0;
 const slides = document.querySelectorAll('.slideshow img');

 function changeSlide(n) {
     slides[slideIndex].classList.remove('active');
     slideIndex = (slideIndex + n + slides.length) % slides.length;
     slides[slideIndex].classList.add('active');
 }