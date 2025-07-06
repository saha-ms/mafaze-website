// Initialize EmailJS
(function() {
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init('095gGS9ru4HZ8Devq');
})();

// DOM Elements
const navbar = document.getElementById('navbar');
const navMenu = document.querySelector('.nav-menu');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopBtn = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Show/hide back to top button
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// Mobile navigation toggle
mobileNavToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = mobileNavToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const href = link.getAttribute('href');
        
        // Always close mobile menu when clicking any nav link
        navMenu.classList.remove('active');
        const spans = mobileNavToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Check if it's an internal anchor link (starts with #)
        if (href.startsWith('#')) {
            e.preventDefault(); // Only prevent default for internal links
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
        // For external links (like careers.html), let the default behavior happen
        // No e.preventDefault() needed here
    });
});


// Back to top button
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact form submission with EmailJS
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        user_name: document.getElementById('user_name').value,
        user_email: document.getElementById('user_email').value,
        user_phone: document.getElementById('user_phone').value,
        service_type: document.getElementById('service_type').value,
        message: document.getElementById('message').value,
        reply_to: document.getElementById('user_email').value
    };
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;
    

    // Send email to admin using admin template
    // Replace 'YOUR_SERVICE_ID' and 'YOUR_ADMIN_TEMPLATE_ID' with your actual EmailJS values
    emailjs.send('service_fpl6ebi', 'admin_template', formData)
        .then(() => {
            // Send confirmation email to user using user template
            // Replace 'YOUR_USER_TEMPLATE_ID' with your actual EmailJS user template ID
            return emailjs.send('service_fpl6ebi', 'user_template', {
                user_name: formData.user_name,
                user_email: formData.user_email,
                service_type: formData.service_type
            });
        })
        .then(() => {
            // Show success message
            formStatus.className = 'form-status success';
            formStatus.textContent = 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.';
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formStatus.className = 'form-status';
                formStatus.textContent = '';
            }, 5000);
        })
        .catch((error) => {
            // Show error message
            console.error('EmailJS error:', error);
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Sorry, there was an error sending your message. Please try again later.';
            
            // Reset button
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            
            // Hide error message after 5 seconds
            setTimeout(() => {
                formStatus.className = 'form-status';
                formStatus.textContent = '';
            }, 5000);
        });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.animate-fade-up, .animate-fade-left, .animate-fade-right').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Form input animations
const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

formInputs.forEach(input => {
    // Check if input has value on load
    if (input.value) {
        input.classList.add('has-value');
    }
    
    // Add placeholder for proper label animation
    if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') {
        input.setAttribute('placeholder', ' ');
    }
    
    // Add has-value class when input has value
    input.addEventListener('blur', () => {
        if (input.value) {
            input.classList.add('has-value');
        } else {
            input.classList.remove('has-value');
        }
    });
});

// Preloader (optional - uncomment if you want to add a preloader)
/*
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});
*/

// Console message
console.log('%c Welcome to Mafaze IT Consulting! ', 'background: #2563eb; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('Looking for expert IT consulting services? Visit https://www.mafaze.com');
