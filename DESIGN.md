# Design System: Recipe Sharing App
**Project ID:** 16483106071297221910

## 1. Visual Theme & Atmosphere
The design follows a **Premium Minimalist** aesthetic, characterized by an "Airy" and "Organic" feel. It uses generous whitespace, sophisticated typography pairings (bold headers with light italic accents), and a palette inspired by nature.

## 2. Color Palette & Roles
- **Vibrant Sprout (#6dec13):** Primary action color. Used for main buttons and active states.
- **Deep Sage (#728961):** Secondary accent. Used for subtle icons, borders, and expressive typography.
- **Warm Canvas (#fcfcfb):** Main background. A soft, off-white that feels more premium than pure white.
- **Midnight Harvest (#182210):** Dark mode background. A deep earthy green-black.
- **Slate Ink (#0f172a):** Primary text color for high contrast.

## 3. Typography Rules
- **Font Family:** `Work Sans` (Sans-serif) used throughout for a modern, clean look.
- **Headers:** Large, bold tracking-tight headings. Use font-light italics for specific emphasis words to add personality.
- **Body:** Clean, well-spaced sans-serif text in Slate.

## 4. Component Stylings
* **Buttons:** 
    - **Primary:** Pill-shaped (fully rounded), bright green background, bold dark text.
    - **Secondary/Filter:** Pill-shaped, very subtle sage tint background, fine sage border.
* **Cards/Containers:** 
    - **Corners:** Generously rounded (1rem or 2rem).
    - **Shadows:** "Whisper-soft" diffused shadows with a sage tint (`rgba(114, 137, 97, 0.08)`).
* **Inputs/Forms:** 
    - Fully rounded (pill) with subtle background tints and high-elevation shadows for main search bars.

## 5. Layout Principles
- **Grid:** Responsive column-based layout (typically 3 columns for desktop feeds).
- **Whitespace:** Emphasized margins and padding (e.g., `py-16` or `py-24` sections) to maintain an airy feel.
- **Navigation:** Persistent, translucent (backdrop-blur) top bar for easy access.

## 6. Design System Notes for Stitch Generation
To maintain visual consistency across all screens, follow these rules:
- **Background:** Always use `bg-[#fcfcfb]` for light mode.
- **Primary Color:** Use `#6dec13` for primary CTA buttons.
- **Accent Color:** Use `#728961` (Sage) for borders, icons, and muted text.
- **Rounding:** Apply `rounded-full` for all buttons and `rounded-2xl` for cards.
- **Shadows:** Use extremely subtle sage-tinted shadows: `shadow-[0_4px_20px_-2px_rgba(114,137,97,0.08)]`.
- **Typography:** Use a mix of bold and light/italic styles for headings to create an elegant typographic hierarchy.
