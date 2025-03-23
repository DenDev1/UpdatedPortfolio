// Get the theme toggle button
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateButtonText();
}

// Toggle Dark/Light Mode
themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light-mode' : '');
    updateButtonText();
});

// Update button text based on current theme
function updateButtonText() {
    if (body.classList.contains('light-mode')) {
        themeBtn.textContent = '🌙 Dark Mode';
    } else {
        themeBtn.textContent = '☀️ Light Mode';
    }
}


// Carousel Functionality
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides next to each other
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

// Move to a specific slide
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// Hide/show arrows
const updateArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
};

// Click next button
nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateArrows(slides, prevButton, nextButton, nextIndex);
});

// Click prev button
prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateArrows(slides, prevButton, nextButton, prevIndex);
});

// Modal Functionality
const carouselItems = document.querySelectorAll('.carousel-item');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Open modal when carousel item is clicked
carouselItems.forEach((item) => {
    item.addEventListener('click', () => {
        const modalId = item.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
    });
});

// Close modal when close button is clicked
closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = 'none';
    });
});

// Close modal when clicking outside the modal content
modals.forEach((modal) => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});