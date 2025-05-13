// Anniversary quotes
const anniversaryQuotes = [
    "A successful marriage requires falling in love many times, always with the same person.",
    "The best thing to hold onto in life is each other.",
    "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    "Love is composed of a single soul inhabiting two bodies.",
    "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves."
];

// Initialize photo gallery
function initPhotoGallery() {
    const photos = document.querySelectorAll('.photo-card');
    
    photos.forEach(photo => {
        photo.addEventListener('mouseenter', () => {
            photo.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        photo.addEventListener('mouseleave', () => {
            photo.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Initialize typewriter quotes
function initTypewriterQuotes() {
    const quotesContainer = document.getElementById('quotes');
    let currentIndex = 0;

    function typeWriter(text, element, speed = 50) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    function addQuote() {
        const quote = document.createElement('p');
        quote.className = 'text-lg text-gray-700 mb-4';
        quotesContainer.appendChild(quote);
        
        typeWriter(anniversaryQuotes[currentIndex], quote);
        currentIndex = (currentIndex + 1) % anniversaryQuotes.length;
        
        // Remove old quotes
        if (quotesContainer.children.length > 3) {
            quotesContainer.removeChild(quotesContainer.firstChild);
        }
    }

    // Add initial quotes
    for (let i = 0; i < 3; i++) {
        addQuote();
    }

    // Add new quote every 10 seconds
    setInterval(addQuote, 10000);
}

// Add floating hearts animation
function initFloatingHearts() {
    const container = document.querySelector('.container');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'absolute text-pink-500 text-2xl animate-float';
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    // Create hearts periodically
    setInterval(createHeart, 2000);
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

// Hearts/Bokeh background
function initHeartsBackground() {
  const heartsBg = document.getElementById('hearts-bg');
  if (!heartsBg) return;
  // Animated floating hearts
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.fontSize = (Math.random() * 24 + 16) + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    heart.style.color = '#f472b6';
    heart.style.animation = `floatHeart ${Math.random() * 6 + 6}s linear infinite`;
    heartsBg.appendChild(heart);
  }
}

// Add keyframes for floating hearts
const style = document.createElement('style');
style.textContent = `
@keyframes floatHeart {
  0% { transform: translateY(0) scale(1) rotate(0deg); }
  100% { transform: translateY(-100vh) scale(1.2) rotate(30deg); }
}`;
document.head.appendChild(style);

// Fade-in and elegant style for congratulatory message
function enhanceCongratsMessage() {
  const h1 = document.querySelector('h1');
  if (!h1) return;
  h1.classList.add('animate-fade-in', 'glow-text');
  h1.style.fontFamily = 'cursive, serif';
  h1.style.fontWeight = 'bold';
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
  initHeartsBackground();
  enhanceCongratsMessage();
  initTypewriterQuotes();
  initFloatingHearts();
  initImageModal();
}); 