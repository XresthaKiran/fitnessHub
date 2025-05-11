// responsive navbar
const burger = document.getElementById('burger');
    const navMenu = document.getElementById('navMenu').querySelector('ul');

    burger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });


// testimonial slider  
const slides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let current = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[current].classList.add('active');
}

nextBtn.addEventListener('click', function () {
    current = (current + 1) % slides.length;
    showSlide();
});

prevBtn.addEventListener('click', function () {
    current = (current - 1 + slides.length) % slides.length;
    showSlide();
});

setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide();
}, 3000);