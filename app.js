// Application Data
const appData = {
  "students": [
    {
      "id": 1,
      "name": "Arjun Sharma",
      "year": 2,
      "department": "Computer Science Engineering",
      "subjects": ["Data Structures", "Database Management", "Operating Systems"],
      "preferred_times": ["Evening", "Night"],
      "study_style": "Group",
      "bio": "Looking for coding practice partners. Strong in algorithms.",
      "location": "SRM Modinagar, Ghaziabad",
      "avatar": "👨‍💻",
      "compatibility_score": 0
    },
    {
      "id": 2,
      "name": "Priya Reddy",
      "year": 2,
      "department": "Electronics & Communication",
      "subjects": ["Digital Signal Processing", "Control Systems", "Mathematics II"],
      "preferred_times": ["Morning", "Afternoon"],
      "study_style": "Group",
      "bio": "Mathematics enthusiast. Love solving complex problems together.",
      "location": "SRM Modinagar, Ghaziabad",
      "avatar": "👩‍🔬",
      "compatibility_score": 0
    },
    {
      "id": 3,
      "name": "Karthik Menon",
      "year": 3,
      "department": "Mechanical Engineering",
      "subjects": ["Thermodynamics", "Fluid Mechanics", "Machine Design"],
      "preferred_times": ["Afternoon", "Evening"],
      "study_style": "Group",
      "bio": "Engineering drawing expert. Can help with technical subjects.",
      "location": "SRM Modinagar, Ghaziabad",
      "avatar": "👨‍🔧",
      "compatibility_score": 0
    },
    {
      "id": 4,
      "name": "Sneha Patel",
      "year": 1,
      "department": "Computer Applications",
      "subjects": ["Programming in C", "Computer Fundamentals", "Mathematics I"],
      "preferred_times": ["Morning", "Evening"],
      "study_style": "Group",
      "bio": "Beginner programmer seeking study group. Quick learner!",
      "location": "SRM Modinagar, Ghaziabad",
      "avatar": "👩‍💻",
      "compatibility_score": 0
    },
    {
      "id": 5,
      "name": "Rahul Kumar",
      "year": 4,
      "department": "Computer Science Engineering",
      "subjects": ["Machine Learning", "Software Engineering", "Project Work"],
      "preferred_times": ["Night", "Weekend"],
      "study_style": "Group",
      "bio": "Final year project on AI. Can mentor junior students.",
      "location": "SRM Modinagar, Ghaziabad",
      "avatar": "🤖",
      "compatibility_score": 0
    },
    {
      "id": 6,
      "name": "Deepika Singh",
      "year": 3,
      "department": "Information Technology",
      "subjects": ["Computer Networks", "Web Technologies", "Database Systems"],
      "preferred_times": ["Afternoon", "Evening"],
      "study_style": "Group",
      "bio": "Web development enthusiast. Love collaborative projects.",
      "location": "SRM Modinagar, Ghaziabad",
      "avatar": "👩‍💻",
      "compatibility_score": 0
    },
    {
      "id": 7,
      "name": "Vikram Joshi",
      "year": 2,
      "department": "Civil Engineering",
      "subjects": ["Structural Analysis", "Building Materials", "Engineering Graphics"],
      "preferred_times": ["Morning", "Afternoon"],
      "study_style": "Group",
      "bio": "AutoCAD expert. Good at solving structural problems.",
      "location": "SRM Modinagar, Ghaziabad",
      "avatar": "🏗️",
      "compatibility_score": 0
    },
    {
      "id": 8,
      "name": "Ananya Das",
      "year": 1,
      "department": "Electrical Engineering",
      "subjects": ["Circuit Analysis", "Physics", "Mathematics I"],
      "preferred_times": ["Evening", "Night"],
      "study_style": "Group",
      "bio": "Electronics hobbyist. Strong in circuit analysis.",
      "location": "SRM Modinagar, Ghaziabad",
      "avatar": "⚡",
      "compatibility_score": 0
    },
    {
      "id": 9,
      "name": "Rohit Gupta",
      "year": 2,
      "department": "Computer Science Engineering", 
      "subjects": ["Data Structures", "Object-Oriented Programming", "Mathematics II"],
      "preferred_times": ["Evening", "Night"],
      "study_style": "Group",
      "bio": "Competitive programming enthusiast. Love algorithm challenges.",
      "location": "SRM Modinagar, Ghaziabad",
      "avatar": "💻",
      "compatibility_score": 0
    },
    {
      "id": 10,
      "name": "Aditi Sharma",
      "year": 3,
      "department": "Electronics & Communication",
      "subjects": ["Microprocessors", "Digital Electronics", "Communication Systems"],
      "preferred_times": ["Morning", "Afternoon"],
      "study_style": "Group",
      "bio": "Hardware design enthusiast. Good at practical applications.",
      "location": "SRM Modinagar, Ghaziabad",
      "avatar": "🔧",
      "compatibility_score": 0
    }
  ],
  "professors": [
    {
      "id": 1,
      "name": "Dr. Rajesh Kumar",
      "department": "Computer Science Engineering",
      "specialization": ["Data Structures", "Algorithms", "Database Management"],
      "office_hours": "Mon-Fri 2-4 PM",
      "contact": "rajesh.kumar@srmist.edu.in",
      "rating": 4.5,
      "research_interests": ["Database Systems", "Data Mining"],
      "room": "Block A, Room 301"
    },
    {
      "id": 2,
      "name": "Prof. Meena Sharma",
      "department": "Mathematics",
      "specialization": ["Engineering Mathematics", "Linear Algebra", "Statistics"],
      "office_hours": "Tue-Thu 10-12 PM",
      "contact": "meena.sharma@srmist.edu.in",
      "rating": 4.8,
      "research_interests": ["Applied Mathematics", "Statistical Analysis"],
      "room": "Block B, Room 205"
    },
    {
      "id": 3,
      "name": "Dr. Suresh Babu",
      "department": "Electronics & Communication",
      "specialization": ["Digital Signal Processing", "Microprocessors", "Communication Systems"],
      "office_hours": "Mon-Wed 3-5 PM",
      "contact": "suresh.babu@srmist.edu.in",
      "rating": 4.3,
      "research_interests": ["Signal Processing", "Embedded Systems"],
      "room": "Block C, Room 405"
    },
    {
      "id": 4,
      "name": "Prof. Lakshmi Narayan",
      "department": "Mechanical Engineering",
      "specialization": ["Thermodynamics", "Fluid Mechanics", "Machine Design"],
      "office_hours": "Wed-Fri 1-3 PM",
      "contact": "lakshmi.narayan@srmist.edu.in",
      "rating": 4.6,
      "research_interests": ["Thermal Engineering", "Manufacturing"],
      "room": "Block D, Room 302"
    },
    {
      "id": 5,
      "name": "Dr. Anil Verma",
      "department": "Computer Applications",
      "specialization": ["Programming", "Software Development", "Web Technologies"],
      "office_hours": "Mon-Fri 11-1 PM",
      "contact": "anil.verma@srmist.edu.in",
      "rating": 4.7,
      "research_interests": ["Software Engineering", "Web Development"],
      "room": "Block A, Room 205"
    },
    {
      "id": 6,
      "name": "Prof. Sunita Gupta",
      "department": "Information Technology",
      "specialization": ["Computer Networks", "Database Systems", "Cybersecurity"],
      "office_hours": "Tue-Thu 2-4 PM",
      "contact": "sunita.gupta@srmist.edu.in",
      "rating": 4.4,
      "research_interests": ["Network Security", "Database Optimization"],
      "room": "Block A, Room 401"
    }
  ],
  "books": [
    {
      "id": 1,
      "title": "Introduction to Algorithms",
      "author": "Cormen, Leiserson, Rivest, Stein",
      "subject": "Data Structures",
      "department": "Computer Science Engineering",
      "year_level": [2, 3],
      "type": "Core",
      "rating": 4.9,
      "availability": "Library, Online"
    },
    {
      "id": 2,
      "title": "Database System Concepts",
      "author": "Silberschatz, Galvin, Gagne",
      "subject": "Database Management",
      "department": "Computer Science Engineering",
      "year_level": [2, 3],
      "type": "Core",
      "rating": 4.7,
      "availability": "Library, Online"
    },
    {
      "id": 3,
      "title": "Engineering Mathematics",
      "author": "B.S. Grewal",
      "subject": "Mathematics II",
      "department": "All Engineering",
      "year_level": [1, 2],
      "type": "Core",
      "rating": 4.5,
      "availability": "Library"
    },
    {
      "id": 4,
      "title": "Digital Signal Processing",
      "author": "Proakis & Manolakis",
      "subject": "Digital Signal Processing",
      "department": "Electronics & Communication",
      "year_level": [3, 4],
      "type": "Core",
      "rating": 4.6,
      "availability": "Library, Online"
    },
    {
      "id": 5,
      "title": "Thermodynamics: An Engineering Approach",
      "author": "Cengel & Boles",
      "subject": "Thermodynamics",
      "department": "Mechanical Engineering",
      "year_level": [2, 3],
      "type": "Core",
      "rating": 4.8,
      "availability": "Library"
    },
    {
      "id": 6,
      "title": "Campbell Biology",
      "author": "Campbell, Urry, Cain, Wasserman",
      "subject": "Cell Biology",
      "department": "Biotechnology",
      "year_level": [1, 2],
      "type": "Core",
      "rating": 4.9,
      "availability": "Library, Online"
    }
  ],
  "schedules": {
    "normal_semester": {
      "library_hours": {
        "weekdays": "8:00 AM - 9:00 PM",
        "weekends": "9:00 AM - 6:00 PM"
      },
      "group_study_rooms": {
        "availability": "9:00 AM - 7:00 PM",
        "booking": "Visit library reception for booking",
        "locations": ["Central Library Block A", "Departmental Libraries"]
      },
      "faculty_hours": {
        "general": "9:00 AM - 5:00 PM",
        "doubt_clearing": "2:00 PM - 4:00 PM daily"
      },
      "computer_labs": {
        "timings": "9:00 AM - 5:00 PM",
        "weekend_access": "10:00 AM - 4:00 PM (with permission)"
      }
    },
    "exam_time": {
      "library_hours": {
        "weekdays": "7:00 AM - 11:00 PM",
        "weekends": "7:00 AM - 11:00 PM"
      },
      "group_study_rooms": {
        "availability": "Extended hours: 7:00 AM - 10:00 PM",
        "booking": "24-hour advance booking during exams"
      },
      "special_sessions": [
        "Revision classes: 6:00 PM - 8:00 PM daily",
        "Peer tutoring: 10:00 AM - 12:00 PM weekends", 
        "Faculty doubt sessions: Extended till 6:00 PM"
      ],
      "additional_facilities": [
        "Extended cafeteria hours",
        "24/7 computer lab access (final week)",
        "Quiet study zones in library"
      ]
    }
  },
  "departments": [
    "Computer Science Engineering",
    "Information Technology", 
    "Computer Applications",
    "Electronics & Communication",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering"
  ],
  "statistics": {
    "students_connected": 1250,
    "study_sessions": 3480,
    "success_rate": 94,
    "active_users": 856
  }
};

