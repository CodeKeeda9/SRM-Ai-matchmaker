
// Application Data (only what's needed for homepage)
const appData = {
  "statistics": {
    "students_connected": 1250,
    "study_sessions": 3480,
    "success_rate": 94,
    "active_users": 856
  }
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  console.log('🎓 StudyBuddy - Initializing Homepage...');
  initializeApp();
  addEasterEggs();
  setupSquaresBackground();
  setupGlowCards();
  updateProfileButton();
  setupTinderDemo();
  setupHomeDemoSquaresBackground();
  setupDeveloperSquaresBackground();
});

function addEasterEggs() {
  // Add developer console easter egg
  console.log('%c🎓 StudyBuddy Developer Console', 'color: #218CAD; font-size: 16px; font-weight: bold;');
  console.log('%cBuilt with ❤️ for SRM University students!', 'color: #666; font-size: 12px;');
  console.log('%cTip: Try typing "konami" to activate a special surprise!', 'color: #999; font-size: 10px;');
  
  // Konami code easter egg
  let konamiCode = [];
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
  
  document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
      konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
      activateKonamiCode();
      konamiCode = [];
    }
  });
  
  // Text-based konami activation
  let consoleInput = '';
  document.addEventListener('keypress', function(e) {
    consoleInput += e.key;
    if (consoleInput.length > 6) {
      consoleInput = consoleInput.slice(-6);
    }
    if (consoleInput === 'konami') {
      activateKonamiCode();
      consoleInput = '';
    }
  });
}

function activateKonamiCode() {
  // Add rainbow animation to the logo
  const logo = document.querySelector('.nav-logo h2');
  if (logo) {
    logo.style.background = 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)';
    logo.style.backgroundSize = '400% 400%';
    logo.style.webkitBackgroundClip = 'text';
    logo.style.webkitTextFillColor = 'transparent';
    logo.style.animation = 'gradient 2s ease infinite';
  }
  
  createConfetti();
  console.log('%c🎉 KONAMI CODE ACTIVATED! 🎉', 'color: #ff6b6b; font-size: 20px; font-weight: bold;');
  console.log('%cYou found the secret! Keep being awesome!', 'color: #4ecdc4; font-size: 14px;');
}

function createConfetti() {
  const colors = ['#f39c12', '#e74c3c', '#9b59b6', '#3498db', '#2ecc71'];
  const confettiContainer = document.createElement('div');
  confettiContainer.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    pointer-events: none; z-index: 9999;
  `;
  document.body.appendChild(confettiContainer);
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
      position: absolute; width: 10px; height: 10px;
      background-color: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}%;
      animation: confetti-fall ${Math.random() * 3 + 2}s linear forwards;
    `;
    confettiContainer.appendChild(confetti);
  }
  
  // Add CSS animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes confetti-fall {
      to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  
  setTimeout(() => {
    if (confettiContainer.parentNode) {
      document.body.removeChild(confettiContainer);
    }
  }, 5000);
}

function initializeApp() {
  console.log('📋 Setting up homepage...');
  
  // Setup event listeners
  setupEventListeners();
  
  // Animate stats when they come into view
  setTimeout(() => {
    animateStats();
  }, 500);
  
  console.log('✅ Homepage initialized successfully!');
}

function setupEventListeners() {
  console.log('🔧 Setting up event listeners...');
  
  // Homepage navigation links
  setupNavigationLinks();
  
  // Get Started buttons  
  setupGetStartedButtons();
  
  // Learn more and back buttons
  setupActionButtons();
  
  // Scroll detection
  window.addEventListener('scroll', handleScroll);
  
  console.log('✅ Event listeners setup complete');
}

function setupNavigationLinks() {
  console.log('🔗 Setting up navigation links...');
  
  // Top navigation links
  document.addEventListener('click', function(e) {
    const navLink = e.target.closest('.nav-link[data-section]');
    if (navLink) {
      e.preventDefault();
      const section = navLink.getAttribute('data-section');
      console.log('📍 Navigation clicked:', section);
      
      if (section === 'home') {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
      } else {
        scrollToSection(section);
      }
      updateActiveNavLink(section);
    }
  });
}

