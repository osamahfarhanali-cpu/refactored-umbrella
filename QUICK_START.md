# Quick Start Guide - Photography Portfolio

## 🚀 Start Here

### 1. View the Portfolio
The development server is already running on:
```
http://localhost:3001
```

Open this in your browser to see the live portfolio!

### 2. Key Files to Customize

#### Update Content
**File:** `src/data/portfolioData.js`

Change these immediately:
```javascript
photographer: {
  name: "Your Name",           // Change this
  tagline: "Your tagline",     // Change this
  bio: "Your bio",             // Change this
}
```

#### Update Images
**File:** `src/data/portfolioData.js` - `portfolio` array

Replace each image URL:
```javascript
image: "https://your-image-url.jpg"  // Change this
```

#### Update Services
**File:** `src/data/portfolioData.js` - `services` array

Add your photography services with pricing.

#### Update Colors (Optional)
**File:** `src/App.css` - `:root` section

```css
:root {
  --primary: #d4af37;  /* Gold accent - change this */
  --bg-dark: #0a0e27;  /* Dark background */
}
```

### 3. How to Get Images from Google Drive

**Option A: Direct Download & Upload**
1. Open each Google Drive folder:
   - Folder 1: https://drive.google.com/drive/folders/1KZgHFicuGXDB8FzhbtjVz0CLzVQmseJf
   - Folder 2: https://drive.google.com/drive/folders/13fX2cdAQ4DFBYDHtGiVZFGxWtHoxfkXf
   - Folder 3: https://drive.google.com/drive/folders/1wpwPgEYJ2bz1RJcrr8tLYBeZeEfCKfdF
2. Download images
3. Create `src/assets/images/` folder
4. Upload images there
5. Update URLs in `portfolioData.js`:
   ```javascript
   import img1 from '../assets/images/photo1.jpg';
   // Then use: image: img1
   ```

**Option B: Cloud Hosting (Easiest)**
1. Use Imgur, Cloudinary, or similar service
2. Upload your images
3. Get direct image URLs
4. Paste into `portfolioData.js`

### 4. Build & Deploy

**For GitHub Pages:**
```bash
npm run build
# Deploy the 'dist' folder
```

**For Vercel:**
```bash
npm install -g vercel
vercel
# Follow the prompts
```

**For Netlify:**
```bash
npm run build
# Drag & drop 'dist' folder to Netlify
```

## 📋 Sections Overview

### Hero
- Main headline: Edit in `Hero.jsx`
- Buttons link to portfolio and contact

### About
- Profile image: Update URL in `About.jsx`
- Bio text: Edit in `portfolioData.js`
- Stats: Update numbers in `portfolioData.js`

### Gallery
- Filter by category: Works automatically
- Click to enlarge: Built-in lightbox
- Update images in `portfolioData.js`

### Services
- Add/remove services in `portfolioData.js`
- Icons come from lucide-react library

### Testimonials
- Edit in `portfolioData.js`
- Add client images and reviews

### Contact
- Form emails can integrate with Formspree, Sendgrid, etc.
- Social links: Update in `portfolioData.js`

## 🎨 Design Features

✅ Dark theme with gold accents
✅ Fully responsive (mobile, tablet, desktop)
✅ Smooth animations throughout
✅ Gallery with lightbox
✅ Contact form
✅ Social media integration
✅ Fast loading

## ⚡ Performance Tips

1. **Optimize images:**
   - Resize to max 1000px width
   - Use JPG for photos
   - Use compression tools (TinyPNG)

2. **Use CDN for images:**
   - Faster loading globally
   - Better for production

3. **Minify CSS/JS:**
   - Run `npm run build` for production

## 🆘 Need Help?

### Images not showing?
- Check URL is correct and public
- Try different image URLs first
- Use PNG or JPG format

### Portfolio looks off?
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)
- Check mobile view

### Want to change layout?
- Edit component files in `src/components/`
- Modify CSS in `src/App.css`

## 📚 Full Documentation

See `PORTFOLIO_GUIDE.md` for detailed information.

## ✅ Setup Checklist

- [ ] View portfolio on http://localhost:3001
- [ ] Update photographer name in `portfolioData.js`
- [ ] Replace sample images with your photos
- [ ] Update services and pricing
- [ ] Add testimonials
- [ ] Customize colors (optional)
- [ ] Test on mobile
- [ ] Set up contact form backend
- [ ] Deploy to production

---

You're all set! 🎉 Start customizing your portfolio now!
