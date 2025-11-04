// Main JavaScript for InsulaAI
// Global initialization and utilities

document.addEventListener('DOMContentLoaded', function() {
    console.log('InsulaAI App Loaded');
    
    // Initialize scroll effects if available
    if (typeof initScrollEffects === 'function') {
        initScrollEffects();
    }
    
    // Add smooth scroll behavior
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
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar-glass');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});

// Utility: Show toast notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: rgba(26, 26, 36, 0.95);
        border: 2px solid var(--neon-cyan);
        border-radius: 15px;
        padding: 20px 30px;
        color: #fff;
        font-family: 'Inter', sans-serif;
        z-index: 10000;
        box-shadow: 0 0 30px rgba(0, 240, 255, 0.4);
        animation: slideIn 0.3s ease;
    `;
    
    if (type === 'error') {
        toast.style.borderColor = '#ff0000';
        toast.style.boxShadow = '0 0 30px rgba(255, 0, 0, 0.4)';
    } else if (type === 'success') {
        toast.style.borderColor = '#00ff00';
        toast.style.boxShadow = '0 0 30px rgba(0, 255, 0, 0.4)';
    }
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Utility: Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    };
    return date.toLocaleDateString('en-US', options);
}

// Utility: Validate email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Utility: Generate unique ID
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Add CSS animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
