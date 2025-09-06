// Performance Optimization Script
// ================================

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    // Add loading="lazy" to all images if not already present
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
});

// Preload critical resources
function preloadCriticalResources() {
    const criticalImages = [
        'images/Banner.jpg',
        'images/shu-logo.png'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Optimize scroll performance
let ticking = false;

function updateScrollPosition() {
    // Add scroll-based optimizations here
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature-card, .college-card, .stat-item');
    animateElements.forEach(el => observer.observe(el));
});

// Optimize font loading
if ('fonts' in document) {
    document.fonts.ready.then(() => {
        document.body.classList.add('fonts-loaded');
    });
}

// Service Worker registration for caching
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Optimize third-party scripts loading
function loadThirdPartyScripts() {
    // Delay loading of non-critical scripts
    setTimeout(() => {
        // Load analytics after initial page load
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href
            });
        }
    }, 2000);
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', function() {
    preloadCriticalResources();
    loadThirdPartyScripts();
});

// Monitor Core Web Vitals
function measureWebVitals() {
    // Measure Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'LCP', {
                    value: Math.round(entry.startTime),
                    event_category: 'Web Vitals'
                });
            }
        }
    }).observe({entryTypes: ['largest-contentful-paint']});

    // Measure First Input Delay (FID)
    new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'FID', {
                    value: Math.round(entry.processingStart - entry.startTime),
                    event_category: 'Web Vitals'
                });
            }
        }
    }).observe({entryTypes: ['first-input']});

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) {
                clsValue += entry.value;
            }
        }
        if (typeof gtag !== 'undefined') {
            gtag('event', 'CLS', {
                value: Math.round(clsValue * 1000),
                event_category: 'Web Vitals'
            });
        }
    }).observe({entryTypes: ['layout-shift']});
}

// Start measuring web vitals
if (typeof PerformanceObserver !== 'undefined') {
    measureWebVitals();
}

