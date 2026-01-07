document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        const isVisible = navLinks.style.display === 'flex';
        navLinks.style.display = isVisible ? 'none' : 'flex';
        hamburger.innerHTML = isVisible ? 
            '<i class="fas fa-bars"></i>' : 
            '<i class="fas fa-times"></i>';
        
        if (!isVisible) {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'var(--primary-light)';
            navLinks.style.padding = '30px';
            navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
            navLinks.style.gap = '20px';
            navLinks.style.zIndex = '1000';
            navLinks.style.alignItems = 'center';
            navLinks.style.borderTop = '1px solid rgba(255, 0, 255, 0.2)';
        }
    });
    
    // Set minimum date for reservations
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        const today = new Date().toISOString().split('T')[0];
        input.min = today;
        
        // Set default to next Friday
        const nextFriday = getNextFriday();
        input.value = nextFriday.toISOString().split('T')[0];
    });
    
    function getNextFriday() {
        const today = new Date();
        const dayOfWeek = today.getDay(); // 0 = Sunday, 5 = Friday
        const daysUntilFriday = (5 - dayOfWeek + 7) % 7 || 7;
        const nextFriday = new Date(today);
        nextFriday.setDate(today.getDate() + daysUntilFriday);
        return nextFriday;
    }
    
    // Ticket and reservation buttons
    const actionButtons = document.querySelectorAll('.btn-primary, .btn-outline, .btn-tickets');
    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.textContent.includes('Tickets') || 
                this.textContent.includes('Reserve') ||
                this.textContent.includes('Details')) {
                
                e.preventDefault();
                
                if (this.closest('.event-card')) {
                    const eventName = this.closest('.event-info').querySelector('h3').textContent;
                    const eventDate = this.closest('.event-card').querySelector('.date').textContent;
                    const eventMonth = this.closest('.event-card').querySelector('.month').textContent;
                    
                    alert(`Booking ${eventName} for ${eventMonth} ${eventDate}\n\nRedirecting to ticketing system...`);
                } else if (this.closest('.bottle-card')) {
                    const tier = this.closest('.bottle-card').querySelector('.bottle-tier').textContent;
                    const price = this.closest('.bottle-card').querySelector('.bottle-price').textContent;
                    
                    alert(`Reserving ${tier} Bottle Service ${price}\n\nA VIP host will contact you shortly.`);
                }
            }
        });
    });
    
    // Reservation form submission
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const date = this.querySelector('input[type="date"]').value;
            const groupSize = this.querySelector('select').value;
            const requests = this.querySelector('textarea').value;
            
            if (!name || !email || !phone || !date || !groupSize) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Format date for display
            const dateObj = new Date(date);
            const formattedDate = dateObj.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            alert(`VIP Reservation Submitted!\n\nName: ${name}\nDate: ${formattedDate}\nGroup Size: ${groupSize}\n\nOur VIP team will contact you within 24 hours to confirm.`);
            
            this.reset();
            
            // Reset date to next Friday
            const nextFriday = getNextFriday();
            this.querySelector('input[type="date"]').value = nextFriday.toISOString().split('T')[0];
        });
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            
            if (email) {
                alert('Subscribed to Nexus Nightclub newsletter!\n\nYou will receive exclusive offers and event announcements.');
                this.reset();
            }
        });
    }
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (window.innerWidth <= 992) {
                    navLinks.style.display = 'none';
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        // Update navbar
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 15, 35, 0.98)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'rgba(15, 15, 35, 0.9)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });
    
    // Add glowing effect to gallery items on hover
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const img = this.querySelector('.gallery-img');
            img.style.boxShadow = '0 0 20px var(--accent), 0 0 40px var(--accent)';
        });
        
        item.addEventListener('mouseleave', function() {
            const img = this.querySelector('.gallery-img');
            img.style.boxShadow = '';
        });
    });
    
    // Animate neon elements
    function animateNeon() {
        const neonElements = document.querySelectorAll('.hero-highlight, .vip-highlight, .logo');
        neonElements.forEach(element => {
            element.style.animation = 'none';
            void element.offsetWidth; // Trigger reflow
            element.style.animation = 'glow 2s ease-in-out infinite alternate';
        });
    }
    
    // Add CSS animation for glow effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes glow {
            from {
                text-shadow: 0 0 10px var(--accent), 0 0 20px var(--accent);
            }
            to {
                text-shadow: 0 0 20px var(--accent), 0 0 30px var(--accent), 0 0 40px var(--accent);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Start animation
    animateNeon();
    setInterval(animateNeon, 4000);
});