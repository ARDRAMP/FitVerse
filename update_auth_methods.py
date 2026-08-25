import re

with open('auth.js', 'r', encoding='utf-8') as f:
    js = f.read()

update_methods = """
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
"""

if 'updateProfile(' not in js:
    # insert before logout()
    js = js.replace('    logout() {', update_methods + '\n    logout() {')
    
    with open('auth.js', 'w', encoding='utf-8') as f:
        f.write(js)
    print("Updated auth.js")
else:
    print("auth.js already has updateProfile")