// Application State
let currentUser = null;
let currentStudents = [];
let currentCardIndex = 0;
let userLikes = [];
let userPasses = [];
let matches = [];
let isExamSchedule = false;

// Subject mappings for departments
const departmentSubjects = {
  "Computer Science Engineering": ["Data Structures", "Database Management", "Operating Systems", "Machine Learning", "Software Engineering", "Object-Oriented Programming", "Computer Networks", "Algorithms"],
  "Information Technology": ["Computer Networks", "Web Technologies", "Database Systems", "Software Engineering", "Programming"],
  "Computer Applications": ["Programming in C", "Computer Fundamentals", "Web Technologies", "Database Systems", "Software Development"],
  "Electronics & Communication": ["Digital Signal Processing", "Control Systems", "Microprocessors", "Digital Electronics", "Communication Systems"],
  "Electrical Engineering": ["Circuit Analysis", "Power Systems", "Control Systems", "Digital Electronics"],
  "Mechanical Engineering": ["Thermodynamics", "Fluid Mechanics", "Machine Design", "Manufacturing", "Heat Transfer"],
  "Civil Engineering": ["Structural Analysis", "Building Materials", "Engineering Graphics", "Concrete Technology", "Surveying"]
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  console.log('🎓 StudyBuddy - Initializing Application...');
  initializeApp();
  addEasterEggs();
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
  console.log('📋 Setting up application...');
  
  // Initialize all components
  populateDepartments();
  setupEventListeners();
  
  // Animate stats when they come into view
  setTimeout(() => {
    animateStats();
  }, 500);
  
  // Check for saved user
  const savedUser = localStorage.getItem('studyBuddy_user');
  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
      console.log('✅ Found saved user:', currentUser.name);
    } catch (e) {
      console.error('❌ Error parsing saved user:', e);
      localStorage.removeItem('studyBuddy_user');
    }
  }
  
  console.log('✅ Application initialized successfully!');
}

