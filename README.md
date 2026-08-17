# Safar-E-Jahan Travel & Tours (سفرِ جہاں)

> **"Your Journey. Carefully Arranged with Uncompromising Devotion."**  
> _آؤ سفر کریں جہاں کا_

Safar-E-Jahan is an executive Islamic pilgrimage portal and luxury travel planning application. It connects pilgrims with MOFA-compliant, front-row Haram hospitality in Makkah al-Mukarramah and Madinah al-Munawwarah, paired with real-time itinerary builders, dynamic multi-currency estimations, and direct advisor channels.

**Status**: ✅ Production Ready | Full-Stack React + Express | Responsive Mobile-First Design

---

## 🌟 Key Features

### 1. Curated Umrah & Hajj Dossiers

- **Tiered Itineraries**: Economy, Executive, and VIP Royal packages featuring verified walking distances to the Haram courtyards.
- **Detailed Itinerary Modal**: Transparent breakdowns of hotel ratings, duration, room options (Quad, Triple, Double, Sharing), catering, bullet train transit, and ground logistics.
- **Official Compliance**: MOFA and Nusuk ministry-compliant visa processing and certified on-ground assistance.
- **Real-time Email Dispatch**: Inquiry dossiers sent via Resend with built-in domain verification (onboarding@resend.dev).

### 2. Interactive Custom Journey Planner

- **Real-Time Cost Engine**: Dynamic price calculation factoring in Makkah/Madinah nights, traveler counts, room tiers, meal plans, private GMC/bus transportation, and high-speed Haramain train tickets.
- **Multi-Currency Support**: Instant currency conversion across `PKR` (Pakistani Rupee), `USD` (US Dollar), `SAR` (Saudi Riyal), and `GBP` (British Pound).
- **Direct Quotation Export**: One-click generation of detailed pilgrimage dossiers ready for WhatsApp or email dispatch.

### 3. Heritage & Historical Ziyarat Tours

- Curated guided tours across historical sanctuaries including Cave of Hira (Jabal an-Nour), Cave of Thawr, Mount Uhud, Masjid Quba, Masjid al-Qiblatayn, and the Seven Mosques with scholar accompaniment.

### 4. Resilient Media Architecture & Fluid UI

- **Hardware-Accelerated Stagger Animations**: Built with `motion/react` for smooth viewport-triggered card reveals and fluid screen transitions.
- **Resilient Shimmer Lazy-Loading**: Custom `ShimmerImage` component preventing Cumulative Layout Shift (CLS) with automated fallback retry chains for high-uptime sanctuary photography.
- **Fully Responsive Design**: Mobile-first approach with smooth scaling from iPhone (320px) to ultra-wide displays (1920px+).
- **Zero Layout Shifts**: Optimized Tailwind CSS with responsive typography using `clamp()` and `overflow-x: hidden`.

### 5. Multi-Channel Pilgrimage Concierge

- **24/7 Helpline & WhatsApp Integration**: Direct integration with customer support channels (`0345-8050124`) with contextual pre-formatted inquiry templates.
- **Multi-Step Contact Workflow**: Validated inquiry pipeline generating unique reference IDs (`SFJ-YYYY-XXXXX`) and instant copyable summaries.
- **Email Confirmation**: Automatic email dossier dispatch via Resend API to customer and support team.

### 6. Trust & Accreditation Display

- **Live Trust Metrics**: Animated statistics showcasing 100% visa approval rate, 15,000+ pilgrims guided, 5-star hotels, and 24/7 concierge availability.
- **Saudi Ministry Certification**: Verified MOFA and Nusuk compliance badges throughout the application.

---

## 🛠️ Technology Stack

| Layer                       | Technologies                                                              |
| :-------------------------- | :------------------------------------------------------------------------ |
| **Frontend Core**           | React 19, TypeScript 5.8 (Strict Mode), @types/react, @types/react-dom    |
| **Styling & Design System** | Tailwind CSS v4, Lucide React Icons (SVG)                                 |
| **Motion & Animation**      | Motion v12 (`motion/react`), CSS Shimmer Keyframes, Hardware Acceleration |
| **Backend & Serving**       | Express.js, Node.js, tsx (dev), esbuild (production bundling)             |
| **Email & Notifications**   | Resend API (transactional email), WhatsApp Business API integration       |
| **Deployment & Build**      | Vite 6.4, Vercel configuration, Google Cloud Run ready                    |
| **Development Tools**       | ESBuild, TypeScript compiler, npm scripts                                 |

