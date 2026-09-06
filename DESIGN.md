# IITM BS Hub Design System

## Brand Identity
A Premium Consumer identity driven by **Glassmorphism** and a **Modern UI** aesthetic. It prioritizes content clarity through generous spacing, smooth gradients, and heavily blurred translucent surfaces. Engineered to feel dynamic, premium, highly interactive, and visually stunning.

## Core Tokens

### Colors (Tailwind Variables)
- **Primary**: Blue (`#2563EB` light / `#3B82F6` dark)
- **Secondary**: Light Blue (`#3B82F6` light / `#2563EB` dark)
- **Accent**: Orange (`#EA580C` light / `#F97316` dark)
- **Background**: Slate-50 (`#F8FAFC` light) / Slate-900 (`#0F172A` dark)
- **Foreground**: Slate-800 (`#1E293B` light) / Slate-50 (`#F8FAFC` dark)

### Typography
- **Display / Sans**: `Plus Jakarta Sans`. Used for all main text, headlines, and UI elements. Provides a clean, modern, and highly legible geometric look.
- **Mono**: `JetBrains Mono`. Used strictly for code snippets, specific data points, or stylized numerical data.

### Shapes & Surfaces
- **Border Radius**: Large, friendly curves. Standard panels use `rounded-2xl` or `rounded-3xl` (`1rem` to `1.5rem`).
- **Glassmorphism (`.glass`)**: The primary structural element. Uses semi-transparent backgrounds with heavy background blur (`backdrop-filter: blur(16px)`).
  - Light mode: White tint `rgba(255, 255, 255, 0.75)` with a subtle white border.
  - Dark mode: Slate tint `rgba(30, 41, 59, 0.7)` with an ultra-subtle white border `rgba(255, 255, 255, 0.1)`.
- **Shadows**: Soft, diffused shadows to simulate floating elevation, combined with the glass effect to create depth.

### Animations & Micro-interactions
- **Framer Motion**: Standardized spring physics for fluid, organic animations (`type: "spring", stiffness: 400, damping: 25`).
- **Hover States**: Components gently lift (`y: -5`) on hover, often revealing decorative blurred background elements or subtle gradient shifts to encourage user interaction.
