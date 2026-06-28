// Art catalog data
const ARTWORKS = [
    {
        filename: "90s_portrait.jpeg",
        title: "90s Portrait",
        category: "portraits",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "Ancestry.PNG",
        title: "Ancestry",
        category: "paintings",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "BerlinByNight.jpg",
        title: "Berlin By Night",
        category: "landscapes",
        year: "2021",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "DownTime(2m x 4m).jpg",
        title: "Down Time",
        category: "paintings",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "200 x 400 cm"
    },
    {
        filename: "IMG_6938.jpeg",
        title: "Untitled",
        category: "paintings",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "LookAtAllTheThingsWeOwn.jpg",
        title: "Look At All The Things We Own",
        category: "paintings",
        year: "2021",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "NightCats.PNG",
        title: "Night Cats",
        category: "paintings",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "Pandemic.JPG",
        title: "Pandemic",
        category: "paintings",
        year: "2020",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "TippingPoint(4m x 2m).jpg",
        title: "Tipping Point",
        category: "paintings",
        year: "2021",
        medium: "Oil, acrylic on canvas",
        dimensions: "400 x 200 cm"
    },
    {
        filename: "abstractdog.png",
        title: "Abstract Dog",
        category: "paintings",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "apoorv_bkk.jpeg",
        title: "Apoorv in Bangkok",
        category: "portraits",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "baraka.jpeg",
        title: "Baraka",
        category: "portraits",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "bust(5).jpg",
        title: "Bust V",
        category: "paintings",
        year: "2021",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "bust1.JPG",
        title: "Bust I",
        category: "paintings",
        year: "2019",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "cheese_plat(updated).jpg",
        title: "Cheese Platter",
        category: "paintings",
        year: "2021",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "china_town_bangkok.jpeg",
        title: "Chinatown Bangkok",
        category: "landscapes",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "constant_root1.png",
        title: "Constant Root I",
        category: "paintings",
        year: "2021",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "constant_root2.png",
        title: "Constant Root II",
        category: "paintings",
        year: "2021",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "constant_root3.png",
        title: "Constant Root III",
        category: "paintings",
        year: "2021",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "cornerplant.JPG",
        title: "Corner Plant",
        category: "paintings",
        year: "2019",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "delphi_oracle.jpeg",
        title: "Delphi Oracle",
        category: "portraits",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "fawn.jpg",
        title: "Fawn",
        category: "paintings",
        year: "2021",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "hit_marker.jpeg",
        title: "Hit Marker",
        category: "portraits",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "justin_bkk.jpeg",
        title: "Justin in Bangkok",
        category: "portraits",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "lyrique_portrait.jpeg",
        title: "Lyrique Portrait",
        category: "portraits",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "objectcarpetpainting(2).png",
        title: "Object Carpet Painting II",
        category: "paintings",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "objectpaintingcarpet.JPG",
        title: "Object Painting Carpet",
        category: "paintings",
        year: "2019",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "oldboys.JPG",
        title: "Old Boys",
        category: "paintings",
        year: "2019",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "operatic_violence.jpg",
        title: "Operatic Violence",
        category: "paintings",
        year: "2019",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "pattaya_beach.jpeg",
        title: "Pattaya Beach",
        category: "landscapes",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "pattaya_retribution.jpeg",
        title: "Pattaya Retribution",
        category: "landscapes",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "shirt.JPG",
        title: "Shirt",
        category: "paintings",
        year: "2019",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "side_profile.jpeg",
        title: "Side Profile",
        category: "portraits",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "smoking_portrait.jpeg",
        title: "Smoking Portrait",
        category: "portraits",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "solar_array.jpg",
        title: "Solar Array",
        category: "paintings",
        year: "2021",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "soy_fields.jpg",
        title: "Soy Fields",
        category: "paintings",
        year: "2021",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "stormy_pattaya_beach.jpeg",
        title: "Stormy Pattaya Beach",
        category: "landscapes",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "thai_style_portrait.jpeg",
        title: "Thai Style Portrait",
        category: "portraits",
        year: "2026",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "trappedpeople(edited).JPG",
        title: "Trapped People",
        category: "paintings",
        year: "2018",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    },
    {
        filename: "tropicalplants(edited).JPG",
        title: "Tropical Plants",
        category: "paintings",
        year: "2018",
        medium: "Oil, acrylic on canvas",
        dimensions: "30 x 40 cm"
    }
];

// Sort artworks by year descending (newest at the top)
ARTWORKS.sort((a, b) => parseInt(b.year) - parseInt(a.year));

// State variables
let currentFilteredList = [...ARTWORKS];
let currentLightboxIndex = 0;
let isMobileMenuOpen = false;

// DOM Elements
const galleryGrid = document.getElementById("gallery-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxMeta = document.getElementById("lightbox-meta");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");
const mobilePrev = document.getElementById("mobile-prev");
const mobileNext = document.getElementById("mobile-next");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const header = document.querySelector("header");

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
    renderGallery();
    initFilters();
    initLightbox();
    initScrollAnimations();
    initMobileMenu();
    initHeaderScroll();
    initKeyboardNavigation();
});

// Render the grid elements dynamically
function renderGallery() {
    galleryGrid.innerHTML = "";
    
    currentFilteredList.forEach((item, index) => {
        const gridItem = document.createElement("div");
        gridItem.className = "gallery-item";
        gridItem.setAttribute("data-category", item.category);
        
        gridItem.innerHTML = `
            <div class="gallery-image-wrapper">
                <img src="assets/${item.filename}" alt="${item.title}" loading="lazy">
                <div class="gallery-overlay">
                    <div class="gallery-overlay-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                    </div>
                </div>
            </div>
            <div class="gallery-info">
                <h3 class="gallery-title">${item.title}</h3>
                <div class="gallery-meta">
                    <span>${item.dimensions}</span>
                    <span class="gallery-year">${item.year}</span>
                </div>
            </div>
        `;
        
        // Open lightbox on click
        gridItem.addEventListener("click", () => {
            openLightbox(index);
        });
        
        galleryGrid.appendChild(gridItem);
        
        // Trigger reflow & fade in
        setTimeout(() => {
            gridItem.classList.add("show");
        }, index * 40);
    });
}

