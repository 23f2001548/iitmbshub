# IITM BS Hub Design System

## Brand Identity
A Premium Consumer identity with a sharp Brutalist edge. It discards soft gradients and generic glassmorphism for harsh structural lines, massive typography, high-contrast monochrome bases, and unapologetic layout grids. Engineered to feel authoritative, technical, yet highly polished.

## Core Tokens

### Colors
- **Ground (Light Mode)**: `#F4F4F0` (warm off-white paper).
- **Ground (Dark Mode)**: `#0B0B0B` (true off-black).
- **Surface**: Pure White (`#FFFFFF`) / Pure Black (`#000000`).
- **Primary Accent**: Electric Cobalt Blue (`#0047FF`). 
- **Secondary Accents** (for states): 
  - Emerald (`#00E676`) for success.
  - Caution Yellow (`#FFEA00`) for warnings.
  - Warning Red (`#FF2E00`) for errors.

### Typography
- **Display / Headlines**: `Cabinet Grotesk` (or a tight structural sans like `Geist Display` / `Outfit`). Massive scale (`text-6xl md:text-8xl`), ultra-tight tracking (`tracking-tighter`), tight leading (`leading-none`).
- **Eyebrows / Meta**: `JetBrains Mono` or `Geist Mono`. Uppercase, wide tracking (`tracking-widest`), small size (`text-[11px]`).
- **Body**: `Inter` or `Geist`. Highly readable, restrained line length (`max-w-[65ch]`), relaxed leading (`leading-relaxed`).

### Shapes & Borders
- **Border Radius**: Sharp edges. `rounded-none` by default. Max `rounded-sm` for tiny inputs.
- **Borders**: Harsh, unapologetic borders. `border-2 border-black` (light mode) or `border-2 border-white/20` (dark mode).
- **Shadows**: Hard brutalist drop shadows instead of soft diffusion. `box-shadow: 4px 4px 0px #000` (light) or `box-shadow: 4px 4px 0px #0047FF` (dark hover).

### Animations & Micro-interactions
- **Tactile Physics**: Fast spring physics (`type: "spring", stiffness: 400, damping: 25`).
- **Hover Effects**: Hard translation (e.g., `-translate-y-1 -translate-x-1` while the hard shadow stays anchored).
- **Entrance**: Sharp, fast staggered reveals. No slow, floaty fades.

## Components

### Structural Card
No glass. A solid block of pure surface color, wrapped in a 2px stroke, casting a hard shadow. 

### Typographic Marquee / Grid
Use raw CSS Grid (`bento` style but with sharp edges) to organize information brutally.
