This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Mairo Pedro Isaac - Portfolio Website

A modern, professional portfolio website built with Next.js 14, React, and Tailwind CSS.

## Setup Instructions

### 1. Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all the required packages listed in package.json.

### 2. Add Your Images

#### Profile Photo
- Place your profile photo in: `public/images/profile.jpg`
- Recommended size: 400x400px or larger (square format)

#### Project Screenshots
Place your project screenshots in: `public/images/projects/`

For Health Vault Rwanda:
- `public/images/projects/healthvault-1.png`
- `public/images/projects/healthvault-2.png`

For Powerhand Design:
- `public/images/projects/powerhand-1.png`
- `public/images/projects/powerhand-2.png`

#### Favicon
- Place your M logo favicon in: `public/favicon.ico`
- Create a 32x32px or 16x16px .ico file from your Gemini-generated image

### 3. Update Your Contact Information

Edit `lib/data.ts` and update:

```typescript
export const contact = {
  email: "mairopedroisaac@gmail.com",
  whatsapp: "250XXXXXXXXX", // Replace with your number (e.g., 250788123456)
  linkedin: "https://linkedin.com/in/yourprofile", // Replace with your LinkedIn URL
  whatsappMessage: "Hi Mairo, I'm interested in your web development services",
};
```

### 4. Add Tawk.to Live Chat (Optional)

1. Go to https://www.tawk.to/
2. Create a free account
3. Get your chat widget code
4. Open `app/layout.tsx`
5. Paste the Tawk.to script before the closing `</body>` tag

Example:
```tsx
<body className={inter.className}>
  {children}
  
  {/* Tawk.to Live Chat */}
  <script type="text/javascript">
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();
  </script>
</body>
```

### 5. Run Locally

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 6. Deploy to Vercel

#### Option 1: GitHub + Vercel (Recommended)

1. Create a GitHub repository
2. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

3. Go to https://vercel.com
4. Sign up/login with GitHub
5. Click "New Project"
6. Import your repository
7. Click "Deploy"

#### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

### 7. Connect Custom Domain

1. Purchase domain from Namecheap (mairopedro.com)
2. In Vercel dashboard, go to your project
3. Click "Settings" → "Domains"
4. Add "mairopedro.com" and "www.mairopedro.com"
5. Follow Vercel's DNS configuration instructions
6. Update nameservers in Namecheap to Vercel's nameservers

## Project Structure

```
mairopedro-portfolio/
├── app/
│   ├── layout.tsx          # Main layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation
│   ├── Hero.tsx            # Hero section
│   ├── Projects.tsx        # Projects section
│   ├── ProjectCard.tsx     # Project card component
│   ├── About.tsx           # About section
│   ├── Services.tsx        # Services section
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer
├── lib/
│   └── data.ts             # YOUR CONTENT GOES HERE
├── public/
│   └── images/             # YOUR IMAGES GO HERE
├── tailwind.config.ts      # Tailwind configuration
└── package.json            # Dependencies
```

## Customization Guide

### Colors
Edit `tailwind.config.ts` to change colors:
```typescript
colors: {
  primary: {
    DEFAULT: '#00D9FF', // Change cyan color
    dark: '#00B8D4',
  },
  navy: {
    DEFAULT: '#0A1628', // Change background color
    light: '#1A2332',
    lighter: '#2A3442',
  }
}
```

### Content
All content is in `lib/data.ts`:
- Update project descriptions
- Add more projects
- Modify services
- Change skills list

### Images
All images go in `public/images/`:
- Profile photo: `public/images/profile.jpg`
- Project screenshots: `public/images/projects/`

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Hosting**: Vercel

## Important Notes

- All images must be in `public/images/` folder
- Update contact info in `lib/data.ts` before deploying
- The site is fully responsive and mobile-friendly
- No backend or database required
- Free to host on Vercel

## Support

If you encounter any issues:
1. Check that all dependencies are installed
2. Verify all file paths are correct
3. Make sure images are in the correct folders
4. Clear browser cache and restart dev server

## License

This is your personal portfolio - you own all rights to customize and use it.