function setupEventListeners() {
  console.log('🔧 Setting up event listeners...');
  
  // Homepage navigation links
  setupNavigationLinks();
  
  // Get Started buttons  
  setupGetStartedButtons();
  
  // Learn more and back buttons
  setupActionButtons();
  
  // Profile form
  setupProfileForm();
  
  // Main app navigation
  setupMainAppNavigation();
  document.addEventListener('click', function(e) {
  const navItem = e.target.closest('.nav-item[data-tab]');
  if (navItem) {
    e.preventDefault();
    const tabName = navItem.getAttribute('data-tab');
    switchTab(tabName);
  }
});
  
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

function setupGetStartedButtons() {
  console.log('🚀 Setting up Get Started buttons...');
  
  // Use event delegation for all Get Started buttons
  document.addEventListener('click', function(e) {
    const button = e.target.closest('#get-started-nav, #get-started-hero, #get-started-cta');
    if (button) {
      e.preventDefault();
      console.log('🎯 Get Started clicked:', button.id);
      showOnboarding();
    }
  });
}

function setupActionButtons() {
  console.log('⚙️ Setting up action buttons...');
  
  document.addEventListener('click', function(e) {
    // Learn more button
    if (e.target.closest('#learn-more')) {
      e.preventDefault();
      console.log('📖 Learn more clicked');
      scrollToSection('how-it-works');
    }
    
    // Back to home buttons
    if (e.target.closest('#back-to-home, #back-to-homepage')) {
      e.preventDefault();
      console.log('🏠 Back to home clicked');
      showHomepage();
    }
  });
}

function setupProfileForm() {
  console.log('📝 Setting up profile form...');
  
  const profileForm = document.getElementById('profile-form');
  if (profileForm) {
    profileForm.addEventListener('submit', handleProfileSubmit);
  }
  
  // Avatar selection
  document.addEventListener('click', function(e) {
    if (e.target.closest('.avatar-option')) {
      e.preventDefault();
      selectAvatar(e);
    }
  });
  
  // Department change
  const departmentSelect = document.getElementById('department');
  if (departmentSelect) {
    departmentSelect.addEventListener('change', updateSubjects);
  }
}

function setupMainAppNavigation() {
  console.log('📱 Setting up main app navigation...');
  
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
  
  // Other main app elements
  setupMainAppElements();
}

function setupMainAppElements() {
  // Swiping actions
  document.addEventListener('click', function(e) {
    if (e.target.closest('#like-btn')) {
      e.preventDefault();
      swipeCard('like');
    }
    if (e.target.closest('#pass-btn')) {
      e.preventDefault();
      swipeCard('pass');
    }
  });
  
  // Chat functionality
  document.addEventListener('click', function(e) {
    if (e.target.closest('#send-btn')) {
      e.preventDefault();
      sendChatMessage();
    }
  });
  
  // Chat input enter key
  const chatInput = document.getElementById('chat-input');
  if (chatInput) {
    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendChatMessage();
      }
    });
  }
  
  // Quick chat buttons
  document.addEventListener('click', function(e) {
    const quickBtn = e.target.closest('.quick-btn[data-query]');
    if (quickBtn) {
      e.preventDefault();
      const query = quickBtn.getAttribute('data-query');
      const input = document.getElementById('chat-input');
      if (input) {
        input.value = query;
        sendChatMessage();
      }
    }
  });
  
  // Modal controls
  setupModalControls();
  
  // Schedule toggle
  setupScheduleToggle();
}

