# Deployment Guide - Vercel

This guide will walk you through deploying your AI Engineer portfolio to Vercel.

## Prerequisites

- GitHub account
- Vercel account
- Contentful space set up
- Environment variables ready

## Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub Repository**:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it `ai-engineer-portfolio`
   - Make it public or private
   - Don't initialize with README (we already have one)

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/yourusername/ai-engineer-portfolio.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

1. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**:
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will automatically detect it's a Next.js project

3. **Configure Project**:
   - **Project Name**: `ai-engineer-portfolio` (or your preferred name)
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (should be auto-detected)
   - **Output Directory**: `.next` (should be auto-detected)
   - **Install Command**: `npm install` (should be auto-detected)

4. **Add Environment Variables**:
   Click "Environment Variables" and add the following:

   ```env
   CONTENTFUL_SPACE_ID=your_contentful_space_id
   CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
   CONTENTFUL_PREVIEW_TOKEN=your_contentful_preview_token
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_SITE_NAME="Your Name - AI Engineer Portfolio"
   NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
   NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
   NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername
   NEXT_PUBLIC_EMAIL=your.email@example.com
   ```

5. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete (usually 2-3 minutes)

## Step 3: Configure Custom Domain (Optional)

1. **Add Domain**:
   - Go to your project dashboard in Vercel
   - Click "Settings" → "Domains"
   - Add your custom domain

2. **Update DNS**:
   - Follow Vercel's DNS configuration instructions
   - Point your domain to Vercel's nameservers

3. **Update Environment Variables**:
   - Update `NEXT_PUBLIC_SITE_URL` to your custom domain
   - Redeploy if necessary

## Step 4: Verify Deployment

1. **Check Live Site**:
   - Visit your deployed URL
   - Test all sections and functionality

2. **Test Contentful Integration**:
   - Add a new project in Contentful
   - Check if it appears on your live site
   - Test image loading

3. **Test Contact Form**:
   - Submit a test message
   - Verify form functionality

## Step 5: Performance Optimization

1. **Enable Analytics** (Optional):
   - Go to Vercel dashboard
   - Enable Web Analytics
   - Monitor your site's performance

2. **Configure Caching**:
   - Vercel automatically handles caching
   - Contentful content is cached for optimal performance

3. **Image Optimization**:
   - Next.js Image component is automatically optimized
   - Images are served in WebP/AVIF formats

## Step 6: Continuous Deployment

Your site will automatically redeploy when you push changes to GitHub:

1. **Make Changes**:
   ```bash
   # Make your changes locally
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

2. **Automatic Deployment**:
   - Vercel will automatically detect the push
   - Build and deploy the new version
   - You'll get a notification when complete

## Troubleshooting

### Build Errors

**Common Issues**:
- Missing environment variables
- TypeScript errors
- Missing dependencies

**Solutions**:
1. Check Vercel build logs
2. Verify all environment variables are set
3. Run `npm run build` locally to test
4. Check for TypeScript errors: `npm run type-check`

### Content Not Loading

**Check**:
1. Contentful API keys are correct
2. Content is published (not draft)
3. Network tab in browser dev tools
4. Vercel function logs

### Images Not Loading

**Check**:
1. Contentful image domains in `next.config.js`
2. Image URLs in browser dev tools
3. Contentful media permissions

### Performance Issues

**Optimize**:
1. Use Next.js Image component
2. Optimize image sizes
3. Enable Vercel Analytics
4. Check Core Web Vitals

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `CONTENTFUL_SPACE_ID` | Your Contentful space ID | Yes |
| `CONTENTFUL_ACCESS_TOKEN` | Contentful delivery API token | Yes |
| `CONTENTFUL_PREVIEW_TOKEN` | Contentful preview API token | Yes |
| `NEXT_PUBLIC_SITE_URL` | Your deployed site URL | Yes |
| `NEXT_PUBLIC_SITE_NAME` | Site name for meta tags | Yes |
| `NEXT_PUBLIC_GITHUB_URL` | Your GitHub profile URL | No |
| `NEXT_PUBLIC_LINKEDIN_URL` | Your LinkedIn profile URL | No |
| `NEXT_PUBLIC_TWITTER_URL` | Your Twitter profile URL | No |
| `NEXT_PUBLIC_EMAIL` | Your email address | No |

## Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] All sections display correctly
- [ ] Contentful content appears
- [ ] Images load properly
- [ ] Contact form works
- [ ] Dark/light mode toggle works
- [ ] Mobile responsiveness
- [ ] SEO meta tags are correct
- [ ] Social media links work
- [ ] Performance is acceptable

## Monitoring and Maintenance

1. **Regular Updates**:
   - Keep dependencies updated
   - Monitor Vercel for any issues
   - Update content regularly in Contentful

2. **Backup**:
   - Your code is backed up on GitHub
   - Contentful has its own backup system
   - Consider backing up environment variables

3. **Analytics**:
   - Enable Vercel Analytics
   - Consider adding Google Analytics
   - Monitor Core Web Vitals

## Support

If you encounter issues:
1. Check Vercel documentation
2. Review Next.js documentation
3. Check Contentful documentation
4. Open an issue in your GitHub repository

---

Your portfolio is now live! 🎉
