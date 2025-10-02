# Royal Enfield Bike Finder Website

This is a responsive web application that helps users find the perfect Royal Enfield motorcycle based on their preferences.

## Files Structure

### Required Files to Upload to GitHub:

#### 1. Main Files:
- `index.html` (Main website file - already created)
- `README.md` (This file)

#### 2. Image Files:
You need to upload these 13 bike images (convert PDFs to JPG/PNG format):

- `Bullet 350.jpg`
- `Classic 350.jpg`
- `Hunter 350.jpg`
- `Meteor 350.jpg`
- `Goan classic 350 .jpg`
- `_Guerrilla 450.jpg`
- `Scram 440.jpg`
- `Himalayan 450.jpg`
- `Super Meteor 650.jpg`
- `Classic 650.jpg`
- `Bear 650.jpg`
- `continental GT 650.jpg`
- `Shotgun 650.jpg`

**Note:** The Interceptor 650 currently uses a placeholder image. You'll need to:
1. Find/create an image for Interceptor 650
2. Save it as `Interceptor 650.jpg`
3. Update the image path in the JavaScript code

## Folder Structure

```
your-repository-name/
├── index.html
├── README.md
├── Bullet 350.jpg
├── Classic 350.jpg
├── Hunter 350.jpg
├── Meteor 350.jpg
├── Goan classic 350 .jpg
├── _Guerrilla 450.jpg
├── Scram 440.jpg
├── Himalayan 450.jpg
├── Super Meteor 650.jpg
├── Classic 650.jpg
├── Bear 650.jpg
├── continental GT 650.jpg
├── Shotgun 650.jpg
└── Interceptor 650.jpg
```

## How to Deploy on GitHub Pages

### Step 1: Create Repository
1. Go to GitHub.com and create a new repository
2. Name it something like `royal-enfield-finder` or `re-bike-selector`
3. Make it public
4. Don't initialize with README (we'll upload our own)

### Step 2: Upload Files
1. Click "uploading an existing file"
2. Drag and drop all files:
   - `index.html`
   - `README.md`
   - All 14 bike images (JPG/PNG format)
3. Commit the files with a message like "Initial website upload"

### Step 3: Enable GitHub Pages
1. Go to your repository's Settings tab
2. Scroll down to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch and "/ (root)" folder
5. Click Save

### Step 4: Access Your Website
Your website will be available at: `https://yourusername.github.io/repository-name`

## Important Notes

### Image Requirements:
- **File Format**: Convert PDF files to JPG or PNG
- **File Names**: Must match exactly (case-sensitive)
- **Size**: Optimize images to 800x600px or similar for better loading
- **Quality**: Balance file size and image quality

### Missing Image Fix:
For Interceptor 650, you need to:
1. Replace the placeholder URL in `index.html`
2. Change this line in the JavaScript:
   ```javascript
   image: 'https://placehold.co/600x400/333333/FFFFFF?text=Interceptor+650',
   ```
   To:
   ```javascript
   image: 'Interceptor 650.jpg',
   ```

### Browser Compatibility:
- Works on all modern browsers
- Mobile responsive design
- Uses external CDN for Tailwind CSS and Google Fonts

## Features

- **Interactive Bike Finder**: Filter by engine size, riding style, or price
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Royal Enfield Styling**: Authentic brand colors and typography
- **Direct Links**: Links to official Royal Enfield pages
- **Smooth Animations**: Hover effects and transitions

## Troubleshooting

### Images Not Loading:
- Check file names match exactly (including spaces and underscores)
- Ensure images are in the same folder as index.html
- Verify images are JPG or PNG format

### Website Not Loading:
- Wait 5-10 minutes after enabling GitHub Pages
- Check repository is public
- Verify index.html is in the root folder

### Layout Issues:
- Clear browser cache
- Check if Tailwind CSS CDN is accessible
- Try on different browsers

## Customization

To modify bike data:
1. Edit the `bikes` object in the JavaScript section
2. Update image paths, prices, or specifications
3. Commit and push changes

## Support

If you face any issues:
1. Check GitHub Pages status in repository settings
2. Verify all files are uploaded correctly
3. Check browser console for error messages
