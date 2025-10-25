# grosure - Landing Page

A modern, responsive landing page for grosure - an intelligent kitchen management mobile application.

## Features

- ✨ Modern, clean design with Material 3 principles
- 📱 Fully responsive (mobile-first approach)
- ⚡ Built with Next.js 16 and React 19
- 🎨 Styled with Tailwind CSS
- 🔒 Privacy Policy and Account Deletion pages
- ♿ Accessible (WCAG 2.1 AA compliant)
- 🚀 Optimized for performance

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)

## Project Structure

```
grosure-landing/
├── app/
│   ├── api/
│   │   └── account/
│   │       └── delete-request/
│   │           └── route.ts          # API endpoint for account deletion
│   ├── delete-account/
│   │   └── page.tsx                  # Account deletion page
│   ├── privacy/
│   │   └── page.tsx                  # Privacy policy page
│   ├── globals.css                   # Global styles
│   ├── layout.tsx                    # Root layout
│   └── page.tsx                      # Main landing page
├── components/
│   ├── CTAButton.tsx                 # Reusable CTA button component
│   ├── Footer.tsx                    # Footer component
│   └── Header.tsx                    # Header/navigation component
├── public/                           # Static assets
├── next.config.js                    # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript configuration
└── package.json                      # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 18.17 or higher (20.9.0+ recommended)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd grosure-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Pages

### Landing Page (`/`)
The main landing page includes:
- Hero section with primary CTA
- Features showcase
- How it works (3 steps)
- Screenshots/demo section
- Benefits section
- Technology & Security section
- FAQ section
- Download CTA section

### Privacy Policy (`/privacy`)
Comprehensive privacy policy including:
- Information collection practices
- Data usage and storage
- Security measures
- User rights (GDPR compliant)
- Contact information

### Account Deletion (`/delete-account`)
Account deletion request page with:
- Information about what will be deleted
- Deletion timeline
- Alternative options (take a break, export data, contact support)
- Deletion request form with validation
- Confirmation dialog

## Branding

### Colors
- **Primary**: `#2D2D2D` (Dark gray/black)
- **Background**: `#FFFEF8` (Off-white/cream)
- **Accent**: `#00C896` (Green)
- **Secondary**: `#8A8A8A` (Gray)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

## API Routes

### POST `/api/account/delete-request`

Handles account deletion requests.

**Request Body:**
```json
{
  "email": "user@example.com",
  "reason": "no-longer-need",
  "comments": "Optional feedback",
  "confirmed": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "Deletion request received",
  "deletionScheduledDate": "2024-XX-XX"
}
```

**Note**: This is currently a demo implementation. In production, you should:
1. Verify the email exists in your database
2. Create a deletion request record
3. Send confirmation email
4. Disable the account immediately
5. Schedule background job for data deletion

## Customization

### Updating Colors
Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: "#2D2D2D",
      background: "#FFFEF8",
      accent: "#00C896",
      secondary: "#8A8A8A",
    },
  },
}
```

### Updating Content
- Landing page content: `app/page.tsx`
- Privacy policy: `app/privacy/page.tsx`
- Account deletion: `app/delete-account/page.tsx`

### Adding New Pages
Create new page files in the `app/` directory:
```typescript
// app/about/page.tsx
export default function About() {
  return <div>About page content</div>
}
```

## Components

### Header
Sticky navigation with mobile menu support.

### Footer
Comprehensive footer with links to all pages and social media.

### CTAButton
Reusable button component with primary/secondary variants.

## Performance Optimization

- Lazy loading images
- Optimized fonts (Google Fonts)
- Minified CSS and JavaScript (in production build)
- Fast page transitions
- Responsive images

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Screen reader compatible
- Sufficient color contrast ratios

## SEO

- Meta tags in layout.tsx
- Open Graph tags
- Semantic HTML structure
- Descriptive titles and descriptions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Production Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
Build the static site:
```bash
npm run build
```

The built files will be in the `.next` directory.

## Environment Variables

Currently no environment variables are required. In production, you may want to add:

```env
# .env.local
NEXT_PUBLIC_API_URL=your_api_url
DATABASE_URL=your_database_url
EMAIL_SERVICE_API_KEY=your_email_api_key
```

## TODO for Production

- [ ] Set up actual backend for account deletion API
- [ ] Implement email notifications
- [ ] Add actual app screenshots
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Set up custom domain
- [ ] Implement cookie consent (if using web cookies)
- [ ] Add actual app store links
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Add loading states and animations
- [ ] Implement newsletter signup functionality
- [ ] Create Terms of Service page

## License

Copyright © 2024 grosure. All rights reserved.

## Contact

- Email: support@grosure.ai
- Privacy: privacy@grosure.ai
- Website: www.grosure.ai

---

Made with ♥ for home cooks
