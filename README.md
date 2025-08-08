# AI Engineer Portfolio

A modern, minimal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Contentful CMS. Features dark/light mode, responsive design, and smooth animations.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Content Management**: Contentful CMS integration for dynamic content
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Smooth Animations**: Framer Motion animations throughout
- **SEO Optimized**: Meta tags, sitemap, and robots.txt
- **Performance**: Optimized images, ISR, and fast loading
- **Contact Form**: Functional contact form with validation
- **Social Links**: Integrated social media and contact information

## 📋 Sections

- **Hero**: Animated introduction with CTA buttons
- **Projects**: Grid layout with project cards from Contentful
- **Blog**: Featured blog posts with pagination
- **Research**: Academic papers and publications
- **About**: Personal bio and skills showcase
- **Contact**: Contact form and information

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **CMS**: Contentful
- **UI Components**: ShadCN UI
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```

4. **Configure your environment variables**
   Edit `.env.local` with your actual values:
   ```env
   # Contentful Configuration
   CONTENTFUL_SPACE_ID=your_contentful_space_id
   CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
   CONTENTFUL_PREVIEW_TOKEN=your_contentful_preview_token

   # Contact Form (Formspree)
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id

   # Site Configuration
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_SITE_NAME="Your Name - AI Engineer Portfolio"

   # Social Media Links
   NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
   NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
   NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername
   NEXT_PUBLIC_EMAIL=your.email@example.com
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Contentful Setup

### 1. Create Contentful Account
- Sign up at [contentful.com](https://contentful.com)
- Create a new space for your portfolio

### 2. Create Content Types

#### Project Content Type
```
Title: Text (Short text)
Slug: Text (Short text)
Description: Text (Long text)
Content: Rich text
Tech Stack: Array of Text (Short text)
GitHub URL: Text (Short text)
Demo URL: Text (Short text)
Featured Image: Media (Single media)
Featured: Boolean
Published At: Date
```

#### Blog Content Type
```
Title: Text (Short text)
Slug: Text (Short text)
Excerpt: Text (Long text)
Content: Rich text
Featured Image: Media (Single media)
Author: Text (Short text)
Tags: Array of Text (Short text)
Published At: Date
```

#### Research Content Type
```
Title: Text (Short text)
Slug: Text (Short text)
Abstract: Text (Long text)
Content: Rich text
Authors: Array of Text (Short text)
Publication URL: Text (Short text)
Journal: Text (Short text)
Published At: Date
Featured Image: Media (Single media)
```

### 3. Get API Keys
1. Go to Settings → API keys
2. Create a new API key
3. Copy the Space ID and Content Delivery API access token
4. Add them to your `.env.local` file

### 4. Add Sample Content
Create some sample projects, blogs, and research papers in Contentful to test the integration.

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy

3. **Configure Environment Variables**
   Add all your environment variables in the Vercel dashboard:
   - Go to your project settings
   - Navigate to Environment Variables
   - Add each variable from your `.env.local` file

### Alternative: Deploy to Other Platforms

The project is compatible with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🎨 Customization

### Update Personal Information
1. **Name and Title**: Update in `src/components/sections/hero.tsx`
2. **About Section**: Modify `src/components/sections/about.tsx`
3. **Contact Information**: Update in `src/components/sections/contact.tsx`
4. **Skills**: Edit the skills array in `src/components/sections/about.tsx`

### Styling
- **Colors**: Modify the CSS variables in `src/app/globals.css`
- **Typography**: Update font families in `tailwind.config.js`
- **Animations**: Adjust Framer Motion settings in components

### Content Management
- **Projects**: Add/edit in Contentful
- **Blog Posts**: Create new blog entries in Contentful
- **Research**: Add publications in Contentful

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

### Project Structure
```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   ├── sitemap.ts      # Sitemap generator
│   └── robots.ts       # Robots.txt
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   ├── sections/      # Page sections
│   ├── header.tsx     # Navigation header
│   ├── footer.tsx     # Footer component
│   └── theme-provider.tsx # Theme provider
├── lib/               # Utility functions
│   ├── contentful.ts  # Contentful API
│   └── utils.ts       # General utilities
└── types/             # TypeScript types
    └── contentful.ts  # Contentful types
```

## 🎯 Performance

- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic with Next.js
- **Static Generation**: ISR for dynamic content
- **Bundle Analysis**: Built-in with Next.js

## 🔒 Security

- **Environment Variables**: Secure API key management
- **Content Security**: Contentful API with read-only access
- **Form Validation**: Client and server-side validation

## 📈 SEO

- **Meta Tags**: Dynamic meta tags for each page
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Contentful documentation](https://contentful.com/developers)
3. Open an issue in this repository

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Contentful](https://contentful.com/) for the headless CMS
- [Framer Motion](https://framer.com/motion/) for animations
- [ShadCN UI](https://ui.shadcn.com/) for the component library

---

Built with ❤️ for AI Engineers and Researchers
