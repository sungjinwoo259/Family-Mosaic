// Birthday quotes
const birthdayQuotes = [
    "May your day be as special as you are!",
    "Wishing you a year filled with joy and laughter!",
    "Another year of amazing memories to create!",
    "May all your dreams come true!",
    "Here's to another year of being awesome!"
];

// Initialize confetti
function initConfetti() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
    }, 250);
}

// Initialize photo carousel
function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
    }

    // Auto-advance carousel
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }, 5000);
}

// Initialize quotes
function initQuotes() {
    const quotesContainer = document.getElementById('quotes');
    let currentIndex = 0;

    function addQuote() {
        const quote = document.createElement('p');
        quote.className = 'text-lg text-gray-700 animate-fade-in';
        quote.textContent = birthdayQuotes[currentIndex];
        quotesContainer.appendChild(quote);

        currentIndex = (currentIndex + 1) % birthdayQuotes.length;

        // Remove old quotes
        if (quotesContainer.children.length > 3) {
            quotesContainer.removeChild(quotesContainer.firstChild);
        }
    }

    // Add initial quotes
    for (let i = 0; i < 3; i++) {
        addQuote();
    }

    // Add new quote every 5 seconds
    setInterval(addQuote, 5000);
}

// Parallax swinging effect for gallery frames
function initParallaxSwing() {
    const frames = document.querySelectorAll('.gallery-frame');
    document.addEventListener('mousemove', (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
        const y = (e.clientY / innerHeight - 0.5) * 2;
        frames.forEach((frame, i) => {
            const sway = Math.sin((i + 1) * 0.5 + x * 2) * 6 + x * 10;
            const tilt = y * 4;
            frame.style.transform = `rotate(${sway}deg) skewY(${tilt}deg)`;
        });
    });
    document.addEventListener('mouseleave', () => {
        frames.forEach(frame => frame.style.transform = '');
    });
}

// Confetti/Balloons background
function initConfettiBackground() {
    const confettiBg = document.getElementById('confetti-bg');
    if (!confettiBg) return;
    // Use canvas-confetti for animated confetti
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 },
        zIndex: 0
    });
}

// Typewriter or glowing effect for congratulatory message
function enhanceCongratsMessage() {
    const h1 = document.querySelector('h1');
    if (!h1) return;
    h1.classList.add('typewriter', 'glow-text');
}

// Modal logic for image pop-up
function initImageModal() {
    const modal = document.getElementById('img-modal');
    const modalImg = document.getElementById('modal-img');
    const modalMsg = document.getElementById('modal-msg');
    const closeBtn = document.getElementById('modal-close');
    const images = document.querySelectorAll('.gallery-frame img');

    images.forEach(img => {
        img.addEventListener('click', (e) => {
            modal.classList.remove('hidden');
            setTimeout(() => modal.classList.add('opacity-100'), 10);
            modalImg.src = img.src;
            modalMsg.textContent = img.getAttribute('data-modal-msg') || '';
            modalImg.classList.add('scale-90');
            modalMsg.classList.add('scale-90');
            setTimeout(() => {
                modalImg.classList.remove('scale-90');
                modalMsg.classList.remove('scale-90');
            }, 50);
        });
    });

    function closeModal() {
        modal.classList.remove('opacity-100');
        setTimeout(() => modal.classList.add('hidden'), 300);
    }
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });
}

// Initialize page
window.addEventListener('DOMContentLoaded', () => {
    initParallaxSwing();
    initConfettiBackground();
    enhanceCongratsMessage();
    initQuotes();
    initImageModal();
}); 