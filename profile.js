// Profile Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎓 StudyBuddy - Loading Profile...');
    initializeSquaresBackground();
    loadUserProfile();
    setupEventListeners();
    updateProfileButton();
});

function initializeSquaresBackground() {
    const canvas = document.getElementById('squaresCanvas');
    if (canvas) {
        new SquaresBackground(canvas, {
            direction: 'diagonal',
            speed: 0.5,
            borderColor: 'rgba(255,255,255,0.1)',
            squareSize: 40,
            hoverFillColor: 'rgba(255,255,255,0.05)'
        });
    }
}

function setupEventListeners() {
    // Back to home button
    document.getElementById('back-to-home').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
}

function loadUserProfile() {
    // Get user data from localStorage
    const savedUser = localStorage.getItem('studyBuddy_user');
    let currentUser = null;
    
    if (savedUser) {
        try {
            currentUser = JSON.parse(savedUser);
        } catch (e) {
            console.error('❌ Error parsing saved user:', e);
        }
    }
    
    if (!currentUser) {
        // No user data found, redirect to onboarding
        window.location.href = 'onboarding.html';
        return;
    }

    // Update navigation avatar
    updateNavigationAvatar(currentUser.avatar);
    
    // Populate profile data
    populateProfileData(currentUser);
    
    // Load study partners
    loadStudyPartners();
    
    // Load study statistics
    loadStudyStatistics(currentUser);
    
    // Load study schedule analysis
    loadStudyScheduleAnalysis(currentUser);
    
    // Load subject performance
    loadSubjectPerformance(currentUser);
}

function updateNavigationAvatar(avatar) {
    const navAvatar = document.getElementById('profile-avatar');
    if (navAvatar) {
        navAvatar.textContent = avatar;
    }
}

function populateProfileData(user) {
    // Update profile avatar
    document.getElementById('profile-avatar').textContent = user.avatar;
    
    // Update profile name
    document.getElementById('profile-name').textContent = user.name;
    
    // Update profile details
    document.getElementById('profile-year').textContent = `${user.year}${getOrdinalSuffix(user.year)} Year`;
    document.getElementById('profile-department').textContent = user.department;
    document.getElementById('profile-style').textContent = user.studyStyle;
    
    // Populate subjects
    populateSubjects(user.subjects);
    
    // Populate study times
    populateStudyTimes(user.studyTimes);
    
    // Populate bio
    populateBio(user.bio);
}

function populateSubjects(subjects) {
    const subjectsContainer = document.getElementById('profile-subjects');
    subjectsContainer.innerHTML = '';
    
    if (subjects && subjects.length > 0) {
        subjects.forEach(subject => {
            const subjectTag = document.createElement('span');
            subjectTag.className = 'subject-tag';
            subjectTag.textContent = subject;
            subjectsContainer.appendChild(subjectTag);
        });
    } else {
        subjectsContainer.innerHTML = '<p style="color: var(--color-text-secondary);">No subjects selected</p>';
    }
}

function populateStudyTimes(studyTimes) {
    const timesContainer = document.getElementById('profile-times');
    timesContainer.innerHTML = '';
    
    if (studyTimes && studyTimes.length > 0) {
        studyTimes.forEach(time => {
            const timeTag = document.createElement('span');
            timeTag.className = 'time-tag';
            timeTag.textContent = time;
            timesContainer.appendChild(timeTag);
        });
    } else {
        timesContainer.innerHTML = '<p style="color: var(--color-text-secondary);">No study times selected</p>';
    }
}

function populateBio(bio) {
    const bioContainer = document.getElementById('profile-bio');
    
    if (bio && bio.trim()) {
        bioContainer.textContent = bio;
    } else {
        bioContainer.innerHTML = '<p style="color: var(--color-text-secondary); font-style: italic;">No bio added yet</p>';
    }
}

function loadStudyPartners() {
    // Get study partners from localStorage (this would be populated when users match)
    const studyPartners = JSON.parse(localStorage.getItem('studyPartners')) || [];
    const partnersContainer = document.getElementById('study-partners');
    const noPartnersDiv = document.getElementById('no-partners');
    
    if (studyPartners.length === 0) {
        partnersContainer.style.display = 'none';
        noPartnersDiv.style.display = 'block';
    } else {
        partnersContainer.style.display = 'grid';
        noPartnersDiv.style.display = 'none';
        
        partnersContainer.innerHTML = '';
        studyPartners.forEach(partner => {
            const partnerCard = createPartnerCard(partner);
            partnersContainer.appendChild(partnerCard);
        });
    }
}

function createPartnerCard(partner) {
    const card = document.createElement('div');
    card.className = 'partner-card';
    
    card.innerHTML = `
        <div class="partner-avatar">${partner.avatar}</div>
        <div class="partner-info">
            <h4>${partner.name}</h4>
            <p>${partner.year}${getOrdinalSuffix(partner.year)} Year • ${partner.department}</p>
        </div>
    `;
    
    return card;
}

