/**
 * Electricity VFX Effects for Modal
 */

function createElectricBolts(modalElement) {
    const boltCount = 15;
    const modalRect = modalElement.getBoundingClientRect();
    
    for (let i = 0; i < boltCount; i++) {
        setTimeout(() => {
            const bolt = document.createElement('div');
            bolt.className = 'electric-bolt';
            
            // Random position along the border
            const side = Math.floor(Math.random() * 4);
            let x, y, angle;
            
            switch(side) {
                case 0: // top
                    x = Math.random() * 100;
                    y = 0;
                    angle = Math.random() * 180 + 90;
                    break;
                case 1: // right
                    x = 100;
                    y = Math.random() * 100;
                    angle = Math.random() * 180;
                    break;
                case 2: // bottom
                    x = Math.random() * 100;
                    y = 100;
                    angle = Math.random() * 180 - 90;
                    break;
                case 3: // left
                    x = 0;
                    y = Math.random() * 100;
                    angle = Math.random() * 180 + 180;
                    break;
            }
            
            bolt.style.left = x + '%';
            bolt.style.top = y + '%';
            bolt.style.setProperty('--angle', angle + 'deg');
            
            modalElement.appendChild(bolt);
            
            setTimeout(() => bolt.remove(), 800);
        }, i * 80);
    }
}

function createElectricParticles(modalElement) {
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'electric-particle';
            
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const tx = (Math.random() - 0.5) * 200;
            const ty = (Math.random() - 0.5) * 200;
            
            particle.style.left = x + '%';
            particle.style.top = y + '%';
            particle.style.setProperty('--tx', tx + 'px');
            particle.style.setProperty('--ty', ty + 'px');
            
            modalElement.appendChild(particle);
            
            setTimeout(() => particle.remove(), 1500);
        }, i * 50);
    }
}

// Add VFX styles
const vfxStyles = document.createElement('style');
vfxStyles.textContent = `
    .electric-bolt {
        position: absolute;
        width: 3px;
        height: 40px;
        background: linear-gradient(to bottom, var(--neon-cyan), transparent);
        box-shadow: 0 0 10px var(--neon-cyan), 0 0 20px var(--neon-cyan);
        transform-origin: top center;
        transform: rotate(var(--angle));
        opacity: 0;
        animation: boltFlash 0.8s ease-out forwards;
        pointer-events: none;
        z-index: 100;
    }
    
    @keyframes boltFlash {
        0% { opacity: 0; height: 0; }
        20% { opacity: 1; height: 40px; }
        40% { opacity: 0.8; }
        60% { opacity: 1; }
        100% { opacity: 0; height: 60px; }
    }
    
    .electric-particle {
        position: absolute;
        width: 6px;
        height: 6px;
        background: var(--neon-cyan);
        border-radius: 50%;
        box-shadow: 0 0 15px var(--neon-cyan), 0 0 30px var(--neon-cyan);
        animation: particleFloat 1.5s ease-out forwards;
        pointer-events: none;
        z-index: 100;
    }
    
    @keyframes particleFloat {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--tx), var(--ty)) scale(0);
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
