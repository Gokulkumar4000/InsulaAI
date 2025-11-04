// Scroll Side Effects - InsulaAI
function initScrollEffects() {
    // Create scroll effect elements
    const leftEffect = document.createElement('div');
    leftEffect.className = 'scroll-effect-left';
    document.body.appendChild(leftEffect);
    
    const rightEffect = document.createElement('div');
    rightEffect.className = 'scroll-effect-right';
    document.body.appendChild(rightEffect);
    
    let scrollParticles = [];
    
    // Update scroll effects
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        const maxHeight = window.innerHeight - 200;
        const currentHeight = (scrollPercent / 100) * maxHeight;
        
        // Update side effect lines
        if (window.scrollY > 50) {
            leftEffect.classList.add('active');
            rightEffect.classList.add('active');
            leftEffect.style.height = currentHeight + 'px';
            rightEffect.style.height = currentHeight + 'px';
            
            // Create floating particles occasionally
            if (Math.random() > 0.95) {
                createScrollParticle('left');
                createScrollParticle('right');
            }
        } else {
            leftEffect.classList.remove('active');
            rightEffect.classList.remove('active');
        }
    });
    
    function createScrollParticle(side) {
        const particle = document.createElement('div');
        particle.className = `scroll-particle-${side}`;
        
        if (side === 'left') {
            particle.style.left = '20px';
        } else {
            particle.style.right = '20px';
        }
        
        particle.style.top = (window.scrollY + 100 + Math.random() * 200) + 'px';
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.style.opacity = '1';
            particle.style.transform = 'translateY(-100px)';
        }, 10);
        
        setTimeout(() => {
            particle.style.opacity = '0';
        }, 1000);
        
        setTimeout(() => {
            particle.remove();
        }, 1500);
    }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollEffects);
} else {
    initScrollEffects();
}
