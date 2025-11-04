# InsulaAI - Full Stack Web Application

## Overview
InsulaAI is a complete web application for UAV-based insulator inspection powered by YOLOv8 deep learning. The system provides AI-driven detection of damaged powerline insulators under any weather conditions.

## 🔑 Test Credentials
**Email:** `test@insulaai.com`  
**Password:** `demo123`

Use these credentials to login and explore the full application.

## Project Structure

```
.
├── index.html              # Landing page
├── login.html              # Login page with mock auth
├── signup.html             # Signup page  
├── onboarding.html         # Multi-step user onboarding
├── upload.html             # Image upload & analysis config
├── processing.html         # Real-time processing with pipeline
├── result.html             # Analysis results & recommendations
├── dashboard.html          # User dashboard with history
├── server.py               # Python HTTP server
├── components/             # Reusable HTML components
│   ├── header.html         # Navigation header
│   └── footer.html         # Footer with social links
├── css/                    # Stylesheets
│   └── shared-styles.css   # Shared component styles
├── js/                     # JavaScript files
│   ├── auth.js             # Mock authentication system
│   ├── main.js             # Global utilities
│   ├── firebase.js         # Firebase integration stubs
│   ├── api-shim.js         # Backend API placeholders
│   └── scroll-effects.js   # Side scroll effects
├── assets/                 # Images and media
├── components.json         # Component documentation
├── CREDENTIALS.md          # Test credentials & auth info
└── README.md              # Project documentation
```

## Technology Stack

### Frontend
- **HTML5, CSS3, JavaScript** - Core web technologies
- **Bootstrap 5** - Responsive framework & components
- **Bootstrap Icons** - Icon library
- **GSAP** - Animation library for smooth transitions
- **Google Fonts** - Orbitron (headings), Inter (body text)

### Backend (Ready for Integration)
- **Python/Flask** - Planned backend framework
- **Firebase** - Authentication & Firestore database (stubs ready)
- **YOLOv8** - AI model for insulator detection

### Server
- **Python HTTP Server** - Development server on port 5000

## Features Implemented

### ✅ Complete Pages
1. **Landing Page** (`index.html`)
   - Hero section with animated drone SVG
   - Feature cards with hover effects
   - How it works timeline
   - Demo section
   - Login/Register buttons in navbar
   - Side scroll effects

2. **Authentication Pages**
   - **Login** - Mock authentication with test credentials
   - **Signup** - User registration with form validation
   - Session persistence using localStorage

3. **Onboarding** (`onboarding.html`)
   - 5-step wizard with progress indicator
   - Energy line animation between steps
   - Circular progress visualization
   - Form validation
   - Saves profile to localStorage

4. **Upload** (`upload.html`)
   - Drag & drop image upload
   - File preview
   - Detection options (broken, dirty, missing)
   - Confidence threshold slider
   - Weather condition simulation
   - Help button with instructions

5. **Processing** (`processing.html`)
   - Animated 4-stage pipeline
   - Real-time progress bar
   - ETA countdown
   - Rotating educational tips
   - Automatic redirect to results

6. **Results** (`result.html`)
   - Visual comparison (original vs annotated)
   - Detection summary with stats
   - Color-coded legend
   - Recommended actions
   - Plain English explanations
   - Download/print options

7. **Dashboard** (`dashboard.html`)
   - User statistics overview
   - Quick action cards
   - Analysis history with filters
   - Protected route (requires login)
   - Logout functionality

### ✅ Components & JavaScript
- **Reusable header** component with auth buttons
- **Reusable footer** component
- **Mock authentication system** (js/auth.js)
- **Global utilities** (js/main.js)
- **Firebase stubs** ready for integration
- **API shim** for backend calls
- **Scroll effects** on both sides

### ✅ Design Features
- Dark neon theme (cyan, violet, amber)
- Custom cursor with particle effects
- Glassmorphism effects
- GSAP scroll animations
- Responsive design (mobile-friendly)
- Loading states and transitions
- Toast notifications
- Form validation

## Running the Project

The server automatically starts via the configured workflow:

```bash
python server.py
```

Access at: `http://localhost:5000` or via Replit webview

## User Flow

1. **Landing Page** → Click "Register" or "Login"
2. **Signup** → Create account → **Onboarding** (5 steps)
3. **Dashboard** → View stats and history
4. **Upload** → Select image and options
5. **Processing** → Watch AI pipeline (12s simulation)
6. **Results** → View analysis and recommendations
7. **Dashboard** → Review all past analyses

## Mock Authentication

The app uses a client-side mock authentication system perfect for development:

- **Test Account**: test@insulaai.com / demo123
- **Storage**: localStorage (insulaai_user, insulaai_logged_in)
- **Protected Routes**: Dashboard requires login
- **Session**: Persists across page reloads

See `CREDENTIALS.md` for complete authentication details.

## Recent Changes

- 2025-11-04: Complete application build
  - Created all 8 pages with full functionality
  - Implemented mock authentication system
  - Added reusable components
  - Created JavaScript utilities and API stubs
  - Added side scroll effects
  - Updated navbar with Login/Register buttons
  - Removed parallax scroll animation from hero
  - Made both hero buttons visible
  - Integrated GSAP animations throughout

## Backend Integration (Future)

When ready for production:

1. **Firebase Setup**
   - Configure `js/firebase.js` with real credentials
   - Enable Firebase Authentication
   - Set up Firestore database collections
   - Configure Storage for image uploads

2. **Flask Backend**
   - Replace API stubs in `js/api-shim.js`
   - Implement YOLOv8 model endpoint
   - Add image processing pipeline
   - Create report generation service

3. **Database Schema**
   ```
   users/
     - profile data
     - preferences
     - settings
   
   analyses/
     - image data
     - detection results
     - timestamps
     - user references
   ```

## Development Notes

- All pages work standalone without backend
- Perfect for frontend development and demos
- Mock data provides realistic user experience
- Ready for seamless backend integration
- No database required for testing

## Color Palette

- **Neon Cyan**: `#00f0ff` - Primary accent
- **Neon Violet**: `#bf00ff` - Secondary accent  
- **Neon Amber**: `#ffaa00` - Tertiary accent
- **Deep Black**: `#0a0a0f` - Background
- **Dark Gray**: `#1a1a24` - Secondary background

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lazy loading for images
- Deferred animations on mobile
- Optimized scroll effects
- Reduced motion support for accessibility

---

**Status**: ✅ Full frontend complete and ready for backend integration  
**Last Updated**: November 4, 2025
