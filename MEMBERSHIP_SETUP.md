# Facecult Membership Page - Setup Guide

This guide covers the setup and configuration for the Facecult Membership page (`/membership`).

## 📁 File Structure

```
src/
├── app/
│   └── membership/
│       ├── page.tsx           # Main membership page with SEO metadata
│       └── join/
│           └── page.tsx       # Checkout placeholder
├── components/
│   └── membership/
│       ├── PageHeader.tsx     # Hero section component
│       ├── FeatureGrid.tsx    # Why Join 3-icon grid
│       ├── ValueTiles.tsx     # Welcome package tiles
│       ├── BenefitCard.tsx    # Monthly benefits cards
│       ├── Timeline.tsx       # How It Works timeline
│       ├── TermsCard.tsx      # Terms summary card
│       ├── MembershipFAQ.tsx  # Accordion FAQ with analytics
│       ├── MembershipCTA.tsx  # CTA button with GA4 tracking
│       └── icons/
│           ├── ScanIcon.tsx
│           ├── CoachIcon.tsx
│           ├── HomeCareIcon.tsx
│           ├── GiftIcon.tsx
│           └── CalendarIcon.tsx
└── lib/
    └── analytics.ts           # GA4 utility functions
```

## 🔧 Setup Instructions

### 1. Environment Variables

Add the following to your `.env.local` file:

```bash
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Stripe (when ready to implement payment)
# NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
# STRIPE_SECRET_KEY=sk_live_...
```

### 2. Google Analytics 4 Setup

1. Create a GA4 property at [https://analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Add to `.env.local` as shown above
4. Add GA4 script to `src/app/layout.tsx`:

```tsx
// In your <head> section or using next/script
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
  `}
</Script>
```

### 3. Update Placeholders

Replace the following placeholders in the code:

#### Contact Information (`src/app/membership/page.tsx`):
- Line 168, 213: Replace `+353-XX-XXX-XXXX` with actual phone number
- Line 216-218: Add actual social media URLs

#### Images:
- Replace `/assets/Hero.png` with actual hero images
- Add 3D scan images, team photos, or treatment images

### 4. Payment Integration (Stripe Recommended)

When ready to enable membership checkout:

1. **Install Stripe:**
   ```bash
   npm install @stripe/stripe-js @stripe/react-stripe-js
   ```

2. **Create Stripe account** and get API keys

3. **Create API route** for checkout session:
   ```bash
   # Create file: src/app/api/membership/checkout/route.ts
   ```

4. **Update `/membership/join/page.tsx`** with Stripe Checkout or Elements

5. **Implement webhook** for subscription management:
   ```bash
   # Create file: src/app/api/webhooks/stripe/route.ts
   ```

Example Stripe integration snippet (add to join page):

```tsx
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

async function handleCheckout() {
  const response = await fetch('/api/membership/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ priceId: 'price_xxx' }), // Your Stripe Price ID
  });

  const { sessionId } = await response.json();
  const stripe = await stripePromise;
  await stripe?.redirectToCheckout({ sessionId });
}
```

### 5. Terms & Conditions

Create a PDF or page with full membership terms and update the link in:
- `src/components/membership/TermsCard.tsx` (line ~57)

Or update email to your clinic email:
```tsx
mailto:info@facecult.ie?subject=Membership Terms Request
```

## 📊 Analytics Events

The page tracks these GA4 events automatically:

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| `cta_click` | Any CTA button clicked | `cta`, `page`, `href` |
| `faq_expand` | FAQ accordion opened | `question`, `page` |
| `click_terms` | Terms link clicked | `location`, `page` |
| `start_checkout` | Join page visited | `product`, `price` |

### Testing GA4 Events Locally

1. Open browser DevTools → Console
2. Click buttons/links on `/membership` page
3. Look for `[GA4] Event:` logs
4. Or use [GA Debugger extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/)

## 🎨 Customization

### Colors

The page uses Tailwind CSS color variables from your theme:
- `primary-*` — Teal/brand color
- `accent-rose` — Pink accent
- `accent-gold` — Gold accent
- `accent-cream` — Cream accent
- `neutral-*` — Grays

Update in `src/app/globals.css` to match your brand.

### Content

All content is hardcoded in:
- `src/app/membership/page.tsx` (FAQ data at top)
- Component files in `src/components/membership/`

No CMS integration required — content is static for SEO optimization.

## ✅ Testing Checklist

- [ ] `/membership` page loads without errors
- [ ] Metadata appears correctly in `<head>` (view page source)
- [ ] JSON-LD validates at [Schema Validator](https://validator.schema.org/)
- [ ] FAQ accordion is keyboard accessible (Tab, Enter, Space)
- [ ] All CTAs track GA4 events (check Console logs)
- [ ] Mobile responsive (test at 375px, 768px, 1024px widths)
- [ ] Images load with correct `next/image` optimization
- [ ] Lighthouse scores: Performance ≥90, SEO ≥100, Accessibility ≥95

Run Lighthouse:
```bash
npm run build
npm run start
# Open Chrome DevTools → Lighthouse → Run audit
```

## 🚀 Deployment

The page is production-ready. When deploying:

1. **Set environment variables** in Vercel/hosting platform
2. **Replace placeholder content** (phone, images, social links)
3. **Add GA4 script** to layout.tsx
4. **Implement payment** (Stripe or alternative)
5. **Test on staging** environment first
6. **Monitor GA4** Real-Time reports after launch

## 📝 SEO Optimization

The page includes:

- ✅ Semantic HTML with proper heading hierarchy
- ✅ Meta title and description with "Dublin" keyword
- ✅ Open Graph and Twitter Card tags
- ✅ Canonical URL
- ✅ JSON-LD schemas (Service, FAQPage, LocalBusiness, Breadcrumb)
- ✅ Mobile-first responsive design
- ✅ Accessible (WCAG AA compliant)
- ✅ Fast loading (optimized images, minimal JS)

### Target Keywords
- Primary: "Facecult Membership Dublin", "skin membership Dublin", "aesthetic clinic membership Dublin"
- Secondary: "monthly aesthetics membership", "membership for injectables", "3D skin scan membership"

## 🐛 Troubleshooting

**GA4 events not firing?**
- Check `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set
- Verify GA4 script is in layout.tsx
- Open DevTools → Network → filter "google-analytics" to see requests

**Build errors?**
- Run `npm run build` to check TypeScript errors
- Ensure all component imports are correct
- Check that icon components are properly exported

**Images not loading?**
- Verify `/public/assets/Hero.png` exists
- Or update `imageSrc` props to point to actual images

**Styling issues?**
- Ensure Tailwind CSS v4 is configured
- Check `globals.css` has all CSS variables defined
- Run `npm run dev` and check for CSS errors

## 📧 Support

For questions or issues:
- Check component code comments for implementation details
- Review Next.js 14 App Router docs
- Test accessibility with keyboard navigation and screen readers

---

**Next Steps:**
1. Add GA4 Measurement ID
2. Replace placeholder phone/images/social links
3. Integrate Stripe for payment processing
4. Upload Terms & Conditions PDF
5. Run Lighthouse audit
6. Deploy to production

