# Google reCAPTCHA v3 Setup Guide

This guide will help you set up Google reCAPTCHA v3 (invisible captcha) for the contact form spam/bot protection.

## Why reCAPTCHA v3?

- **Invisible protection**: No user interaction required (no checkboxes or image challenges)
- **Risk-based scoring**: Assigns a score (0.0-1.0) to each submission
- **Better UX**: Users won't even know it's running
- **Effective**: Blocks automated bots while allowing legitimate users through

## Setup Steps

### 1. Get Your reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Sign in with your Google account
3. Click **"Create"** (+ icon) to register a new site

### 2. Register Your Site

Fill in the registration form:

- **Label**: `Facecult Website Contact Form` (or any name you prefer)
- **reCAPTCHA type**: Select **reCAPTCHA v3**
- **Domains**: Add your domains:
  - `facecult.ie`
  - `www.facecult.ie`
  - `localhost` (for local development)
  - Your Vercel preview URL (e.g., `your-app.vercel.app`)
- **Accept the reCAPTCHA Terms of Service**
- Click **Submit**

### 3. Get Your Keys

After registration, you'll receive two keys:

1. **Site Key** (Public key - shown to users)
   - This goes in `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - Safe to expose in client-side code

2. **Secret Key** (Private key - server-side only)
   - This goes in `RECAPTCHA_SECRET_KEY`
   - **NEVER** expose this in client-side code or commit to git

### 4. Add Keys to Environment Variables

#### Local Development (.env.local)

Create a `.env.local` file in the project root (if it doesn't exist):

```bash
# Copy from .env.example
cp .env.example .env.local
```

Add your keys:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_actual_site_key_here
RECAPTCHA_SECRET_KEY=your_actual_secret_key_here
```

#### Vercel Production

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add both variables:
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` → Your site key
   - `RECAPTCHA_SECRET_KEY` → Your secret key
4. Make sure to add them for **Production**, **Preview**, and **Development** environments

### 5. Test the Implementation

1. Deploy your changes to Vercel
2. Visit your contact form: `https://facecult.ie/contact`
3. Fill out and submit the form
4. Check the browser console for any errors
5. Verify the email is received

### 6. Monitor reCAPTCHA Performance

Visit the [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin) to:

- View analytics and statistics
- See how many requests were verified
- Check the score distribution
- Identify potential bot traffic

## How It Works

### Client-Side (Contact Form)

1. When user submits the form, reCAPTCHA v3 runs invisibly
2. Generates a token based on user behavior analysis
3. Token is sent to the API along with form data

### Server-Side (API Route)

1. API receives the token from the form submission
2. Verifies the token with Google's reCAPTCHA API
3. Google returns a score (0.0 = bot, 1.0 = human)
4. If score < 0.5, submission is rejected
5. If score ≥ 0.5, form is processed normally

## Score Thresholds

Current threshold: **0.5**

You can adjust this in `src/app/api/contact/route.ts`:

```typescript
if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
  // Reject submission
}
```

Recommended thresholds:
- **0.3** - Permissive (blocks obvious bots)
- **0.5** - Balanced (recommended)
- **0.7** - Strict (may block some legitimate users)

## Troubleshooting

### "Bot protection verification failed"

- Check that your site key and secret key are correct
- Verify the domain is registered in reCAPTCHA admin
- Check browser console for JavaScript errors
- Ensure reCAPTCHA script loaded successfully

### reCAPTCHA badge not showing

This is normal for v3 - it's invisible by default. A small badge may appear in the bottom-right corner, which is required by Google's terms.

### Keys not working locally

- Make sure you added `localhost` to the domains list
- Verify `.env.local` file exists and contains the keys
- Restart your Next.js development server

## Additional Security

Consider adding these additional protections:

1. **Rate limiting**: Limit submissions per IP address
2. **Honeypot fields**: Hidden fields that bots tend to fill
3. **Email verification**: Verify email addresses exist
4. **Time-based checks**: Reject forms submitted too quickly

## Resources

- [Google reCAPTCHA Docs](https://developers.google.com/recaptcha/docs/v3)
- [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

## Support

If you encounter issues:

1. Check the Vercel deployment logs
2. Verify all environment variables are set
3. Test locally first before deploying
4. Review browser console for errors
