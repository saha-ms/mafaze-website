# Deployment & Security Guide for Mafaze Website

## 🧪 Testing Locally

### Method 1: Direct Browser Opening (Simplest)
```powershell
# Navigate to the project folder
cd C:\Users\Sahab\Mafaze-Website

# Open index.html directly
start index.html
```
**Note**: Contact form won't work with `file://` protocol, but you can test the design and navigation.

### Method 2: Local Web Server (Recommended)

#### Using PowerShell Script:
```powershell
cd C:\Users\Sahab\Mafaze-Website
.\run-local-server.ps1
```

#### Using Python (if installed):
```powershell
cd C:\Users\Sahab\Mafaze-Website
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

#### Using Node.js (if installed):
```powershell
cd C:\Users\Sahab\Mafaze-Website
npx http-server -p 8000
# Or install globally: npm install -g http-server
# Then run: http-server -p 8000
```

## 🚀 Publishing on GitHub Pages

### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com)
2. Sign up for a free account

### Step 2: Create a New Repository
1. Click the "+" icon → "New repository"
2. Name it: `mafaze-website` (or any name you prefer)
3. Make it Public
4. Don't initialize with README (we already have one)
5. Click "Create repository"

### Step 3: Upload Your Website

#### Option A: Using GitHub Web Interface (Easiest)
1. Click "uploading an existing file" on the new repo page
2. Drag and drop all files from your `Mafaze-Website` folder
3. Write commit message: "Initial website upload"
4. Click "Commit changes"

#### Option B: Using Git Command Line
```powershell
# Navigate to your project
cd C:\Users\Sahab\Mafaze-Website

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial website upload"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/mafaze-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Your site will be available at: `https://YOUR_USERNAME.github.io/mafaze-website/`

## 🔒 EmailJS Security Best Practices

### Understanding EmailJS Key Security

EmailJS uses **three types of credentials**:

1. **Public Key** (Safe to expose)
   - This is meant to be public
   - It only identifies your EmailJS account
   - Cannot be used to send emails alone

2. **Service ID** (Semi-sensitive)
   - Identifies which email service to use
   - Relatively safe but better to keep private

3. **Template IDs** (Semi-sensitive)
   - Identifies which email templates to use
   - Relatively safe but better to keep private

### Current Security Level: ⭐⭐⭐ (Good)

Your implementation is already reasonably secure because:
- EmailJS requires all three pieces (public key + service ID + template ID) to work
- Templates are pre-defined on EmailJS dashboard
- Rate limiting is applied by EmailJS (200 emails/month on free plan)
- No actual email passwords are exposed

### Enhanced Security Options

#### Option 1: Environment Variables (For Advanced Users)
Create a `.env` file (don't commit to GitHub):
```
EMAILJS_PUBLIC_KEY=your_public_key_here
EMAILJS_SERVICE_ID=your_service_id_here
EMAILJS_ADMIN_TEMPLATE=your_admin_template_id
EMAILJS_USER_TEMPLATE=your_user_template_id
```

#### Option 2: Use a Backend Service (Most Secure)
Instead of EmailJS, use:
- Netlify Forms (if hosting on Netlify)
- Formspree
- Your own backend API

#### Option 3: Obfuscation (Current Best Practice for Static Sites)

Update your `main.js` with this obfuscated version:

```javascript
// Obfuscated configuration
const _0x4e2a=['YOUR_PUBLIC_KEY','YOUR_SERVICE_ID','YOUR_ADMIN_TEMPLATE_ID','YOUR_USER_TEMPLATE_ID'];
(function(){emailjs.init(_0x4e2a[0]);})();

// Use in your code
emailjs.send(_0x4e2a[1], _0x4e2a[2], formData)
```

### Additional Security Measures

1. **Enable CAPTCHA on EmailJS**
   - Go to your EmailJS dashboard
   - Enable reCAPTCHA in settings
   - Add to your form

2. **Set up Domain Whitelist**
   - In EmailJS settings, add your domain
   - Only allows emails from your website

3. **Monitor Usage**
   - Check EmailJS dashboard regularly
   - Set up alerts for unusual activity

## 📋 Pre-Deployment Checklist

- [ ] Replace all EmailJS placeholders with actual values
- [ ] Generate and add favicon files
- [ ] Update contact information (phone, email, address)
- [ ] Test contact form with your EmailJS setup
- [ ] Check all links work correctly
- [ ] Verify responsive design on mobile
- [ ] Update meta descriptions if needed
- [ ] Remove `favicon-generator.html` before deployment

## 🌐 Custom Domain (Optional)

To use a custom domain (like www.mafaze.com):

1. **Buy a domain** from:
   - Namecheap
   - GoDaddy
   - Google Domains

2. **Configure DNS**:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or use A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

3. **Update GitHub Pages**:
   - In repository settings → Pages
   - Add your custom domain
   - Enable HTTPS

## 🆘 Troubleshooting

### Website not showing on GitHub Pages?
- Wait 10-20 minutes for initial deployment
- Check if GitHub Pages is enabled in settings
- Ensure `index.html` is in the root directory

### Contact form not working?
- Verify EmailJS credentials are correct
- Check browser console for errors (F12)
- Ensure you're testing on a web server, not file://
- Check EmailJS dashboard for quota limits

### Images not loading?
- Check file paths are correct (case-sensitive on GitHub)
- Ensure images are in the `assets/images/` folder
- Use relative paths, not absolute

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Web Security Best Practices](https://developer.mozilla.org/en-US/docs/Web/Security)

---

Remember: The free EmailJS plan includes 200 emails/month, which is usually sufficient for small business websites. For higher volume, consider upgrading or using alternative solutions.
