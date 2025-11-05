/**
 * InsulaAI Modal System
 * Themed modal popups with animations replacing alert() calls
 */

class InsulaModal {
    constructor() {
        this.modalContainer = null;
        this.init();
    }

    init() {
        if (!document.getElementById('insulaModalContainer')) {
            this.createModalContainer();
        }
        this.modalContainer = document.getElementById('insulaModalContainer');
    }

    createModalContainer() {
        const container = document.createElement('div');
        container.id = 'insulaModalContainer';
        container.innerHTML = `
            <div class="modal-overlay" id="modalOverlay">
                <div class="modal-content" id="modalContent">
                    <div class="modal-header">
                        <h3 class="modal-title" id="modalTitle"></h3>
                        <button class="modal-close" id="modalClose">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div class="modal-body" id="modalBody"></div>
                    <div class="modal-footer" id="modalFooter">
                        <button class="modal-btn modal-btn-primary" id="modalOk">OK</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(container);

        document.getElementById('modalClose').addEventListener('click', () => this.close());
        document.getElementById('modalOverlay').addEventListener('click', (e) => {
            if (e.target.id === 'modalOverlay') {
                this.close();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modalContainer.classList.contains('active')) {
                this.close();
            }
        });
    }

    show(options) {
        const {
            title = 'Information',
            message = '',
            type = 'info',
            buttons = [{ text: 'OK', primary: true }],
            onClose = null
        } = options;

        const titleEl = document.getElementById('modalTitle');
        const bodyEl = document.getElementById('modalBody');
        const footerEl = document.getElementById('modalFooter');
        const contentEl = document.getElementById('modalContent');

        titleEl.textContent = title;
        
        let icon = '';
        let iconColor = 'var(--neon-cyan)';
        
        switch(type) {
            case 'success':
                icon = '<i class="bi bi-check-circle-fill"></i>';
                iconColor = '#00ff88';
                break;
            case 'error':
                icon = '<i class="bi bi-exclamation-triangle-fill"></i>';
                iconColor = '#ff4444';
                break;
            case 'warning':
                icon = '<i class="bi bi-exclamation-circle-fill"></i>';
                iconColor = 'var(--neon-amber)';
                break;
            case 'help':
                icon = '<i class="bi bi-question-circle-fill"></i>';
                iconColor = 'var(--neon-violet)';
                break;
            default:
                icon = '<i class="bi bi-info-circle-fill"></i>';
        }

        bodyEl.innerHTML = `
            <div class="modal-icon" style="color: ${iconColor};">
                ${icon}
            </div>
            <div class="modal-message">${message}</div>
        `;

        footerEl.innerHTML = '';
        buttons.forEach((btn, index) => {
            const button = document.createElement('button');
            button.className = `modal-btn ${btn.primary ? 'modal-btn-primary' : 'modal-btn-secondary'}`;
            button.textContent = btn.text;
            button.addEventListener('click', () => {
                if (btn.onClick) btn.onClick();
                this.close();
            });
            footerEl.appendChild(button);
        });

        contentEl.setAttribute('data-type', type);
        this.modalContainer.classList.add('active');
        
        setTimeout(() => {
            contentEl.classList.add('show');
            
            // Add particle VFX effects only
            if (window.modalVFX) {
                window.modalVFX.createElectricParticles(contentEl);
            }
        }, 10);

        this.onCloseCallback = onClose;
    }

    showHelp(title, content) {
        this.show({
            title: title,
            message: content,
            type: 'help',
            buttons: [{ text: 'Got it!', primary: true }]
        });
    }

    showStepByStep(options) {
        const {
            title = 'Tutorial',
            steps = [],
            autoPlayInterval = 3000,
            type = 'help'
        } = options;

        let currentStep = 0;
        let autoPlayTimer = null;
        let isPaused = false;

        const showStep = () => {
            if (currentStep >= steps.length) {
                this.close();
                return;
            }

            const step = steps[currentStep];
            const titleEl = document.getElementById('modalTitle');
            const bodyEl = document.getElementById('modalBody');
            const footerEl = document.getElementById('modalFooter');
            const contentEl = document.getElementById('modalContent');

            titleEl.innerHTML = `
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span>${title}</span>
                    <span style="font-size: 0.8rem; color: var(--neon-cyan); font-family: 'Inter';">
                        Step ${currentStep + 1} of ${steps.length}
                    </span>
                </div>
            `;

            let icon = step.icon || '<i class="bi bi-info-circle-fill"></i>';
            let iconColor = step.iconColor || 'var(--neon-cyan)';

            bodyEl.innerHTML = `
                <div class="step-tutorial-content">
                    <div class="modal-icon" style="color: ${iconColor}; font-size: 3rem; margin-bottom: 20px; animation: pulse 2s infinite;">
                        ${icon}
                    </div>
                    <h4 style="color: var(--neon-cyan); font-family: 'Orbitron'; margin-bottom: 15px; font-size: 1.2rem;">
                        ${step.title}
                    </h4>
                    <div class="modal-message" style="font-size: 1rem; line-height: 1.6;">
                        ${step.message}
                    </div>
                    <div class="step-progress" style="margin-top: 25px;">
                        <div class="progress-dots" style="display: flex; gap: 8px; justify-content: center; margin-bottom: 15px;">
                            ${steps.map((_, idx) => `
                                <div class="progress-dot ${idx === currentStep ? 'active' : ''} ${idx < currentStep ? 'completed' : ''}" 
                                     style="width: 10px; height: 10px; border-radius: 50%; 
                                            background: ${idx === currentStep ? 'var(--neon-cyan)' : idx < currentStep ? 'var(--neon-violet)' : 'rgba(255,255,255,0.2)'};
                                            transition: all 0.3s ease;
                                            box-shadow: ${idx === currentStep ? '0 0 15px var(--neon-cyan)' : 'none'};"></div>
                            `).join('')}
                        </div>
                        <div class="progress-bar-container" style="width: 100%; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden;">
                            <div class="progress-bar-fill" style="height: 100%; background: linear-gradient(90deg, var(--neon-cyan), var(--neon-violet)); 
                                 width: ${((currentStep + 1) / steps.length) * 100}%; transition: width 0.5s ease;
                                 box-shadow: 0 0 10px var(--neon-cyan);"></div>
                        </div>
                    </div>
                </div>
            `;

            footerEl.innerHTML = `
                <div style="display: flex; gap: 10px; width: 100%; justify-content: space-between; align-items: center;">
                    <button class="modal-btn modal-btn-secondary" id="stepPauseBtn" style="flex: 0 0 auto;">
                        <i class="bi bi-${isPaused ? 'play' : 'pause'}-fill"></i>
                    </button>
                    <div style="flex: 1; display: flex; gap: 10px; justify-content: flex-end;">
                        ${currentStep > 0 ? '<button class="modal-btn modal-btn-secondary" id="stepPrevBtn">Previous</button>' : ''}
                        ${currentStep < steps.length - 1 ? 
                            '<button class="modal-btn modal-btn-primary" id="stepNextBtn">Next</button>' : 
                            '<button class="modal-btn modal-btn-primary" id="stepDoneBtn">Done</button>'}
                    </div>
                </div>
            `;

            contentEl.setAttribute('data-type', type);

            // Add event listeners
            const pauseBtn = document.getElementById('stepPauseBtn');
            if (pauseBtn) {
                pauseBtn.addEventListener('click', () => {
                    isPaused = !isPaused;
                    pauseBtn.innerHTML = `<i class="bi bi-${isPaused ? 'play' : 'pause'}-fill"></i>`;
                    if (isPaused) {
                        clearTimeout(autoPlayTimer);
                    } else {
                        startAutoPlay();
                    }
                });
            }

            const prevBtn = document.getElementById('stepPrevBtn');
            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    clearTimeout(autoPlayTimer);
                    currentStep--;
                    showStep();
                    if (!isPaused) startAutoPlay();
                });
            }

            const nextBtn = document.getElementById('stepNextBtn');
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    clearTimeout(autoPlayTimer);
                    currentStep++;
                    showStep();
                    if (!isPaused) startAutoPlay();
                });
            }

            const doneBtn = document.getElementById('stepDoneBtn');
            if (doneBtn) {
                doneBtn.addEventListener('click', () => {
                    clearTimeout(autoPlayTimer);
                    this.close();
                });
            }
        };

        const startAutoPlay = () => {
            clearTimeout(autoPlayTimer);
            if (!isPaused && currentStep < steps.length - 1) {
                autoPlayTimer = setTimeout(() => {
                    currentStep++;
                    showStep();
                    startAutoPlay();
                }, autoPlayInterval);
            }
        };

        // Initialize modal
        this.modalContainer.classList.add('active');
        const contentEl = document.getElementById('modalContent');
        setTimeout(() => {
            contentEl.classList.add('show');
            showStep();
            startAutoPlay();
            
            // Add particle effects
            if (window.modalVFX) {
                window.modalVFX.createElectricParticles(contentEl);
            }
        }, 10);
    }

    confirm(options) {
        const {
            title = 'Confirm',
            message = 'Are you sure?',
            onConfirm = null,
            onCancel = null
        } = options;

        this.show({
            title,
            message,
            type: 'warning',
            buttons: [
                {
                    text: 'Cancel',
                    primary: false,
                    onClick: onCancel
                },
                {
                    text: 'Confirm',
                    primary: true,
                    onClick: onConfirm
                }
            ]
        });
    }

    close() {
        const contentEl = document.getElementById('modalContent');
        contentEl.classList.remove('show');
        
        setTimeout(() => {
            this.modalContainer.classList.remove('active');
            if (this.onCloseCallback) {
                this.onCloseCallback();
                this.onCloseCallback = null;
            }
        }, 300);
    }
}

const insulaModal = new InsulaModal();

window.insulaModal = insulaModal;
