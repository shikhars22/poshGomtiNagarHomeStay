# Posh Gomti Nagar – Corporate Homestay Website

A modern, responsive marketing website for **Posh Gomti Nagar**, a luxury corporate homestay in Lucknow, India. Designed to showcase the property's unique value proposition for corporate relocations, team offsites, and VIP hospitality.

---

## 🎯 Overview

Posh Gomti Nagar bridges the gap between sterile hotels and traditional homestays. Built with an Awadhi-inspired biophilic design, this property offers executives a comfortable, home-like environment with 5-star amenities and local cultural authenticity.

**Target Audience:**
- Corporate teams relocating to Lucknow
- Executive project teams seeking offsite venues
- Distinguished guests requiring memorable hospitality experiences

---

## ✨ Key Features

### 1. **Hero Section**
- Eye-catching visual with green (40%) and yellow (30%) Awadhi color scheme
- Clear value proposition with call-to-action

### 2. **For Corporates** Section
- Three interactive scenario cards:
  - **"Soft Landing" Relocation** – For executives settling into Lucknow
  - **"War Room" Project Spaces** – For team collaboration and innovation
  - **VIP Cultural Hospitality** – For impressing distinguished guests
- Hover/tap animations for engagement

### 3. **The Experience** Section
- Biophilic design philosophy explanation
- Hero image with context about comfort and nature integration

### 4. **Amenities Grid**
- 8 premium features with icons:
  - High-speed WiFi, Premium Coffee, Spacious Living, Modern Kitchen
  - Executive Bedrooms, Secure Parking, 24/7 Staff, Fully Furnished

### 5. **Contact Form**
- Modal popup with Formspree integration
- Collects: Name, Email, Phone, Message
- Responsive design for mobile and desktop

### 6. **Navigation**
- Fixed navbar with scroll detection
- Mobile hamburger menu
- Smooth scroll links to all sections

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI framework |
| **Vite** | Lightning-fast build tool & dev server |
| **Tailwind CSS** | Utility-first styling |
| **Lucide React** | Beautiful icon library |
| **Formspree** | Backend form handling (emails) |

---

## 📦 Project Structure

```
posh-gomti-nagar-project/
├── src/
│   ├── App.jsx                          # Main React component
│   ├── index.css                        # Global styles
│   ├── main.jsx                         # Entry point
│   └── images/                          # Image assets
│       ├── homeslogowithoutbackgroundcropped.png
│       ├── family.png
│       ├── balcony.png
│       ├── terrace.png
│       ├── kitchen.jpg
│       └── mastersuite.png
├── index.html                           # HTML template
├── package.json                         # Dependencies & scripts
├── vite.config.js                       # Vite configuration
├── tailwind.config.js                   # Tailwind CSS config
├── postcss.config.js                    # PostCSS configuration
├── .gitignore                           # Git ignore rules
└── README.md                            # This file
```

---

## 🎨 Color Scheme

The design follows the **Awadhi & Corporate Theme**:

| Color | Hex | Usage | Proportion |
|-------|-----|-------|-----------|
| **Green (Leaf/Nature)** | `#15803d` | Primary CTAs, icons, accents | 40% |
| **Yellow (Sober/Awadhi)** | `#fcd34d` | Highlights, hover states | 30% |
| **White/Cream** | `#fafaf9` | Background, cards | 20% |
| **Dark Slate** | Default | Text, body copy | 10% |

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 16.x
- npm >= 8.x

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shikhars22/poshGomtiNagarHomeStay.git
   cd poshGomtiNagarHomeStay
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173/`

---

## 📝 Available Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| **Dev** | `npm run dev` | Start development server with hot reload |
| **Build** | `npm run build` | Create optimized production build |
| **Preview** | `npm run preview` | Preview production build locally |

---

## 🖼️ Image Handling for Deployment

All images are imported as ES modules to ensure they work correctly on production servers (e.g., Vercel):

```jsx
// ✅ Correct (imports)
import logoImg from './images/homeslogowithoutbackgroundcropped.png';
// Then use: <img src={logoImg} />

// ❌ Avoid (relative paths)
// <img src="./src/images/logo.png" /> // Won't work in production
```

This approach ensures images display correctly on Vercel, GitHub Pages, and other hosting platforms.

---

## 📧 Contact Form Integration

The contact form is powered by **Formspree**. When users submit the form:
1. Data is sent to Formspree servers
2. You receive an email notification
3. User sees a success confirmation

**To configure Formspree:**
- Visit https://formspree.io/
- Create a free account
- Set up a new form (you'll get a form ID)
- Update the form submission endpoint in `App.jsx` if needed

Current endpoint: `https://formspree.io/f/YOUR_FORM_ID`

