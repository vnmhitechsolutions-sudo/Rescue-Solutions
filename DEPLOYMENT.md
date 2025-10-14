# Deployment Guide for Rescue Solutions

## Vercel Deployment

### Prerequisites
- Node.js 18+ installed
- Vercel CLI installed (`npm i -g vercel`)
- Git repository connected to Vercel

### Deployment Steps

1. **Build the React App Locally (Optional Test)**
   ```bash
   cd rescue-solutions
   npm install
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   # From the root directory
   vercel --prod
   ```

3. **Alternative: Connect GitHub Repository**
   - Go to Vercel Dashboard
   - Import your GitHub repository
   - Vercel will automatically detect the configuration

### Configuration Files Created

- `vercel.json` - Vercel deployment configuration
- `package.json` - Root package.json for deployment
- `.vercelignore` - Files to ignore during deployment
- `index.html` - Root HTML file with redirect

### Important Notes

1. **Build Directory**: The React app builds to `rescue-solutions/build/`
2. **Routes**: All routes are configured to serve the React app
3. **Static Assets**: Images and static files are properly routed
4. **SPA Routing**: React Router routes are handled correctly

### Troubleshooting

**If you get "react-scripts: command not found" error:**

1. The issue is that dependencies aren't being installed properly
2. The updated `vercel.json` now uses `npm ci` for faster, reliable installs
3. Make sure your `package-lock.json` is committed to git
4. If still failing, try deleting `node_modules` and `package-lock.json`, then run `npm install` locally

**If you still get 404 errors:**

1. Check that the build completed successfully
2. Verify the `outputDirectory` in `vercel.json` points to the correct build folder
3. Ensure all static assets are in the `public` folder
4. Check Vercel deployment logs for build errors

**Common Build Issues:**

- **Missing dependencies**: Make sure all dependencies are in `package.json`
- **Node version**: Ensure Node.js version compatibility
- **Build script**: Verify the build script exists in `package.json`

### Environment Variables (if needed)

If your app uses environment variables, add them in Vercel dashboard:
- Go to Project Settings > Environment Variables
- Add any required variables for production
