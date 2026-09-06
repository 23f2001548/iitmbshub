# IITM BS Hub - Codebase Overview

This document provides a high-level overview of the IITM BS Hub project structure, architecture, and technology stack.

## Technology Stack

The project is built as a Single Page Application (SPA) using modern web technologies:

- **Framework**: React 19
- **Bundler**: Vite
- **Routing**: React Router DOM (`v7`)
- **Styling**: Tailwind CSS (`v4`), supplemented with `framer-motion` for complex animations and transitions.
- **Icons**: Lucide React
- **Code Quality**: Oxlint

## Project Architecture

The codebase is organized in a modular structure within the `src` directory, separating components, pages, utility logic, and state management contexts.

### Directory Structure

```text
src/
├── assets/             # Static assets (images, icons, global styles)
├── components/         # Reusable, stateless or UI-focused React components
│   ├── Navbar.jsx      # Global navigation header
│   └── Footer.jsx      # Global footer with links
├── context/            # React Context providers for global state
│   └── ThemeContext.jsx# Manages light/dark mode state across the app
├── pages/              # Route-level components (screens)
│   ├── Home.jsx        # Landing page with the resource directory
│   ├── About.jsx       # Information about the platform
│   ├── Calendar.jsx    # Academic calendar view
│   ├── CGPACalculator.jsx # Tool for calculating cumulative GPA
│   ├── GradePredictor.jsx # Tool for predicting final grades based on logic
│   ├── ImportantDocuments.jsx # Links to official PDFs and handbooks
│   ├── PrivacyPolicy.jsx # Standard privacy notice
│   └── TermsAndConditions.jsx # Terms of use and disclaimers
├── utils/              # Helper functions, pure logic, and static data
│   ├── cgpaCourses.js  # Course metadata and credit information for the CGPA tool
│   └── gradingLogic.js # Complex grading calculation rules for the Grade Predictor
├── App.jsx             # Main application entry component and route definitions
├── index.css           # Global CSS and Tailwind directives
└── main.jsx            # React root rendering and provider wrapping
```

## Key Features & Tools

1. **Resource Directory (`Home.jsx`)**: Acts as a central hub linking to official IITM portals, student communities, and external tools.
2. **Grade Predictor (`GradePredictor.jsx` + `gradingLogic.js`)**: A complex interactive tool that allows students to input assignments, quizzes, and project scores to estimate their final letter grade based on specific course grading schemas defined in `gradingLogic.js`.
3. **CGPA Calculator (`CGPACalculator.jsx` + `cgpaCourses.js`)**: A tool that helps students calculate their current or projected CGPA using a predefined list of courses and their respective credit weights.
4. **Theme Support (`ThemeContext.jsx`)**: The application supports full dark mode, styled using Tailwind's `dark:` variant and orchestrated by a global context.

## State Management

State is primarily managed locally within components (e.g., input values in the calculators). Global state is minimal and handled via React Context (e.g., Theme context for dark mode toggling).

## Data & Privacy

The application is purely client-side. There is no backend server or database connected to this project. All tools (like the CGPA Calculator and Grade Predictor) process logic locally in the user's browser, ensuring data privacy and offline capability once the bundle is loaded.
