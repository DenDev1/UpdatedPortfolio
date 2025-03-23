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
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark-mode' : '');
    updateButtonText();
});

// Update button text based on current theme
function updateButtonText() {
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️ Light Mode';
    } else {
        themeBtn.textContent = '🌙 Dark Mode';
    }
}