# Mega Menu Navigation System

A comprehensive, accessible, and performant navigation system for the Facecult aesthetics clinic website, inspired by Thérapie Clinic Ireland's solution-focused approach.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Accessibility](#accessibility)
- [Performance](#performance)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

This navigation system provides a full-featured mega menu with:
- Desktop mega menu with multi-column layout
- Mobile-responsive accordion menu
- Sticky header behavior
- Smooth animations and transitions
- Full keyboard and screen reader accessibility
- Easy content management through data files

## ✨ Features

### Desktop Navigation
- **Sticky Header**: Stays visible while scrolling with smooth animations
- **Mega Menu Dropdown**: Full-width panel with categorized treatments
- **Multi-Column Layout**: Category sidebar, treatment columns, and CTA column
- **Hover & Click Support**: Opens on hover with delay, also supports click
- **User Actions**: Account icon, shopping cart with badge, CTA button
- **Smooth Transitions**: Fade-in/out animations with staggered effects

### Mobile Navigation
- **Drawer Menu**: Slides in from right with backdrop overlay
- **Accordion Navigation**: Nested accordions for categories and treatments
- **Touch-Optimized**: Large tap targets and smooth scrolling
- **Sticky CTA**: Free consultation button stays visible at bottom
- **User Actions**: Account and cart links easily accessible

### Accessibility
- **ARIA Labels**: Comprehensive ARIA attributes for screen readers
- **Keyboard Navigation**: Full keyboard support (Tab, Enter, Esc)
- **Focus Management**: Clear focus indicators and logical tab order
- **Semantic HTML**: Proper use of nav, button, and link elements
- **Screen Reader Support**: Descriptive labels and roles

## 🏗️ Architecture

### File Structure

```
src/
├── components/
│   └── navigation/
│       ├── Navbar.tsx              # Main navigation container
│       ├── MegaMenu.tsx            # Desktop mega menu dropdown
│       ├── CategorySidebar.tsx    # Left category navigation
│       ├── TreatmentColumns.tsx   # Middle treatment columns
│       ├── CTAColumn.tsx          # Right CTA column
│       └── MobileMenu.tsx         # Mobile drawer menu
├── data/
│   └── navigation-data.ts         # Menu content data
└── types/
    └── navigation.ts              # TypeScript type definitions
```

### Component Hierarchy

```
Navbar
├── Logo
├── Desktop Navigation
│   ├── Regular Links (Pricing, Reviews, Locations)
│   └── Treatments Link (triggers mega menu)
├── User Actions (Account, Cart, CTA Button)
├── Mobile Menu Button
├── MegaMenu
│   ├── CategorySidebar
│   ├── TreatmentColumns
│   └── CTAColumn
└── MobileMenu
    ├── Navigation Links
    ├── Accordion Categories
    └── User Actions
```

## 🚀 Installation

### Step 1: Replace Your Existing Navigation

In your layout or page file, replace the existing navigation:

```tsx
// src/app/layout.tsx or your page
import { Navbar } from "@/components/navigation/Navbar";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
```

### Step 2: Remove Old Navigation (Optional)

If you want to completely replace the old FloatingNav:

```tsx
// Before
import { FloatingNav } from "@/components/navigation/floating-nav";

// After
import { Navbar } from "@/components/navigation/Navbar";
```

### Step 3: Verify Dependencies

Ensure you have the required dependencies:

```bash
npm install lucide-react
# shadcn/ui components should already be installed
```

## 💡 Usage

### Basic Usage

Simply import and use the Navbar component:

```tsx
import { Navbar } from "@/components/navigation/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      {/* Your page content */}
    </>
  );
}
```

### With Custom Styling

You can customize the navbar appearance:

```tsx
<Navbar className="custom-navbar-class" />
```

## 🎨 Customization

### Updating Menu Content

All menu content is managed in `src/data/navigation-data.ts`. This makes it easy to update without touching component code.

#### Add a New Treatment Category

```typescript
// src/data/navigation-data.ts

export const treatmentsMenuData: MegaMenuData = {
  categories: [
    // ... existing categories
    {
      id: "new-category",
      label: "New Category",
      columns: [
        {
          header: "TREATMENT GROUP 1",
          treatments: [
            { label: "Treatment 1", href: "/treatments/treatment-1" },
            { label: "Treatment 2", href: "/treatments/treatment-2" },
          ],
        },
        {
          header: "TREATMENT GROUP 2",
          treatments: [
            { label: "Treatment 3", href: "/treatments/treatment-3" },
          ],
        },
      ],
      ctas: [
        {
          label: "Learn More",
          href: "/treatments/new-category",
          variant: "outline",
        },
        {
          label: "Book Consultation",
          href: "/book-consultation",
          variant: "primary",
        },
      ],
    },
  ],
};
```

#### Add a Main Navigation Link

```typescript
// src/data/navigation-data.ts

export const mainNavLinks: NavLink[] = [
  { label: "TREATMENTS", href: "/treatments", hasMegaMenu: true },
  { label: "PRICING", href: "/pricing" },
  { label: "REVIEWS", href: "/reviews" },
  { label: "LOCATIONS", href: "/locations" },
  { label: "NEW LINK", href: "/new-page" }, // Add your new link
];
```

#### Update CTA Buttons

```typescript
// In your category definition
ctas: [
  {
    label: "Custom CTA Text",
    href: "/custom-link",
    variant: "primary", // or "secondary" or "outline"
  },
]
```

### Styling Customization

#### Change Colors

Update your Tailwind config or use CSS variables:

```css
/* In your globals.css */
:root {
  --primary-600: /* your primary color */;
  --accent-rose: /* your accent color */;
}
```

#### Adjust Navbar Height

```tsx
// In Navbar.tsx, change the height class
<div className="flex items-center justify-between h-20"> {/* Change h-20 */}
```

#### Modify Mega Menu Width

```tsx
// In MegaMenu.tsx
<div className="max-w-7xl mx-auto"> {/* Change max-w-7xl */}
```

#### Customize Animations

```tsx
// In MegaMenu.tsx or MobileMenu.tsx
className="transition-all duration-300" {/* Adjust duration */}
```

### Cart Badge Count

Update the cart badge with actual cart count:

```tsx
// In Navbar.tsx, replace the hardcoded "0"
import { useCart } from "@/hooks/use-cart"; // Your cart hook

function Navbar() {
  const { itemCount } = useCart();

  // ...

  <span className="...">
    {itemCount}
  </span>
}
```

## ♿ Accessibility

### Keyboard Navigation

- **Tab**: Navigate through menu items
- **Enter/Space**: Activate links and buttons
- **Escape**: Close mega menu or mobile menu
- **Arrow Keys**: Navigate within mega menu categories (planned enhancement)

### Screen Reader Support

All components include:
- ARIA labels (`aria-label`, `aria-labelledby`)
- ARIA states (`aria-expanded`, `aria-selected`)
- ARIA roles (`role="dialog"`, `role="tab"`)
- Semantic HTML (`<nav>`, `<button>`, `<a>`)

### Focus Management

- Clear focus indicators with ring-2 ring-primary-500
- Logical tab order
- Focus trapping in mobile menu
- Auto-focus on menu open (optional)

### Testing Accessibility

```bash
# Use axe DevTools or Lighthouse
npm run build
npm run start
# Test with keyboard only
# Test with screen reader (NVDA, JAWS, VoiceOver)
```

## ⚡ Performance

### Optimizations Implemented

1. **Lazy Rendering**: Mega menu only renders when open
2. **Event Delegation**: Minimal event listeners
3. **CSS Transitions**: Hardware-accelerated animations
4. **Debounced Hover**: Prevents flickering on quick mouse movements
5. **Conditional Rendering**: Mobile menu only renders when needed

### Performance Metrics

Target metrics:
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- First Input Delay (FID): < 100ms

### Measuring Performance

```bash
npm run build
npm run start

# Use Lighthouse in Chrome DevTools
# Or use WebPageTest.org
```

## 🐛 Troubleshooting

### Mega Menu Not Opening

**Issue**: Clicking "TREATMENTS" doesn't open the mega menu

**Solutions**:
1. Check that `hasMegaMenu: true` is set in navigation-data.ts
2. Verify `treatmentsMenuData` is imported correctly
3. Check browser console for errors

### Mobile Menu Stuck Open

**Issue**: Mobile menu won't close

**Solutions**:
1. Check that Escape key handler is working
2. Verify backdrop onClick is connected
3. Clear browser cache and reload

### Styling Issues

**Issue**: Menu looks broken or unstyled

**Solutions**:
1. Ensure Tailwind CSS is configured correctly
2. Check that custom colors are defined in tailwind.config
3. Verify all shadcn/ui components are installed
4. Run `npm run dev` to rebuild styles

### TypeScript Errors

**Issue**: Type errors in navigation components

**Solutions**:
1. Ensure `src/types/navigation.ts` is properly imported
2. Check that all required properties are provided
3. Run `npm run type-check` if available

### Animation Performance

**Issue**: Animations are choppy or laggy

**Solutions**:
1. Use will-change CSS property for animated elements
2. Reduce animation duration
3. Test on different devices
4. Consider using transform instead of position changes

## 🔄 Migration from Old Navigation

If migrating from the existing FloatingNav:

### Step 1: Backup Current Navigation

```bash
cp src/components/navigation/floating-nav.tsx src/components/navigation/floating-nav.backup.tsx
```

### Step 2: Update Imports

Replace all instances of:
```tsx
import { FloatingNav } from "@/components/navigation/floating-nav";
```

With:
```tsx
import { Navbar } from "@/components/navigation/Navbar";
```

### Step 3: Update Phone Number & Links

Update the phone number and other links in the Navbar component to match your existing setup.

### Step 4: Test Thoroughly

- Test all navigation links
- Test mobile responsiveness
- Test keyboard navigation
- Test with screen readers

## 📝 Best Practices

1. **Keep Menu Shallow**: Avoid more than 2-3 levels of nesting
2. **Limit Items**: 6-8 items per column for readability
3. **Clear Labels**: Use action-oriented, benefit-focused language
4. **Consistent Naming**: Match URL structure to menu labels
5. **Regular Updates**: Keep treatment information current
6. **Monitor Analytics**: Track which menu items are clicked
7. **A/B Test CTAs**: Experiment with CTA button text and placement

## 🎯 Next Steps

### Recommended Enhancements

1. **Analytics Integration**: Track menu interactions
2. **Search Bar**: Add search functionality to navbar
3. **Personalization**: Show relevant treatments based on user history
4. **Animations**: Add more sophisticated entry animations
5. **Multi-Language**: Support multiple languages
6. **Image Previews**: Show treatment images in mega menu

### Advanced Features

```typescript
// Example: Add search to navbar
import { Search } from "lucide-react";

// In Navbar.tsx
<div className="search-container">
  <input
    type="search"
    placeholder="Search treatments..."
    className="search-input"
  />
  <Search className="w-4 h-4" />
</div>
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🤝 Contributing

To contribute improvements to the navigation system:

1. Test thoroughly on multiple devices
2. Ensure accessibility standards are maintained
3. Update documentation for any changes
4. Follow existing code style and patterns

## 📄 License

This navigation system is part of the Facecult website project.

---

**Questions or Issues?**
Contact the development team or create an issue in the project repository.
