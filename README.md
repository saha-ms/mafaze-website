# Mafaze IT Consulting Website

A modern, fully functional, SEO-optimized IT consulting company website with EmailJS integration for contact form functionality.

## Features

- ✅ Modern, responsive design
- ✅ SEO optimized with meta tags, structured data, and semantic HTML
- ✅ Contact form with EmailJS integration
- ✅ Fully functional careers page with job listings and application forms
- ✅ Smooth animations and interactions
- ✅ Mobile-friendly navigation
- ✅ Professional IT consulting layout
- ✅ Custom SVG illustrations and logo
- ✅ Performance optimized

## Setup Instructions

### 1. EmailJS Configuration

To enable the contact form functionality, you need to set up EmailJS:

1. **Create an EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Sign up for a free account

2. **Create an Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - Note your `Service ID`

3. **Create Email Templates**

   **Admin Template (for notifications to you):**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Name it "Admin Notification" or similar
   - Use this template:
   ```
   Subject: New Contact Form Submission from {{user_name}}
   
   From: {{user_name}}
   Email: {{user_email}}
   Phone: {{user_phone}}
   Service: {{service_type}}
   
   Message:
   {{message}}
   ```
   - Note your `Admin Template ID`

   **User Template (confirmation email to user):**
   - Create another template
   - Name it "User Confirmation" or similar
   - Use this template:
   ```
   Subject: Thank you for contacting Mafaze IT Consulting
   
   Dear {{user_name}},
   
   Thank you for reaching out to us regarding {{service_type}} services.
   
   We have received your message and will get back to you within 24 hours.
   
   Best regards,
   Mafaze IT Consulting Team
   ```
   - Note your `User Template ID`

   **Career Application Template (for job applications):**
   - Create a third template
   - Name it "Career Application" or similar
   - Use this template:
   ```
   Subject: New Job Application - {{job_position}}
   
   Application Type: {{application_type}}
   Position: {{job_position}}
   
   Applicant Details:
   Name: {{applicant_name}}
   Email: {{applicant_email}}
   Phone: {{applicant_phone}}
   LinkedIn: {{applicant_linkedin}}
   Area of Interest: {{area_of_interest}}
   
   Cover Letter:
   {{cover_letter}}
   
   Resume Link: {{resume_link}}
   ```
   - Note your `Career Template ID`

4. **Get Your Public Key**
   - Go to "Account" → "API Keys"
   - Copy your `Public Key`

5. **Update the JavaScript Files**
   - Open `assets/js/main.js` and `assets/js/careers.js`
   - Replace the following placeholders in both files:
     - `YOUR_PUBLIC_KEY` with your EmailJS public key
     - `YOUR_SERVICE_ID` with your service ID
     - `YOUR_ADMIN_TEMPLATE_ID` with your admin template ID
     - `YOUR_USER_TEMPLATE_ID` with your user template ID
     - `YOUR_CAREER_TEMPLATE_ID` with your career template ID (in careers.js)

### 2. Favicon Setup

1. Open `favicon-generator.html` in a web browser
2. Right-click on each canvas and save the images:
   - Save the 16x16 canvas as `favicon-16x16.png`
   - Save the 32x32 canvas as `favicon-32x32.png`
   - Save the 180x180 canvas as `apple-touch-icon.png`
3. Move these files to `assets/images/`
4. Convert one of them to `.ico` format using an online converter and save as `favicon.ico` in `assets/images/`

### 3. Deployment

The website is ready to deploy. You can host it on:
- **GitHub Pages** (free)
- **Netlify** (free tier available)
- **Vercel** (free tier available)
- **Traditional web hosting**

For static hosting, simply upload all files maintaining the folder structure.

## File Structure

```
Mafaze-Website/
├── index.html              # Main HTML file
├── careers.html            # Careers page with job listings
├── assets/
│   ├── css/
│   │   ├── style.css      # Main styles
│   │   └── careers.css    # Careers page styles
│   ├── js/
│   │   ├── main.js        # Main JavaScript with EmailJS
│   │   └── careers.js     # Careers page JavaScript
│   └── images/
│       ├── logo.svg       # Company logo
│       ├── logo-white.svg # White version for footer
│       ├── hero-illustration.svg
│       ├── about-us.svg
│       ├── culture-*.svg  # Culture section images
│       └── (favicon files)
├── favicon-generator.html  # Tool to generate favicons
└── README.md              # This file
```

## Customization

### Colors
Edit the CSS variables in `assets/css/style.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
    --accent-color: #8b5cf6;
    /* ... other colors ... */
}
```

### Content
- Update company information in `index.html`
- Modify services, about section, and contact details
- Replace placeholder phone numbers and addresses

### Images
- Replace SVG illustrations with actual images if preferred
- Update the logo in `assets/images/logo.svg`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Convert large images to WebP format
2. **Minify Files**: Minify CSS and JS files for production
3. **Enable Compression**: Use gzip compression on your server
4. **Use CDN**: Consider using a CDN for static assets

## SEO Checklist

- ✅ Meta descriptions
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (Schema.org)
- ✅ Semantic HTML
- ✅ Mobile-friendly design
- ✅ Fast loading speed
- ✅ Accessible navigation

## Support

