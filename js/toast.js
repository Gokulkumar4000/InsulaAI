/**
 * Toast Notification System with Electricity Effects
 */

class ToastNotification {
    constructor() {
        this.container = null;
        this.init();
    }

    init() {
        if (!document.querySelector('.toast-container')) {
            this.container = document.createElement('div');
            this.container.className = 'toast-container';
            document.body.appendChild(this.container);
        } else {
            this.container = document.querySelector('.toast-container');
        }
    }

    show(options) {
        const {
            title = 'Notification',
            message = '',
            type = 'info',
            duration = 4000,
            onClick = null
        } = options;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const iconMap = {
            success: 'bi-check-circle-fill',
            error: 'bi-exclamation-triangle-fill',
            info: 'bi-info-circle-fill',
            warning: 'bi-exclamation-circle-fill'
        };

        toast.innerHTML = `
            <div class="toast-content">
                <div class="toast-icon ${type}">
                    <i class="bi ${iconMap[type]}"></i>
                </div>
                <div class="toast-message">
                    <div class="toast-title">${title}</div>
                    <div class="toast-text">${message}</div>
                </div>
            </div>
            <button class="toast-close" aria-label="Close">
                <i class="bi bi-x"></i>
            </button>
            <div class="toast-progress"></div>
        `;

        this.container.appendChild(toast);

        this.createElectricSparks(toast);

        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => {
            this.remove(toast);
        });

        if (onClick) {
            toast.style.cursor = 'pointer';
            toast.addEventListener('click', (e) => {
                if (e.target !== closeBtn && !closeBtn.contains(e.target)) {
                    onClick();
                    this.remove(toast);
                }
            });
        }

        if (duration > 0) {
            setTimeout(() => {
                this.remove(toast);
            }, duration);
        }

        return toast;
    }

    createElectricSparks(element) {
        const sparkCount = 8;
        const rect = element.getBoundingClientRect();
        
        for (let i = 0; i < sparkCount; i++) {
            setTimeout(() => {
                const spark = document.createElement('div');
                spark.className = 'toast-spark';
                
                const startX = Math.random() * rect.width;
                const startY = Math.random() * rect.height;
                const endX = (Math.random() - 0.5) * 100;
                const endY = (Math.random() - 0.5) * 100;
                
                spark.style.left = startX + 'px';
                spark.style.top = startY + 'px';
                spark.style.setProperty('--tx', endX + 'px');
                spark.style.setProperty('--ty', endY + 'px');
                
                element.appendChild(spark);
                
                setTimeout(() => {
                    spark.remove();
                }, 1500);
            }, i * 100);
        }
    }

    remove(toast) {
        toast.classList.add('hiding');
        setTimeout(() => {
            toast.remove();
        }, 400);
    }

    success(title, message, duration) {
        return this.show({ title, message, type: 'success', duration });
    }

    error(title, message, duration) {
        return this.show({ title, message, type: 'error', duration });
    }

    info(title, message, duration) {
        return this.show({ title, message, type: 'info', duration });
    }

    warning(title, message, duration) {
        return this.show({ title, message, type: 'warning', duration });
    }
}

const toast = new ToastNotification();
window.toast = toast;
