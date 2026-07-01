// Gallery Data
const allImages = [
    // BEACHES
    {
        id: 1,
        src: 'images/Whitehaven Beach.jpg',
        category: 'beaches',
        title: 'Whitehaven Beach',
        description: 'Pure white silica sand stretches endlessly along turquoise waters.',
        credit: 'Photo by Tourism Australia',
        tags: ['beach', 'australia', 'whitsundays', 'sand'],
        trending: true
    },
    {
        id: 2,
        src: 'images/Bora Bora Beach.jpg',
        category: 'beaches',
        title: 'Bora Bora Beach',
        description: 'Crystal-clear lagoon waters surrounded by majestic volcanic peaks.',
        credit: 'Photo by Tahiti Tourism',
        tags: ['beach', 'tahiti', 'bora bora', 'luxury'],
        trending: true
    },
    {
        id: 3,
        src: 'images/Maya Bay Beach.jpg',
        category: 'beaches',
        title: 'Maya Bay Beach',
        description: 'Secluded tropical paradise nestled between dramatic limestone cliffs.',
        credit: 'Photo by Thailand Tourism',
        tags: ['beach', 'thailand', 'paradise', 'tropical'],
        trending: true
    },
    {
        id: 4,
        src: 'images/Ane Source d\'Argent Beach.jpg',
        category: 'beaches',
        title: 'Anse Source d\'Argent Beach',
        description: 'Unique granite boulders frame pristine white sandy shores.',
        credit: 'Photo by Seychelles Tourism Board',
        tags: ['beach', 'seychelles', 'paradise', 'exotic'],
        trending: false
    },
    {
        id: 5,
        src: 'images/Copacabana Beach.jpg',
        category: 'beaches',
        title: 'Copacabana Beach',
        description: 'Rio\'s iconic crescent beach buzzing with vibrant energy and culture.',
        credit: 'Photo by Brazil Tourism Board',
        tags: ['beach', 'rio', 'brazil', 'culture'],
        trending: false
    },
    {
        id: 6,
        src: 'images/Ipanema Beach.jpg',
        category: 'beaches',
        title: 'Ipanema Beach',
        description: 'Trendy Rio beach known for its beautiful people and lively atmosphere.',
        credit: 'Photo by Brazil Travel Guide',
        tags: ['beach', 'rio', 'brazil', 'trendy'],
        trending: false
    },
    {
        id: 7,
        src: 'images/South Beach.jpg',
        category: 'beaches',
        title: 'South Beach, Miami',
        description: 'Art Deco architecture meets golden sands and turquoise waters.',
        credit: 'Photo by Visit Miami',
        tags: ['beach', 'miami', 'art deco', 'vibrant'],
        trending: true
    },
    {
        id: 8,
        src: 'images/Navagio Beach.jpg',
        category: 'beaches',
        title: 'Navagio Beach',
        description: 'Hidden cove accessible only by boat, featuring shipwreck relics.',
        credit: 'Photo by Greece Tourism Board',
        tags: ['beach', 'greece', 'shipwreck', 'exotic'],
        trending: true
    },
    {
        id: 9,
        src: 'images/Waikki Beach.jpg',
        category: 'beaches',
        title: 'Waikiki Beach',
        description: 'Legendary Hawaiian beach with soft sands and perfect surfing waves.',
        credit: 'Photo by Hawaii Tourism',
        tags: ['beach', 'hawaii', 'surfing', 'aloha'],
        trending: false
    },

    // TEMPLES
    {
        id: 10,
        src: 'images/Taj Mahal.jpg',
        category: 'wonders',
        title: 'Taj Mahal',
        description: 'Monument to eternal love, a masterpiece of Mughal architecture.',
        credit: 'Photo by UNESCO World Heritage',
        tags: ['wonder', 'india', 'love', 'architecture'],
        trending: true
    },
    {
        id: 11,
        src: 'images/Golden Temple.jpg',
        category: 'temples',
        title: 'Golden Temple, Amritsar',
        description: 'Sacred Sikh sanctuary with shimmering golden dome reflecting in holy waters.',
        credit: 'Photo by India Tourism Board',
        tags: ['temple', 'india', 'golden', 'spirituality'],
        trending: false
    },
    {
        id: 12,
        src: 'images/Meenakshi Temple.jpg',
        category: 'temples',
        title: 'Meenakshi Temple',
        description: 'Ancient Hindu temple with intricate carved towers and spiritual heritage.',
        credit: 'Photo by Tamil Nadu Tourism',
        tags: ['temple', 'india', 'hindu', 'carvings'],
        trending: false
    },
    {
        id: 13,
        src: 'images/Brihadeeswarar Temple.jpg',
        category: 'temples',
        title: 'Brihadeeswarar Temple',
        description: 'Thousand-year-old temple featuring a massive granite tower and sculpture.',
        credit: 'Photo by India Heritage',
        tags: ['temple', 'india', 'ancient', 'architecture'],
        trending: false
    },
    {
        id: 14,
        src: 'images/Jagannath Temple.jpg',
        category: 'temples',
        title: 'Jagannath Temple, Puri',
        description: 'Revered temple housing the sacred chariot and divine deities.',
        credit: 'Photo by Odisha Tourism',
        tags: ['temple', 'india', 'jagannath', 'chariot'],
        trending: false
    },
    {
        id: 15,
        src: 'images/Konark Sun Temple.jpg',
        category: 'temples',
        title: 'Konark Sun Temple',
        description: 'Intricately carved 13th-century temple shaped like the Sun God\'s chariot.',
        credit: 'Photo by India Archaeological Survey',
        tags: ['temple', 'india', 'sun', 'ancient'],
        trending: false
    },
    {
        id: 16,
        src: 'images/Somnath Temple.jpg',
        category: 'temples',
        title: 'Somnath Temple',
        description: 'Ancient shrine dedicated to Lord Shiva, reconstructed through centuries.',
        credit: 'Photo by Gujarat Tourism',
        tags: ['temple', 'india', 'shiva', 'ancient'],
        trending: false
    },
    {
        id: 17,
        src: 'images/Akshardham Temple.jpg',
        category: 'temples',
        title: 'Akshardham Temple, Delhi',
        description: 'Modern spiritual complex showcasing traditional Indian architecture and culture.',
        credit: 'Photo by Delhi Tourism',
        tags: ['temple', 'india', 'modern', 'spirituality'],
        trending: true
    },
    {
        id: 18,
        src: 'images/Tirumala Temple.jpg',
        category: 'temples',
        title: 'Tirumala Temple',
        description: 'Hilltop sanctuary with pristine sacred rituals and spiritual significance.',
        credit: 'Photo by Andhra Pradesh Tourism',
        tags: ['temple', 'india', 'hilltop', 'sacred'],
        trending: false
    },

    // 7 WONDERS
    {
        id: 19,
        src: 'images/Chichen Itza.jpg',
        category: 'wonders',
        title: 'Chichen Itza',
        description: 'Magnificent Mayan pyramid symbolizing ancient Mesoamerican civilization.',
        credit: 'Photo by Mexico Tourism Board',
        tags: ['wonder', 'mexico', 'mayan', 'pyramid'],
        trending: true
    },
    {
        id: 20,
        src: 'images/Christ the  redeemer.jpg',
        category: 'wonders',
        title: 'Christ the Redeemer',
        description: 'Iconic 98-foot statue overlooking Rio de Janeiro from Corcovado Mountain.',
        credit: 'Photo by Rio Tourism',
        tags: ['wonder', 'brazil', 'statue', 'rio'],
        trending: true
    },
    {
        id: 21,
        src: 'images/Great wall of China.jpg',
        category: 'wonders',
        title: 'Great Wall of China',
        description: 'Ancient fortress spanning thousands of miles across northern China.',
        credit: 'Photo by China National Tourism Administration',
        tags: ['wonder', 'china', 'wall', 'fortress'],
        trending: false
    },
    {
        id: 22,
        src: 'images/Machu Picchu.jpg',
        category: 'wonders',
        title: 'Machu Picchu',
        description: 'Mystical Incan citadel perched high in the Andes Mountains.',
        credit: 'Photo by Peru Tourism Board',
        tags: ['wonder', 'peru', 'inca', 'andes'],
        trending: true
    },
    {
        id: 23,
        src: 'images/Petra.jpg',
        category: 'wonders',
        title: 'Petra',
        description: 'Rose-red ancient city carved into rose-colored sandstone cliffs.',
        credit: 'Photo by Jordan Tourism Board',
        tags: ['wonder', 'jordan', 'ancient', 'carved'],
        trending: true
    },
    {
        id: 24,
        src: 'images/The Colosseum.jpg',
        category: 'wonders',
        title: 'The Colosseum, Rome',
        description: 'Ancient Roman amphitheater standing as a symbol of Imperial power.',
        credit: 'Photo by Italy Tourism',
        tags: ['wonder', 'rome', 'colosseum', 'ancient'],
        trending: false
    },

    // CITIES
    {
        id: 25,
        src: 'images/New York City.jpg',
        category: 'cities',
        title: 'New York City',
        description: 'The city that never sleeps, iconic skyline with endless possibilities.',
        credit: 'Photo by NYC Tourism Board',
        tags: ['city', 'new york', 'usa', 'skyline'],
        trending: true
    },
    {
        id: 26,
        src: 'images/Paris City.jpg',
        category: 'cities',
        title: 'Paris',
        description: 'The City of Light radiates romance, art, and timeless elegance.',
        credit: 'Photo by Paris Tourism Board',
        tags: ['city', 'paris', 'france', 'romance'],
        trending: true
    },
    {
        id: 27,
        src: 'images/Tokyo City.jpg',
        category: 'cities',
        title: 'Tokyo',
        description: 'Futuristic metropolis blending ancient traditions with cutting-edge technology.',
        credit: 'Photo by Tokyo Convention Bureau',
        tags: ['city', 'tokyo', 'japan', 'futuristic'],
        trending: true
    },
    {
        id: 28,
        src: 'images/Dubai City.jpg',
        category: 'cities',
        title: 'Dubai',
        description: 'Ultra-modern desert city featuring world-class architecture and luxury.',
        credit: 'Photo by Dubai Tourism Board',
        tags: ['city', 'dubai', 'luxury', 'modern'],
        trending: false
    },
    {
        id: 29,
        src: 'images/London City.jpg',
        category: 'cities',
        title: 'London',
        description: 'Historic capital city blending royal heritage with contemporary culture.',
        credit: 'Photo by Visit London',
        tags: ['city', 'london', 'uk', 'history'],
        trending: false
    },
    {
        id: 30,
        src: 'images/Singapore City.jpg',
        category: 'cities',
        title: 'Singapore',
        description: 'Garden city featuring futuristic skyscrapers and lush green spaces.',
        credit: 'Photo by Singapore Tourism Board',
        tags: ['city', 'singapore', 'garden', 'modern'],
        trending: false
    },
    {
        id: 31,
        src: 'images/Sydney City.jpg',
        category: 'cities',
        title: 'Sydney',
        description: 'Coastal city known for the Opera House and stunning harbor views.',
        credit: 'Photo by Sydney Tourism Australia',
        tags: ['city', 'sydney', 'australia', 'coastal'],
        trending: false
    }
];

