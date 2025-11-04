# InsulaAI - UAV-Based Insulator Inspection

A modern web application for AI-powered insulator fault detection using UAV imagery and YOLOv8 deep learning.

## 🚀 Features

- **AI-Powered Detection**: YOLOv8 model for accurate insulator fault detection
- **Modern UI/UX**: Neon-themed design with smooth animations and effects
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Component-Based**: Reusable components for easy maintenance and expansion
- **Authentication Ready**: Login and signup pages with matching design theme

## 📁 Project Structure

```
.
├── index.html              # Landing page
├── login.html              # Login page
├── signup.html             # Sign up page
├── server.py               # Python HTTP server
├── components/             # Reusable HTML components
│   └── header.html         # Navigation header
├── css/                    # Stylesheets
│   └── shared-styles.css   # Shared styles across pages
├── js/                     # JavaScript files
│   └── scroll-effects.js   # Side scroll effects
├── assets/                 # Images and media files
├── components.json         # Component documentation
├── replit.md              # Project documentation
└── README.md              # This file
```

## 🎨 Design Theme

The application uses a dark neon theme with the following color palette:

- **Neon Cyan**: `#00f0ff` - Primary accent color
- **Neon Violet**: `#bf00ff` - Secondary accent color
- **Neon Amber**: `#ffaa00` - Tertiary accent color
- **Deep Black**: `#0a0a0f` - Background color
- **Dark Gray**: `#1a1a24` - Secondary background

## 🛠️ Technologies

- **Frontend**: HTML5, CSS3, JavaScript
- **Framework**: Bootstrap 5
- **Icons**: Bootstrap Icons
- **Fonts**: Orbitron (headings), Inter (body)
- **Animations**: GSAP (GreenSock Animation Platform)
- **Server**: Python HTTP Server

## 🌐 Running the Project

The project uses a simple Python HTTP server running on port 5000:

```bash
python server.py
```

The server automatically starts via the Replit workflow and serves content at `http://0.0.0.0:5000/`

## 📄 Pages

### Landing Page (index.html)
- Hero section with animated drone SVG
- Features showcase
- How it works section
- Live demo preview
- About section with tech stack
- Login/Register buttons in navigation

### Login Page (login.html)
- Two-pane design layout
- Email and password form
- Remember me option
- Link to signup page
- Secure access visual on right panel

### Sign Up Page (signup.html)
- Two-pane design layout
- Full registration form
- Terms and conditions acceptance
- Link to login page
- Journey start visual on right panel

## ✨ Interactive Features

### Scroll Effects
- Vertical lines appear on both sides when scrolling
- Floating particles animate along the sides
- Height increases based on scroll percentage

### Animations
- Custom cursor with follower effect
- Click ripple effects
- Particle background system
- GSAP-powered scroll animations
- Button hover effects with sparkles

### Components
All components are designed to be reusable and follow the same design theme. See `components.json` for detailed documentation.

## 🔮 Future Development

Planned pages and features:
- **Onboarding**: Multi-step user onboarding wizard
- **Upload**: Image upload with analysis options
- **Processing**: Real-time processing with ETA display
- **Results**: Annotated images with detection results
- **Dashboard**: User history and account management
- **Backend Integration**: Connect to Python/Flask backend with Firebase

## 📝 Notes

- The landing page design remains unchanged as per requirements
- All new pages follow the exact same visual theme
- Authentication is currently frontend-only (backend integration pending)
- Custom cursor and particle effects are preserved from original design

## 🤝 Contributing

This is a project template. To extend:
1. Follow the existing design patterns
2. Use the shared CSS variables
3. Maintain the neon theme aesthetic
4. Keep components reusable
5. Document new components in `components.json`

## 📧 Contact

For questions or support, refer to the InsulaAI project documentation.

---

**Developed with ⚡ by InsulaAI Team | Powered by YOLOv8 + UAV Vision**
