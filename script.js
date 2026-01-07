<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Azure Heights | Luxury Beachfront Resort</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <a href="#" class="logo">
                <i class="fas fa-umbrella-beach"></i>
                <span>Azure<span class="logo-light">Heights</span></span>
            </a>
            
            <div class="nav-links">
                <a href="#home" class="active">Home</a>
                <a href="#rooms">Rooms & Suites</a>
                <a href="#dining">Dining</a>
                <a href="#spa">Spa & Wellness</a>
                <a href="#activities">Activities</a>
                <a href="#contact">Contact</a>
                <a href="#booking" class="btn-book">Book Now</a>
            </div>
            
            <button class="hamburger">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-slider">
            <div class="slide active">
                <div class="slide-content">
                    <h1>EXPERIENCE <span class="hero-highlight">OCEANFRONT</span> LUXURY</h1>
                    <p>Award-winning beachfront resort with panoramic ocean views</p>
                    <div class="hero-buttons">
                        <a href="#rooms" class="btn btn-primary">View Accommodations</a>
                        <a href="#booking" class="btn btn-secondary">Check Availability</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="hero-features">
            <div class="feature">
                <i class="fas fa-wifi"></i>
                <span>Free High-Speed WiFi</span>
            </div>
            <div class="feature">
                <i class="fas fa-swimming-pool"></i>
                <span>Infinity Pool</span>
            </div>
            <div class="feature">
                <i class="fas fa-concierge-bell"></i>
                <span>24/7 Concierge</span>
            </div>
            <div class="feature">
                <i class="fas fa-spa"></i>
                <span>Luxury Spa</span>
            </div>
        </div>
    </section>

    <!-- Booking Widget -->
    <section class="booking-widget" id="booking">
        <div class="container">
            <div class="widget-container">
                <h3>Find Your Perfect Stay</h3>
                <form class="booking-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label>Check In</label>
                            <input type="date" id="checkin">
                        </div>
                        
                        <div class="form-group">
                            <label>Check Out</label>
                            <input type="date" id="checkout">
                        </div>
                        
                        <div class="form-group">
                            <label>Guests</label>
                            <select>
                                <option>1 Room, 2 Adults</option>
                                <option>1 Room, 1 Adult</option>
                                <option>1 Room, 2 Adults, 1 Child</option>
                                <option>2 Rooms, 4 Adults</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label>Room Type</label>
                            <select>
                                <option>All Room Types</option>
                                <option>Ocean View Room</option>
                                <option>Beachfront Suite</option>
                                <option>Presidential Suite</option>
                                <option>Family Villa</option>
                            </select>
                        </div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Check Availability</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Rooms & Suites -->
    <section class="section rooms" id="rooms">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Rooms & Suites</h2>
                <p class="section-subtitle">Luxurious accommodations with breathtaking views</p>
            </div>
            
            <div class="rooms-grid">
                <div class="room-card">
                    <div class="room-img">
                        <i class="fas fa-bed"></i>
                    </div>
                    <div class="room-info">
                        <h3>Ocean View Room</h3>
                        <p>Private balcony with panoramic ocean views</p>
                        <div class="room-features">
                            <span><i class="fas fa-user"></i> 2 Guests</span>
                            <span><i class="fas fa-ruler-combined"></i> 450 sq ft</span>
                            <span><i class="fas fa-bed"></i> King Bed</span>
                        </div>
                        <div class="room-price">
                            <span class="price">$299</span>
                            <span class="period">/ night</span>
                        </div>
                        <a href="#booking" class="btn-book-room">Book Now</a>
                    </div>
                </div>
                
                <div class="room-card featured">
                    <div class="room-badge">MOST POPULAR</div>
                    <div class="room-img">
                        <i class="fas fa-couch"></i>
                    </div>
                    <div class="room-info">
                        <h3>Beachfront Suite</h3>
                        <p>Direct beach access with private terrace</p>
                        <div class="room-features">
                            <span><i class="fas fa-user"></i> 4 Guests</span>
                            <span><i class="fas fa-ruler-combined"></i> 750 sq ft</span>
                            <span><i class="fas fa-bed"></i> 2 King Beds</span>
                        </div>
                        <div class="room-price">
                            <span class="price">$499</span>
                            <span class="period">/ night</span>
                        </div>
                        <a href="#booking" class="btn-book-room">Book Now</a>
                    </div>
                </div>
                
                <div class="room-card">
                    <div class="room-img">
                        <i class="fas fa-crown"></i>
                    </div>
                    <div class="room-info">
                        <h3>Presidential Suite</h3>
                        <p>Ultimate luxury with 360° ocean views</p>
                        <div class="room-features">
                            <span><i class="fas fa-user"></i> 6 Guests</span>
                            <span><i class="fas fa-ruler-combined"></i> 1,200 sq ft</span>
                            <span><i class="fas fa-bed"></i> 3 Bedrooms</span>
                        </div>
                        <div class="room-price">
                            <span class="price">$899</span>
                            <span class="period">/ night</span>
                        </div>
                        <a href="#booking" class="btn-book-room">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Dining -->
    <section class="section dining" id="dining">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Dining Experiences</h2>
                <p class="section-subtitle">World-class cuisine with ocean views</p>
            </div>
            
            <div class="dining-grid">
                <div class="restaurant-card">
                    <div class="restaurant-img">
                        <i class="fas fa-utensils"></i>
                    </div>
                    <h3>Azure Restaurant</h3>
                    <p>Fine dining with Mediterranean cuisine</p>
                    <div class="restaurant-hours">
                        <span>Breakfast: 7am-11am</span>
                        <span>Dinner: 6pm-11pm</span>
                    </div>
                </div>
                
                <div class="restaurant-card">
                    <div class="restaurant-img">
                        <i class="fas fa-cocktail"></i>
                    </div>
                    <h3>Oceanview Bar</h3>
                    <p>Craft cocktails and light bites</p>
                    <div class="restaurant-hours">
                        <span>Open: 12pm-12am</span>
                        <span>Happy Hour: 4pm-7pm</span>
                    </div>
                </div>
                
                <div class="restaurant-card">
                    <div class="restaurant-img">
                        <i class="fas fa-coffee"></i>
                    </div>
                    <h3>Beach Café</h3>
                    <p>Casual beachfront dining</p>
                    <div class="restaurant-hours">
                        <span>Open: 8am-10pm</span>
                        <span>Poolside Service Available</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Spa & Wellness -->
    <section class="section spa" id="spa">
        <div class="container">
            <div class="spa-content">
                <div class="spa-text">
                    <h2>LUXURY <span class="spa-highlight">SPA</span> & WELLNESS</h2>
                    <p>Rejuvenate your mind, body, and spirit at our award-winning spa</p>
                    
                    <div class="spa-features">
                        <div class="feature">
                            <i class="fas fa-spa"></i>
                            <div>
                                <h4>Holistic Treatments</h4>
                                <p>Customized massages and therapies</p>
                            </div>
                        </div>
                        
                        <div class="feature">
                            <i class="fas fa-hot-tub"></i>
                            <div>
                                <h4>Thermal Suite</h4>
                                <p>Sauna, steam room, and hydrotherapy</p>
                            </div>
                        </div>
                        
                        <div class="feature">
                            <i class="fas fa-dumbbell"></i>
                            <div>
                                <h4>Fitness Center</h4>
                                <p>State-of-the-art equipment with ocean views</p>
                            </div>
                        </div>
                        
                        <div class="feature">
                            <i class="fas fa-water"></i>
                            <div>
                                <h4>Yoga Pavilion</h4>
                                <p>Daily classes on the beach</p>
                            </div>
                        </div>
                    </div>
                    
                    <a href="#spa-booking" class="btn btn-primary">Book Spa Treatment</a>
                </div>
                
                <div class="spa-image">
                    <div class="image-placeholder">
                        <i class="fas fa-spa"></i>
                        <p>Luxury Spa</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Activities -->
    <section class="section activities" id="activities">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Resort Activities</h2>
                <p class="section-subtitle">Endless entertainment and adventures</p>
            </div>
            
            <div class="activities-grid">
                <div class="activity-card">
                    <div class="activity-icon">
                        <i class="fas fa-water"></i>
                    </div>
                    <h3>Water Sports</h3>
                    <p>Kayaking, paddleboarding, and snorkeling</p>
                </div>
                
                <div class="activity-card">
                    <div class="activity-icon">
                        <i class="fas fa-golf-ball"></i>
                    </div>
                    <h3>Golf Course</h3>
                    <p>Championship 18-hole course</p>
                </div>
                
                <div class="activity-card">
                    <div class="activity-icon">
                        <i class="fas fa-hiking"></i>
                    </div>
                    <h3>Nature Trails</h3>
                    <p>Guided hikes through tropical forests</p>
                </div>
                
                <div class="activity-card">
                    <div class="activity-icon">
                        <i class="fas fa-child"></i>
                    </div>
                    <h3>Kids Club</h3>
                    <p>Daily activities for children 4-12</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Guest Reviews</h2>
                <p class="section-subtitle">What our guests say about their stay</p>
            </div>
            
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p>"Absolutely breathtaking views and impeccable service. The spa treatments were heavenly!"</p>
                    <div class="guest-info">
                        <strong>Sarah Johnson</strong>
                        <span>Stayed in Beachfront Suite</span>
                    </div>
                </div>
                
                <div class="testimonial-card">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p>"Perfect family vacation. The kids club was amazing and the staff went above and beyond."</p>
                    <div class="guest-info">
                        <strong>Michael Chen</strong>
                        <span>Family Vacation</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact & Footer -->
    <footer class="footer" id="contact">
        <div class="container">
            <div class="footer-content">
                <div class="footer-col">
                    <a href="#" class="logo">
                        <i class="fas fa-umbrella-beach"></i>
                        <span>Azure<span class="logo-light">Heights</span></span>
                    </a>
                    <p>Luxury beachfront resort offering unforgettable experiences with panoramic ocean views.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-tripadvisor"></i></a>
                    </div>
                </div>
                
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <a href="#home">Home</a>
                    <a href="#rooms">Rooms & Suites</a>
                    <a href="#dining">Dining</a>
                    <a href="#spa">Spa & Wellness</a>
                </div>
                
                <div class="footer-col">
                    <h4>Contact Info</h4>
                    <p><i class="fas fa-map-marker-alt"></i> 123 Ocean Boulevard</p>
                    <p><i class="fas fa-phone"></i> (555) 123-4567</p>
                    <p><i class="fas fa-envelope"></i> reservations@azureheights.com</p>
                    <p><i class="fas fa-clock"></i> Front Desk: 24/7</p>
                </div>
                
                <div class="footer-col">
                    <h4>Newsletter</h4>
                    <p>Subscribe for special offers and resort updates</p>
                    <form class="newsletter-form">
                        <input type="email" placeholder="Your Email">
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2024 Azure Heights Resort. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