// Add this to your existing setupGetStartedButtons function:
function setupGetStartedButtons() {
  console.log('🚀 Setting up buttons...');
  
  // Profile button (top nav only)
  document.addEventListener('click', function(e) {
    const profileButton = e.target.closest('#my-profile-nav');
    if (profileButton) {
      e.preventDefault();
      console.log('👤 Profile clicked:', profileButton.id);
      openProfilePage();
    }
  });
  
  // Get Started buttons (hero and CTA)
  document.addEventListener('click', function(e) {
    const getStartedButton = e.target.closest('#get-started-hero, #get-started-cta');
    if (getStartedButton) {
      e.preventDefault();
      console.log('🎯 Get Started clicked:', getStartedButton.id);
      window.location.href = 'onboarding.html';
    }
  });
  
  // Chatbot button (homepage)
  document.addEventListener('click', function(e) {
    if (e.target.closest('#chatbot-homepage')) {
      e.preventDefault();
      console.log('🤖 Chatbot button clicked from homepage');
      try {
        window.open('chatbot.html', '_blank');
      } catch(e) {
        console.log('Could not open chatbot in new window:', e);
        window.location.href = 'chatbot.html';
      }
    }
  });
}

// Add this function to update the profile button:
function updateProfileButton() {
  const savedUser = localStorage.getItem('studyBuddy_user');
  let user = null;
  
  if (savedUser) {
    try {
      user = JSON.parse(savedUser);
    } catch (e) {
      console.error('❌ Error parsing saved user:', e);
    }
  }
  
  // HIGHLIGHTED: Update only the nav profile button
  const avatarEl = document.getElementById('profile-avatar');
  const textEl = document.getElementById('profile-text');
  
  if (avatarEl) {
    avatarEl.textContent = user ? user.avatar || '👤' : '👤';
  }
  
  if (textEl) {
    textEl.textContent = user ? 'My Profile' : 'Get Started';
  }
}

// Add this function to handle profile navigation:
function openProfilePage() {
  const savedUser = localStorage.getItem('studyBuddy_user');
  
  if (savedUser) {
    // User has a profile, go to profile page
    window.location.href = 'profile.html';
  } else {
    // No profile, go to onboarding
    window.location.href = 'onboarding.html';
  }
}

function setupActionButtons() {
  console.log('⚙️ Setting up action buttons...');
  
  // Learn more button event listener removed - now links directly to learn-more.html
  // document.addEventListener('click', function(e) {
  //   // Learn more button
  //   if (e.target.closest('#learn-more')) {
  //     e.preventDefault();
  //     console.log('📖 Learn more clicked');
  //     scrollToSection('how-it-works');
  //   }
  // });
}

function scrollToSection(sectionId) {
  console.log('📍 Scrolling to section:', sectionId);
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    console.warn('⚠️ Section not found:', sectionId);
  }
}

function updateActiveNavLink(activeSection) {
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-section') === activeSection) {
      link.classList.add('active');
    }
  });
}

function handleScroll() {
  const nav = document.getElementById('main-nav');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }
  
  // Update active navigation based on scroll position
  const sections = ['home', 'features', 'how-it-works', 'developer'];
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        updateActiveNavLink(sectionId);
      }
    }
  });
}

function animateStats() {
  console.log('📊 Starting stats animation...');
  const statValues = document.querySelectorAll('.stat-value[data-count]');
  console.log('📈 Found', statValues.length, 'stat elements');
  
  if (statValues.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statEl = entry.target;
        const targetCount = parseInt(statEl.getAttribute('data-count'));
        console.log('🔢 Animating counter to:', targetCount);
        animateCounter(statEl, targetCount);
        observer.unobserve(statEl);
      }
    });
  }, { threshold: 0.5 });
  
  statValues.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 30);
}

