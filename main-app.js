// Simplified main app functionality
document.addEventListener('DOMContentLoaded', function() {
  console.log('🎓 StudyBuddy Main App - Initializing...');
  
  // Check for saved user
  const savedUser = localStorage.getItem('studyBuddy_user');
  if (savedUser) {
    try {
      const currentUser = JSON.parse(savedUser);
      console.log('✅ Found saved user:', currentUser.name);
      
      // Update user name
      const userNameEl = document.getElementById('user-name');
      if (userNameEl) {
        userNameEl.textContent = `Welcome, ${currentUser.name}!`;
      }
    } catch (e) {
      console.error('❌ Error parsing saved user:', e);
      localStorage.removeItem('studyBuddy_user');
      window.location.href = 'onboarding.html';
      return;
    }
  } else {
    window.location.href = 'onboarding.html';
    return;
  }
  
  // Setup basic event listeners
  setupEventListeners();

  // Initialize Discover tab swipe experience
  initializeDiscoverSwipe();
  setupDiscoverSquaresBackground();
});

function setupEventListeners() {
  // Bottom navigation
  document.addEventListener('click', function(e) {
    const navItem = e.target.closest('.nav-item[data-tab]');
    if (navItem) {
      e.preventDefault();
      const tabName = navItem.getAttribute('data-tab');
      console.log('📑 Tab clicked:', tabName);
      switchTab(tabName);
    }
  });
  
  // Back to homepage
  document.addEventListener('click', function(e) {
    if (e.target.closest('#back-to-homepage')) {
      e.preventDefault();
      console.log('🏠 Back to homepage clicked');
      window.location.href = 'index.html';
    }
  });
  
  // Chatbot button
  document.addEventListener('click', function(e) {
    if (e.target.closest('#chatbot-btn')) {
      e.preventDefault();
      console.log('🤖 Chatbot button clicked');
      try {
        window.open('chatbot.html', '_blank');
      } catch(e) {
        console.log('Could not open chatbot:', e);
        window.location.href = 'chatbot.html';
      }
    }
  });
}

function switchTab(tabName) {
  // Remove 'active' class from all nav items
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

  // Add 'active' class to the clicked nav item
  const activeNav = document.querySelector(`[data-tab="${tabName}"]`);
  if (activeNav) activeNav.classList.add('active');

  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  // Show content of the selected tab
  const activeTab = document.getElementById(`${tabName}-tab`);
  if (activeTab) activeTab.classList.add('active');
  if (tabName === 'discover') {
    // Ensure background is running when switching back
    setupDiscoverSquaresBackground();
  }
}

