# Sam Cranstone Racing Website

A high-energy motorcycle racing website built with Next.js, featuring dynamic animations, sponsor integration, and a comprehensive racing showcase.

## 🏁 Features

- **Dynamic Hero Section**: Fullscreen racing imagery with motion effects
- **Race Calendar**: Interactive schedule with results integration
- **Bike Showcase**: CBR1000RR-R-SP technical specifications
- **Sponsor Portal**: Multi-tier partnership system
- **Photo Gallery**: Lightbox gallery with Instagram integration
- **Contact System**: Professional enquiry forms with sponsor options
- **Mobile-First Design**: Responsive navigation and layouts
- **SEO Optimized**: Schema markup and meta tags

## 🛠 Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Fonts**: Inter + Orbitron
- **Deployment**: Netlify-ready static export

## 🚀 Getting Started

### Installation

```bash
# Clone and install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values
```

### Development

```bash
# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the site.

### Build & Deploy

```bash
# Build for production
npm run build

# Static export for Netlify
npm run export
```

## 📁 Project Structure

```
├── app/                    # Next.js app router pages
│   ├── (pages)/           # Route groups
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Hero.tsx          # Main hero section
│   ├── Navigation.tsx    # Mobile/desktop nav
│   ├── RaceCard.tsx      # Individual race display
│   └── SponsorStrip.tsx  # Sponsor carousel
├── data/                 # JSON data files
│   ├── races.json        # Race calendar data
│   ├── sponsors.json     # Sponsor information
│   └── gallery.json      # Gallery items
└── public/               # Static assets
```

## 🎨 Design System

### Colors
- **Primary Red**: #FF3B30 (Racing red)
- **Secondary Blue**: #2E6BFF (Electric blue)
- **Background**: Black (#000000)
- **Text**: White/Gray scale

### Typography
- **Headers**: Orbitron (Racing aesthetic)
- **Body**: Inter (Clean readability)

### Components
- **Cards**: Rounded-2xl with soft shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Navigation**: Top bar (desktop) + bottom bar (mobile)

## 📊 Data Management

### Race Calendar (`/data/races.json`)
```json
{
  "date": "2025-03-15",
  "circuit": "Silverstone GP",
  "series": "BMCRC Rookie 1000",
  "class": "Open",
  "result": "P6",
  "status": "completed|upcoming"
}
```

### Sponsors (`/data/sponsors.json`)
```json
{
  "name": "Honda Racing",
  "logo": "/logos/honda.png",
  "url": "https://honda.com",
  "tier": "headline|associate|support"
}
```

### Gallery (`/data/gallery.json`)
```json
{
  "src": "/images/race1.jpg",
  "alt": "Race description",
  "type": "image|video"
}
```

## 🔧 Configuration

### Environment Variables
- `NEXT_PUBLIC_GTAG`: Google Analytics tracking ID
- `FORMSPREE_ID`: Contact form endpoint
- `NEXT_PUBLIC_SITE_URL`: Site URL for SEO

### SEO Features
- Dynamic meta tags per page
- Schema.org Athlete markup
- Open Graph images
- Twitter Card support

## 📱 Mobile Features

- Bottom navigation bar
- Touch-friendly interactions
- Optimized image loading
- Responsive typography scaling

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create Pull Request

## 📄 License

Private project - All rights reserved.

## 🏆 Racing Stats

- **Series**: BMCRC Rookie 1000 • Bemsee MRO
- **Number**: #100
- **Bike**: Honda CBR1000RR-R-SP 2024
- **Season**: 2025

---

Built with ❤️ for the racing community.# Sam_Cranstone_Racing