// Squares Background Animation
function setupSquaresBackground() {
  const canvas = document.getElementById('squaresCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Configuration
  const config = {
    direction: 'diagonal',
    speed: 0.6,
    borderColor: '#777',
    squareSize: 36,
    hoverFillColor: '#333'
  };

  let gridOffset = { x: 0, y: 0 };
  let hoveredSquare = null;
  let animationId;

  function resizeCanvas() {
    const container = canvas.parentElement;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  }

  function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const startX = Math.floor(gridOffset.x / config.squareSize) * config.squareSize;
    const startY = Math.floor(gridOffset.y / config.squareSize) * config.squareSize;

    ctx.lineWidth = 1;

    for (let x = startX; x < canvas.width + config.squareSize; x += config.squareSize) {
      for (let y = startY; y < canvas.height + config.squareSize; y += config.squareSize) {
        const squareX = x - (gridOffset.x % config.squareSize);
        const squareY = y - (gridOffset.y % config.squareSize);

        if (
          hoveredSquare &&
          Math.floor((x - startX) / config.squareSize) === hoveredSquare.x &&
          Math.floor((y - startY) / config.squareSize) === hoveredSquare.y
        ) {
          ctx.fillStyle = config.hoverFillColor;
          ctx.fillRect(squareX, squareY, config.squareSize, config.squareSize);
        }

        ctx.strokeStyle = config.borderColor;
        ctx.strokeRect(squareX, squareY, config.squareSize, config.squareSize);
      }
    }

    // Add gradient overlay
    const gradient = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)) / 2
    );
    gradient.addColorStop(0, 'rgba(10, 10, 10, 0)');
    gradient.addColorStop(1, '#0a0a0a');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function updateAnimation() {
    const effectiveSpeed = Math.max(config.speed, 0.1);

    if (config.direction === 'diagonal') {
      gridOffset.x = (gridOffset.x - effectiveSpeed + config.squareSize) % config.squareSize;
      gridOffset.y = (gridOffset.y - effectiveSpeed + config.squareSize) % config.squareSize;
    }

    drawGrid();
    animationId = requestAnimationFrame(updateAnimation);
  }

  function handleMouseMove(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const startX = Math.floor(gridOffset.x / config.squareSize) * config.squareSize;
    const startY = Math.floor(gridOffset.y / config.squareSize) * config.squareSize;

    const hoveredSquareX = Math.floor(
      (mouseX + gridOffset.x - startX) / config.squareSize
    );
    const hoveredSquareY = Math.floor(
      (mouseY + gridOffset.y - startY) / config.squareSize
    );

    hoveredSquare = { x: hoveredSquareX, y: hoveredSquareY };
  }

  function handleMouseLeave() {
    hoveredSquare = null;
  }

  // Initialize
  resizeCanvas();
  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseleave', handleMouseLeave);
  window.addEventListener('resize', resizeCanvas);

  // Start animation
  updateAnimation();

  // Cleanup function
  return () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    canvas.removeEventListener('mousemove', handleMouseMove);
    canvas.removeEventListener('mouseleave', handleMouseLeave);
    window.removeEventListener('resize', resizeCanvas);
  };
}

