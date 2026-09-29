# Sudarshan P K — Personal Portfolio Website

A fast, responsive, and modern single-page personal portfolio website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed with a premium product-leader feel, featuring a dark theme by default, subtle scroll entrance animations, a sticky active-section navbar, and zero-config deployment readiness for **Vercel**.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18.17+ or v20+ recommended)
- `npm` (comes with Node.js)

### Installation & Local Development

1. Clone or open this repository in your terminal.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Build & Verification

To create a production-ready build:
```bash
npm run build
```
To run the production build locally:
```bash
npm run start
```

---

## ✏️ How to Edit Content

All portfolio text, experiences, metrics, project details, and links are kept in a single typed configuration file:
- **`src/data/profile.ts`**

You can update any content (such as project descriptions, experience bullets, contact info, or skills) without touching component code. The TypeScript interfaces ensure type-safety.

---

## 🖼️ Media & Document Assets

Place your custom assets in the `public/` directory:

1. **Profile Photo**:
   - Location: `public/profile.jpg`
   - Description: A high-resolution photo. If missing or deleted, the website automatically falls back to an elegant circular badge displaying initials **"SP"**.
2. **Resume**:
   - Location: `public/resume.pdf`
   - Description: Your downloadable PDF resume. The "Download Resume" buttons link directly to `/resume.pdf`.
3. **Open Graph / Social Sharing Image**:
   - Location: `public/og-image.png`
   - Description: 1200×630px image used for link previews on LinkedIn, Twitter, Slack, etc.

---

## ☁️ Deploying to Vercel

This repository is pre-configured for zero-configuration deployment to [Vercel](https://vercel.com):

1. Push your code to GitHub, GitLab, or Bitbucket.
2. Import the project in Vercel.
3. Vercel automatically detects Next.js and runs `npm run build`. No custom environment variables or build overrides are required.
