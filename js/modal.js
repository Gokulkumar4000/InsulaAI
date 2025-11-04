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
            
            // Add electricity VFX effects
            if (window.modalVFX) {
                window.modalVFX.createElectricBolts(contentEl);
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