// Squares background for homepage Tinder demo
function setupHomeDemoSquaresBackground() {
  const canvas = document.getElementById('homeDemoSquaresCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const config = {
    direction: 'diagonal',
    speed: 0.6,
    borderColor: '#555',
    squareSize: 32,
    hoverFillColor: '#333'
  };

  let gridOffset = { x: 0, y: 0 };
  let hoveredSquare = null;
  let animationId;

  function resizeCanvas() {
    const container = canvas.parentElement;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  }

  function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const startX = Math.floor(gridOffset.x / config.squareSize) * config.squareSize;
    const startY = Math.floor(gridOffset.y / config.squareSize) * config.squareSize;

    ctx.lineWidth = 0.5;

    for (let x = startX; x < canvas.width + config.squareSize; x += config.squareSize) {
      for (let y = startY; y < canvas.height + config.squareSize; y += config.squareSize) {
        const squareX = x - (gridOffset.x % config.squareSize);
        const squareY = y - (gridOffset.y % config.squareSize);

        if (
          hoveredSquare &&
          Math.floor((x - startX) / config.squareSize) === hoveredSquare.x &&
          Math.floor((y - startY) / config.squareSize) === hoveredSquare.y
        ) {
          ctx.fillStyle = config.hoverFillColor;
          ctx.fillRect(squareX, squareY, config.squareSize, config.squareSize);
        }

        ctx.strokeStyle = config.borderColor;
        ctx.strokeRect(squareX, squareY, config.squareSize, config.squareSize);
      }
    }

    const gradient = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)) / 2
    );
    gradient.addColorStop(0, 'rgba(10, 10, 10, 0)');
    gradient.addColorStop(1, '#0a0a0a');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function updateAnimation() {
    const effectiveSpeed = Math.max(config.speed, 0.1);
    if (config.direction === 'diagonal') {
      gridOffset.x = (gridOffset.x - effectiveSpeed + config.squareSize) % config.squareSize;
      gridOffset.y = (gridOffset.y - effectiveSpeed + config.squareSize) % config.squareSize;
    }
    drawGrid();
    animationId = requestAnimationFrame(updateAnimation);
  }

  function handleMouseMove(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const startX = Math.floor(gridOffset.x / config.squareSize) * config.squareSize;
    const startY = Math.floor(gridOffset.y / config.squareSize) * config.squareSize;

    const hoveredSquareX = Math.floor((mouseX + gridOffset.x - startX) / config.squareSize);
    const hoveredSquareY = Math.floor((mouseY + gridOffset.y - startY) / config.squareSize);
    hoveredSquare = { x: hoveredSquareX, y: hoveredSquareY };
  }

  function handleMouseLeave() {
    hoveredSquare = null;
  }

  resizeCanvas();
  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseleave', handleMouseLeave);
  window.addEventListener('resize', resizeCanvas);
  if (animationId) cancelAnimationFrame(animationId);
  updateAnimation();
}

// Squares background for developer section
function setupDeveloperSquaresBackground() {
  const canvas = document.getElementById('developerSquaresCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const config = {
    direction: 'diagonal',
    speed: 0.6,
    borderColor: '#555',
    squareSize: 32,
    hoverFillColor: '#333'
  };

  let gridOffset = { x: 0, y: 0 };
  let hoveredSquare = null;
  let animationId;

  function resizeCanvas() {
    const container = canvas.parentElement;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  }

  function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const startX = Math.floor(gridOffset.x / config.squareSize) * config.squareSize;
    const startY = Math.floor(gridOffset.y / config.squareSize) * config.squareSize;

    ctx.lineWidth = 0.5;

    for (let x = startX; x < canvas.width + config.squareSize; x += config.squareSize) {
      for (let y = startY; y < canvas.height + config.squareSize; y += config.squareSize) {
        const squareX = x - (gridOffset.x % config.squareSize);
        const squareY = y - (gridOffset.y % config.squareSize);

        if (
          hoveredSquare &&
          Math.floor((x - startX) / config.squareSize) === hoveredSquare.x &&
          Math.floor((y - startY) / config.squareSize) === hoveredSquare.y
        ) {
          ctx.fillStyle = config.hoverFillColor;
          ctx.fillRect(squareX, squareY, config.squareSize, config.squareSize);
        }

        ctx.strokeStyle = config.borderColor;
        ctx.strokeRect(squareX, squareY, config.squareSize, config.squareSize);
      }
    }

    const gradient = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)) / 2
    );
    gradient.addColorStop(0, 'rgba(10, 10, 10, 0)');
    gradient.addColorStop(1, '#0a0a0a');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function updateAnimation() {
    const effectiveSpeed = Math.max(config.speed, 0.1);
    if (config.direction === 'diagonal') {
      gridOffset.x = (gridOffset.x - effectiveSpeed + config.squareSize) % config.squareSize;
      gridOffset.y = (gridOffset.y - effectiveSpeed + config.squareSize) % config.squareSize;
    }
    drawGrid();
    animationId = requestAnimationFrame(updateAnimation);
  }

  function handleMouseMove(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const startX = Math.floor(gridOffset.x / config.squareSize) * config.squareSize;
    const startY = Math.floor(gridOffset.y / config.squareSize) * config.squareSize;

    const hoveredSquareX = Math.floor((mouseX + gridOffset.x - startX) / config.squareSize);
    const hoveredSquareY = Math.floor((mouseY + gridOffset.y - startY) / config.squareSize);
    hoveredSquare = { x: hoveredSquareX, y: hoveredSquareY };
  }

  function handleMouseLeave() {
    hoveredSquare = null;
  }

  resizeCanvas();
  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseleave', handleMouseLeave);
  window.addEventListener('resize', resizeCanvas);
  if (animationId) cancelAnimationFrame(animationId);
  updateAnimation();
}