function getOrdinalSuffix(num) {
    const j = num % 10;
    const k = num % 100;
    if (j == 1 && k != 11) {
        return "st";
    }
    if (j == 2 && k != 12) {
        return "nd";
    }
    if (j == 3 && k != 13) {
        return "rd";
    }
    return "th";
}

// Add some sample study partners for demonstration
function addSamplePartners() {
    const samplePartners = [
        {
            name: "Arjun Sharma",
            avatar: "👨‍💻",
            year: 2,
            department: "Computer Science"
        },
        {
            name: "Priya Patel",
            avatar: "👩‍🔬",
            year: 3,
            department: "Biotechnology"
        },
        {
            name: "Rahul Kumar",
            avatar: "🤖",
            year: 2,
            department: "Computer Science"
        }
    ];
    
    localStorage.setItem('studyPartners', JSON.stringify(samplePartners));
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
  
  // Update the nav profile button
  const avatarEl = document.getElementById('profile-avatar');
  const textEl = document.getElementById('profile-text');
  
  if (avatarEl) {
    avatarEl.textContent = user ? user.avatar || '👤' : '👤';
  }
  
  if (textEl) {
    textEl.textContent = user ? 'My Profile' : 'Get Started';
  }
}

// Load study statistics
function loadStudyStatistics(user) {
    // Get study partners for total count
    const studyPartners = JSON.parse(localStorage.getItem('studyPartners')) || [];
    
    // Calculate statistics
    const totalSubjects = user.subjects ? user.subjects.length : 0;
    const totalSessions = Math.floor(Math.random() * 50) + 10; // Simulated data
    const avgCompatibility = Math.floor(Math.random() * 30) + 70; // Simulated data
    const totalPartners = studyPartners.length;
    
    // Update DOM
    document.getElementById('total-subjects').textContent = totalSubjects;
    document.getElementById('study-sessions').textContent = totalSessions;
    document.getElementById('avg-compatibility').textContent = `${avgCompatibility}%`;
    document.getElementById('total-partners').textContent = totalPartners;
    document.getElementById('time-spent').textContent = `${Math.floor(Math.random() * 120) + 20}h`;
    document.getElementById('ai-interactions').textContent = Math.floor(Math.random() * 50) + 15;
}

// Load study schedule analysis
function loadStudyScheduleAnalysis(user) {
    const studyTimes = user.studyTimes || [];
    
    // Define time periods
    const timePeriods = [
        { id: 'morning', name: 'Morning', times: ['Morning'] },
        { id: 'afternoon', name: 'Afternoon', times: ['Afternoon'] },
        { id: 'evening', name: 'Evening', times: ['Evening'] },
        { id: 'night', name: 'Night', times: ['Night'] }
    ];
    
    timePeriods.forEach(period => {
        const isPreferred = studyTimes.some(time => period.times.includes(time));
        const percentage = isPreferred ? Math.floor(Math.random() * 40) + 60 : Math.floor(Math.random() * 20);
        const sessions = Math.floor(Math.random() * 15) + (isPreferred ? 5 : 0);
        
        // Update percentage and sessions
        document.getElementById(`${period.id}-percentage`).textContent = `${percentage}%`;
        document.getElementById(`${period.id}-sessions`).textContent = `${sessions} sessions`;
        
        // Update progress bar
        const fillElement = document.getElementById(`${period.id}-fill`);
        fillElement.style.width = `${percentage}%`;
        
        // Add color based on preference
        if (isPreferred) {
            fillElement.style.background = 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))';
        } else {
            fillElement.style.background = 'var(--color-border)';
        }
    });
}

// Load subject performance
function loadSubjectPerformance(user) {
    const subjects = user.subjects || [];
    const container = document.getElementById('subjects-performance');
    container.innerHTML = '';
    
    if (subjects.length === 0) {
        container.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center; grid-column: 1 / -1;">No subjects enrolled yet</p>';
        return;
    }
    
    // Subject icons mapping
    const subjectIcons = {
        'Data Structures': '📊',
        'Algorithms': '⚡',
        'Database Management': '🗄️',
        'Computer Networks': '🌐',
        'Operating Systems': '💻',
        'Software Engineering': '🔧',
        'Web Development': '🌍',
        'Machine Learning': '🤖',
        'Artificial Intelligence': '🧠',
        'Cybersecurity': '🔒',
        'Cloud Computing': '☁️',
        'Mobile Development': '📱'
    };
    
    subjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'subject-performance-card';
        
        const icon = subjectIcons[subject] || '📚';
        const sessions = Math.floor(Math.random() * 20) + 5;
        const compatibility = Math.floor(Math.random() * 30) + 70;
        
        card.innerHTML = `
            <div class="subject-performance-icon">${icon}</div>
            <div class="subject-performance-info">
                <h4>${subject}</h4>
                <div class="subject-performance-stats">
                    <div class="subject-stat">
                        <span class="subject-stat-value">${sessions}</span>
                        <span class="subject-stat-label">Sessions</span>
                    </div>
                    <div class="subject-stat">
                        <span class="subject-stat-value">${compatibility}%</span>
                        <span class="subject-stat-label">Compatibility</span>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Uncomment the line below to add sample partners for testing
addSamplePartners();
