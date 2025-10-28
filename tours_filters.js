// Toggle filters on mobile
function toggleFilters() {
    const sidebar = document.getElementById('filterSidebar');
    const overlay = document.getElementById('filterOverlay');
    const toggleBtn = document.querySelector('.filter-toggle-btn');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    
    if (toggleBtn) {
        toggleBtn.classList.toggle('active');
    }
    
    // Prevent body scroll when filters are open
    if (sidebar.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Apply filters and close on mobile
function applyFilters() {
    alert('Filters applied!');
    
    // Close filters on mobile after applying
    if (window.innerWidth <= 768) {
        toggleFilters();
    }
}

// Update clearFilters to close on mobile
function clearFilters() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
    
    const priceInputs = document.querySelectorAll('.price-inputs input');
    priceInputs.forEach(input => input.value = '');
    
    alert('All filters cleared!');
    
    // Close filters on mobile after clearing
    if (window.innerWidth <= 768) {
        toggleFilters();
    }
}

// Close filters when clicking outside on mobile
document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('filterSidebar');
    const toggleBtn = document.querySelector('.filter-toggle-btn');
    
    if (window.innerWidth <= 768 && 
        sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) && 
        !toggleBtn.contains(e.target)) {
        toggleFilters();
    }
});

// Show/hide filter toggle button based on screen size
function handleFilterDisplay() {
    const toggleBtn = document.querySelector('.filter-toggle-btn');
    const sidebar = document.getElementById('filterSidebar');
    
    if (window.innerWidth > 768) {
        sidebar.classList.remove('open');
        document.body.style.overflow = '';
        if (toggleBtn) toggleBtn.style.display = 'none';
    } else {
        if (toggleBtn) toggleBtn.style.display = 'flex';
    }
}

// Initialize on page load and resize
window.addEventListener('load', handleFilterDisplay);
window.addEventListener('resize', handleFilterDisplay);