// Glow Cards Animation
function setupGlowCards() {
  const cards = document.querySelectorAll('.stat-card, .step-card, .feature-card');
  console.log('Found', cards.length, 'cards for glow effect');
  
  cards.forEach((card, index) => {
    card.setAttribute('data-glow', '');
    console.log('Added data-glow to card', index, card.className);
    
    // Set initial position for testing
    card.style.setProperty('--x', '100');
    card.style.setProperty('--y', '100');
    card.style.setProperty('--xp', '0.5');
    card.style.setProperty('--yp', '0.5');
    
    const syncPointer = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xp = x / rect.width;
      const yp = y / rect.height;
      
      card.style.setProperty('--x', x.toFixed(2));
      card.style.setProperty('--xp', xp.toFixed(2));
      card.style.setProperty('--y', y.toFixed(2));
      card.style.setProperty('--yp', yp.toFixed(2));
    };
    
    card.addEventListener('pointermove', syncPointer);
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--x', '0');
      card.style.setProperty('--xp', '0');
      card.style.setProperty('--y', '0');
      card.style.setProperty('--yp', '0');
    });
  });
}

// Tinder-like Demo Functionality
function setupTinderDemo() {
  const cardStack = document.getElementById('card-stack');
  const passBtn = document.getElementById('pass-btn');
  const likeBtn = document.getElementById('like-btn');
  
  if (!cardStack || !passBtn || !likeBtn) return;
  
  // Sample student data for demo
  const demoStudents = [
    {
      name: "Arjun Sharma",
      avatar: "👨‍💻",
      year: "2nd Year",
      department: "Computer Science",
      subjects: ["Data Structures", "Algorithms", "Web Development"],
      bio: "Passionate about coding and always looking for study buddies to tackle complex algorithms together!",
      compatibility: 92
    },
    {
      name: "Priya Patel",
      avatar: "👩‍🔬",
      year: "3rd Year",
      department: "Biotechnology",
      subjects: ["Molecular Biology", "Genetics", "Biochemistry"],
      bio: "Love exploring the fascinating world of genetics. Looking for study partners for lab work and research projects!",
      compatibility: 88
    },
    {
      name: "Rahul Kumar",
      avatar: "👨‍💻",
      year: "1st Year",
      department: "Computer Science",
      subjects: ["Programming Fundamentals", "Mathematics", "Physics"],
      bio: "New to coding but very enthusiastic! Would love to learn from experienced peers.",
      compatibility: 85
    },
    {
      name: "Ananya Singh",
      avatar: "👩‍💻",
      year: "4th Year",
      department: "Information Technology",
      subjects: ["Machine Learning", "Data Science", "Python"],
      bio: "Final year student specializing in AI/ML. Happy to mentor and collaborate on projects!",
      compatibility: 95
    },
    {
      name: "Vikram Malhotra",
      avatar: "👨‍🔬",
      year: "2nd Year",
      department: "Mechanical Engineering",
      subjects: ["Thermodynamics", "Fluid Mechanics", "CAD"],
      bio: "Engineering enthusiast who loves practical problem-solving. Great at explaining complex concepts!",
      compatibility: 87
    }
  ];
  
  let currentCardIndex = 0;
  let isDragging = false;
  let startX = 0;
  let currentX = 0;
  let currentCard = null;
  
  function createCard(student) {
    const card = document.createElement('div');
    card.className = 'student-card';
    card.innerHTML = `
      <div class="card-header">
        <div class="card-avatar">${student.avatar}</div>
        <div class="card-name">${student.name}</div>
        <div class="card-info">${student.year} • ${student.department}</div>
      </div>
      <div class="card-body">
        <div class="compatibility-score">
          <div class="score-value">${student.compatibility}%</div>
          <div class="score-label">Compatibility</div>
        </div>
        <div class="card-detail">
          <div class="card-detail-title">Subjects</div>
          <div class="card-subjects">
            ${student.subjects.map(subject => `<span class="subject-tag">${subject}</span>`).join('')}
          </div>
        </div>
        <div class="card-detail">
          <div class="card-detail-title">Bio</div>
          <p>${student.bio}</p>
        </div>
      </div>
    `;
    return card;
  }
  
  function showNextCard() {
    if (currentCardIndex >= demoStudents.length) {
      // Reset to first card when all cards are shown
      currentCardIndex = 0;
    }
    
    const student = demoStudents[currentCardIndex];
    const card = createCard(student);
    cardStack.appendChild(card);
    currentCard = card;
    
    // Add swipe functionality
    setupCardSwipe(card);
  }
  
  function setupCardSwipe(card) {
    card.addEventListener('mousedown', startDrag);
    card.addEventListener('touchstart', startDrag);
    
    function startDrag(e) {
      isDragging = true;
      startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
      currentX = startX;
      card.classList.add('swiping');
      
      document.addEventListener('mousemove', drag);
      document.addEventListener('touchmove', drag);
      document.addEventListener('mouseup', endDrag);
      document.addEventListener('touchend', endDrag);
    }
    
    function drag(e) {
      if (!isDragging) return;
      e.preventDefault();
      currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
      const deltaX = currentX - startX;
      const rotation = deltaX * 0.1;
      
      card.style.transform = `translateX(${deltaX}px) rotate(${rotation}deg)`;
    }
    
    function endDrag() {
      if (!isDragging) return;
      isDragging = false;
      card.classList.remove('swiping');
      
      const deltaX = currentX - startX;
      const threshold = 100;
      
      if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          swipeRight();
        } else {
          swipeLeft();
        }
      } else {
        // Return to center
        card.style.transform = '';
      }
      
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('touchmove', drag);
      document.removeEventListener('mouseup', endDrag);
      document.removeEventListener('touchend', endDrag);
    }
  }
  
  function swipeRight() {
    if (!currentCard) return;
    
    currentCard.style.transform = 'translateX(200%) rotate(20deg)';
    currentCard.style.opacity = '0';
    
    setTimeout(() => {
      cardStack.removeChild(currentCard);
      currentCardIndex++;
      showNextCard();
    }, 300);
    
    // Show match notification for high compatibility
    const student = demoStudents[currentCardIndex];
    if (student.compatibility >= 90) {
      showMatchNotification(student);
    }
  }
  
  function swipeLeft() {
    if (!currentCard) return;
    
    currentCard.style.transform = 'translateX(-200%) rotate(-20deg)';
    currentCard.style.opacity = '0';
    
    setTimeout(() => {
      cardStack.removeChild(currentCard);
      currentCardIndex++;
      showNextCard();
    }, 300);
  }
  
  function showMatchNotification(student) {
    const notification = document.createElement('div');
    notification.className = 'match-notification';
    notification.innerHTML = `
      <div class="match-content">
        <h3>🎉 It's a Match!</h3>
        <p>You and ${student.name} have ${student.compatibility}% compatibility!</p>
        <p>Perfect study partners for ${student.subjects.join(', ')}</p>
      </div>
    `;
    
    notification.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 20px;
      border-radius: 12px;
      z-index: 1000;
      animation: matchPopup 0.5s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
  
  // Button event listeners
  passBtn.addEventListener('click', swipeLeft);
  likeBtn.addEventListener('click', swipeRight);
  
  // Start with first card
  showNextCard();
}
