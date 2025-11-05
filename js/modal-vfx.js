/**
 * Smooth Particle VFX Effects for Modal
 */

function createElectricBolts(modalElement) {
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'smooth-particle';
            
            const side = Math.floor(Math.random() * 4);
            let x, y, tx, ty;
            
            switch(side) {
                case 0:
                    x = Math.random() * 100;
                    y = -5;
                    tx = (Math.random() - 0.5) * 100;
                    ty = Math.random() * 50 + 20;
                    break;
                case 1:
                    x = 105;
                    y = Math.random() * 100;
                    tx = -(Math.random() * 50 + 20);
                    ty = (Math.random() - 0.5) * 100;
                    break;
                case 2:
                    x = Math.random() * 100;
                    y = 105;
                    tx = (Math.random() - 0.5) * 100;
                    ty = -(Math.random() * 50 + 20);
                    break;
                case 3:
                    x = -5;
                    y = Math.random() * 100;
                    tx = Math.random() * 50 + 20;
                    ty = (Math.random() - 0.5) * 100;
                    break;
            }
            
            particle.style.left = x + '%';
            particle.style.top = y + '%';
            particle.style.setProperty('--tx', tx + '%');
            particle.style.setProperty('--ty', ty + '%');
            particle.style.setProperty('--delay', Math.random() * 0.5 + 's');
            
            modalElement.appendChild(particle);
            
            setTimeout(() => particle.remove(), 2000);
        }, i * 40);
    }
}

function createElectricParticles(modalElement) {
    const particleCount = 25;
    
    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const tx = (Math.random() - 0.5) * 150;
            const ty = (Math.random() - 0.5) * 150;
            const size = Math.random() * 3 + 2;
            
            particle.style.left = x + '%';
            particle.style.top = y + '%';
            particle.style.setProperty('--tx', tx + 'px');
            particle.style.setProperty('--ty', ty + 'px');
            particle.style.setProperty('--size', size + 'px');
            particle.style.setProperty('--duration', (Math.random() * 1 + 1.5) + 's');
            
            modalElement.appendChild(particle);
            
            setTimeout(() => particle.remove(), 2500);
        }, i * 60);
    }
}

// Add VFX styles
const vfxStyles = document.createElement('style');
vfxStyles.textContent = `
    .smooth-particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: radial-gradient(circle, var(--neon-cyan), var(--neon-violet));
        border-radius: 50%;
        box-shadow: 0 0 10px var(--neon-cyan), 0 0 20px var(--neon-violet);
        animation: smoothFloat 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        animation-delay: var(--delay, 0s);
        pointer-events: none;
        z-index: 100;
        opacity: 0;
    }
    
    @keyframes smoothFloat {
        0% {
            transform: translate(0, 0) scale(0.5);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        70% {
            opacity: 0.8;
        }
        100% {
            transform: translate(var(--tx), var(--ty)) scale(1.2);
            opacity: 0;
        }
    }
    
    .floating-particle {
        position: absolute;
        width: var(--size, 4px);
        height: var(--size, 4px);
        background: radial-gradient(circle, rgba(0, 240, 255, 1), rgba(191, 0, 255, 0.8));
        border-radius: 50%;
        box-shadow: 0 0 8px rgba(0, 240, 255, 0.8), 0 0 15px rgba(191, 0, 255, 0.6);
        animation: gentleFloat var(--duration, 2s) cubic-bezier(0.4, 0, 0.2, 1) forwards;
        pointer-events: none;
        z-index: 100;
        opacity: 0;
    }
    
    @keyframes gentleFloat {
        0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 0;
        }
        15% {
            opacity: 1;
        }
        85% {
            opacity: 0.7;
        }
        100% {
            transform: translate(var(--tx), var(--ty)) scale(0.2) rotate(180deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(vfxStyles);

// Export functions
window.modalVFX = {
    createElectricBolts,
    createElectricParticles
};