---

## 📁 Project Structure

```text
├── .env.example                 # Template for required environment variables
├── .env                         # Local environment configuration (Git ignored)
├── .gitignore                   # Ignored build outputs and secret files
├── vercel.json                  # Vercel deployment and routing configuration
├── metadata.json                # Application metadata and capability declarations
├── package.json                 # Scripts and dependency declarations
├── tsconfig.json                # TypeScript strict mode configuration
├── vite.config.ts               # Vite bundler & Tailwind configuration
├── server.ts                    # Full-stack Express & Vite middleware entry
├── EMAIL_VERIFICATION.md        # Resend email setup guide (NEW)
├── test-resend.ts               # Resend email testing script (NEW)
├── src/
│   ├── App.tsx                  # Root application router and modal orchestrator
│   ├── main.tsx                 # Application DOM entry point
│   ├── index.css                # Global Tailwind tokens, typography clamps & scrollbars
│   ├── types.ts                 # Strict TypeScript definitions & interfaces
│   ├── components/
│   │   ├── Navbar.tsx                   # Responsive header with currency switcher & mobile drawer
│   │   ├── Footer.tsx                   # Comprehensive footer with quick links & certifications
│   │   ├── Logo.tsx                     # Safar-E-Jahan brand crest & typography
│   │   ├── PackageCard.tsx              # Motion-enabled package card with staggered reveals
│   │   ├── PackageCardSkeleton.tsx      # Shimmer loading skeleton for package cards
│   │   ├── PackageDetailModal.tsx       # Full package breakdown & pricing modal
│   │   ├── JourneyPlannerModal.tsx      # Real-time interactive pilgrimage price calculator
│   │   ├── CallWhatsAppModal.tsx        # Direct advisor contact & WhatsApp modal
│   │   ├── PageTransitionLoader.tsx     # Top-bar gold shimmer progress indicator
│   │   ├── SanctuarySection.tsx         # Curated luxury hospitality showcase
│   │   ├── ShimmerImage.tsx             # Lazy-loaded resilient image component with fallback
│   │   ├── AnimatedTrustStats.tsx       # Trust metrics & accreditation statistics
│   │   └── Testimonials.tsx             # Verified pilgrim reviews & testimonials
│   ├── views/
│   │   ├── HomeView.tsx                 # Primary showcase & hero experience
│   │   ├── UmrahView.tsx                # Dedicated Umrah itineraries & custom builder (RESPONSIVE)
│   │   ├── HajjView.tsx                 # Executive Hajj dossier & Manasik roadmap (RESPONSIVE)
│   │   ├── ServicesView.tsx             # Complete travel services breakdown
│   │   ├── HeritageView.tsx             # Sacred Ziyarat locations & historical tours
│   │   ├── AboutView.tsx                # Company history, mission & accreditations
│   │   └── ContactView.tsx              # Multi-step inquiry form & office directory (RESPONSIVE)
│   ├── data/
│   │   └── packagesData.ts              # Package repository, hotels, and imagery
│   └── hooks/
│       └── useWhatsAppVisibility.ts     # Smart visibility hook for floating contact triggers
├── dist/                        # Production build output (generated)
└── node_modules/                # Dependencies (Git ignored)
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory (or copy from `.env.example`):

```bash
cp .env.example .env
```

| Variable                   | Description                                          | Default / Example       |
| :------------------------- | :--------------------------------------------------- | :---------------------- |
| `GEMINI_API_KEY`           | Google AI Studio API key for server-side AI features | `""`                    |
| `APP_URL`                  | Base URL of the deployed application                 | `http://localhost:3000` |
| `RESEND_API_KEY`           | Resend API key for transactional email delivery      | `""`                    |
| `WHATSAPP_TOKEN`           | Meta WhatsApp Business API access token              | `""`                    |
| `WHATSAPP_PHONE_NUMBER_ID` | Your WhatsApp Business Phone Number ID               | `""`                    |

**Email Setup**: The application uses Resend's built-in verified domain (`onboarding@resend.dev`). Run `npm run test-email` to verify email delivery.

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

```bash
cp .env.example .env
# Edit .env with your API keys (RESEND_API_KEY, etc.)
```

### 3. Test Resend Email (Optional)

```bash
npm run test-email
# Verifies email delivery via Resend API
```

### 4. Run Development Server

```bash
npm run dev
```