var filterButtons = document.querySelectorAll('.filter-btn');
var galleryContainer = document.getElementById('imageGallery');
var fullImageBox = document.getElementById('fullImageBox');
var fullImage = document.getElementById('fullImage');
var lightboxContent = document.querySelector('.lightbox-content');
var crossIcon = document.getElementById('crossIcon');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var downloadBtn = document.getElementById('downloadBtn');
var messageBox = document.getElementById('messageBox');
var searchInput = document.getElementById('searchInput');
var searchBtn = document.getElementById('searchBtn');
var loadMoreBtn = document.getElementById('loadMoreBtn');

var currentIndex = 0;
var filteredImages = [].concat(allImages);
var loadMoreStep = 2;
var currentFilter = 'all';
var currentSection = 'home'; // home, popular, about
var imageScale = 1;
var lastDistance = 0;
var lastTapTime = 0;
var lastTapX = 0;
var lastTapY = 0;
var visiblePerCategory = {
    beaches: 5,
    temples: 5,
    wonders: 5,
    cities: 5
};

var categoryTitles = {
    beaches: 'Beaches',
    temples: 'Temples',
    wonders: '7 Wonders',
    cities: 'Cities'
};

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

function init() {
    setupEventListeners();
    applyFilter('all');
    setupThemeToggle();
}

