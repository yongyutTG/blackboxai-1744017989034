// Portfolio JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initialized');
    
    // Mobile menu toggle functionality will be added here
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});