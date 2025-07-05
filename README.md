# Fullstack Portfolio Architect

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features a fresh and punchy design with emerald green and purple accents.

## 🚀 Features

- **Modern Design**: Fresh and punchy color scheme with emerald green and purple accents
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Shadcn/ui**: Beautiful and accessible UI components
- **Dark Theme**: Elegant dark theme with custom color palette

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/hey-om7/portfolio-2025.git
cd portfolio-2025
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

## 🚀 Deployment

### Automatic Deployment (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. Simply push your changes to the `main` branch and the site will be automatically deployed.

### Manual Deployment

1. Build the project for production:
```bash
npm run build:prod
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### GitHub Pages Setup

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Set the source to "GitHub Actions"
4. Your site will be available at: `https://hey-om7.github.io/portfolio-2025/`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation bar
│   ├── Experience.tsx  # Experience section
│   ├── Projects.tsx    # Projects showcase
│   ├── Technologies.tsx # Tech stack
│   ├── OpenSource.tsx  # Open source contributions
│   ├── ThreeD.tsx      # 3D modeling section
│   └── Contact.tsx     # Contact form
├── ui/                 # Shadcn/ui components
├── index.css          # Global styles
└── main.tsx           # App entry point
```

## 🎨 Customization

### Colors
The color scheme is defined in `src/index.css` using CSS custom properties:
- Primary: Emerald green (`hsl(142 76% 36%)`)
- Accent: Purple (`hsl(262 83% 58%)`)
- Background: Dark blue (`hsl(240 10% 3.9%)`)

### Content
Update the content in each component file to match your information:
- Personal details in `Hero.tsx`
- Experience in `Experience.tsx`
- Projects in `Projects.tsx`
- Contact information in `Contact.tsx`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:prod` - Build for production with optimized settings
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for icons

---

Made with ❤️ by Om Ambarkar
