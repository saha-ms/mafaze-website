// Initialize EmailJS (same as main.js)
(function() {
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init('095gGS9ru4HZ8Devq');
})();

// Job Details Database
const jobDetails = {
    'Senior Cloud Architect': {
        category: 'engineering',
        location: 'Remote',
        type: 'Full-time',
        description: 'We are seeking an experienced Senior Cloud Architect to lead our cloud initiatives and design scalable, secure, and cost-effective cloud solutions for our enterprise clients.',
        responsibilities: [
            'Design and implement cloud architecture strategies for enterprise clients',
            'Lead cloud migration projects from on-premises to cloud platforms',
            'Develop cloud governance frameworks and best practices',
            'Collaborate with development teams to ensure cloud-native application design',
            'Optimize cloud infrastructure for performance and cost',
            'Provide technical leadership and mentorship to junior architects'
        ],
        requirements: [
            'Bachelor\'s degree in Computer Science or related field',
            '5+ years of experience in cloud architecture',
            'Expert knowledge of AWS, Azure, or Google Cloud Platform',
            'Strong experience with Infrastructure as Code (Terraform, CloudFormation)',
            'Excellent understanding of cloud security best practices',
            'AWS Solutions Architect Professional or equivalent certification preferred',
            'Strong communication and client-facing skills'
        ],
        benefits: [
            'Competitive salary ($150k - $200k based on experience)',
            'Fully remote work environment',
            'Comprehensive health, dental, and vision insurance',
            '401(k) with company matching',
            'Professional development budget',
            'Flexible PTO policy'
        ]
    },
    'Cybersecurity Consultant': {
        category: 'security',
        location: 'New York, NY',
        type: 'Full-time',
        description: 'Join our cybersecurity team to help protect our clients from evolving threats. You\'ll conduct assessments, implement security solutions, and provide strategic guidance.',
        responsibilities: [
            'Conduct comprehensive security assessments and penetration testing',
            'Develop and implement security policies and procedures',
            'Design security architectures for client environments',
            'Respond to security incidents and conduct forensic analysis',
            'Provide security awareness training to client organizations',
            'Stay current with emerging threats and security technologies'
        ],
        requirements: [
            'Bachelor\'s degree in Cybersecurity, Computer Science, or related field',
            '3+ years of experience in cybersecurity',
            'CISSP, CEH, or similar certification required',
            'Experience with SIEM tools and security frameworks',
            'Knowledge of compliance standards (SOC 2, PCI-DSS, HIPAA)',
            'Strong analytical and problem-solving skills',
            'Ability to obtain security clearance if required'
        ],
        benefits: [
            'Competitive salary ($120k - $160k based on experience)',
            'Hybrid work arrangement',
            'Comprehensive health benefits',
            'Annual security conference attendance',
            'Certification reimbursement',
            'Performance bonuses'
        ]
    },
    'Full Stack Developer': {
        category: 'engineering',
        location: 'Remote',
        type: 'Full-time',
        description: 'We\'re looking for a talented Full Stack Developer to build custom web applications for our diverse client base using modern technologies.',
        responsibilities: [
            'Develop responsive web applications using React and Node.js',
            'Design and implement RESTful APIs and microservices',
            'Collaborate with UI/UX designers to implement pixel-perfect designs',
            'Write clean, maintainable, and well-documented code',
            'Participate in code reviews and agile development processes',
            'Troubleshoot and debug applications across the full stack'
        ],
        requirements: [
            'Bachelor\'s degree in Computer Science or equivalent experience',
            '3+ years of full stack development experience',
            'Proficiency in JavaScript, React, Node.js, and modern web technologies',
            'Experience with PostgreSQL, MongoDB, or similar databases',
            'Knowledge of cloud platforms (AWS, Azure, or GCP)',
            'Strong understanding of web security best practices',
            'Excellent problem-solving and communication skills'
        ],
        benefits: [
            'Competitive salary ($100k - $140k based on experience)',
            'Fully remote position',
            'Flexible working hours',
            'Latest MacBook Pro or equivalent',
            'Learning and development budget',
            'Health and wellness stipend'
        ]
    },
    'Data Engineer': {
        category: 'data',
        location: 'San Francisco, CA',
        type: 'Full-time',
        description: 'Join our data team to design and build robust data pipelines and analytics platforms that help our clients make data-driven decisions.',
        responsibilities: [
            'Design and implement scalable data pipelines and ETL processes',
            'Build and maintain data warehouses and data lakes',
            'Develop real-time streaming data solutions',
            'Optimize data systems for performance and reliability',
            'Collaborate with data scientists and analysts',
            'Implement data governance and quality frameworks'
        ],
        requirements: [
            'Bachelor\'s degree in Computer Science, Data Science, or related field',
            '4+ years of data engineering experience',
            'Strong proficiency in Python and SQL',
            'Experience with Apache Spark, Airflow, and similar tools',
            'Knowledge of cloud data platforms (Snowflake, BigQuery, Redshift)',
            'Understanding of data modeling and warehouse design',
            'Experience with streaming technologies (Kafka, Kinesis) is a plus'
        ],
        benefits: [
            'Competitive salary ($130k - $170k based on experience)',
            'Hybrid work arrangement (2 days in office)',
            'Equity compensation',
            'Comprehensive benefits package',
            'Annual tech conference attendance',
            'Relocation assistance available'
        ]
    },
    'IT Strategy Consultant': {
        category: 'consulting',
        location: 'Chicago, IL',
        type: 'Full-time',
        description: 'Lead digital transformation initiatives and provide strategic IT guidance to help our clients achieve their business objectives.',
        responsibilities: [
            'Develop IT strategies aligned with business goals',
            'Lead digital transformation initiatives',
            'Conduct IT assessments and gap analyses',
            'Create technology roadmaps and implementation plans',
            'Facilitate executive workshops and presentations',
            'Manage client relationships and project deliverables'
        ],
        requirements: [
            'Bachelor\'s degree required, MBA preferred',
            '5+ years of IT consulting or strategy experience',
            'Strong understanding of enterprise architecture',
            'Experience with business process optimization',
            'Excellent presentation and communication skills',
            'Ability to translate technical concepts for business audiences',
            'Willingness to travel up to 50%'
        ],
        benefits: [
            'Competitive salary ($140k - $180k based on experience)',
            'Performance-based bonuses',
            'Comprehensive travel benefits',
            'Executive coaching and leadership development',
            'Flexible work arrangements',
            'Partnership track opportunity'
        ]
    },
    'Junior DevOps Engineer': {
        category: 'engineering',
        location: 'Remote',
        type: 'Full-time',
        description: 'Start your DevOps career with us! We\'re looking for motivated individuals to join our infrastructure team and support our CI/CD initiatives.',
        responsibilities: [
            'Support CI/CD pipeline development and maintenance',
            'Assist in infrastructure automation using IaC tools',
            'Monitor system performance and troubleshoot issues',
            'Document processes and create runbooks',
            'Collaborate with development teams on deployment strategies',
            'Learn and implement DevOps best practices'
        ],
        requirements: [
            'Bachelor\'s degree in Computer Science or related field',
            '0-2 years of experience in DevOps or system administration',
            'Basic knowledge of Linux/Unix systems',
            'Familiarity with Git and version control',
            'Understanding of Docker and containerization',
            'Eagerness to learn and grow in DevOps',
            'Strong problem-solving skills'
        ],
        benefits: [
            'Competitive salary ($70k - $90k based on experience)',
            'Comprehensive mentorship program',
            'Paid training and certifications',
            'Fully remote position',
            'Flexible hours',
            'Clear career progression path'
        ]
    }
};