---

## 🌐 Deployment

### **Vercel (Recommended)**

1. Push your code to GitHub (already done ✓)
2. Go to https://vercel.com/new
3. Click **"Import Git Repository"**
4. Select `poshGomtiNagarHomeStay`
5. Click **"Deploy"** (Vercel auto-detects Vite settings)
6. Your site will be live in ~2 minutes

**Live URL:** `https://posh-gomti-nagar-home-stay.vercel.app` (or similar)

**Auto-deployment:** Every push to `main` on GitHub triggers a new Vercel build.

### **Other Hosting Options**

- **Netlify:** Similar to Vercel, connect GitHub repo → auto-deploys
- **GitHub Pages:** Run `npm run build`, push `dist/` folder
- **Docker:** Create a `Dockerfile` for containerized deployment

---

## 🔧 Customization

### Change Logo
Replace `src/images/homeslogowithoutbackgroundcropped.png` with your logo, then update the import in `App.jsx`.

### Update Color Scheme
Edit `tailwind.config.js` or modify Tailwind classes directly in `App.jsx`:
- Green: Change `green-700`, `green-800`, etc.
- Yellow: Change `yellow-300`, `amber-300`, etc.

### Update Copy/Content
All text is in `App.jsx`. Search for specific strings and edit directly:
- Hero title: Search for "Posh Gomti Nagar"
- Section headings: Search for section names
- Scenario descriptions: Look for `scenarios` array

### Add New Sections
1. Create a new function/component in `App.jsx`
2. Add a new navigation link in the navbar
3. Add the section to the page with a unique `id` for scroll navigation

---

## 📱 Responsive Design

The site is fully responsive:
- **Mobile** (< 768px): Single column, hamburger menu, optimized spacing
- **Tablet** (768px–1024px): 2-column layouts where appropriate
- **Desktop** (> 1024px): Full multi-column layouts

Test on different screen sizes using browser DevTools (F12 → Toggle Device Toolbar).

---

## 🐛 Troubleshooting

### Images Not Displaying on Production
**Problem:** Images work locally but not on Vercel/live server.
**Solution:** Ensure images are imported as ES modules (see Image Handling section).

### Form Not Sending Emails
**Problem:** Contact form doesn't submit or no emails received.
**Solution:** 
- Check browser console for errors (F12 → Console)
- Verify Formspree endpoint is correct
- Test with a simple email first

### Slow Build Time
**Problem:** `npm run build` takes too long.
**Solution:**
- Clear `node_modules`: `rm -rf node_modules && npm install`
- Check for large image files (optimize with tools like TinyPNG)

### Styling Issues
**Problem:** Tailwind classes not applying.
**Solution:**
- Run `npm run build` to rebuild CSS
- Ensure class names are correctly spelled
- Check `tailwind.config.js` for purge/content rules

---

## 📊 Performance Optimization

Current optimizations in place:
- **Code splitting:** Vite automatically chunks code
- **Image optimization:** Consider using `.webp` format for faster loading
- **CSS purging:** Tailwind removes unused styles in production
- **Minification:** Vite minifies JS, CSS, and HTML

**Future improvements:**
- Add image lazy loading for below-the-fold images
- Implement service worker for offline support
- Add analytics (Google Analytics, Mixpanel)

---

## 🔐 Security & Privacy

- **No sensitive data** stored in code
- **Form submissions** handled by Formspree (review their privacy policy)
- **No cookies or tracking** (unless you add analytics)
- **HTTPS enforced** on Vercel deployment

---

## 📄 License

This project is proprietary to Posh Gomti Nagar. Unauthorized use or distribution is prohibited.

---

## 👥 Contributors

- **Shikhar Gupta** – Developer/Designer
- **Posh Gomti Nagar Team** – Concept & Content

---

## 📞 Support & Contact

For questions or issues related to this project:
- **Email:** shikhar@detmo.in
- **GitHub:** https://github.com/shikhars22/poshGomtiNagarHomeStay

For property inquiries:
- Contact form on the website (sends to Posh Gomti Nagar email)

---

## 🔄 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Dec 6, 2025 | Initial release with core features |

---

**Last Updated:** December 6, 2025

---

*Built with ❤️ for Posh Gomti Nagar – Where Comfort Meets Authenticity.*