function setupThemeToggle() {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    var current = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', current);
    btn.textContent = current === 'dark' ? '☀️' : '🌙';
    btn.addEventListener('click', function() {
        var isDark = document.body.getAttribute('data-theme') === 'dark';
        var newTheme = isDark ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        btn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('theme', newTheme);
    });
}

function setupEventListeners() {
    crossIcon.addEventListener('click', closeLightbox);
    if (crossIcon) {
        crossIcon.setAttribute('role', 'button');
        crossIcon.tabIndex = 0;
        crossIcon.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') closeLightbox();
        });
    }
    fullImageBox.addEventListener('click', function(e) {
        if (e.target === fullImageBox) closeLightbox();
    });

    prevBtn.addEventListener('click', showPreviousImage);
    nextBtn.addEventListener('click', showNextImage);

    document.addEventListener('keydown', handleKeyboard);

    filterButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            currentSection = 'home';
            updateNavLinks();
            applyFilter(btn.dataset.filter);
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            var active = document.activeElement;
            if (active && active.classList && active.classList.contains('gallery-card')) {
                var index = Number(active.dataset.index);
                if (!isNaN(index)) openFullImage(index);
            }
        }
    });

    if (prevBtn) prevBtn.setAttribute('aria-label', 'Previous image');
    if (nextBtn) nextBtn.setAttribute('aria-label', 'Next image');

    if (fullImage) {
        fullImage.addEventListener('touchstart', handleTouchStart, false);
        fullImage.addEventListener('touchmove', handleTouchMove, false);
        fullImage.addEventListener('touchend', handleTouchEnd, false);
    }

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') searchImages();
    });

    searchBtn.addEventListener('click', searchImages);
    loadMoreBtn.addEventListener('click', function() {
        // This is now handled by section-specific buttons
    });

    galleryContainer.addEventListener('click', function(e) {
        if (e.target.closest('.download-link')) return;
        var card = e.target.closest('.gallery-card');
        if (!card) return;

        var index = Number(card.dataset.index);
        if (!isNaN(index)) {
            openFullImage(index);
        }
    });

    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var section = link.textContent.toLowerCase();
            if (section === 'home') {
                goToHome();
            } else if (section === 'popular') {
                goToPopular();
            } else if (section === 'about') {
                goToAbout();
            }
        });
    });
}