For issues or questions about:
- **EmailJS**: Check their [documentation](https://www.emailjs.com/docs/)
- **Deployment**: Refer to your hosting provider's documentation
- **Customization**: Basic HTML/CSS/JS knowledge required

## License

This website template is free to use for your IT consulting business.

---

Built with ❤️ for Mafaze IT Consulting


===============================================================================================


# Mafaze IT Consulting Website

A modern, fully functional, SEO-optimized IT consulting company website with EmailJS integration for contact form functionality.

## Features

- ✅ Modern, responsive design
- ✅ SEO optimized with meta tags, structured data, and semantic HTML
- ✅ Contact form with EmailJS integration
- ✅ Fully functional careers page with job listings and application forms
- ✅ Smooth animations and interactions
- ✅ Mobile-friendly navigation
- ✅ Professional IT consulting layout
- ✅ Custom SVG illustrations and logo
- ✅ Performance optimized

## Setup Instructions

### 1. EmailJS Configuration

To enable the contact form functionality, you need to set up EmailJS:

1. **Create an EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Sign up for a free account

2. **Create an Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - Note your `Service ID`

3. **Create Email Templates**

   **Admin Template (for notifications to you):**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Name it "Admin Notification" or similar
   - Use this template:
   ```
   Subject: New Contact Form Submission from {{user_name}}
   
   From: {{user_name}}
   Email: {{user_email}}
   Phone: {{user_phone}}
   Service: {{service_type}}
   
   Message:
   {{message}}
   ```
   - Note your `Admin Template ID`

   **User Template (confirmation email to user):**
   - Create another template
   - Name it "User Confirmation" or similar
   - Use this template:
   ```
   Subject: Thank you for contacting Mafaze IT Consulting
   
   Dear {{user_name}},
   
   Thank you for reaching out to us regarding {{service_type}} services.
   
   We have received your message and will get back to you within 24 hours.
   
   Best regards,
   Mafaze IT Consulting Team
   ```
   - Note your `User Template ID`

   **Career Application Template (for job applications):**
   - Create a third template
   - Name it "Career Application" or similar
   - Use this template:
   ```
   Subject: New Job Application - {{job_position}}
   
   Application Type: {{application_type}}
   Position: {{job_position}}
   
   Applicant Details:
   Name: {{applicant_name}}
   Email: {{applicant_email}}
   Phone: {{applicant_phone}}
   LinkedIn: {{applicant_linkedin}}
   Area of Interest: {{area_of_interest}}
   
   Cover Letter:
   {{cover_letter}}
   
   Resume Link: {{resume_link}}
   ```
   - Note your `Career Template ID`

4. **Get Your Public Key**
   - Go to "Account" → "API Keys"
   - Copy your `Public Key`

5. **Update the JavaScript Files**
   - Open `assets/js/main.js` and `assets/js/careers.js`
   - Replace the following placeholders in both files:
     - `YOUR_PUBLIC_KEY` with your EmailJS public key
     - `YOUR_SERVICE_ID` with your service ID
     - `YOUR_ADMIN_TEMPLATE_ID` with your admin template ID
     - `YOUR_USER_TEMPLATE_ID` with your user template ID
     - `YOUR_CAREER_TEMPLATE_ID` with your career template ID (in careers.js)

### 2. Favicon Setup

1. Open `favicon-generator.html` in a web browser
2. Right-click on each canvas and save the images:
   - Save the 16x16 canvas as `favicon-16x16.png`
   - Save the 32x32 canvas as `favicon-32x32.png`
   - Save the 180x180 canvas as `apple-touch-icon.png`
3. Move these files to `assets/images/`
4. Convert one of them to `.ico` format using an online converter and save as `favicon.ico` in `assets/images/`

### 3. Deployment

The website is ready to deploy. You can host it on:
- **GitHub Pages** (free)
- **Netlify** (free tier available)
- **Vercel** (free tier available)
- **Traditional web hosting**

For static hosting, simply upload all files maintaining the folder structure.

## File Structure

```
Mafaze-Website/
├── index.html              # Main HTML file
├── careers.html            # Careers page with job listings
├── assets/
│   ├── css/
│   │   ├── style.css      # Main styles
│   │   └── careers.css    # Careers page styles
│   ├── js/
│   │   ├── main.js        # Main JavaScript with EmailJS
│   │   └── careers.js     # Careers page JavaScript
│   └── images/
│       ├── logo.svg       # Company logo
│       ├── logo-white.svg # White version for footer
│       ├── hero-illustration.svg
│       ├── about-us.svg
│       ├── culture-*.svg  # Culture section images
│       └── (favicon files)
├── favicon-generator.html  # Tool to generate favicons
└── README.md              # This file
```

## Customization

### Colors
Edit the CSS variables in `assets/css/style.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
    --accent-color: #8b5cf6;
    /* ... other colors ... */
}
```

### Content
- Update company information in `index.html`
- Modify services, about section, and contact details
- Replace placeholder phone numbers and addresses

### Images
- Replace SVG illustrations with actual images if preferred
- Update the logo in `assets/images/logo.svg`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Convert large images to WebP format
2. **Minify Files**: Minify CSS and JS files for production
3. **Enable Compression**: Use gzip compression on your server
4. **Use CDN**: Consider using a CDN for static assets

## SEO Checklist

- ✅ Meta descriptions
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (Schema.org)
- ✅ Semantic HTML
- ✅ Mobile-friendly design
- ✅ Fast loading speed
- ✅ Accessible navigation

## Support

For issues or questions about:
- **EmailJS**: Check their [documentation](https://www.emailjs.com/docs/)
- **Deployment**: Refer to your hosting provider's documentation
- **Customization**: Basic HTML/CSS/JS knowledge required

## License

This website template is free to use for your IT consulting business.

---

Built with ❤️ for Mafaze IT Consulting