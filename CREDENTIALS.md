# InsulaAI - Test Credentials

## Mock Authentication System

The application currently uses a mock authentication system for development and testing.

### Test Account Credentials

**Email:** `test@insulaai.com`  
**Password:** `demo123`

### How to Use

1. Navigate to the [Login Page](login.html)
2. Enter the test credentials above
3. Click "Login" to access the dashboard

Alternatively, you can:
- Sign up with any email/password combination (it will create a mock account)
- The signup process will automatically log you in and redirect to onboarding

### What Works

✅ Login with test credentials  
✅ Signup with any credentials (mock)  
✅ Session persistence (using localStorage)  
✅ Logout functionality  
✅ Protected routes (dashboard redirects to login if not authenticated)  
✅ User profile storage  
✅ Complete onboarding flow  
✅ Image upload and analysis (simulated)  
✅ Processing with animated pipeline  
✅ Results display with mock data  
✅ Dashboard with analysis history  

### Files Involved

- `js/auth.js` - Mock authentication logic
- `login.html` - Login page
- `signup.html` - Signup page  
- `dashboard.html` - Protected user dashboard
- All other pages integrate with the auth system

### Future Integration

When ready for production:
1. Replace `js/auth.js` with Firebase Authentication
2. Update `js/firebase.js` with real Firebase config
3. Connect `js/api-shim.js` to actual Flask/Python backend
4. Implement real user database with Firestore

### Session Storage

The mock system stores user data in browser's localStorage:
- `insulaai_logged_in` - Login status flag
- `insulaai_user` - User profile data (JSON)

Clear localStorage to reset the session:
```javascript
localStorage.clear()
```

### Development Notes

- All pages work standalone without backend
- Authentication is client-side only
- No actual API calls are made
- Perfect for frontend development and testing
- Ready for backend integration when available

---

**Note:** This is a development/demo system. In production, use proper authentication with Firebase or a secure backend.