function setupModalControls() {
  document.addEventListener('click', function(e) {
    // Filter modal
    if (e.target.closest('#filter-btn')) {
      e.preventDefault();
      showFilterModal();
    }
    if (e.target.closest('#close-filter')) {
      e.preventDefault();
      hideFilterModal();
    }
    if (e.target.closest('#apply-filters')) {
      e.preventDefault();
      applyFilters();
    }
    if (e.target.closest('#clear-filters')) {
      e.preventDefault();
      clearFilters();
    }
    
    // Match modal
    if (e.target.closest('#close-match')) {
      e.preventDefault();
      hideMatchModal();
    }
    
    // Profile edit
    if (e.target.closest('#edit-profile')) {
      e.preventDefault();
      editProfileHandler();
    }
  });
}

function setupScheduleToggle() {
  document.addEventListener('click', function(e) {
    if (e.target.closest('#normal-schedule')) {
      e.preventDefault();
      toggleSchedule(false);
    }
    if (e.target.closest('#exam-schedule')) {
      e.preventDefault();
      toggleSchedule(true);
    }
  });
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

function showOnboarding() {
  console.log('📋 Showing onboarding form...');
  const homepage = document.getElementById('homepage');
  const onboarding = document.getElementById('onboarding');
  const mainApp = document.getElementById('main-app');
  
  if (homepage) homepage.classList.remove('active');
  if (onboarding) onboarding.classList.add('active');
  if (mainApp) mainApp.classList.remove('active');
}

function showHomepage() {
  console.log('🏠 Showing homepage...');
  const homepage = document.getElementById('homepage');
  const onboarding = document.getElementById('onboarding');
  const mainApp = document.getElementById('main-app');
  
  if (homepage) homepage.classList.add('active');
  if (onboarding) onboarding.classList.remove('active');
  if (mainApp) mainApp.classList.remove('active');
}

function showMainApp() {
  console.log('📱 Showing main app...');
  const homepage = document.getElementById('homepage');
  const onboarding = document.getElementById('onboarding');
  const mainApp = document.getElementById('main-app');
  
  if (homepage) homepage.classList.remove('active');
  if (onboarding) onboarding.classList.remove('active');
  if (mainApp) mainApp.classList.add('active');
  
  // Update user name
  const userNameEl = document.getElementById('user-name');
  if (userNameEl && currentUser) {
    userNameEl.textContent = `Welcome, ${currentUser.name}!`;
  }
  
  initializeMainApp();
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

function populateDepartments() {
  const departmentSelects = document.querySelectorAll('#department, #filter-department');
  departmentSelects.forEach(select => {
    if (!select) return;
    
    // Clear existing options except the first one
    while (select.children.length > 1) {
      select.removeChild(select.lastChild);
    }
    
    appData.departments.forEach(dept => {
      const option = document.createElement('option');
      option.value = dept;
      option.textContent = dept;
      select.appendChild(option);
    });
  });
}

function handleProfileSubmit(e) {
  e.preventDefault();
  console.log('📋 Profile form submitted');
  
  // Get form data
  const name = document.getElementById('name')?.value.trim();
  const year = document.getElementById('year')?.value;
  const department = document.getElementById('department')?.value;
  const studyStyle = document.getElementById('study_style')?.value;
  const bio = document.getElementById('bio')?.value.trim();
  
  // Validate required fields
  if (!name || !year || !department || !studyStyle) {
    alert('Please fill in all required fields');
    return;
  }
  
  // Get preferred times
  const preferredTimes = Array.from(document.querySelectorAll('input[name="preferred_times"]:checked')).map(cb => cb.value);
  if (preferredTimes.length === 0) {
    alert('Please select at least one preferred study time');
    return;
  }
  
  // Get selected subjects
  const selectedSubjects = Array.from(document.querySelectorAll('input[name="subjects"]:checked')).map(cb => cb.value);
  if (selectedSubjects.length === 0) {
    alert('Please select at least one subject');
    return;
  }
  
  // Get selected avatar
  const selectedAvatar = document.querySelector('.avatar-option.selected')?.getAttribute('data-avatar') || '👤';
  
  currentUser = {
    id: Date.now(),
    name: name,
    year: parseInt(year),
    department: department,
    subjects: selectedSubjects,
    preferred_times: preferredTimes,
    study_style: studyStyle,
    avatar: selectedAvatar,
    bio: bio || '',
    location: 'SRM Modinagar, Ghaziabad'
  };
  
  try {
    localStorage.setItem('studyBuddy_user', JSON.stringify(currentUser));
    console.log('✅ User profile saved:', currentUser.name);
    showMainApp();
  } catch (e) {
    console.error('❌ Error saving user data:', e);
    alert('Error saving profile. Please try again.');
  }
}

function selectAvatar(e) {
  document.querySelectorAll('.avatar-option').forEach(btn => btn.classList.remove('selected'));
  e.target.closest('.avatar-option').classList.add('selected');
}

function updateSubjects() {
  const department = document.getElementById('department')?.value;
  const container = document.getElementById('subjects-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  if (department && departmentSubjects[department]) {
    departmentSubjects[department].forEach(subject => {
      const label = document.createElement('label');
      label.innerHTML = `
        <input type="checkbox" name="subjects" value="${subject}">
        ${subject}
      `;
      container.appendChild(label);
    });
  }
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
}


function initializeMainApp() {
  if (!currentUser) return;
  
  calculateCompatibility();
  renderStudentCards();
  renderProfile();
  renderResources();
  renderMatches();
}

function calculateCompatibility() {
  currentStudents = appData.students.filter(s => s.id !== currentUser.id).map(student => {
    const score = getCompatibilityScore(currentUser, student);
    return { ...student, compatibility_score: score };
  }).sort((a, b) => b.compatibility_score - a.compatibility_score);
}

function getCompatibilityScore(user1, user2) {
  let score = 0;
  
  // Same/similar subjects (40%)
  const commonSubjects = user1.subjects.filter(s => user2.subjects.includes(s));
  const subjectScore = (commonSubjects.length / Math.max(user1.subjects.length, user2.subjects.length)) * 40;
  score += subjectScore;
  
  // Overlapping study times (30%)
  const commonTimes = user1.preferred_times.filter(t => user2.preferred_times.includes(t));
  const timeScore = (commonTimes.length / Math.max(user1.preferred_times.length, user2.preferred_times.length)) * 30;
  score += timeScore;
  
  // Same department/year (20%)
  if (user1.department === user2.department) score += 15;
  if (user1.year === user2.year) score += 5;
  
  // Study style compatibility (10%)
  if (user1.study_style === user2.study_style || user1.study_style === 'Both' || user2.study_style === 'Both') {
    score += 10;
  }
  
  return Math.round(score);
}

function renderStudentCards() {
  const cardStack = document.getElementById('card-stack');
  if (!cardStack) return;
  
  cardStack.innerHTML = '';
  
  if (currentStudents.length === 0 || currentCardIndex >= currentStudents.length) {
    cardStack.innerHTML = '<div class="no-more-cards"><h3>No more students to show!</h3><p>Try adjusting your filters or check back later.</p></div>';
    return;
  }
  
  // Show up to 3 cards at once
  const cardsToShow = Math.min(3, currentStudents.length - currentCardIndex);
  
  for (let i = 0; i < cardsToShow; i++) {
    const student = currentStudents[currentCardIndex + i];
    const card = createStudentCard(student, i);
    cardStack.appendChild(card);
  }
  
  // Add swipe functionality to top card
  const topCard = cardStack.querySelector('.student-card');
  if (topCard) {
    addSwipeListeners(topCard);
  }
}

function createStudentCard(student, stackIndex) {
  const card = document.createElement('div');
  card.className = 'student-card';
  card.style.zIndex = 10 - stackIndex;
  card.style.transform = `translateY(${stackIndex * 5}px) scale(${1 - stackIndex * 0.02})`;
  
  card.innerHTML = `
    <div class="card-header">
      <div class="card-avatar">${student.avatar}</div>
      <div class="card-name">${student.name}</div>
      <div class="card-info">${student.year}${getOrdinalSuffix(student.year)} Year • ${student.department}</div>
    </div>
    <div class="card-body">
      <div class="compatibility-score">
        <div class="score-value">${student.compatibility_score}%</div>
        <div class="score-label">Compatibility</div>
      </div>
      
      <div class="card-detail">
        <div class="card-detail-title">Subjects</div>
        <div class="card-subjects">
          ${student.subjects.map(subject => `<span class="subject-tag">${subject}</span>`).join('')}
        </div>
      </div>
      
      <div class="card-detail">
        <div class="card-detail-title">Preferred Times</div>
        <div class="card-times">
          ${student.preferred_times.map(time => `<span class="time-tag">${time}</span>`).join('')}
        </div>
      </div>
      
      <div class="card-detail">
        <div class="card-detail-title">Study Style</div>
        <p>${student.study_style}</p>
      </div>
      
      <div class="card-detail">
        <div class="card-detail-title">About</div>
        <p>${student.bio}</p>
      </div>
    </div>
  `;
  
  return card;
}

function getOrdinalSuffix(num) {
  const suffixes = ['st', 'nd', 'rd', 'th'];
  const v = num % 100;
  return suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
}

function addSwipeListeners(card) {
  let startX = 0, currentX = 0, isDragging = false;
  
  const handleStart = (e) => {
    isDragging = true;
    startX = e.touches ? e.touches[0].clientX : e.clientX;
    card.classList.add('swiping');
  };
  
  const handleMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    currentX = (e.touches ? e.touches[0].clientX : e.clientX) - startX;
    const rotation = currentX * 0.1;
    card.style.transform = `translateX(${currentX}px) rotate(${rotation}deg)`;
    
    // Visual feedback
    if (currentX > 50) {
      card.style.borderColor = 'var(--color-success)';
    } else if (currentX < -50) {
      card.style.borderColor = 'var(--color-error)';
    } else {
      card.style.borderColor = 'var(--color-card-border)';
    }
  };
  
  const handleEnd = () => {
    if (!isDragging) return;
    isDragging = false;
    
    card.classList.remove('swiping');
    card.style.borderColor = 'var(--color-card-border)';
    
    if (Math.abs(currentX) > 100) {
      const action = currentX > 0 ? 'like' : 'pass';
      swipeCard(action);
    } else {
      card.style.transform = '';
    }
  };
  
  // Touch events
  card.addEventListener('touchstart', handleStart);
  card.addEventListener('touchmove', handleMove);
  card.addEventListener('touchend', handleEnd);
  
  // Mouse events
  card.addEventListener('mousedown', handleStart);
  card.addEventListener('mousemove', handleMove);
  card.addEventListener('mouseup', handleEnd);
  card.addEventListener('mouseleave', handleEnd);
}

function swipeCard(action) {
  const topCard = document.querySelector('.student-card');
  if (!topCard || currentCardIndex >= currentStudents.length) return;
  
  const student = currentStudents[currentCardIndex];
  
  if (action === 'like') {
    userLikes.push(student.id);
    topCard.classList.add('swipe-right');
    
    // 30% chance of match for demo
    if (Math.random() > 0.7) {
      matches.push(student);
      setTimeout(() => showMatchModal(student), 400);
    }
  } else {
    userPasses.push(student.id);
    topCard.classList.add('swipe-left');
  }
  
  currentCardIndex++;
  
  setTimeout(() => {
    renderStudentCards();
  }, 300);
}

function showMatchModal(student) {
  const modal = document.getElementById('match-modal');
  const studentsContainer = document.getElementById('match-students');
  
  if (!modal || !studentsContainer) return;
  
  studentsContainer.innerHTML = `
    <div class="match-student">
      <div class="match-student-avatar">${currentUser.avatar}</div>
      <div>${currentUser.name}</div>
    </div>
    <div style="font-size: 2rem;">❤️</div>
    <div class="match-student">
      <div class="match-student-avatar">${student.avatar}</div>
      <div>${student.name}</div>
    </div>
  `;
  
  modal.classList.remove('hidden');
  renderMatches();
}

function hideMatchModal() {
  const modal = document.getElementById('match-modal');
  if (modal) modal.classList.add('hidden');
}

function renderMatches() {
  const matchesList = document.getElementById('matches-list');
  if (!matchesList) return;
  
  if (matches.length === 0) {
    matchesList.innerHTML = '<div class="no-matches"><h3>No matches yet!</h3><p>Keep swiping to find your study partners.</p></div>';
    return;
  }
  
  matchesList.innerHTML = matches.map(match => `
    <div class="match-card">
      <div class="match-avatar">${match.avatar}</div>
      <div class="match-info">
        <h4>${match.name}</h4>
        <div class="match-details">
          ${match.year}${getOrdinalSuffix(match.year)} Year • ${match.department}<br>
          Subjects: ${match.subjects.join(', ')}<br>
          Available: ${match.preferred_times.join(', ')}
        </div>
      </div>
    </div>
  `).join('');
}

function sendChatMessage() {
  const input = document.getElementById('chat-input');
  if (!input) return;
  
  const message = input.value.trim();
  if (!message) return;
  
  addChatMessage(message, 'user');
  input.value = '';
  
  showTypingIndicator();
  
  setTimeout(() => {
    hideTypingIndicator();
    const response = generateChatResponse(message);
    addChatMessage(response, 'bot');
  }, 1500);
}

function addChatMessage(message, sender) {
  const messagesContainer = document.getElementById('chat-messages');
  if (!messagesContainer) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;
  
  const content = sender === 'bot' 
    ? `<div class="message-content"><span class="bot-icon">🤖</span><p>${message}</p></div>`
    : `<div class="message-content"><p>${message}</p></div>`;
  
  messageDiv.innerHTML = content;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
  const messagesContainer = document.getElementById('chat-messages');
  if (!messagesContainer) return;
  
  const indicator = document.createElement('div');
  indicator.className = 'typing-indicator';
  indicator.id = 'typing-indicator';
  indicator.innerHTML = `
    <span class="bot-icon">🤖</span>
    <div class="typing-dots">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  messagesContainer.appendChild(indicator);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function hideTypingIndicator() {
  const indicator = document.getElementById('typing-indicator');
  if (indicator) indicator.remove();
}

function generateChatResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  if (!currentUser) {
    return "Please create your profile first by clicking 'Get Started' to access personalized recommendations!";
  }
  
  // Study partner queries
  if (lowerMessage.includes('study partner') || (lowerMessage.includes('find') && lowerMessage.includes('partner'))) {
    const compatibleStudents = currentStudents.slice(0, 3);
    return `I found some great study partners for you! Based on your subjects (${currentUser.subjects.join(', ')}), here are the top matches:\n\n${compatibleStudents.map((s, i) => `${i+1}. ${s.name} (${s.compatibility_score}% match) - ${s.department}, ${s.year}${getOrdinalSuffix(s.year)} year`).join('\n')}\n\nYou can find them in the Discover tab! 🎯`;
  }
  
  // Book recommendations
  if (lowerMessage.includes('book') || lowerMessage.includes('recommend')) {
    const relevantBooks = appData.books.filter(book => 
      currentUser.subjects.some(subject => book.subject.includes(subject) || subject.includes(book.subject)) ||
      book.department === currentUser.department ||
      book.year_level.includes(currentUser.year)
    ).slice(0, 3);
    
    if (relevantBooks.length > 0) {
      return `Here are some excellent book recommendations for your courses:\n\n${relevantBooks.map((book, i) => `${i+1}. "${book.title}" by ${book.author}\n   Subject: ${book.subject} | Rating: ${book.rating}/5\n   Available: ${book.availability}`).join('\n\n')}\n\nCheck the Resources tab for more options! 📚`;
    }
  }
  
  // Professor queries
  if (lowerMessage.includes('professor') || lowerMessage.includes('faculty') || lowerMessage.includes('teacher')) {
    const relevantProfs = appData.professors.filter(prof =>
      prof.department === currentUser.department ||
      prof.specialization.some(spec => currentUser.subjects.some(subject => spec.includes(subject) || subject.includes(spec)))
    ).slice(0, 2);
    
    if (relevantProfs.length > 0) {
      return `Here are professors who can help with your subjects:\n\n${relevantProfs.map((prof, i) => `${i+1}. ${prof.name} (Rating: ${prof.rating}/5)\n   Department: ${prof.department}\n   Office Hours: ${prof.office_hours}\n   Room: ${prof.room}\n   Specializes in: ${prof.specialization.join(', ')}`).join('\n\n')}\n\nYou can find their contact details in the Resources section! 👨‍🏫`;
    }
  }
  
  // Schedule queries
  if (lowerMessage.includes('library') || lowerMessage.includes('schedule') || lowerMessage.includes('hours')) {
    const schedule = isExamSchedule ? appData.schedules.exam_time : appData.schedules.normal_semester;
    return `Here's the current library schedule:\n\n📚 Library Hours:\nWeekdays: ${schedule.library_hours.weekdays}\nWeekends: ${schedule.library_hours.weekends}\n\n📖 Group Study Rooms:\n${schedule.group_study_rooms.availability}\n${schedule.group_study_rooms.booking}\n\n${isExamSchedule ? '⚡ Special Exam Features:\n' + schedule.special_sessions.join('\n') : '💻 Computer Labs:\n' + schedule.computer_labs.timings}\n\nCheck the Resources tab for complete details!`;
  }
  
  // Exam schedule
  if (lowerMessage.includes('exam')) {
    return `During exam time, we have extended facilities:\n\n⏰ Extended library hours (7 AM - 11 PM)\n📚 More group study rooms available\n👨‍🏫 Extended faculty doubt clearing sessions\n☕ Extended cafeteria hours\n💻 24/7 computer lab access during final week\n\nToggle to "Exam Time" in Resources for complete details!`;
  }
  
  // Default responses
  const defaultResponses = [
    "I'm here to help you with your studies! You can ask me about finding study partners, book recommendations, professor contacts, or schedule information.",
    "Try asking me things like 'Find me a study partner for Database Management' or 'What are the library hours during exams?'",
    `Hi ${currentUser.name}! I can help you with academic resources, study partner matching, and campus information. What would you like to know?`,
    "I'm your AI study assistant! I can help you find study partners, recommend books, suggest professors to approach, and provide schedule information."
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

function renderProfile() {
  const profileDisplay = document.getElementById('profile-display');
  if (!profileDisplay || !currentUser) return;
  
  profileDisplay.innerHTML = `
    <div class="profile-header">
      <div class="profile-avatar">${currentUser.avatar}</div>
      <div class="profile-name">${currentUser.name}</div>
      <p>${currentUser.year}${getOrdinalSuffix(currentUser.year)} Year • ${currentUser.department}</p>
    </div>
    
    <div class="profile-details">
      <div class="profile-detail">
        <h4>📚 Subjects</h4>
        <div class="card-subjects">
          ${currentUser.subjects.map(subject => `<span class="subject-tag">${subject}</span>`).join('')}
        </div>
      </div>
      
      <div class="profile-detail">
        <h4>⏰ Preferred Times</h4>
        <div class="card-times">
          ${currentUser.preferred_times.map(time => `<span class="time-tag">${time}</span>`).join('')}
        </div>
      </div>
      
      <div class="profile-detail">
        <h4>🎯 Study Style</h4>
        <p>${currentUser.study_style}</p>
      </div>
      
      <div class="profile-detail">
        <h4>📝 Bio</h4>
        <p>${currentUser.bio || 'No bio added yet.'}</p>
      </div>
      
      <div class="profile-detail">
        <h4>📍 Location</h4>
        <p>${currentUser.location}</p>
      </div>
    </div>
  `;
}

function renderResources() {
  if (!currentUser) return;
  renderBooks();
  renderProfessors();
  renderSchedule();
}

function renderBooks() {
  const booksList = document.getElementById('books-list');
  if (!booksList || !currentUser) return;
  
  const relevantBooks = appData.books.filter(book => 
    currentUser.subjects.some(subject => book.subject.includes(subject) || subject.includes(book.subject)) ||
    book.department === currentUser.department ||
    book.year_level.includes(currentUser.year)
  );
  
  booksList.innerHTML = relevantBooks.map(book => `
    <div class="book-card">
      <div class="book-title">${book.title}</div>
      <div class="book-author">by ${book.author}</div>
      <div class="book-rating">⭐ ${book.rating}/5 • ${book.availability}</div>
      <p><strong>Subject:</strong> ${book.subject}</p>
    </div>
  `).join('');
}

function renderProfessors() {
  const professorsList = document.getElementById('professors-list');
  if (!professorsList || !currentUser) return;
  
  const relevantProfs = appData.professors.filter(prof =>
    prof.department === currentUser.department ||
    prof.specialization.some(spec => currentUser.subjects.some(subject => spec.includes(subject) || subject.includes(spec)))
  );
  
  professorsList.innerHTML = relevantProfs.map(prof => `
    <div class="professor-card">
      <div class="professor-name">${prof.name}</div>
      <div class="professor-dept">${prof.department}</div>
      <div class="professor-rating">⭐ ${prof.rating}/5</div>
      <p><strong>Office Hours:</strong> ${prof.office_hours}</p>
      <p><strong>Room:</strong> ${prof.room}</p>
      <p><strong>Specialization:</strong> ${prof.specialization.join(', ')}</p>
      <p><strong>Research:</strong> ${prof.research_interests.join(', ')}</p>
    </div>
  `).join('');
}

function renderSchedule() {
  const scheduleInfo = document.getElementById('schedule-info');
  if (!scheduleInfo) return;
  
  const schedule = isExamSchedule ? appData.schedules.exam_time : appData.schedules.normal_semester;
  
  let content = `
    <div class="schedule-card">
      <h4>📚 Library Hours</h4>
      <p><strong>Weekdays:</strong> ${schedule.library_hours.weekdays}</p>
      <p><strong>Weekends:</strong> ${schedule.library_hours.weekends}</p>
    </div>
    
    <div class="schedule-card">
      <h4>📖 Group Study Rooms</h4>
      <p><strong>Availability:</strong> ${schedule.group_study_rooms.availability}</p>
      <p><strong>Booking:</strong> ${schedule.group_study_rooms.booking}</p>
      ${schedule.group_study_rooms.locations ? `<p><strong>Locations:</strong> ${schedule.group_study_rooms.locations.join(', ')}</p>` : ''}
    </div>
  `;
  
  if (isExamSchedule) {
    content += `
      <div class="schedule-card">
        <h4>⚡ Special Exam Sessions</h4>
        ${schedule.special_sessions.map(session => `<p>• ${session}</p>`).join('')}
      </div>
      
      <div class="schedule-card">
        <h4>🎯 Additional Facilities</h4>
        ${schedule.additional_facilities.map(facility => `<p>• ${facility}</p>`).join('')}
      </div>
    `;
  } else {
    content += `
      <div class="schedule-card">
        <h4>👨‍🏫 Faculty Hours</h4>
        <p><strong>General:</strong> ${schedule.faculty_hours.general}</p>
        <p><strong>Doubt Clearing:</strong> ${schedule.faculty_hours.doubt_clearing}</p>
      </div>
      
      <div class="schedule-card">
        <h4>💻 Computer Labs</h4>
        <p><strong>Timings:</strong> ${schedule.computer_labs.timings}</p>
        <p><strong>Weekend Access:</strong> ${schedule.computer_labs.weekend_access}</p>
      </div>
    `;
  }
  
  scheduleInfo.innerHTML = content;
}

function toggleSchedule(examMode) {
  isExamSchedule = examMode;
  
  document.querySelectorAll('.schedule-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(examMode ? 'exam-schedule' : 'normal-schedule');
  if (activeBtn) activeBtn.classList.add('active');
  
  const scheduleTitle = document.getElementById('schedule-title');
  if (scheduleTitle) {
    scheduleTitle.textContent = examMode ? '📅 Exam Time Schedule' : '📅 Normal Semester Schedule';
  }
  
  renderSchedule();
}

function showFilterModal() {
  const modal = document.getElementById('filter-modal');
  if (modal) modal.classList.remove('hidden');
}

function hideFilterModal() {
  const modal = document.getElementById('filter-modal');
  if (modal) modal.classList.add('hidden');
}

function applyFilters() {
  const department = document.getElementById('filter-department')?.value;
  const year = document.getElementById('filter-year')?.value;
  const selectedTimes = Array.from(document.querySelectorAll('input[name="filter_times"]:checked')).map(cb => cb.value);
  
  let filteredStudents = appData.students.filter(s => s.id !== currentUser.id);
  
  if (department) {
    filteredStudents = filteredStudents.filter(s => s.department === department);
  }
  
  if (year) {
    filteredStudents = filteredStudents.filter(s => s.year === parseInt(year));
  }
  
  if (selectedTimes.length > 0) {
    filteredStudents = filteredStudents.filter(s => 
      s.preferred_times.some(time => selectedTimes.includes(time))
    );
  }
  
  currentStudents = filteredStudents.map(student => {
    const score = getCompatibilityScore(currentUser, student);
    return { ...student, compatibility_score: score };
  }).sort((a, b) => b.compatibility_score - a.compatibility_score);
  
  currentCardIndex = 0;
  renderStudentCards();
  hideFilterModal();
}

function clearFilters() {
  const filterDept = document.getElementById('filter-department');
  const filterYear = document.getElementById('filter-year');
  
  if (filterDept) filterDept.value = '';
  if (filterYear) filterYear.value = '';
  
  document.querySelectorAll('input[name="filter_times"]').forEach(cb => cb.checked = false);
  
  calculateCompatibility();
  currentCardIndex = 0;
  renderStudentCards();
  hideFilterModal();
}

function editProfileHandler() {
  alert('Profile editing feature will be available soon!');
}