// ------------------------------
// Discover tab: Tinder-like swipe
// ------------------------------
function initializeDiscoverSwipe() {
  const cardStack = document.getElementById('card-stack');
  const passBtn = document.getElementById('pass-btn');
  const likeBtn = document.getElementById('like-btn');

  if (!cardStack || !passBtn || !likeBtn) return;

  const savedUser = localStorage.getItem('studyBuddy_user');
  let currentUser = null;
  try {
    currentUser = savedUser ? JSON.parse(savedUser) : null;
  } catch (_) {}

  // Demo student data (could be replaced by API later)
  const demoStudents = getDemoStudents();

  // Compute a weighted compatibility score vs current user
  const students = demoStudents.map(s => ({
    ...s,
    compatibility: computeCompatibility(currentUser, s)
  }));

  const MAX_STACK = 3;
  let currentIndex = 0;
  let currentCard = null;
  let nextCard = null;
  let isDragging = false;
  let startX = 0;
  let currentX = 0;
  let lastX = 0;
  let lastTime = 0;

  function computeCompatibility(user, student) {
    // Weights
    const weightSubjects = 0.5;
    const weightTimes = 0.2;
    const weightStyle = 0.15;
    const weightDepartment = 0.1;
    const weightYear = 0.05;

    // Subject overlap (Jaccard)
    const userSubjects = (user && Array.isArray(user.subjects)) ? user.subjects : [];
    const studentSubjects = Array.isArray(student.subjects) ? student.subjects : [];
    const unionSubjects = new Set([...userSubjects, ...studentSubjects]);
    const interSubjects = studentSubjects.filter(s => userSubjects.includes(s));
    const subjectScore = unionSubjects.size > 0 ? interSubjects.length / unionSubjects.size : 0.5;

    // Preferred times overlap (Jaccard)
    const userTimes = (user && Array.isArray(user.preferred_times)) ? user.preferred_times : [];
    const studentTimes = Array.isArray(student.preferred_times) ? student.preferred_times : [];
    const unionTimes = new Set([...userTimes, ...studentTimes]);
    const interTimes = studentTimes.filter(t => userTimes.includes(t));
    const timesScore = unionTimes.size > 0 ? interTimes.length / unionTimes.size : 0.5;

    // Study style match
    const userStyle = user && user.study_style ? user.study_style : 'Both';
    const studentStyle = student.study_style || 'Both';
    const styleMatch = (userStyle === 'Both' || studentStyle === 'Both' || userStyle === studentStyle) ? 1 : 0;

    // Department match
    const deptMatch = (user && student && user.department && student.department && user.department === student.department) ? 1 : 0;

    // Year distance (closer is better)
    const userYear = user && user.year ? parseInt(user.year, 10) : 2;
    const studentYearNumber = parseInt((student.year || '').toString(), 10) || 2; // student.year may be a string like "2nd Year"
    const yearDiff = Math.min(3, Math.abs(studentYearNumber - userYear));
    const yearScore = 1 - (yearDiff / 3);

    const score01 = (
      subjectScore * weightSubjects +
      timesScore * weightTimes +
      styleMatch * weightStyle +
      deptMatch * weightDepartment +
      yearScore * weightYear
    );
    const score = Math.round(60 + score01 * 40); // 60-100 range
    return Math.max(50, Math.min(99, score));
  }

  function getDemoStudents() {
    return [
      {
        name: 'Arjun Sharma',
        avatar: '👨‍💻',
        year: '2nd Year',
        department: 'Computer Science',
        subjects: ['Data Structures', 'Algorithms', 'Web Development'],
        bio: 'Passionate about coding and looking for study buddies for algorithms!',
      },
      {
        name: 'Priya Patel',
        avatar: '👩‍🔬',
        year: '3rd Year',
        department: 'Biotechnology',
        subjects: ['Molecular Biology', 'Genetics', 'Biochemistry'],
        bio: 'Love genetics. Seeking partners for lab work and research projects.',
      },
      {
        name: 'Rahul Kumar',
        avatar: '🤖',
        year: '1st Year',
        department: 'Computer Science',
        subjects: ['Programming Fundamentals', 'Mathematics', 'Physics'],
        bio: 'New to coding but very enthusiastic! Keen to learn with peers.',
      },
      {
        name: 'Ananya Singh',
        avatar: '👩‍💻',
        year: '4th Year',
        department: 'Information Technology',
        subjects: ['Machine Learning', 'Data Science', 'Python'],
        bio: 'Final year student in AI/ML. Happy to mentor and collaborate!',
      },
      {
        name: 'Vikram Malhotra',
        avatar: '👨‍🔬',
        year: '2nd Year',
        department: 'Mechanical Engineering',
        subjects: ['Thermodynamics', 'Fluid Mechanics', 'CAD'],
        bio: 'Engineering enthusiast who enjoys practical problem-solving.',
      }
    ];
  }

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
            ${student.subjects.map(sub => `<span class="subject-tag">${sub}</span>`).join('')}
          </div>
        </div>
        <div class="card-detail">
          <div class="card-detail-title">Bio</div>
          <p>${student.bio}</p>
        </div>
      </div>
      <div class="card-badge card-badge--like">LIKE</div>
      <div class="card-badge card-badge--nope">NOPE</div>
    `;
    return card;
  }

  function positionCard(card, position, elevate = 0) {
    const baseScale = 1 - position * 0.05;
    const translateY = position * 10 - elevate * 6;
    const scale = baseScale + elevate * 0.03;
    card.style.transform = `translateY(${translateY}px) scale(${scale})`;
    card.style.zIndex = String(100 - position);
    card.style.opacity = String(1 - position * 0.04);
  }

  function renderStack() {
    if (currentIndex >= students.length) {
      currentIndex = 0; // loop for demo
    }
    cardStack.innerHTML = '';
    const toRender = [];
    for (let i = 0; i < MAX_STACK; i++) {
      const idx = currentIndex + i;
      if (idx >= students.length) break;
      const card = createCard(students[idx]);
      toRender.push(card);
    }
    toRender.forEach((card, i) => {
      positionCard(card, i);
      cardStack.appendChild(card);
    });
    currentCard = toRender[toRender.length - 1] || null;
    nextCard = toRender.length >= 2 ? toRender[toRender.length - 2] : null;
    if (currentCard) setupCardSwipe(currentCard);
  }

  function setupCardSwipe(card) {
    card.addEventListener('mousedown', startDrag);
    card.addEventListener('touchstart', startDrag, { passive: true });

    function startDrag(e) {
      isDragging = true;
      startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
      currentX = startX;
      lastX = startX;
      lastTime = performance.now();
      card.classList.add('swiping');

      document.addEventListener('mousemove', drag);
      document.addEventListener('touchmove', drag, { passive: false });
      document.addEventListener('mouseup', endDrag);
      document.addEventListener('touchend', endDrag);
    }

    function drag(e) {
      if (!isDragging) return;
      e.preventDefault();
      currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
      const deltaX = currentX - startX;
      const rotation = deltaX * 0.08;
      card.style.transform = `translateX(${deltaX}px) rotate(${rotation}deg)`;

      // Badges opacity
      const likeBadge = card.querySelector('.card-badge--like');
      const nopeBadge = card.querySelector('.card-badge--nope');
      const progress = Math.max(-1, Math.min(1, deltaX / 140));
      if (likeBadge) likeBadge.style.opacity = String(Math.max(0, progress));
      if (nopeBadge) nopeBadge.style.opacity = String(Math.max(0, -progress));

      // Slightly elevate next card
      if (nextCard) {
        positionCard(nextCard, 1, Math.min(1, Math.abs(progress)));
      }

      // Track velocity
      const now = performance.now();
      const dt = Math.max(16, now - lastTime);
      const vx = (currentX - lastX) / dt; // px/ms
      lastX = currentX;
      lastTime = now;
      card.dataset.vx = String(vx);
    }

    function endDrag() {
      if (!isDragging) return;
      isDragging = false;
      card.classList.remove('swiping');

      const deltaX = currentX - startX;
      const threshold = 100;
      const velocity = parseFloat(card.dataset.vx || '0');
      const velocityThreshold = 0.6; // ~600px/s

      if (Math.abs(deltaX) > threshold || Math.abs(velocity) > velocityThreshold) {
        if (deltaX > 0) {
          swipeRight();
        } else {
          swipeLeft();
        }
      } else {
        card.style.transform = '';
        const likeBadge = card.querySelector('.card-badge--like');
        const nopeBadge = card.querySelector('.card-badge--nope');
        if (likeBadge) likeBadge.style.opacity = '0';
        if (nopeBadge) nopeBadge.style.opacity = '0';
        if (nextCard) positionCard(nextCard, 1, 0);
      }

      document.removeEventListener('mousemove', drag);
      document.removeEventListener('touchmove', drag);
      document.removeEventListener('mouseup', endDrag);
      document.removeEventListener('touchend', endDrag);
    }
  }

  function swipeRight() {
    if (!currentCard) return;
    currentCard.classList.add('swipe-right');

    const likedStudent = students[currentIndex];
    addMatch(likedStudent);

    setTimeout(() => {
      advanceStack();
      if (likedStudent.compatibility >= 90) {
        showMatchModal(likedStudent, currentUser);
      }
    }, 300);
  }

  function swipeLeft() {
    if (!currentCard) return;
    currentCard.classList.add('swipe-left');
    setTimeout(() => {
      advanceStack();
    }, 300);
  }

  function advanceStack() {
    if (currentCard && currentCard.parentElement === cardStack) {
      cardStack.removeChild(currentCard);
    }
    currentIndex++;
    renderStack();
  }

  function programmaticSwipe(direction) {
    if (!currentCard) return;
    const likeBadge = currentCard.querySelector('.card-badge--like');
    const nopeBadge = currentCard.querySelector('.card-badge--nope');
    if (direction === 'right' && likeBadge) likeBadge.style.opacity = '1';
    if (direction === 'left' && nopeBadge) nopeBadge.style.opacity = '1';
    requestAnimationFrame(() => {
      if (direction === 'right') swipeRight();
      else swipeLeft();
    });
  }

  function addMatch(student) {
    try {
      const existing = JSON.parse(localStorage.getItem('studyPartners')) || [];
      const already = existing.some(p => p.name === student.name && p.department === student.department);
      if (!already) {
        existing.push({
          name: student.name,
          avatar: student.avatar,
          year: parseInt((student.year || '1st').toString(), 10) || 1,
          department: student.department
        });
        localStorage.setItem('studyPartners', JSON.stringify(existing));
      }
    } catch (_) {}
  }

  function showMatchModal(student, user) {
    const modal = document.getElementById('match-modal');
    const container = document.getElementById('match-students');
    const closeBtn = document.getElementById('close-match');
    if (!modal || !container || !closeBtn) return;

    container.innerHTML = `
      <div class="match-student">
        <div class="match-student-avatar">${(user && user.avatar) || '👤'}</div>
        <div>${(user && user.name) || 'You'}</div>
      </div>
      <div class="match-student">
        <div class="match-student-avatar">${student.avatar}</div>
        <div>${student.name}</div>
      </div>
    `;

    modal.classList.remove('hidden');

    function hide() {
      modal.classList.add('hidden');
      closeBtn.removeEventListener('click', hide);
    }
    closeBtn.addEventListener('click', hide);
  }

  // Button handlers
  passBtn.addEventListener('click', () => programmaticSwipe('left'));
  likeBtn.addEventListener('click', () => programmaticSwipe('right'));

  // Kick off
  renderStack();
}

// Squares Background for Discover tab (canvas based)
function setupDiscoverSquaresBackground() {
  const canvas = document.getElementById('discoverSquaresCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Configuration (diagonal, subtle)
  const config = {
    direction: 'diagonal',
    speed: 0.6,
    borderColor: '#333',
    squareSize: 40,
    hoverFillColor: '#222'
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

    // Gradient vignette
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

  // Init / bind
  resizeCanvas();
  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseleave', handleMouseLeave);
  window.addEventListener('resize', resizeCanvas);
  if (animationId) cancelAnimationFrame(animationId);
  updateAnimation();
}