// Category filter interaction
function initFilters() {
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filterValue = button.getAttribute("data-filter");
            
            // Toggle active state
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            
            // Animate items out first
            const items = document.querySelectorAll(".gallery-item");
            items.forEach(item => {
                item.classList.remove("show");
            });
            
            setTimeout(() => {
                if (filterValue === "all") {
                    currentFilteredList = [...ARTWORKS];
                } else {
                    currentFilteredList = ARTWORKS.filter(item => item.category === filterValue);
                }
                renderGallery();
            }, 300);
        });
    });
}

// Lightbox controller
function initLightbox() {
    // Close events
    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox || e.target.classList.contains("lightbox-image-container")) {
            closeLightbox();
        }
    });

    // Arrow controls
    lightboxPrev.addEventListener("click", showPrevImage);
    lightboxNext.addEventListener("click", showNextImage);
    mobilePrev.addEventListener("click", showPrevImage);
    mobileNext.addEventListener("click", showNextImage);

    // Touch Swipe Gestures for Mobile
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const threshold = 50; // swipe minimum distance in pixels
        if (touchEndX < touchStartX - threshold) {
            showNextImage(); // Swiped left
        }
        if (touchEndX > touchStartX + threshold) {
            showPrevImage(); // Swiped right
        }
    }
}

function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxContent();
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
}

function showPrevImage() {
    if (currentLightboxIndex > 0) {
        currentLightboxIndex--;
    } else {
        currentLightboxIndex = currentFilteredList.length - 1; // Loop to end
    }
    animateLightboxTransition();
}

function showNextImage() {
    if (currentLightboxIndex < currentFilteredList.length - 1) {
        currentLightboxIndex++;
    } else {
        currentLightboxIndex = 0; // Loop to beginning
    }
    animateLightboxTransition();
}

function animateLightboxTransition() {
    const img = lightboxImg;
    const info = document.querySelector(".lightbox-info");
    
    // Quick fade out
    img.style.opacity = "0";
    img.style.transform = "scale(0.97)";
    info.style.opacity = "0";
    
    setTimeout(() => {
        updateLightboxContent();
        // Fade back in
        img.style.opacity = "1";
        img.style.transform = "scale(1)";
        info.style.opacity = "1";
    }, 200);
}

function updateLightboxContent() {
    const item = currentFilteredList[currentLightboxIndex];
    lightboxImg.src = `assets/${item.filename}`;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    
    lightboxMeta.innerHTML = `
        <span>${item.medium}</span> &bull; 
        <span>${item.dimensions}</span> &bull; 
        <span>${item.year}</span>
    `;
    
    // Preload adjacent images for smooth navigation
    preloadAdjacentImages();
}

function preloadAdjacentImages() {
    const nextIndex = (currentLightboxIndex + 1) % currentFilteredList.length;
    const prevIndex = (currentLightboxIndex - 1 + currentFilteredList.length) % currentFilteredList.length;
    
    const nextImg = new Image();
    nextImg.src = `assets/${currentFilteredList[nextIndex].filename}`;
    
    const prevImg = new Image();
    prevImg.src = `assets/${currentFilteredList[prevIndex].filename}`;
}

// Keyboard arrow key controls
function initKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("open")) return;
        
        if (e.key === "Escape") {
            closeLightbox();
        } else if (e.key === "ArrowLeft") {
            showPrevImage();
        } else if (e.key === "ArrowRight") {
            showNextImage();
        }
    });
}

// Mobile hamburger navigation toggle
function initMobileMenu() {
    menuToggle.addEventListener("click", () => {
        isMobileMenuOpen = !isMobileMenuOpen;
        navLinks.classList.toggle("open", isMobileMenuOpen);
        
        // Animate hamburger to X
        const spans = menuToggle.querySelectorAll("span");
        if (isMobileMenuOpen) {
            spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
            spans[1].style.opacity = "0";
            spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
        } else {
            spans[0].style.transform = "none";
            spans[1].style.opacity = "1";
            spans[2].style.transform = "none";
        }
    });

    // Close mobile menu when a link is clicked
    const links = navLinks.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            isMobileMenuOpen = false;
            navLinks.classList.remove("open");
            const spans = menuToggle.querySelectorAll("span");
            spans[0].style.transform = "none";
            spans[1].style.opacity = "1";
            spans[2].style.transform = "none";
        });
    });
}

// Shrink header on scroll
function initHeaderScroll() {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        
        // Highlight active navigation link based on section scroll depth
        highlightActiveSection();
    });
}

function highlightActiveSection() {
    const sections = document.querySelectorAll("section, header");
    const navItems = document.querySelectorAll(".nav-links a");
    
    let scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        if (section.id) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            
            if (scrollPos >= top && scrollPos < top + height) {
                navItems.forEach(item => {
                    item.classList.remove("active");
                    if (item.getAttribute("href") === `#${section.id}`) {
                        item.classList.add("active");
                    }
                });
            }
        }
    });
}

// Scroll fade-in observer (Intersection Observer)
function initScrollAnimations() {
    const fadeSections = document.querySelectorAll(".fade-in-section");
    
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, observerOptions);
    
    fadeSections.forEach(section => {
        observer.observe(section);
    });
}
