function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (!nav.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});