function goToHome() {
    currentSection = 'home';
    updateNavLinks();
    // Keep all header elements visible
    document.querySelector('.filterButtons').style.display = 'flex';
    document.querySelector('.searchBox').style.display = 'flex';
    document.querySelector('.breadcrumb').style.display = 'flex';
    document.querySelector('.headerText h1').textContent = 'Discover Amazing Destinations';
    document.querySelector('.headerText h1').style.display = 'block';
    document.querySelector('.headerText .subtitle').textContent = 'Explore stunning travel photography from around the world. Curated collection of beaches, temples, world wonders & vibrant cities.';
    document.querySelector('.headerText .subtitle').style.display = 'block';
    applyFilter('all');
}

function goToPopular() {
    currentSection = 'popular';
    updateNavLinks();
    filteredImages = [].concat(allImages).sort(function(a, b) {
        return a.title.localeCompare(b.title);
    }); // Just sort alphabetically now
    document.querySelector('.filterButtons').style.display = 'none';
    document.querySelector('.searchBox').style.display = 'none';
    document.querySelector('.breadcrumb').style.display = 'flex'; // Keep breadcrumb visible
    document.querySelector('.headerText h1').textContent = 'Popular Photos';
    document.querySelector('.headerText h1').style.display = 'block';
    document.querySelector('.headerText .subtitle').style.display = 'block';
    document.querySelector('.headerText .subtitle').textContent = 'Discover our most popular photos';
    renderPopularGallery();
}


function goToAbout() {
    currentSection = 'about';
    updateNavLinks();
    document.querySelector('.filterButtons').style.display = 'none';
    document.querySelector('.searchBox').style.display = 'none';
    document.querySelector('.breadcrumb').style.display = 'flex'; // Keep breadcrumb visible
    document.querySelector('.headerText h1').style.display = 'block';
    document.querySelector('.headerText h1').textContent = 'About Explorer Gallery';
    document.querySelector('.headerText .subtitle').style.display = 'block';
    document.querySelector('.headerText .subtitle').textContent = 'Learn more about our beautiful image gallery';
    renderAboutPage();
}


function updateNavLinks() {
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
        var linkSection = link.textContent.toLowerCase();
        if (linkSection === currentSection || (currentSection === 'home' && linkSection === 'home')) {
            link.classList.add('active');
        }
    });
}

function renderPopularGallery() {
    galleryContainer.innerHTML = '';
    
    var section = document.createElement('section');
    section.className = 'gallery-section';
    section.style.animation = 'fadeInUp 0.6s ease-out';
    
    section.innerHTML = 
        '<div class="section-title">Popular Photos</div>' +
        '<div class="gallery-grid"></div>';
    
    galleryContainer.appendChild(section);
    
    var grid = section.querySelector('.gallery-grid');
    
    filteredImages.forEach(function(item, index) {
        var card = document.createElement('article');

        card.className = 'gallery-card' + (item.trending ? ' trending' : '');
        card.dataset.index = index;
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', item.title + ', ' + (categoryTitles[item.category] || item.category));

        card.innerHTML = 
            '<div class="card-image" tabindex="0">' +
                '<img src="' + item.src + '" alt="' + item.title + ' — ' + item.category + '" loading="lazy">' +
            '</div>' +
            '<div class="card-overlay">' +
                '<div class="card-tag">' + (categoryTitles[item.category] || item.category) + '</div>' +
                '<div class="card-title">' + item.title + '</div>' +
                '<div class="card-desc">' + item.description + '</div>' +
                '<div class="card-credit">© ' + item.credit + '</div>' +
                '<a class="download-link" href="' + item.src + '" download="' + slugify(item.title) + '.jpg">📥 Download</a>' +
            '</div>';

        grid.appendChild(card);
    });
}

function renderAboutPage() {
    galleryContainer.innerHTML = '';
    
    var aboutSection = document.createElement('section');
    aboutSection.className = 'gallery-section';
    aboutSection.style.animation = 'fadeInUp 0.6s ease-out';
    
    aboutSection.innerHTML = 
        '<div class="about-content">' +
            '<h2 class="about-title">About Explorer Gallery</h2>' +
            '<div class="about-text">' +
                '<p>Welcome to Explorer Gallery, your premier destination for stunning travel photography from around the world. Our collection features breathtaking images of beautiful beaches, ancient temples, world wonders, and vibrant cities.</p>' +
                '<h3>What We Offer</h3>' +
                '<div class="features-grid">' +
                    '<div class="feature-card">' +
                        '<div class="feature-icon">🌴</div>' +
                        '<div class="feature-title">Beaches</div>' +
                        '<div class="feature-desc">Discover paradise destinations with pristine white sand</div>' +
                    '</div>' +
                    '<div class="feature-card">' +
                        '<div class="feature-icon">🏛️</div>' +
                        '<div class="feature-title">Temples</div>' +
                        '<div class="feature-desc">Explore sacred sites and architectural marvels</div>' +
                    '</div>' +
                    '<div class="feature-card">' +
                        '<div class="feature-icon">🗺️</div>' +
                        '<div class="feature-title">Wonders</div>' +
                        '<div class="feature-desc">Visit the most extraordinary places on Earth</div>' +
                    '</div>' +
                    '<div class="feature-card">' +
                        '<div class="feature-icon">🌆</div>' +
                        '<div class="feature-title">Cities</div>' +
                        '<div class="feature-desc">Experience the energy of world-class metropolises</div>' +
                    '</div>' +
                '</div>' +
                '<h3>Our Mission</h3>' +
                '<p>We believe in the power of photography to inspire wanderlust and connect people with cultures from around the globe. Every image tells a story, and we\'re dedicated to sharing those stories with you.</p>' +
            '</div>' +
        '</div>';
    
    galleryContainer.appendChild(aboutSection);
}

function renderGallery() {
    galleryContainer.innerHTML = '';

    if (filteredImages.length === 0) {
        loadMoreBtn.style.display = 'none';
        return;
    }

    // Normal grid per section (temples section shows only temple images, etc.)
    var categoriesInOrder = Object.keys(categoryTitles);

    function getItemsForCategory(category) {
        var items = filteredImages.filter(function(img) {
            return img.category === category;
        });
        if (currentFilter !== 'all') return items;
        var limit = visiblePerCategory[category] || 5;
        return items.slice(0, limit);
    }

    categoriesInOrder.forEach(function(category) {
        var fullCategoryItems = filteredImages.filter(function(img) {
            return img.category === category;
        });
        if (!fullCategoryItems || fullCategoryItems.length === 0) return;

        var sectionItems = getItemsForCategory(category);

        var section = document.createElement('section');
        section.className = 'gallery-section';
        section.style.animation = 'fadeInUp 0.6s ease-out';

        section.innerHTML = 
            '<div class="section-title">' + categoryTitles[category] + '</div>' +
            '<div class="gallery-grid"></div>' +
            '<div class="section-load-more" style="display:none;"></div>';

        var grid = section.querySelector('.gallery-grid');
        var loadMoreContainer = section.querySelector('.section-load-more');

        if (currentFilter === 'all') {
            var fullCount = fullCategoryItems.length;
            var currentlyShown = sectionItems.length;
            if (fullCount > currentlyShown) {
                loadMoreContainer.style.display = 'flex';
                loadMoreContainer.style.justifyContent = 'center';

                loadMoreContainer.innerHTML = '';
                var btn = document.createElement('button');
                btn.className = 'section-load-more-btn';
                btn.type = 'button';
                btn.textContent = 'Load More';
                btn.addEventListener('click', function() {
                    visiblePerCategory[category] = Math.min(
                        fullCount,
                        (visiblePerCategory[category] || 5) + loadMoreStep
                    );
                    renderGallery();
                });
                loadMoreContainer.appendChild(btn);
            } else {
                loadMoreContainer.style.display = 'none';
            }
        }

        sectionItems.forEach(function(item) {
            var card = document.createElement('article');
            card.className = 'gallery-card' + (item.trending ? ' trending' : '');
            card.dataset.index = filteredImages.indexOf(item);
            card.tabIndex = 0;
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', item.title + ', ' + (categoryTitles[item.category] || item.category));

            var cardHtml = 
                '<div class="card-image" tabindex="0">' +
                    '<img src="' + item.src + '" alt="' + item.title + ' — ' + item.category + '" loading="lazy">' +
                '</div>' +
                '<div class="card-overlay">';
            if (item.trending) {
                cardHtml += '<div class="card-badge">🔥 Trending</div>';
            }
            cardHtml += 
                '<div class="card-tag">' + (categoryTitles[item.category] || item.category) + '</div>' +
                '<div class="card-title">' + item.title + '</div>' +
                '<div class="card-desc">' + item.description + '</div>' +
                '<div class="card-credit">© ' + item.credit + '</div>' +
                '<a class="download-link" href="' + item.src + '" download="' + slugify(item.title) + '.jpg">📥 Download</a>' +
            '</div>';

            card.innerHTML = cardHtml;

            grid.appendChild(card);
        });

        galleryContainer.appendChild(section);
    });

    loadMoreBtn.style.display = 'none';
}

function slugify(text) {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function applyFilter(category) {
    currentFilter = category;
    clearSearchMessage();
    if (searchInput) searchInput.value = '';
    Object.keys(visiblePerCategory).forEach(cat => {
        visiblePerCategory[cat] = 3;
    });

    filterButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category);
    });

    filteredImages = category === 'all'
        ? [...allImages]
        : allImages.filter(image => image.category === category);

    renderGallery();
    currentIndex = 0;
}

function searchImages() {
    // Don't call goToHome() to prevent layout changes!
    currentSection = 'home';
    updateNavLinks();
    
    var query = searchInput.value.trim().toLowerCase();
    currentFilter = 'search';
    
    // Keep header elements all visible (home only)
    document.querySelector('.filterButtons').style.display = 'flex';
    document.querySelector('.searchBox').style.display = 'flex';
    document.querySelector('.breadcrumb').style.display = 'flex';

    
    Object.keys(visiblePerCategory).forEach(function(cat) {
        visiblePerCategory[cat] = 100; // Show all results
    });

    filterButtons.forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.filter === 'all');
    });

    if (!query) {
        clearSearchMessage();
        filteredImages = [].concat(allImages);
        renderGallery();
        currentIndex = 0;
        return;
    }

    // Enhanced search with better scoring
    var results = allImages.map(function(image) {
        var text = (image.title + ' ' + image.description + ' ' + image.category + ' ' + (image.tags || []).join(' ')).toLowerCase();
        var score = 0;
        
        // Exact match in title - highest priority
        if (image.title.toLowerCase().indexOf(query) !== -1) score += 100;
        // Exact word in title
        var words = image.title.toLowerCase().split(' ');
        for (var i = 0; i < words.length; i++) {
            if (words[i] === query) {
                score += 200;
                break;
            }
        }
        // Match in description
        if (image.description.toLowerCase().indexOf(query) !== -1) score += 50;
        // Match in category
        if (image.category === query) score += 75;
        // Match in tags
        var imageTags = image.tags || [];
        for (var j = 0; j < imageTags.length; j++) {
            if (imageTags[j].toLowerCase().indexOf(query) !== -1) {
                score += 60;
                break;
            }
        }
        // Match as substring anywhere
        if (text.indexOf(query) !== -1) score += 30;
        
        return { image: image, score: score };
    }).filter(function(item) {
        return item.score > 0;
    }).sort(function(a, b) {
        return b.score - a.score; // Sort by score descending
    }).map(function(item) {
        return item.image;
    });

    filteredImages = results;

    if (filteredImages.length === 0) {
        showSearchMessage('No images found for "' + query + '". Try another word like beaches, temples, wonders, or cities.');
    } else {
        showSearchMessage('Showing ' + filteredImages.length + ' result' + (filteredImages.length === 1 ? '' : 's') + ' for "' + query + '".', true);
    }

    renderGallery();
    currentIndex = 0;
}

function updateDownloadLink() {
    if (!downloadBtn) return;
    var filename = slugify(filteredImages[currentIndex].title) + '.jpg';
    downloadBtn.href = filteredImages[currentIndex].src;
    downloadBtn.download = filename;
    var caption = document.getElementById('lightboxCaption');
    if (caption) {
        var credit = filteredImages[currentIndex].credit ? '<br><small style="font-size: 0.85em; color: #888;">© ' + filteredImages[currentIndex].credit + '</small>' : '';
        var imageTags = filteredImages[currentIndex].tags || [];
        var tagHtml = '';
        for (var t = 0; t < imageTags.length; t++) {
            tagHtml += '<span class="tag">#' + imageTags[t] + '</span> ';
        }
        caption.innerHTML = filteredImages[currentIndex].title + ' — ' + filteredImages[currentIndex].description + credit + tagHtml;
    }
}

function openFullImage(index) {
    currentIndex = index;
    fullImageBox.style.display = 'flex';
    fullImage.src = filteredImages[currentIndex].src;
    fullImage.alt = filteredImages[currentIndex].title;
    updateDownloadLink();
    imageScale = 1;
    fullImage.style.transform = 'scale(1)';
}

function closeLightbox() {
    fullImageBox.style.display = 'none';
    imageScale = 1;
    fullImage.style.transform = 'scale(1)';
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % filteredImages.length;
    fullImage.src = filteredImages[currentIndex].src;
    fullImage.alt = filteredImages[currentIndex].title;
    updateDownloadLink();
    resetZoom();
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    fullImage.src = filteredImages[currentIndex].src;
    fullImage.alt = filteredImages[currentIndex].title;
    updateDownloadLink();
    resetZoom();
}

function handleTouchStart(event) {
    if (event.touches.length === 1) {
        const currentTime = new Date().getTime();
        const tapX = event.touches[0].clientX;
        const tapY = event.touches[0].clientY;
        const timeDiff = currentTime - lastTapTime;
        const distance = Math.hypot(tapX - lastTapX, tapY - lastTapY);

        if (timeDiff < 300 && distance < 50) {
            handleDoubleTap();
            lastTapTime = 0;
            event.preventDefault();
            return;
        }

        lastTapTime = currentTime;
        lastTapX = tapX;
        lastTapY = tapY;
    }

    if (event.touches.length === 2) {
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];
        lastDistance = Math.hypot(
            touch2.clientX - touch1.clientX,
            touch2.clientY - touch1.clientY
        );
        event.preventDefault();
    }
}

function handleDoubleTap() {
    if (imageScale > 1.5) {
        imageScale = 1;
        fullImage.style.transform = 'scale(1)';
    } else {
        imageScale = 2.5;
        fullImage.style.transform = 'scale(2.5)';
    }
}

function handleTouchMove(event) {
    if (event.touches.length === 2) {
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];
        const currentDistance = Math.hypot(
            touch2.clientX - touch1.clientX,
            touch2.clientY - touch1.clientY
        );

        const scaleFactor = currentDistance / lastDistance;
        imageScale *= scaleFactor;
        imageScale = Math.max(1, Math.min(4, imageScale));
        fullImage.style.transform = `scale(${imageScale})`;
        lastDistance = currentDistance;
        event.preventDefault();
    }
}

function handleTouchEnd(event) {
    if (event.touches.length < 2) {
        lastDistance = 0;
    }
}

function resetZoom() {
    imageScale = 1;
    fullImage.style.transform = 'scale(1)';
    lastTapTime = 0;
}

function exactMatch(text, query) {
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'i');
    return regex.test(text) || text.includes(escaped);
}

function showSearchMessage(message, success = false) {
    messageBox.textContent = message;
    messageBox.style.color = success ? '#0f766e' : '#bf1650';
}

function clearSearchMessage() {
    messageBox.textContent = '';
}

function handleKeyboard(event) {
    if (fullImageBox.style.display === 'flex') {
        if (event.key === 'ArrowRight') showNextImage();
        if (event.key === 'ArrowLeft') showPreviousImage();
        if (event.key === 'Escape') closeLightbox();
    }
}

document.addEventListener('DOMContentLoaded', init);
