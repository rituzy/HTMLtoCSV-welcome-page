// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.step, .feature-card, .use-case').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add animation class
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Track extension installation status
function checkExtensionInstalled() {
    // Check if the extension is installed
    if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
        // Try to ping the extension
        chrome.runtime.sendMessage('htmltocsv-extension-id', { action: 'ping' }, response => {
            if (chrome.runtime.lastError) {
                console.log('Extension not installed or not accessible');
            } else {
                console.log('Extension is installed');
                showWelcomeMessage();
            }
        });
    }
}

function showWelcomeMessage() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.innerHTML = '🎉 Extension is installed and ready to use!';
    }
}

// Check extension status when page loads
document.addEventListener('DOMContentLoaded', checkExtensionInstalled);

// Add copy functionality for email
const emailLink = document.querySelector('a[href^="mailto:"]');
if (emailLink) {
    emailLink.addEventListener('click', function(e) {
        // Optional: track email clicks
        console.log('Email link clicked');
    });
}