// DOM Elements
const filterButtons = document.querySelectorAll('.filter-btn');
const jobCards = document.querySelectorAll('.job-card');
const modal = document.getElementById('job-modal');
const modalTitle = document.getElementById('modal-job-title');
const modalDetails = document.getElementById('modal-job-details');
const closeModal = document.querySelector('.close-modal');
const generalAppForm = document.getElementById('general-application-form');
const jobAppForm = document.getElementById('job-application-form');
const navbar = document.getElementById('navbar');
const navMenu = document.querySelector('.nav-menu');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const backToTopBtn = document.getElementById('back-to-top');

// Navigation functionality (same as main.js)
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

mobileNavToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
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

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Job Filter Functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        // Filter job cards
        jobCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hidden');
                card.style.display = 'block';
            } else {
                card.classList.add('hidden');
                setTimeout(() => {
                    if (card.classList.contains('hidden')) {
                        card.style.display = 'none';
                    }
                }, 300);
            }
        });
    });
});

// Open Job Modal
window.openJobModal = function(jobTitle, category) {
    const jobData = jobDetails[jobTitle];
    if (!jobData) return;
    
    modalTitle.textContent = jobTitle;
    
    // Build job details HTML
    let detailsHTML = `
        <div class="job-detail-section">
            <p>${jobData.description}</p>
        </div>
        
        <div class="job-detail-section">
            <h4>Key Responsibilities</h4>
            <ul>
                ${jobData.responsibilities.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div class="job-detail-section">
            <h4>Requirements</h4>
            <ul>
                ${jobData.requirements.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div class="job-detail-section">
            <h4>What We Offer</h4>
            <ul>
                ${jobData.benefits.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;
    
    modalDetails.innerHTML = detailsHTML;
    document.getElementById('job_position').value = jobTitle;
    
    // Reset form
    jobAppForm.reset();
    document.getElementById('modal-application-status').className = 'form-status';
    document.getElementById('modal-application-status').textContent = '';
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

// Close Modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Handle General Application Form
generalAppForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        applicant_name: document.getElementById('applicant_name').value,
        applicant_email: document.getElementById('applicant_email').value,
        applicant_phone: document.getElementById('applicant_phone').value,
        applicant_linkedin: document.getElementById('applicant_linkedin').value,
        area_of_interest: document.getElementById('area_of_interest').value,
        cover_letter: document.getElementById('cover_letter').value,
        resume_link: document.getElementById('resume_link').value,
        application_type: 'General Application'
    };
    
    const submitBtn = generalAppForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;
    
    // Send application via EmailJS
    // Replace 'YOUR_SERVICE_ID' and 'YOUR_CAREER_TEMPLATE_ID' with actual values
    emailjs.send('service_fpl6ebi', 'career_atemplate', formData)
        .then(() => {
            document.getElementById('application-status').className = 'form-status success';
            document.getElementById('application-status').textContent = 'Thank you for your application! We\'ll review it and get back to you soon.';
            generalAppForm.reset();
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            
            setTimeout(() => {
                document.getElementById('application-status').className = 'form-status';
                document.getElementById('application-status').textContent = '';
            }, 5000);
        })
        .catch((error) => {
            console.error('EmailJS error:', error);
            document.getElementById('application-status').className = 'form-status error';
            document.getElementById('application-status').textContent = 'Sorry, there was an error submitting your application. Please try again.';
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        });
});

// Handle Job Application Form (in modal)
jobAppForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        applicant_name: document.getElementById('modal_applicant_name').value,
        applicant_email: document.getElementById('modal_applicant_email').value,
        applicant_phone: document.getElementById('modal_applicant_phone').value,
        cover_letter: document.getElementById('modal_cover_letter').value,
        resume_link: document.getElementById('modal_resume_link').value,
        job_position: document.getElementById('job_position').value,
        application_type: 'Job Application'
    };
    
    const submitBtn = jobAppForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;
    
    // Send application via EmailJS
    emailjs.send('service_fpl6ebi', 'career_atemplate', formData)
        .then(() => {
            document.getElementById('modal-application-status').className = 'form-status success';
            document.getElementById('modal-application-status').textContent = 'Application submitted successfully! We\'ll be in touch soon.';
            jobAppForm.reset();
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 3000);
        })
        .catch((error) => {
            console.error('EmailJS error:', error);
            document.getElementById('modal-application-status').className = 'form-status error';
            document.getElementById('modal-application-status').textContent = 'Sorry, there was an error. Please try again.';
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        });
});

// Form input animations
const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

formInputs.forEach(input => {
    if (input.value) {
        input.classList.add('has-value');
    }
    
    if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') {
        input.setAttribute('placeholder', ' ');
    }
    
    input.addEventListener('blur', () => {
        if (input.value) {
            input.classList.add('has-value');
        } else {
            input.classList.remove('has-value');
        }
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

document.querySelectorAll('.animate-fade-up').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});
