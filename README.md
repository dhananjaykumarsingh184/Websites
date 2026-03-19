# New Popular Jewellers - Modern E-Commerce Website

A sophisticated, high-end e-commerce website built with React.js for New Popular Jewellers, featuring elegant design inspired by kohira.com with a champagne gold, deep charcoal, and soft white color palette.

## 🌟 Features

### Design & Aesthetic
- **Minimalist & Elegant Layout**: Clean, sophisticated design mirroring luxury jewellery brands
- **Premium Color Palette**: Champagne gold, deep charcoal, and soft white themes
- **Luxury Typography**: Serif fonts for headings, clean sans-serif for body text
- **Responsive Design**: Mobile-first approach with seamless cross-device experience

### Key Sections
- **Hero Section**: Full-width video/slider background showcasing latest jewellery collections
- **Product Categories**: Grid layout featuring Engagement Rings, Necklaces, Bangles, Pendants, and more
- **Instagram Integration**: Real-time "Shop the Look" section pulling from @newpopularjewellers
- **Product Detail Pages**: Zoom galleries, detailed specifications (purity/karat), and cart functionality
- **About Us & Heritage**: Brand story, craftsmanship, and company timeline
- **Contact Section**: Functional forms with embedded Google Maps for store location

### Technical Features
- **Sticky Navigation**: Transparent header with smooth scroll transitions
- **Shopping Cart**: Efficient state management with add/remove/update functionality
- **Product Filtering**: Dynamic filtering by price, metal type, and occasion
- **Book Appointment**: In-store visit scheduling system
- **Social Proof**: Instagram integration with like/comment interactions
- **Animations**: Smooth Framer Motion animations throughout

## 🛠 Technology Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **State Management**: Zustand (Cart & Filter contexts)
- **Image Gallery**: React Image Gallery
- **Forms**: React Hook Form

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Hero section with video/slider
│   ├── ProductCategories.tsx # Product category grid
│   ├── InstagramSection.tsx  # Instagram integration
│   ├── AboutUs.tsx           # About & heritage section
│   ├── Contact.tsx           # Contact forms & maps
│   ├── Footer.tsx            # Footer with newsletter
│   ├── Navbar.tsx            # Navigation with cart
│   └── ProductDetail.tsx     # Individual product pages
├── context/
│   ├── CartContext.tsx       # Shopping cart state
│   └── FilterContext.tsx     # Product filtering state
├── App.tsx                   # Main application component
├── index.tsx                 # Application entry point
└── index.css                 # Global styles & Tailwind
```

## 🎨 Design System

### Colors
- **Champagne Gold**: Primary brand color (#ddc8a3)
- **Deep Charcoal**: Text and backgrounds (#686b6f)
- **Soft White**: Backgrounds (#fefdf8)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
- **Buttons**: Primary (champagne) and Secondary (charcoal outline)
- **Cards**: Hover effects with shadows and transforms
- **Navigation**: Blur effect on scroll with transparency

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd new-popular-jewellers
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production
```bash
npm run build
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

## 🛍 E-Commerce Features

### Shopping Cart
- Add/remove items with quantity controls
- Real-time price calculations
- Persistent cart state
- Item specifications (karat, weight, dimensions)

### Product Filtering
- Price range slider
- Metal type selection (Gold, Platinum, Silver)
- Occasion-based filtering (Engagement, Wedding, Daily)
- Sort options (price, name, popularity)

### Product Details
- High-resolution image galleries
- Detailed specifications
- Customer reviews and ratings
- Related products suggestions

## 📸 Instagram Integration

The Instagram section showcases:
- Real-time posts from @newpopularjewellers
- Like and comment interactions
- "Shop the Look" functionality
- Video and image support
- Social proof and user engagement

## 🗺 Contact & Location

### Contact Forms
- General inquiry form
- Appointment booking system
- Subject categorization
- Form validation

### Store Location
- Embedded Google Maps
- Store hours and contact information
- Address and directions
- Trust indicators (authenticity, warranty, shipping)

## 🎯 User Experience

### Navigation
- Sticky header with blur effect
- Smooth scroll to sections
- Mobile-responsive hamburger menu
- Cart item counter

### Interactions
- Hover states on all interactive elements
- Loading states and transitions
- Micro-animations for engagement
- Accessibility features (ARIA labels, keyboard navigation)

## 🔧 Customization

### Brand Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
theme: {
  extend: {
    colors: {
      'champagne': { /* custom shades */ },
      'charcoal': { /* custom shades */ },
      'soft-white': '#fefdf8',
    }
  }
}
```

### Typography
Update font imports in `public/index.html` and Tailwind config to change fonts.

### Content
Update the mock data in components to reflect actual product information and brand details.

## 📈 Performance

- **Lazy Loading**: Images and components loaded as needed
- **Optimized Assets**: Compressed images and minified code
- **Smooth Animations**: 60fps animations with GPU acceleration
- **SEO Friendly**: Semantic HTML and meta tags

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 Acknowledgments

- Inspired by the elegant design of kohira.com
- Built with modern React best practices
- Icons by Heroicons
- Animations by Framer Motion
- Styling by Tailwind CSS

---

**New Popular Jewellers** - Crafting elegance since 1985 ✨