The application will boot at `http://localhost:3000` with:

- Full-stack React frontend with TypeScript
- Express backend with real-time API endpoints
- Vite hot module replacement (HMR)
- Resend email API integration

### 5. Lint & Type Check

```bash
npm run lint
# Runs TypeScript compiler in strict mode
```

### 6. Build for Production

```bash
npm run build
```

Generates optimized production bundle in `dist/` and `dist/server.cjs`.

### 7. Start Production Server

```bash
npm start
# Runs Node server with bundled backend
```

---

## 🌐 Deployment

### Vercel Deployment (Recommended)

This repository includes a pre-configured `vercel.json` for single-page routing, caching, and security:

1. **Import to Vercel**:
   - Connect your GitHub repository to Vercel Dashboard
   - Framework: **Vite** (auto-detected)
2. **Configure Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Add Environment Variables** in Vercel Project Settings:
   - `RESEND_API_KEY` - Your Resend API key
   - `WHATSAPP_TOKEN` - Meta WhatsApp Business token (optional)
   - `WHATSAPP_PHONE_NUMBER_ID` - WhatsApp Phone Number ID (optional)

4. **Deploy**: Push to GitHub → Vercel auto-deploys

**Vercel Benefits**:

- ✅ Edge caching for static assets (`max-age: 1 year`)
- ✅ SPA routing with fallback to `index.html`
- ✅ Automatic HTTPS & CDN
- ✅ Built-in analytics & monitoring

### Container / Cloud Run Deployment

The project is container-ready out of the box:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY dist ./dist
EXPOSE 3000
CMD ["node", "dist/server.cjs"]
```

- **Port**: `3000`
- **Host**: `0.0.0.0`
- **Entry Point**: `node dist/server.cjs`

---

## 📊 Recent Updates (2026)

### ✨ August 2026 Enhancements:

- ✅ **Fully Responsive Contact Form** - Mobile, Tablet, Desktop optimized with smooth scaling
- ✅ **Email Verification System** - Resend API integration with built-in domain
- ✅ **Zero Lint & Build Errors** - Full TypeScript strict mode compliance
- ✅ **Motion Library Updates** - Fixed animation easing for smooth transitions
- ✅ **Production Ready** - Tested and verified for Vercel/Cloud Run deployment
- ✅ **Type Safety** - Installed @types/react and @types/react-dom

---

## 🧪 API Endpoints

### POST `/api/send-inquiry`

Submits a pilgrimage inquiry and triggers email + WhatsApp notifications.

**Request Body**:

```json
{
  "name": "Muhammad Farooq",
  "email": "farooq@example.com",
  "phone": "+923458050124",
  "contactMethod": "both",
  "subject": "Star Umrah Package (15 Days)",
  "travelers": "2 Adults, 1 Child",
  "departureCity": "Karachi",
  "travelMonth": "Ramadan 2025",
  "specialRequests": "Wheelchair accessibility for elderly parent",
  "bookingRef": "SFJ-2026-12345"
}
```

**Response**:

```json
{
  "success": true,
  "bookingRef": "SFJ-2026-12345",
  "emailDispatched": true,
  "whatsappDispatched": false,
  "method": "email-and-whatsapp",
  "timestamp": "2026-08-17T10:30:00.000Z",
  "message": "Inquiry registered successfully."
}
```

### GET `/api/health`

Health check endpoint for deployment monitoring.

---

## 🛡️ Security & Compliance

- ✅ **MOFA Certified**: Saudi Ministry of Hajj & Umrah compliant
- ✅ **Nusuk Integration Ready**: Ministry visa portal integration
- ✅ **TypeScript Strict**: Full type safety across codebase
- ✅ **HTTPS Only**: Vercel auto-enforces secure connections
- ✅ **Environment Secrets**: Never expose API keys in code
- ✅ **Rate Limiting**: Recommended on Vercel or Cloud Run level

---

## 📞 Support & Contact

- **Helpline**: +92 345 8050124 (WhatsApp 24/7)
- **Email**: info@safarejahan.com
- **Offices**: Karachi • Lahore • Islamabad • Makkah al-Mukarramah

---

## 📜 License & Credits

© 2024–2026 **Safar-E-Jahan Travel & Tours**. All rights reserved.  
MOFA & Nusuk certified pilgrimage logistics provider.  
Built with React, TypeScript, Tailwind CSS, and Express.js.

---

**Last Updated**: August 17, 2026 | Production Version: 1.0.0
