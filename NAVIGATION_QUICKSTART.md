# Navigation Quick Start Guide

Get your new mega menu navigation up and running in 5 minutes!

## 🚀 Quick Implementation

### Option 1: Replace Existing Navigation (Recommended)

Update your main layout to use the new navigation:

```tsx
// src/app/layout.tsx
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/homepage/footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* New Mega Menu Navigation */}
        <Navbar />

        {/* Your page content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
```

### Option 2: Use on Specific Pages

If you want to use the new navigation on specific pages only:

```tsx
// src/app/treatments/page.tsx
import { Navbar } from "@/components/navigation/Navbar";
import { TreatmentsHero } from "@/components/treatments/treatments-hero";
import { Footer } from "@/components/homepage/footer";

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <TreatmentsHero />
      <Footer />
    </main>
  );
}
```

## ✏️ Customize Menu Content

### 1. Edit Treatment Categories

Open `src/data/navigation-data.ts` and modify the categories:

```typescript
export const treatmentsMenuData: MegaMenuData = {
  categories: [
    {
      id: "injectables", // Unique ID
      label: "Injectables", // Display name
      columns: [
        {
          header: "COSMETIC INJECTIONS", // Column header
          treatments: [
            {
              label: "Botox®", // Treatment name
              href: "/treatments/botox" // Link URL
            },
            // Add more treatments...
          ],
        },
      ],
      ctas: [
        {
          label: "Book Free Consultation",
          href: "/book-consultation",
          variant: "primary", // primary, secondary, or outline
        },
      ],
    },
    // Add more categories...
  ],
};
```

### 2. Update Main Navigation Links

```typescript
export const mainNavLinks: NavLink[] = [
  { label: "TREATMENTS", href: "/treatments", hasMegaMenu: true },
  { label: "PRICING", href: "/pricing" },
  { label: "REVIEWS", href: "/reviews" },
  { label: "LOCATIONS", href: "/locations" },
  // Add more links...
];
```

### 3. Customize Your Branding

```tsx
// In src/components/navigation/Navbar.tsx

// Update logo
<span className="font-primary font-bold text-2xl lg:text-3xl">
  <span className="text-primary-600">Your</span>
  <span className="text-accent-rose">Brand</span>
</span>

// Update CTA button text
<Link href="/book-consultation">Your CTA Text</Link>
```

## 🎨 Styling Tips

### Change Primary Colors

Update your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          // ... your color scale
          600: '#0284c7', // Main primary color
          700: '#0369a1',
        },
        accent: {
          rose: '#fda4af', // Your accent color
          cream: '#fef3c7',
        },
      },
    },
  },
};
```

### Adjust Navbar Appearance

```tsx
// In Navbar.tsx, modify the sticky behavior classes:

className={cn(
  "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
  isScrolled
    ? "bg-white/98 shadow-lg" // Scrolled state
    : "bg-white/95 shadow-md"  // Default state
)}
```

## 📱 Mobile Menu Customization

### Change Drawer Direction

```tsx
// In MobileMenu.tsx

// From right (default):
className="fixed top-0 right-0 bottom-0"

// From left:
className="fixed top-0 left-0 bottom-0"

// From top:
className="fixed top-0 left-0 right-0"
```

### Adjust Drawer Width

```tsx
// In MobileMenu.tsx
className="w-full sm:w-96" // Change w-96 to your preferred width
```

## 🔧 Common Customizations

### 1. Remove Cart Icon

```tsx
// In Navbar.tsx, comment out or remove:
{/* Cart Icon */}
<Link href="/cart" ...>
  <ShoppingCart className="w-5 h-5" />
</Link>
```

### 2. Add Phone Number

```tsx
// In Navbar.tsx, before the CTA button:
<a
  href="tel:+1234567890"
  className="hidden lg:flex items-center space-x-2 text-neutral-700 hover:text-primary-600"
>
  <Phone className="w-4 h-4" />
  <span>(123) 456-7890</span>
</a>
```

### 3. Change Menu Hover Delay

```tsx
// In Navbar.tsx, adjust the timeout:
const handleMegaMenuLeave = () => {
  megaMenuTimerRef.current = setTimeout(() => {
    setIsMegaMenuOpen(false);
  }, 200); // Change from 200ms to your preference
};
```

### 4. Add Icons to Categories

First, add icons to your data:

```typescript
// In navigation-data.ts
import { Syringe, Zap, Sparkles } from "lucide-react";

{
  id: "injectables",
  label: "Injectables",
  icon: "Syringe", // Add this
  // ...
}
```

Then update CategorySidebar to display icons.

## 🧪 Testing Checklist

Before going live, test:

- [ ] All navigation links work correctly
- [ ] Mega menu opens and closes smoothly
- [ ] Mobile menu opens and closes
- [ ] All treatment links are correct
- [ ] CTA buttons link to correct pages
- [ ] Keyboard navigation (Tab, Enter, Esc)
- [ ] Screen reader announces items correctly
- [ ] Looks good on mobile, tablet, and desktop
- [ ] No console errors
- [ ] Cart badge updates (if using cart)

## 🐛 Common Issues & Fixes

### Issue: Menu Items Not Showing

**Fix**: Check that you've imported the navigation data:
```tsx
import { mainNavLinks, treatmentsMenuData } from "@/data/navigation-data";
```

### Issue: Styling Looks Wrong

**Fix**: Ensure Tailwind is processing the navigation files:
```js
// tailwind.config.js
content: [
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
],
```

### Issue: TypeScript Errors

**Fix**: Ensure types are imported:
```tsx
import { MegaMenuData, NavLink } from "@/types/navigation";
```

### Issue: Mega Menu Position Wrong

**Fix**: Check that navbar height CSS variable is set:
```tsx
// In Navbar.tsx, this should be in useEffect:
document.documentElement.style.setProperty(
  "--navbar-height",
  `${height}px`
);
```

## 📊 Analytics Integration

Track menu interactions:

```tsx
// In Navbar.tsx or TreatmentColumns.tsx
import { trackEvent } from "@/lib/analytics"; // Your analytics library

<Link
  href={treatment.href}
  onClick={() => {
    trackEvent("Navigation", "Treatment Click", treatment.label);
  }}
>
  {treatment.label}
</Link>
```

## 🎯 Next Steps

1. ✅ Implement the navigation
2. ✅ Test on all devices
3. ✅ Customize content and styling
4. 📈 Set up analytics tracking
5. 🚀 Deploy and monitor performance

## 📚 Learn More

- See [NAVIGATION_README.md](./NAVIGATION_README.md) for full documentation
- Check component files for inline comments
- Review [Next.js documentation](https://nextjs.org/docs)

## 💬 Need Help?

- Check the main README for troubleshooting
- Review component code comments
- Test in development mode first
- Use browser DevTools to debug

---

Happy coding! 🎉
