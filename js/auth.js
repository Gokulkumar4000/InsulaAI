// Mock Authentication System for InsulaAI
// Test Credentials:
// Email: test@insulaai.com
// Password: demo123

const MOCK_USER = {
    email: 'test@insulaai.com',
    password: 'demo123',
    name: 'Demo User',
    organization: 'InsulaAI Demo',
    role: 'engineer'
};

// Login function
function loginUser(email, password) {
    if (email === MOCK_USER.email && password === MOCK_USER.password) {
        const userData = {
            email: MOCK_USER.email,
            name: MOCK_USER.name,
            organization: MOCK_USER.organization,
            role: MOCK_USER.role,
            loginTime: new Date().toISOString()
        };
        
        localStorage.setItem('insulaai_user', JSON.stringify(userData));
        localStorage.setItem('insulaai_logged_in', 'true');
        return { success: true, user: userData };
    }
    
    return { success: false, message: 'Invalid email or password' };
}

// Signup function
function signupUser(fullname, email, password) {
    // In a real app, this would create a new user
    // For demo, we'll just accept the signup and log them in with mock data
    const userData = {
        email: email,
        name: fullname,
        organization: '',
        role: 'user',
        loginTime: new Date().toISOString()
    };
    
    localStorage.setItem('insulaai_user', JSON.stringify(userData));
    localStorage.setItem('insulaai_logged_in', 'true');
    return { success: true, user: userData };
}

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('insulaai_logged_in') === 'true';
}

// Get current user
function getCurrentUser() {
    const userStr = localStorage.getItem('insulaai_user');
    if (userStr) {
        try {
            return JSON.parse(userStr);
        } catch (e) {
            return null;
        }
    }
    return null;
}

// Logout function
function logoutUser() {
    localStorage.removeItem('insulaai_user');
    localStorage.removeItem('insulaai_logged_in');
}

// Update user profile
function updateUserProfile(data) {
    const user = getCurrentUser();
    if (user) {
        const updatedUser = { ...user, ...data };
        localStorage.setItem('insulaai_user', JSON.stringify(updatedUser));
        return { success: true, user: updatedUser };
    }
    return { success: false, message: 'No user logged in' };
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loginUser,
        signupUser,
        isLoggedIn,
        getCurrentUser,
        logoutUser,
        updateUserProfile,
        MOCK_USER
    };
}
