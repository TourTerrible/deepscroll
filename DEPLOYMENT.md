# DeepScroll - Vercel Deployment Guide

## Quick Deploy

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Deploy to production
vercel --prod
```

## Environment Variables

If you plan to use the OpenAI API route in production:

1. In your Vercel project dashboard, go to **Settings** → **Environment Variables**
2. Add: `OPENAI_API_KEY` with your OpenAI API key
3. Redeploy for changes to take effect

> **Note**: The current app uses seed data by default, so the OpenAI API key is optional for the MVP.

## Build Configuration

The project is already configured for Vercel deployment:
- **Framework**: Next.js (auto-detected)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Post-Deployment

After deployment, Vercel will provide:
- **Production URL**: `https://your-project.vercel.app`
- **Preview URLs**: Auto-generated for each git push
- **Analytics**: Available in the Vercel dashboard

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

### Environment Variables Not Working
- Ensure variables are set in Vercel dashboard
- Redeploy after adding/changing variables
- Check variable names match exactly (case-sensitive)

### Dark Mode Flash
- This is handled by the inline script in `layout.tsx`
- Should work correctly on Vercel's edge network

## Custom Domain (Optional)

1. Go to your project in Vercel dashboard
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions
