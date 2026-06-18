// Gallery Data
const allImages = [
    // BEACHES
    {
        src: 'images/Whitehaven Beach.jpg',
        category: 'beaches',
        title: 'Whitehaven Beach',
        description: 'Pure white silica sand stretches endlessly along turquoise waters.',
        credit: 'Photo by Tourism Australia'
    },
    {
        src: 'images/Bora Bora Beach.jpg',
        category: 'beaches',
        title: 'Bora Bora Beach',
        description: 'Crystal-clear lagoon waters surrounded by majestic volcanic peaks.',
        credit: 'Photo by Tahiti Tourism'
    },
    {
        src: 'images/Maya Bay Beach.jpg',
        category: 'beaches',
        title: 'Maya Bay Beach',
        description: 'Secluded tropical paradise nestled between dramatic limestone cliffs.',
        credit: 'Photo by Thailand Tourism'
    },
    {
        src: 'images/Ane Source d\'Argent Beach.jpg',
        category: 'beaches',
        title: 'Anse Source d\'Argent Beach',
        description: 'Unique granite boulders frame pristine white sandy shores.',
        credit: 'Photo by Seychelles Tourism Board'
    },
    {
        src: 'images/Copacabana Beach.jpg',
        category: 'beaches',
        title: 'Copacabana Beach',
        description: 'Rio\'s iconic crescent beach buzzing with vibrant energy and culture.',
        credit: 'Photo by Brazil Tourism Board'
    },
    {
        src: 'images/Ipanema Beach.jpg',
        category: 'beaches',
        title: 'Ipanema Beach',
        description: 'Trendy Rio beach known for its beautiful people and lively atmosphere.',
        credit: 'Photo by Brazil Travel Guide'
    },
    {
        src: 'images/South Beach.jpg',
        category: 'beaches',
        title: 'South Beach, Miami',
        description: 'Art Deco architecture meets golden sands and turquoise waters.',
        credit: 'Photo by Visit Miami'
    },
    {
        src: 'images/Navagio Beach.jpg',
        category: 'beaches',
        title: 'Navagio Beach',
        description: 'Hidden cove accessible only by boat, featuring shipwreck relics.',
        credit: 'Photo by Greece Tourism Board'
    },
    {
        src: 'images/Waikki Beach.jpg',
        category: 'beaches',
        title: 'Waikiki Beach',
        description: 'Legendary Hawaiian beach with soft sands and perfect surfing waves.',
        credit: 'Photo by Hawaii Tourism'
    },

    // TEMPLES
    {
        src: 'images/Taj Mahal.jpg',
        category: 'wonders',
        title: 'Taj Mahal',
        description: 'Monument to eternal love, a masterpiece of Mughal architecture.',
        credit: 'Photo by UNESCO World Heritage'
    },
    {
        src: 'images/Golden Temple.jpg',
        category: 'temples',
        title: 'Golden Temple, Amritsar',
        description: 'Sacred Sikh sanctuary with shimmering golden dome reflecting in holy waters.',
        credit: 'Photo by India Tourism Board'
    },
    {
        src: 'images/Meenakshi Temple.jpg',
        category: 'temples',
        title: 'Meenakshi Temple',
        description: 'Ancient Hindu temple with intricate carved towers and spiritual heritage.',
        credit: 'Photo by Tamil Nadu Tourism'
    },
    {
        src: 'images/Brihadeeswarar Temple.jpg',
        category: 'temples',
        title: 'Brihadeeswarar Temple',
        description: 'Thousand-year-old temple featuring a massive granite tower and sculpture.',
        credit: 'Photo by India Heritage'
    },
    {
        src: 'images/Jagannath Temple.jpg',
        category: 'temples',
        title: 'Jagannath Temple, Puri',
        description: 'Revered temple housing the sacred chariot and divine deities.',
        credit: 'Photo by Odisha Tourism'
    },
    {
        src: 'images/Konark Sun Temple.jpg',
        category: 'temples',
        title: 'Konark Sun Temple',
        description: 'Intricately carved 13th-century temple shaped like the Sun God\'s chariot.',
        credit: 'Photo by India Archaeological Survey'
    },
    {
        src: 'images/Somnath Temple.jpg',
        category: 'temples',
        title: 'Somnath Temple',
        description: 'Ancient shrine dedicated to Lord Shiva, reconstructed through centuries.',
        credit: 'Photo by Gujarat Tourism'
    },
    {
        src: 'images/Akshardham Temple.jpg',
        category: 'temples',
        title: 'Akshardham Temple, Delhi',
        description: 'Modern spiritual complex showcasing traditional Indian architecture and culture.',
        credit: 'Photo by Delhi Tourism'
    },
    {
        src: 'images/Tirumala Temple.jpg',
        category: 'temples',
        title: 'Tirumala Temple',
        description: 'Hilltop sanctuary with pristine sacred rituals and spiritual significance.',
        credit: 'Photo by Andhra Pradesh Tourism'
    },

    // 7 WONDERS
    {
        src: 'images/Chichen Itza.jpg',
        category: 'wonders',
        title: 'Chichen Itza',
        description: 'Magnificent Mayan pyramid symbolizing ancient Mesoamerican civilization.',
        credit: 'Photo by Mexico Tourism Board'
    },
    {
        src: 'images/Christ the  redeemer.jpg',
        category: 'wonders',
        title: 'Christ the Redeemer',
        description: 'Iconic 98-foot statue overlooking Rio de Janeiro from Corcovado Mountain.',
        credit: 'Photo by Rio Tourism'
    },
    {
        src: 'images/Great wall of China.jpg',
        category: 'wonders',
        title: 'Great Wall of China',
        description: 'Ancient fortress spanning thousands of miles across northern China.',
        credit: 'Photo by China National Tourism Administration'
    },
    {
        src: 'images/Machu Picchu.jpg',
        category: 'wonders',
        title: 'Machu Picchu',
        description: 'Mystical Incan citadel perched high in the Andes Mountains.',
        credit: 'Photo by Peru Tourism Board'
    },
    {
        src: 'images/Petra.jpg',
        category: 'wonders',
        title: 'Petra',
        description: 'Rose-red ancient city carved into rose-colored sandstone cliffs.',
        credit: 'Photo by Jordan Tourism Board'
    },
    {
        src: 'images/The Colosseum.jpg',
        category: 'wonders',
        title: 'The Colosseum, Rome',
        description: 'Ancient Roman amphitheater standing as a symbol of Imperial power.',
        credit: 'Photo by Italy Tourism'
    },

    // CITIES
    {
        src: 'images/New York City.jpg',
        category: 'cities',
        title: 'New York City',
        description: 'The city that never sleeps, iconic skyline with endless possibilities.',
        credit: 'Photo by NYC Tourism Board'
    },
    {
        src: 'images/Paris City.jpg',
        category: 'cities',
        title: 'Paris',
        description: 'The City of Light radiates romance, art, and timeless elegance.',
        credit: 'Photo by Paris Tourism Board'
    },
    {
        src: 'images/Tokyo City.jpg',
        category: 'cities',
        title: 'Tokyo',
        description: 'Futuristic metropolis blending ancient traditions with cutting-edge technology.',
        credit: 'Photo by Tokyo Convention Bureau'
    },
    {
        src: 'images/Dubai City.jpg',
        category: 'cities',
        title: 'Dubai',
        description: 'Ultra-modern desert city featuring world-class architecture and luxury.',
        credit: 'Photo by Dubai Tourism Board'
    },
    {
        src: 'images/London City.jpg',
        category: 'cities',
        title: 'London',
        description: 'Historic capital city blending royal heritage with contemporary culture.',
        credit: 'Photo by Visit London'
    },
    {
        src: 'images/Singapore City.jpg',
        category: 'cities',
        title: 'Singapore',
        description: 'Garden city featuring futuristic skyscrapers and lush green spaces.',
        credit: 'Photo by Singapore Tourism Board'
    },
    {
        src: 'images/Sydney City.jpg',
        category: 'cities',
        title: 'Sydney',
        description: 'Coastal city known for the Opera House and stunning harbor views.',
        credit: 'Photo by Sydney Tourism Australia'
    }
];

const filterButtons = document.querySelectorAll('.filter-btn');
const galleryContainer = document.getElementById('imageGallery');
const fullImageBox = document.getElementById('fullImageBox');
const fullImage = document.getElementById('fullImage');
const lightboxContent = document.querySelector('.lightbox-content');
const crossIcon = document.getElementById('crossIcon');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const downloadBtn = document.getElementById('downloadBtn');
const messageBox = document.getElementById('messageBox');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const loadMoreBtn = document.getElementById('loadMoreBtn');

let currentIndex = 0;
let filteredImages = [...allImages];
const loadMoreStep = 2;
let currentFilter = 'all';
let imageScale = 1;
let lastDistance = 0;
let lastTapTime = 0;
let lastTapX = 0;
let lastTapY = 0;
let visiblePerCategory = {
    beaches: 5,
    temples: 5,
    wonders: 5,
    cities: 5
};

const categoryTitles = {
    beaches: 'Beaches',
    temples: 'Temples',
    wonders: '7 Wonders',
    cities: 'Cities'
};

function init() {
    setupEventListeners();
    applyFilter('all');
    setupThemeToggle();
}

function setupThemeToggle() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    const current = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', current === 'dark' ? 'dark' : '');
    btn.textContent = current === 'dark' ? '☀️' : '🌙';
    btn.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        document.body.setAttribute('data-theme', isDark ? '' : 'dark');
        btn.textContent = isDark ? '🌙' : '☀️';
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
}

function setupEventListeners() {
    crossIcon.addEventListener('click', closeLightbox);
    // make close control keyboard accessible
    if (crossIcon) {
        crossIcon.setAttribute('role', 'button');
        crossIcon.tabIndex = 0;
        crossIcon.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') closeLightbox();
        });
    }
    fullImageBox.addEventListener('click', (e) => {
        if (e.target === fullImageBox) closeLightbox();
    });

    prevBtn.addEventListener('click', showPreviousImage);
    nextBtn.addEventListener('click', showNextImage);

    document.addEventListener('keydown', handleKeyboard);

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
    });

    // make cards keyboard-focusable and open with Enter
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const active = document.activeElement;
            if (active && active.classList && active.classList.contains('gallery-card')) {
                const index = Number(active.dataset.index);
                if (!Number.isNaN(index)) openFullImage(index);
            }
        }
    });

    // ensure prev/next buttons have ARIA labels
    if (prevBtn) prevBtn.setAttribute('aria-label', 'Previous image');
    if (nextBtn) nextBtn.setAttribute('aria-label', 'Next image');

    // Add touch pinch zoom listeners
    if (fullImage) {
        fullImage.addEventListener('touchstart', handleTouchStart, false);
        fullImage.addEventListener('touchmove', handleTouchMove, false);
        fullImage.addEventListener('touchend', handleTouchEnd, false);
    }

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') searchImages();
    });

    searchBtn.addEventListener('click', searchImages);
    loadMoreBtn.addEventListener('click', function() {
        // This is now handled by section-specific buttons
    });

    galleryContainer.addEventListener('click', (e) => {
        if (e.target.closest('.download-link')) return;
        const card = e.target.closest('.gallery-card');
        if (!card) return;

        const index = Number(card.dataset.index);
        if (!Number.isNaN(index)) {
            openFullImage(index);
        }
    });
}

function renderGallery() {
    galleryContainer.innerHTML = '';

    if (filteredImages.length === 0) {
        galleryContainer.innerHTML = '';
        loadMoreBtn.style.display = 'none';
        return;
    }

    const grouped = filteredImages.reduce((groups, image, index) => {
        if (!groups[image.category]) {
            groups[image.category] = [];
        }
        groups[image.category].push({ ...image, index });
        return groups;
    }, {});

    let hasAnyMore = false;

    Object.keys(categoryTitles).forEach(category => {
        const items = grouped[category];
        if (!items || items.length === 0) return;

        const section = document.createElement('section');
        section.className = 'gallery-section';
        section.innerHTML = `
            <div class="section-title">${categoryTitles[category]}</div>
            <div class="gallery-grid"></div>
        `;

        const grid = section.querySelector('.gallery-grid');
        const visibleCount = visiblePerCategory[category] || 5;
        const visibleItems = items.slice(0, visibleCount);

        visibleItems.forEach(item => {
            const card = document.createElement('article');
            card.className = 'gallery-card';
            card.dataset.index = item.index;
            // make the card keyboard-focusable and accessible
            card.tabIndex = 0;
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `${item.title}, ${categoryTitles[item.category]}`);

            card.innerHTML = `
                <div class="card-image" tabindex="0">
                    <img src="${item.src}" alt="${item.title} — ${item.category}" loading="lazy">
                </div>
                <div class="card-overlay">
                    <div class="card-badge">Featured</div>
                    <div class="card-tag">${categoryTitles[item.category]}</div>
                    <div class="card-title">${item.title}</div>
                    <div class="card-desc">${item.description}</div>
                    <div class="card-credit">© ${item.credit}</div>
                    <a class="download-link" href="${item.src}" download="${slugify(item.title)}.jpg">Download</a>
                </div>
            `;

            grid.appendChild(card);
        });

        // Add "Load More" button if there are more items to show
        if (items.length > visibleCount) {
            hasAnyMore = true;
            const loadMoreContainer = document.createElement('div');
            loadMoreContainer.className = 'section-load-more';
            const loadMoreButton = document.createElement('button');
            loadMoreButton.className = 'section-load-more-btn';
            loadMoreButton.textContent = 'Load More';
            loadMoreButton.addEventListener('click', () => {
                visiblePerCategory[category] += loadMoreStep;
                renderGallery();
            });
            loadMoreContainer.appendChild(loadMoreButton);
            section.appendChild(loadMoreContainer);
        }

        galleryContainer.appendChild(section);
    });

    // Hide global load more button
    loadMoreBtn.style.display = 'none';
}

function slugify(text) {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function applyFilter(category) {
    currentFilter = category;
    clearSearchMessage();
    if (searchInput) searchInput.value = '';
    // Reset visibility for all categories
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
    const query = searchInput.value.trim().toLowerCase();
    currentFilter = 'search';
    // Reset visibility for all categories
    Object.keys(visiblePerCategory).forEach(cat => {
        visiblePerCategory[cat] = 3;
    });

    filterButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === 'all'));

    if (!query) {
        clearSearchMessage();
        filteredImages = [...allImages];
        renderGallery();
        currentIndex = 0;
        return;
    }

    filteredImages = allImages.filter(image => {
        const text = `${image.title} ${image.description} ${image.category}`.toLowerCase();
        return exactMatch(text, query) || image.category === query;
    });

    if (filteredImages.length === 0) {
        showSearchMessage(`No images found for “${query}”. Try another word like beaches, temples, wonders, or cities.`);
    } else {
        showSearchMessage(`Showing results for “${query}”.`, true);
    }

    renderGallery();

    currentIndex = 0;
}

function updateDownloadLink() {
    if (!downloadBtn) return;
    const filename = `${slugify(filteredImages[currentIndex].title)}.jpg`;
    downloadBtn.href = filteredImages[currentIndex].src;
    downloadBtn.download = filename;
    const caption = document.getElementById('lightboxCaption');
    if (caption) {
        const credit = filteredImages[currentIndex].credit ? `<br><small style="font-size: 0.85em; color: #888;">© ${filteredImages[currentIndex].credit}</small>` : '';
        caption.innerHTML = `${filteredImages[currentIndex].title} — ${filteredImages[currentIndex].description}${credit}`;
    }
}

function openFullImage(index) {
    currentIndex = index;
    fullImageBox.style.display = 'flex';
    fullImage.src = filteredImages[currentIndex].src;
    fullImage.alt = filteredImages[currentIndex].title;
    updateDownloadLink();
    // reset zoom scale
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
    // open normally without zoom
    resetZoom();
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    fullImage.src = filteredImages[currentIndex].src;
    fullImage.alt = filteredImages[currentIndex].title;
    updateDownloadLink();
    // open normally without zoom
    resetZoom();
}

function handleTouchStart(event) {
    // Handle double-tap zoom (single finger)
    if (event.touches.length === 1) {
        const currentTime = new Date().getTime();
        const tapX = event.touches[0].clientX;
        const tapY = event.touches[0].clientY;
        const timeDiff = currentTime - lastTapTime;
        const distance = Math.hypot(tapX - lastTapX, tapY - lastTapY);

        // Check if it's a double tap (within 300ms and same area)
        if (timeDiff < 300 && distance < 50) {
            handleDoubleTap();
            lastTapTime = 0; // reset to prevent triple tap
            event.preventDefault();
            return;
        }

        lastTapTime = currentTime;
        lastTapX = tapX;
        lastTapY = tapY;
    }

    // Handle pinch zoom (two fingers)
    if (event.touches.length === 2) {
        // Calculate initial distance between two fingers
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
    // Toggle between zoomed and normal view
    if (imageScale > 1.5) {
        // Zoom out
        imageScale = 1;
        fullImage.style.transform = 'scale(1)';
    } else {
        // Zoom in to 2.5x
        imageScale = 2.5;
        fullImage.style.transform = 'scale(2.5)';
    }
}

function handleTouchMove(event) {
    if (event.touches.length === 2) {
        // Calculate current distance between two fingers
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];
        const currentDistance = Math.hypot(
            touch2.clientX - touch1.clientX,
            touch2.clientY - touch1.clientY
        );

        // Calculate scale change
        const scaleFactor = currentDistance / lastDistance;
        imageScale *= scaleFactor;

        // Limit zoom scale (1x to 4x)
        imageScale = Math.max(1, Math.min(4, imageScale));

        // Apply transform
        fullImage.style.transform = `scale(${imageScale})`;

        // Update lastDistance for next calculation
        lastDistance = currentDistance;
        event.preventDefault();
    }
}

function handleTouchEnd(event) {
    // Reset if only one or zero touches remain
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
    return regex.test(text);
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
