import re

with open('profile.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Modify Edit Profile button
html = html.replace(
    '<button class="btn" style="background: transparent; border: 1px solid rgba(255,255,255,0.2)',
    '<button onclick="openProfileModal()" id="edit-profile-btn" class="btn" style="background: transparent; border: 1px solid rgba(255,255,255,0.2)'
)

# 2. Modify Edit Address icon
html = html.replace(
    '<button style="background: none; border: none; color: #14b8a6; cursor: pointer; font-size: 0.95rem; padding: 0.5rem; border-radius: 4px; transition: background 0.3s;" onmouseover="this.style.background=\'rgba(20, 184, 166, 0.1)\'" onmouseout="this.style.background=\'none\'"><i class="fas fa-edit"></i></button>',
    '<button onclick="openAddressModal()" style="background: none; border: none; color: #14b8a6; cursor: pointer; font-size: 0.95rem; padding: 0.5rem; border-radius: 4px; transition: background 0.3s;" onmouseover="this.style.background=\'rgba(20, 184, 166, 0.1)\'" onmouseout="this.style.background=\'none\'"><i class="fas fa-edit"></i></button>'
)

# 3. Modify Add Address button and Address Display area
address_html_old = """<p style="color: #e5e7eb; font-size: 1rem; line-height: 1.6; font-family: 'Inter', sans-serif; margin: 0;">
                                No default shipping address saved.<br>
                                <span style="font-size: 0.9rem; opacity: 0.6; display: block; margin-top: 0.5rem;">Add an address for a seamless checkout experience.</span>
                            </p>
                            <button class="btn" style="background: transparent; border: 1px solid rgba(20, 184, 166, 0.5); color: #14b8a6; padding: 0.6rem 1.2rem; border-radius: 8px; margin-top: 1rem; font-size: 0.9rem; transition: all 0.3s;" onmouseover="this.style.background='rgba(20, 184, 166, 0.1)'" onmouseout="this.style.background='transparent'">
                                + Add Address
                            </button>"""

address_html_new = """<div id="address-display" style="color: #e5e7eb; font-size: 1rem; line-height: 1.6; font-family: 'Inter', sans-serif; margin: 0;">
                                <p style="margin: 0;">No default shipping address saved.</p>
                                <span style="font-size: 0.9rem; opacity: 0.6; display: block; margin-top: 0.5rem;">Add an address for a seamless checkout experience.</span>
                            </div>
                            <button id="add-address-btn" onclick="openAddressModal()" class="btn" style="background: transparent; border: 1px solid rgba(20, 184, 166, 0.5); color: #14b8a6; padding: 0.6rem 1.2rem; border-radius: 8px; margin-top: 1rem; font-size: 0.9rem; transition: all 0.3s;" onmouseover="this.style.background='rgba(20, 184, 166, 0.1)'" onmouseout="this.style.background='transparent'">
                                + Add Address
                            </button>"""

html = html.replace(address_html_old, address_html_new)


# 4. Modals and JavaScript
modals_and_script = """
    <!-- Modals -->
    <!-- Profile Edit Modal -->
    <div id="profile-modal" class="modal-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); backdrop-filter: blur(5px); z-index: 1000; justify-content: center; align-items: center;">
        <div class="login-glass-card" style="background: rgba(255,255,255,0.05); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 2.5rem; width: 90%; max-width: 400px; box-shadow: 0 25px 50px rgba(0,0,0,0.5);">
            <h3 style="color: #fff; font-family: 'Outfit', sans-serif; margin-bottom: 1.5rem; font-size: 1.5rem;">Edit Profile</h3>
            <div style="margin-bottom: 1rem;">
                <label style="color: rgba(255,255,255,0.7); font-size: 0.9rem; margin-bottom: 0.5rem; display: block;">Full Name</label>
                <input type="text" id="edit-name" style="width: 100%; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 0.8rem; color: #fff; font-family: 'Inter', sans-serif;">
            </div>
            <div style="margin-bottom: 1.5rem;">
                <label style="color: rgba(255,255,255,0.7); font-size: 0.9rem; margin-bottom: 0.5rem; display: block;">Phone Number</label>
                <input type="text" id="edit-phone" style="width: 100%; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 0.8rem; color: #fff; font-family: 'Inter', sans-serif;">
            </div>
            <div style="display: flex; gap: 1rem;">
                <button onclick="closeProfileModal()" class="btn" style="flex: 1; background: transparent; border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 0.8rem; border-radius: 8px;">Cancel</button>
                <button onclick="saveProfile()" class="btn btn-gold" style="flex: 1; padding: 0.8rem; border-radius: 8px;">Save Changes</button>
            </div>
        </div>
    </div>

    <!-- Address Edit Modal -->
    <div id="address-modal" class="modal-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); backdrop-filter: blur(5px); z-index: 1000; justify-content: center; align-items: center;">
        <div class="login-glass-card" style="background: rgba(255,255,255,0.05); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 2.5rem; width: 90%; max-width: 400px; box-shadow: 0 25px 50px rgba(0,0,0,0.5);">
            <h3 style="color: #fff; font-family: 'Outfit', sans-serif; margin-bottom: 1.5rem; font-size: 1.5rem;">Shipping Address</h3>
            <div style="margin-bottom: 1.5rem;">
                <label style="color: rgba(255,255,255,0.7); font-size: 0.9rem; margin-bottom: 0.5rem; display: block;">Full Address</label>
                <textarea id="edit-address" rows="4" style="width: 100%; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 0.8rem; color: #fff; font-family: 'Inter', sans-serif; resize: none;" placeholder="123 Fitness St..."></textarea>
            </div>
            <div style="display: flex; gap: 1rem;">
                <button onclick="closeAddressModal()" class="btn" style="flex: 1; background: transparent; border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 0.8rem; border-radius: 8px;">Cancel</button>
                <button onclick="saveAddress()" class="btn" style="flex: 1; background: #14b8a6; color: #fff; border: none; padding: 0.8rem; border-radius: 8px;">Save Address</button>
            </div>
        </div>
    </div>

    <script>
        function openProfileModal() {
            if(!auth.currentUser) return;
            document.getElementById('edit-name').value = auth.currentUser.name || '';
            document.getElementById('edit-phone').value = (auth.currentUser.phone && auth.currentUser.phone !== 'Not provided') ? auth.currentUser.phone : '';
            document.getElementById('profile-modal').style.display = 'flex';
        }
        
        function closeProfileModal() {
            document.getElementById('profile-modal').style.display = 'none';
        }
        
        function saveProfile() {
            const name = document.getElementById('edit-name').value.trim();
            const phone = document.getElementById('edit-phone').value.trim();
            if(!name) { auth.showToast('Name is required', 'error'); return; }
            
            auth.updateProfile(name, phone);
            closeProfileModal();
            loadProfileData(); // Reload UI
        }

        function openAddressModal() {
            if(!auth.currentUser) return;
            document.getElementById('edit-address').value = auth.currentUser.address || '';
            document.getElementById('address-modal').style.display = 'flex';
        }

        function closeAddressModal() {
            document.getElementById('address-modal').style.display = 'none';
        }

        function saveAddress() {
            const address = document.getElementById('edit-address').value.trim();
            if(!address) { auth.showToast('Address is required', 'error'); return; }
            
            auth.updateAddress(address);
            closeAddressModal();
            loadProfileData(); // Reload UI
        }
        
        // Add listener for clicking outside modals
        window.onclick = function(event) {
            if (event.target == document.getElementById('profile-modal')) closeProfileModal();
            if (event.target == document.getElementById('address-modal')) closeAddressModal();
        }
    </script>
"""

# Now we need to modify loadProfileData in profile.html to populate the address if it exists!
load_data_old = """                document.getElementById('profile-name').innerText = user.name;
                document.getElementById('profile-email').innerHTML = '<i class="fas fa-envelope" style="color: #14b8a6; width: 20px;"></i> ' + user.email;
                document.getElementById('profile-phone').innerHTML = '<i class="fas fa-phone-alt" style="color: #e8b923; width: 20px;"></i> ' + (user.phone || 'Not provided');"""

load_data_new = """                document.getElementById('profile-name').innerText = user.name;
                document.getElementById('profile-email').innerHTML = '<i class="fas fa-envelope" style="color: #14b8a6; width: 20px;"></i> ' + user.email;
                document.getElementById('profile-phone').innerHTML = '<i class="fas fa-phone-alt" style="color: #e8b923; width: 20px;"></i> ' + (user.phone || 'Not provided');
                
                // Update Address UI
                const addressDisplay = document.getElementById('address-display');
                const addBtn = document.getElementById('add-address-btn');
                if (user.address) {
                    addressDisplay.innerHTML = '<p style="margin: 0; font-weight: 500;">' + user.address.replace(/\\n/g, '<br>') + '</p>';
                    addBtn.style.display = 'none'; // Hide add button if address exists (they can use the edit icon)
                } else {
                    addressDisplay.innerHTML = '<p style="margin: 0;">No default shipping address saved.</p><span style="font-size: 0.9rem; opacity: 0.6; display: block; margin-top: 0.5rem;">Add an address for a seamless checkout experience.</span>';
                    addBtn.style.display = 'inline-block';
                }"""

html = html.replace(load_data_old, load_data_new)

# Insert modals at the end of body
if '<!-- Modals -->' not in html:
    html = html.replace('</body>', modals_and_script + '\n</body>')

with open('profile.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Updated profile.html")
