// Simple Onboarding Handler
console.log('🎓 StudyBuddy Onboarding JS loaded!');

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('📋 Setting up onboarding form...');
  
  // Handle Join StudyBuddy button
  const joinButton = document.getElementById('join-studybuddy-btn');
  if (joinButton) {
    joinButton.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('🚀 Join StudyBuddy button clicked!');
      
      // Save user data if possible
      try {
        const name = document.getElementById('name')?.value.trim() || 'User';
        const year = document.getElementById('year')?.value || '1';
        const department = document.getElementById('department')?.value || 'Computer Science';
        const studyStyle = document.getElementById('study_style')?.value || 'Both';
        const bio = document.getElementById('bio')?.value.trim() || '';
  
  // Get preferred times
  const preferredTimes = Array.from(document.querySelectorAll('input[name="preferred_times"]:checked')).map(cb => cb.value);
  if (preferredTimes.length === 0) {
          preferredTimes.push('Evening');
  }
  
  // Get selected subjects
  const selectedSubjects = Array.from(document.querySelectorAll('input[name="subjects"]:checked')).map(cb => cb.value);
  if (selectedSubjects.length === 0) {
          selectedSubjects.push('Programming');
  }
  
  // Get selected avatar
  const selectedAvatar = document.querySelector('.avatar-option.avatar-selected')?.getAttribute('data-avatar') || '👤';
  
  const currentUser = {
    id: Date.now(),
    name: name,
    year: parseInt(year),
    department: department,
    subjects: selectedSubjects,
    preferred_times: preferredTimes,
    study_style: studyStyle,
    avatar: selectedAvatar,
          bio: bio,
    location: 'SRM Modinagar, Ghaziabad'
  };
  
    localStorage.setItem('studyBuddy_user', JSON.stringify(currentUser));
    console.log('✅ User profile saved:', currentUser.name);
      } catch (error) {
        console.log('⚠️ Could not save profile, but continuing...');
      }
      
      // Always redirect to chatbot
      console.log('🚀 Redirecting to chatbot compiler...');
      window.location.href = 'chatbot.html';
    });
  }
  
  // Handle Back to Home button
  const backButton = document.getElementById('back-to-home');
  if (backButton) {
    backButton.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('🏠 Back to home clicked');
      window.location.href = 'index.html';
    });
  }
  
  // Handle avatar selection
  const avatarOptions = document.querySelectorAll('.avatar-option');
  avatarOptions.forEach(option => {
    option.addEventListener('click', function() {
      // Remove active class from all options
      avatarOptions.forEach(opt => opt.classList.remove('avatar-selected'));
      
      // Add active class to clicked option
      this.classList.add('avatar-selected');
      
      // Update hidden input value
      const selectedAvatarInput = document.getElementById('selected-avatar');
      if (selectedAvatarInput) {
        selectedAvatarInput.value = this.getAttribute('data-avatar');
      }
      
      console.log('Selected avatar:', this.getAttribute('data-avatar'));
    });
  });
  
  console.log('✅ Onboarding initialized successfully!');
});

// Simple ballpit animation (if needed)
function setupSimpleBallpit() {
  const canvas = document.getElementById('ballpitCanvas');
  if (!canvas) return;
  
  // Simple animated background
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const balls = [];
  for (let i = 0; i < 50; i++) {
    balls.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: Math.random() * 3 + 1,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    balls.forEach(ball => {
      ball.x += ball.vx;
      ball.y += ball.vy;
      
      if (ball.x < 0 || ball.x > canvas.width) ball.vx *= -1;
      if (ball.y < 0 || ball.y > canvas.height) ball.vy *= -1;
      
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = ball.color;
      ctx.fill();
    });
    
    requestAnimationFrame(animate);
  }
  
  animate();
}

// Initialize simple ballpit
document.addEventListener('DOMContentLoaded', setupSimpleBallpit);
