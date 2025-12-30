# Yalini T - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS, featuring advanced animations and interactive elements.

## 🚀 Features

- **Modern Design**: Glassmorphism, gradients, and sophisticated color palette
- **Smooth Animations**: Framer Motion for scroll-triggered and interactive animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Interactive Sections**:
  - Hero with animated background and orbiting tech badges
  - About with animated stat counters
  - Experience timeline with expandable cards
  - Filterable project gallery with modal details
  - Skills with animated progress circles
  - Education timeline
  - Contact form with validation
- **Performance Optimized**: Code splitting and lazy loading
- **SEO Friendly**: Meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Icons**: React Icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Update Content

All content is centralized in `src/data/portfolio.js`. Update this file with your:
- Personal information
- Work experience
- Projects
- Skills
- Education
- Contact details

### Update Colors

Modify the color palette in `tailwind.config.js` to match your brand:
```javascript
colors: {
  primary: { ... },
  accent: { ... },
  emerald: { ... },
}
```

### Add Images

1. Add your avatar to `public/avatar.jpg`
2. Add project images to `public/projects/`
3. Add your resume to `public/resume.pdf`

## 📁 Project Structure

```
yalini-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── layout/     # Navbar, Footer
│   │   ├── sections/   # Hero, About, Experience, etc.
│   │   └── ui/         # Reusable components (Button, Card, Badge)
│   ├── data/           # Portfolio content
│   ├── hooks/          # Custom React hooks
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # React entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎯 Sections

1. **Hero**: Animated introduction with rotating role titles
2. **About**: Bio and animated statistics
3. **Experience**: Timeline of work history
4. **Projects**: Filterable gallery of projects
5. **Skills**: Categorized skills with proficiency levels
6. **Education**: Academic background
7. **Contact**: Contact form and social links

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Deploy the 'dist' folder to gh-pages branch
```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or feedback, reach out via the contact form on the website.

---

Built with ❤️ using React, Vite, and Tailwind CSS
