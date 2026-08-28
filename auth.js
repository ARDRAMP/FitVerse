
// Mock Authentication System using LocalStorage

class Auth {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('fitverse_users')) || {};
        this.currentUser = JSON.parse(localStorage.getItem('fitverse_currentUser')) || null;
        
        // Seed default demo user if empty
        if (!this.users['demo@fitverse.com']) {
            this.users['demo@fitverse.com'] = {
                name: 'Alex Rivera',
                email: 'demo@fitverse.com',
                phone: '+91 9876543210',
                password: 'password123'
            };
            localStorage.setItem('fitverse_users', JSON.stringify(this.users));
        }
    }

    register(name, email, phone, password) {
        if (this.users[email]) {
            this.showToast('Email is already registered.', 'error');
            return false;
        }
        if (password && password.length < 4) {
            this.showToast('Password must be at least 4 characters.', 'error');
            return false;
        }

        this.users[email] = { name: name || 'FitVerse Member', email, phone: phone || 'Not provided', password: password || 'password123' };
        localStorage.setItem('fitverse_users', JSON.stringify(this.users));
        
        // Auto-login after registration
        this.login(email, password || 'password123', false);
        return true;
    }

    hasUsers() {
        this.users = JSON.parse(localStorage.getItem('fitverse_users')) || {};
        return Object.keys(this.users).length > 0;
    }

    login(email, password, showSuccess = true) {
        this.users = JSON.parse(localStorage.getItem('fitverse_users')) || {};
        
        // If account doesn't exist yet, auto-register on sign in for seamless UX
        if (!this.users[email]) {
            const rawName = email.split('@')[0].replace(/[._-]/g, ' ');
            const formattedName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
            this.users[email] = {
                name: formattedName || 'FitVerse Member',
                email: email,
                phone: 'Not provided',
                password: password
            };
            localStorage.setItem('fitverse_users', JSON.stringify(this.users));
        } else if (this.users[email].password !== password) {
            // Update password for convenience
            this.users[email].password = password;
            localStorage.setItem('fitverse_users', JSON.stringify(this.users));
        }

        const user = this.users[email];
        this.currentUser = { 
            name: user.name, 
            email: user.email, 
            phone: user.phone || 'Not provided',
            address: user.address || '',
            avatar: user.avatar || ''
        };
        localStorage.setItem('fitverse_currentUser', JSON.stringify(this.currentUser));
        
        if (showSuccess) {
            this.showToast(`Welcome back, ${user.name}!`, 'success');
        }
        
        setTimeout(() => {
            window.location.href = 'profile.html';
        }, 800);
        return true;
    }
    
    updateAvatar(avatarDataUrl) {
        if (!this.currentUser) return false;
        
        this.currentUser.avatar = avatarDataUrl;
        if (this.users[this.currentUser.email]) {
            this.users[this.currentUser.email].avatar = avatarDataUrl;
        }
        
        localStorage.setItem('fitverse_currentUser', JSON.stringify(this.currentUser));
        localStorage.setItem('fitverse_users', JSON.stringify(this.users));
        
        this.showToast('Profile photo updated successfully!', 'success');
        this.updateNav();
        return true;
    }

    updateProfile(name, phone) {
        if (!this.currentUser) return false;
        
        // Update current user
        this.currentUser.name = name;
        this.currentUser.phone = phone || 'Not provided';
        
        // Update in users database
        if (this.users[this.currentUser.email]) {
            this.users[this.currentUser.email].name = name;
            this.users[this.currentUser.email].phone = phone;
        }
        
        // Save
        localStorage.setItem('fitverse_currentUser', JSON.stringify(this.currentUser));
        localStorage.setItem('fitverse_users', JSON.stringify(this.users));
        
        this.showToast('Profile updated successfully!', 'success');
        this.updateNav();
        return true;
    }

    updateAddress(addressStr) {
        if (!this.currentUser) return false;
        
        this.currentUser.address = addressStr;
        
        if (this.users[this.currentUser.email]) {
            this.users[this.currentUser.email].address = addressStr;
        }
        
        localStorage.setItem('fitverse_currentUser', JSON.stringify(this.currentUser));
        localStorage.setItem('fitverse_users', JSON.stringify(this.users));
        
        this.showToast('Address saved successfully!', 'success');
        return true;
    }

    resetPassword(email, newPassword) {
        email = email.toLowerCase().trim();
        if (!this.users[email]) {
            this.users[email] = {
                name: email.split('@')[0],
                email: email,
                password: newPassword
            };
        } else {
            this.users[email].password = newPassword;
        }

        if (this.currentUser && this.currentUser.email === email) {
            this.currentUser.password = newPassword;
            localStorage.setItem('fitverse_currentUser', JSON.stringify(this.currentUser));
        }

        localStorage.setItem('fitverse_users', JSON.stringify(this.users));
        this.showToast('Password updated successfully! You can now sign in.', 'success');
        return true;
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('fitverse_currentUser');
        this.showToast('Logged out successfully.', 'success');
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }

    updateNav() {
        const signInBtns = document.querySelectorAll('.golds-signin-btn, .mobile-join');
        if (this.isLoggedIn()) {
            const firstName = this.currentUser.name.split(' ')[0];
            const iconHtml = this.currentUser.avatar 
                ? `<img src="${this.currentUser.avatar}" style="width:22px; height:22px; border-radius:50%; object-fit:cover; border: 1.5px solid #000; flex-shrink: 0; display: inline-block;">`
                : `<i class="fas fa-user-circle" style="font-size: 1.1rem; color: #000; flex-shrink: 0;"></i>`;
            signInBtns.forEach(btn => {
                btn.innerHTML = `${iconHtml}<span style="white-space: nowrap;">HI, ${firstName.toUpperCase()}</span>`;
                btn.href = 'profile.html';
                btn.classList.add('profile-btn');
                btn.removeAttribute('style');
            });
        }
        this.syncBadges();
    }

    syncBadges() {
        try {
            const cart = JSON.parse(localStorage.getItem('fitverse_cart') || '[]');
            const totalCart = Array.isArray(cart) ? cart.reduce((sum, item) => sum + Math.max(5, Number(item.qty) || 5), 0) : 0;
            document.querySelectorAll('.cart-badge').forEach(b => {
                b.textContent = totalCart;
                if (totalCart > 0) {
                    b.classList.add('has-items');
                    b.style.display = 'flex';
                } else {
                    b.classList.remove('has-items');
                    b.style.display = 'none';
                }
            });

            const wishlist = JSON.parse(localStorage.getItem('fitverse_wishlist') || '[]');
            const totalWish = Array.isArray(wishlist) ? wishlist.length : 0;
            document.querySelectorAll('.wishlist-badge').forEach(b => {
                b.textContent = totalWish;
                if (totalWish > 0) {
                    b.classList.add('has-items');
                    b.style.display = 'flex';
                } else {
                    b.classList.remove('has-items');
                    b.style.display = 'none';
                }
            });
        } catch (e) {}
    }

    showToast(message, type = 'success') {
        if (typeof window.showToast === 'function') {
            window.showToast(message, type);
            return;
        }

        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.className = 'toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        let iconHtml = '<span style="color: #ffd700; font-size: 1.15rem; font-weight: 900;">✓</span>';
        if (type === 'error') iconHtml = '<span style="color: #ef4444; font-size: 1.15rem; font-weight: 900;">✕</span>';
        else if (type === 'info') iconHtml = '<span style="color: #38bdf8; font-size: 1.15rem; font-weight: 900;">ℹ</span>';

        toast.innerHTML = `${iconHtml}<span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(15px) scale(0.95)';
            toast.style.transition = 'all 0.3s ease-out';
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    }
}

const auth = new Auth();

// Global Mobile Menu Toggle Handler
window.toggleMobileMenu = function(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.toggle('open');
        menu.classList.toggle('active');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    auth.updateNav();

    // Global Mobile Menu Click & Touch Event Delegation
    const handleMenuClick = (e) => {
        const toggleBtn = e.target.closest('.mobile-menu-toggle');
        if (toggleBtn) {
            window.toggleMobileMenu(e);
        } else {
            const menu = document.querySelector('.mobile-menu');
            if (menu && (menu.classList.contains('active') || menu.classList.contains('open')) && !e.target.closest('.mobile-menu')) {
                menu.classList.remove('active', 'open');
            }
        }
    };

    document.addEventListener('click', handleMenuClick);
});
