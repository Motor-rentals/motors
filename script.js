
document.addEventListener('DOMContentLoaded', function () {
// Testimonial data
const testimonials = [
    {
        name: "John Smith",
        company: "Tech Innovations Inc.",
        rating: 5,
        text: "Avechile transformed our hiring process. We found 3 perfect candidates for senior developer roles in just 2 weeks after months of searching on our own. Their vetting process is exceptional.",
        photo: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Sarah Johnson",
        company: "Global Solutions Ltd.",
        rating: 4,
        text: "The quality of candidates Avechile provided was noticeably better than other agencies we've worked with. They truly understand our industry needs and company culture.",
        photo: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Michael Chen",
        company: "StartUp Ventures",
        rating: 5,
        text: "As a startup, we needed specialized talent quickly. Avechile delivered beyond our expectations. Their candidates hit the ground running and became valuable team members immediately.",
        photo: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        name: "Emily Rodriguez",
        company: "Enterprise Corp",
        rating: 5,
        text: "We've used Avechile for multiple executive searches. Their discreet approach and access to passive candidates is unmatched. They found us a perfect CFO when no one else could.",
        photo: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
        name: "David Wilson",
        company: "Financial Partners",
        rating: 4,
        text: "The time-to-hire metrics improved by 40% after we started working with Avechile. Their recruiters are true partners who invest time to understand our specific requirements.",
        photo: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        name: "Lisa Thompson",
        company: "Healthcare Solutions",
        rating: 5,
        text: "Avechile's niche focus on healthcare IT made all the difference. They sourced candidates with exactly the right blend of clinical and technical expertise we needed.",
        photo: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];

// DOM elements
const track = document.querySelector('.testimonials-track');
const dotsContainer = document.querySelector('.slider-dots');

// Slider state
let currentSlide = 0;
const slidesToShow = 3;
const totalSlides = Math.ceil(testimonials.length / slidesToShow);
let cardWidth = 0;

// Create testimonial cards
function createTestimonialCards() {
    testimonials.forEach((testimonial) => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
                            <div class="client-info">
                                <img src="${testimonial.photo}" alt="${testimonial.name}" class="client-photo">
                                <div>
                                    <h4>${testimonial.name}</h4>
                                    <p class="client-company">${testimonial.company}</p>
                                    <div class="rating">${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}</div>
                                </div>
                            </div>
                            <p class="testimonial-text">"${testimonial.text}"</p>
                        `;
        track.appendChild(card);
    });

    // Calculate card width after cards are created
    if (track.children.length > 0) {
        const cardStyle = window.getComputedStyle(track.children[0]);
        cardWidth = track.children[0].offsetWidth +
            parseFloat(cardStyle.marginLeft) +
            parseFloat(cardStyle.marginRight);
    }
}

// Create navigation dots
function createDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.dataset.slide = i;
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

// Update slider position
function updateSlider() {
    const newPosition = -currentSlide * cardWidth * slidesToShow;
    track.style.transform = `translateX(${newPosition}px)`;

    // Update active dot
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Navigate to specific slide
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSlider();
}

// Handle window resize
function handleResize() {
    if (track.children.length > 0) {
        const cardStyle = window.getComputedStyle(track.children[0]);
        cardWidth = track.children[0].offsetWidth +
            parseFloat(cardStyle.marginLeft) +
            parseFloat(cardStyle.marginRight);
        updateSlider();
    }
}

// Initialize slider
function initSlider() {
    createTestimonialCards();
    createDots();
    updateSlider();
    window.addEventListener('resize', handleResize);
}

// Start the slider
initSlider();
});




/*floating menu script */
const floatingMenu = document.getElementById('floatingMenu');
const menuButton = document.getElementById('menuButton');

// Toggle menu
menuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    floatingMenu.classList.toggle('active');
});

// Close when clicking outside
document.addEventListener('click', () => {
    floatingMenu.classList.remove('active');
});

// Prevent closing when clicking menu
floatingMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});



// Add intersection observer for scroll animations
document.addEventListener('DOMContentLoaded', function () {
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.slide-up, .slide-left, .slide-right, .fade-in');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translate(0, 0)';
            }
        });
    };

    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.slide-up, .slide-left, .slide-right, .fade-in');
    animatedElements.forEach(el => {
        if (el.classList.contains('slide-up')) {
            el.style.transform = 'translateY(50px)';
        } else if (el.classList.contains('slide-left')) {
            el.style.transform = 'translateX(50px)';
        } else if (el.classList.contains('slide-right')) {
            el.style.transform = 'translateX(-50px)';
        }
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);

    // Run once on page load
    animateOnScroll();

    // Add hover effect to buttons
    const buttons = document.querySelectorAll('button, .price-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            this.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    }
    
    // Floating menu functionality
    const floatingMenu = document.querySelector('.floating-menu');
    if (floatingMenu) {
        floatingMenu.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
});

// Add this to your CSS if not already present
