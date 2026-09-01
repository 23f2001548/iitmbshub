# IITM BS Hub Design System

## Brand Identity
A modern, dynamic academic portal that feels both professional and highly interactive. The aesthetic relies on glassmorphism, soft gradients, and high contrast for legibility.

## Core Tokens

### Colors
- **Primary Action**: Violet-600 to Indigo-600 gradients.
- **Background (Light Mode)**: #f8fafc (Slate 50) with #ffffff cards.
- **Background (Dark Mode)**: #0a0f1a (deep navy) with #111827 (Gray 900) cards.
- **Accents**: 
  - Emerald (success/good grades)
  - Amber (warnings)
  - Rose (errors/poor grades)
  - Cyan (informative/neutral)

### Typography
- **Font Family**: 'Inter', sans-serif.
- **Headings**: High contrast, extra bold (font-weight: 800), tight letter spacing (-0.025em).
- **Body**: Readable, relaxed line-height (leading-relaxed, 1.625).

### Shapes & Borders
- **Border Radius**: 
  - Cards: 1.5rem (24px) for a friendly, modern look.
  - Buttons: 9999px (pill shape).
- **Borders**: 
  - Light mode: 1px solid rgba(0,0,0,0.05).
  - Dark mode: 1px solid rgba(255,255,255,0.05).

### Shadows
- **Cards**: Soft, large diffusion. `box-shadow: 0 10px 40px -10px rgba(0,0,0,0.08)`.
- **Hover States**: Cards lift up slightly and cast a larger, more colorful shadow.

### Animations & Micro-interactions
- **Transitions**: Smooth easing (cubic-bezier(0.4, 0, 0.2, 1)), duration 300ms.
- **Hover Effects**: 
  - Cards: `transform: translateY(-4px) scale(1.01)`.
  - Buttons: `transform: scale(1.05)`.
- **Entrance**: Fade in and slide up gracefully when scrolled into view.

## Components

### Glass Card
A card component that uses backdrop-filter blur, a semi-transparent background, and a subtle border. Perfect for displaying portals, stats, and resources.

### Gradient Text
Used for primary headings to create a 'wow' factor. E.g., `bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500`.
