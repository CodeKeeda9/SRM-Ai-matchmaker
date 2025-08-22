// Compiler - the friend of all (Frontend)
// Real AI via /api/chat (Node backend) or smart rule-based fallback

(function() {
    const el = (id) => document.getElementById(id);
    const messages = el('messages');
    const sendBtn = el('sendBtn');
    const input = el('chatInput');
    
    // Get current user from localStorage
    const savedUser = localStorage.getItem('studyBuddy_user');
    const currentUser = savedUser ? JSON.parse(savedUser) : null;

    // Compiler's intro message
    const intro = "Hi! 🐾 I'm Compiler - your SRM study buddy! I've got a nose for answers and make learning paws-itively smarter, stress-free, and fun! 🐶💡";
    addBot(intro + "<br><br>I can help with:<br>- 📚 Book recommendations<br>- 👥 Smart study partner matching<br>- 👨‍🏫 Professor contacts<br>- 📅 Library schedules<br>- 🎯 Personalized matchmaking based on your strengths/weaknesses");

    // Quick button handlers
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.qbtn');
        if (!btn) return;
        input.value = btn.getAttribute('data-q') || '';
        send();
    });

    // Send button and Enter key handlers
    sendBtn.addEventListener('click', send);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            send();
        }
    });

    function addUser(text) {
        append('user', text);
    }

    function addBot(html) {
        append('bot', html);
    }

    function append(who, html) {
        const wrap = document.createElement('div');
        wrap.className = 'msg ' + (who === 'bot' ? 'bot' : 'user');
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.innerHTML = html;
        wrap.appendChild(bubble);
        messages.appendChild(wrap);
        messages.scrollTop = messages.scrollHeight;
    }

    function showTyping() {
        const w = document.createElement('div');
        w.className = 'msg bot';
        w.id = 'typing';
        w.innerHTML = '<div class="typing"><span>🤖</span><div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div></div>';
        messages.appendChild(w);
        messages.scrollTop = messages.scrollHeight;
    }

    function hideTyping() {
        const n = document.getElementById('typing');
        if (n) n.remove();
    }

    async function send() {
        const text = (input.value || '').trim();
        if (!text) return;
        
        addUser(text);
        input.value = '';
        showTyping();

        try {
            // Try real backend first
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text, user: currentUser })
            });
            
            if (res.ok) {
                const data = await res.json();
                hideTyping();
                addBot(sanitize(data.reply || ''));
                return;
            }
            
            // Fallback to local logic
            const reply = localFallback(text, currentUser);
            hideTyping();
            addBot(reply);
        } catch (e) {
            const reply = localFallback(text, currentUser);
            hideTyping();
            addBot(reply);
        }
    }

    // Local smart fallback with enhanced matchmaking
    function localFallback(message, user) {
        const m = (message || '').toLowerCase();
        
        if (!user) {
            return "Please create your profile first so I can personalize answers. Click 'Get Started' on the homepage.";
        }

        if (matchAny(m, ['partner', 'match', 'group study', 'study buddy', 'smart matchmaking'])) {
            return renderMatches(user);
        }
        
        if (matchAny(m, ['book', 'recommend', 'textbook', 'reading'])) {
            return renderBooks(user);
        }
        
        if (matchAny(m, ['professor', 'faculty', 'teacher'])) {
            return renderProfs(user);
        }
        
        if (matchAny(m, ['library', 'schedule', 'hour', 'timing', 'exam'])) {
            return renderSchedule(m.includes('exam'));
        }

        return "Hello! I can help with study partners, books, professors, and schedules. Try: 'Find me study partners for my subjects' or 'Match me based on my strengths'.";
    }

    function matchAny(text, arr) {
        return arr.some(k => text.includes(k));
    }

    // Enhanced demo datasets with more detailed information
    const demoStudents = [
        {
            id: 1,
            name: 'Arjun Sharma',
            year: 2,
            department: 'Computer Science Engineering',
            subjects: ['Data Structures', 'Database Management', 'Operating Systems'],
            preferred_times: ['Evening', 'Night'],
            study_style: 'Group',
            avatar: '👨‍💻',
            interests: ['AI', 'CP', 'Web Development'],
            goals: ['project', 'placement'],
            strengths: ['coding', 'problem solving', 'algorithms'],
            weaknesses: ['math', 'theory'],
            availability: ['night', 'weekend'],
            method: ['online', 'offline']
        },
        {
            id: 2,
            name: 'Priya Reddy',
            year: 2,
            department: 'Electronics & Communication',
            subjects: ['Digital Signal Processing', 'Control Systems', 'Mathematics II'],
            preferred_times: ['Morning', 'Afternoon'],
            study_style: 'Group',
            avatar: '👩‍🔬',
            interests: ['robotics', 'IoT', 'signal processing'],
            goals: ['exam', 'research'],
            strengths: ['math', 'analytical thinking', 'circuits'],
            weaknesses: ['coding', 'programming'],
            availability: ['morning', 'afternoon'],
            method: ['offline']
        },
        {
            id: 3,
            name: 'Karthik Menon',
            year: 3,
            department: 'Mechanical Engineering',
            subjects: ['Thermodynamics', 'Fluid Mechanics', 'Machine Design'],
            preferred_times: ['Afternoon', 'Evening'],
            study_style: 'Group',
            avatar: '👨‍🔧',
            interests: ['design', 'automation', 'CAD'],
            goals: ['project', 'internship'],
            strengths: ['mechanics', 'design thinking', 'practical work'],
            weaknesses: ['theory', 'mathematics'],
            availability: ['evening', 'weekend'],
            method: ['offline']
        },
        {
            id: 4,
            name: 'Ananya Patel',
            year: 1,
            department: 'Computer Science Engineering',
            subjects: ['Programming Fundamentals', 'Mathematics I', 'Physics'],
            preferred_times: ['Morning', 'Evening'],
            study_style: 'Individual',
            avatar: '👩‍💻',
            interests: ['programming', 'gaming', 'music'],
            goals: ['foundation', 'learning'],
            strengths: ['creativity', 'adaptability'],
            weaknesses: ['time management', 'focus'],
            availability: ['morning', 'evening'],
            method: ['online']
        }
    ];

    const demoBooks = [
        {
            title: 'Introduction to Algorithms',
            author: 'CLRS',
            subject: 'Data Structures',
            dept: 'Computer Science Engineering',
            years: [2, 3],
            rating: 4.9,
            availability: 'Library, Online',
            description: 'Comprehensive guide to algorithms and data structures'
        },
        {
            title: 'Database System Concepts',
            author: 'Silberschatz et al.',
            subject: 'Database Management',
            dept: 'Computer Science Engineering',
            years: [2, 3],
            rating: 4.7,
            availability: 'Library, Online',
            description: 'Complete database theory and practical implementation'
        },
        {
            title: 'Engineering Mathematics',
            author: 'B.S. Grewal',
            subject: 'Mathematics II',
            dept: 'All Engineering',
            years: [1, 2],
            rating: 4.5,
            availability: 'Library',
            description: 'Essential mathematics for engineering students'
        },
        {
            title: 'Digital Signal Processing',
            author: 'Oppenheim & Schafer',
            subject: 'Digital Signal Processing',
            dept: 'Electronics & Communication',
            years: [2, 3],
            rating: 4.8,
            availability: 'Library',
            description: 'Comprehensive DSP theory and applications'
        }
    ];

    const demoProfs = [
        {
            name: 'Dr. Rajesh Kumar',
            dept: 'Computer Science Engineering',
            spec: ['Data Structures', 'Algorithms', 'DBMS'],
            hours: 'Mon-Fri 2-4 PM',
            room: 'Block A, Room 301',
            contact: 'rajesh.kumar@srmist.edu.in',
            rating: 4.5,
            expertise: 'Advanced algorithms, competitive programming'
        },
        {
            name: 'Prof. Meena Sharma',
            dept: 'Mathematics',
            spec: ['Engineering Mathematics', 'Linear Algebra'],
            hours: 'Tue-Thu 10-12 PM',
            room: 'Block B, Room 205',
            contact: 'meena.sharma@srmist.edu.in',
            rating: 4.8,
            expertise: 'Mathematical modeling, statistics'
        },
        {
            name: 'Dr. Amit Patel',
            dept: 'Electronics & Communication',
            spec: ['Digital Signal Processing', 'Control Systems'],
            hours: 'Wed-Fri 3-5 PM',
            room: 'Block C, Room 401',
            contact: 'amit.patel@srmist.edu.in',
            rating: 4.6,
            expertise: 'Signal processing, embedded systems'
        }
    ];

    const scheduleNormal = {
        library: { weekdays: '8:00 AM - 9:00 PM', weekends: '9:00 AM - 6:00 PM' },
        studyrooms: { availability: '9:00 AM - 7:00 PM', booking: 'Visit library reception' },
        faculty: { general: '9:00 AM - 5:00 PM', doubt: '2:00 PM - 4:00 PM daily' }
    };

    const scheduleExam = {
        library: { weekdays: '7:00 AM - 11:00 PM', weekends: '7:00 AM - 11:00 PM' },
        studyrooms: { availability: '7:00 AM - 10:00 PM', booking: '24-hour advance booking' }
    };

    function renderMatches(user) {
        const list = demoStudents
            .filter(s => s.id !== user.id)
            .map(s => ({ ...s, score: compat(user, s) }))
            .filter(s => s.score > 30)
            .sort((a, b) => b.score - a.score)
            .slice(0, 3);

        if (list.length === 0) {
            return "No high-compatibility partners found now. Try widening your subjects or study times.";
        }

        let html = "<strong>🎯 Top study partner matches</strong>";
        list.forEach(s => {
            html += card(`
                <div class="row">
                    <span class="tag match-score">${s.score}% match</span>
                    <span class="tag">${s.department}</span>
                    <span class="tag">${s.year}${ord(s.year)} Yr</span>
                </div>
                <strong>${s.name} ${s.avatar}</strong><br>
                <span>Subjects: ${s.subjects.join(', ')}</span><br>
                <span>Study Style: ${s.study_style}</span><br>
                <span>Preferred Times: ${s.preferred_times.join(', ')}</span>
            `);
        });
        return html;
    }

    function renderBooks(user) {
        const relevant = demoBooks.filter(b => 
            b.dept === 'All Engineering' || 
            b.dept === user.department ||
            user.subjects.some(s => s.toLowerCase().includes(b.subject.toLowerCase().split(' ')[0]))
        );

        if (relevant.length === 0) {
            return "No specific books found for your subjects. Try asking about general engineering books.";
        }

        let html = "<strong>📚 Recommended books for you</strong>";
        relevant.forEach(b => {
            html += card(`
                <div class="row">
                    <span class="tag book-rating">⭐ ${b.rating}</span>
                    <span class="tag">${b.subject}</span>
                    <span class="tag">${b.dept}</span>
                </div>
                <strong>${b.title}</strong> by ${b.author}<br>
                <span>${b.description}</span><br>
                <span>Available: ${b.availability}</span>
            `);
        });
        return html;
    }

    function renderProfs(user) {
        const relevant = demoProfs.filter(p => 
            p.dept === user.department ||
            p.spec.some(s => user.subjects.some(us => us.toLowerCase().includes(s.toLowerCase().split(' ')[0])))
        );

        if (relevant.length === 0) {
            return "No specific professors found for your subjects. Try asking about general faculty contacts.";
        }

        let html = "<strong>👨‍🏫 Professors who can help you</strong>";
        relevant.forEach(p => {
            html += card(`
                <div class="row">
                    <span class="tag prof-contact">⭐ ${p.rating}</span>
                    <span class="tag">${p.dept}</span>
                </div>
                <strong>${p.name}</strong><br>
                <span>Specialization: ${p.spec.join(', ')}</span><br>
                <span>Office Hours: ${p.hours}</span><br>
                <span>Room: ${p.room}</span><br>
                <span>Contact: ${p.contact}</span><br>
                <span>Expertise: ${p.expertise}</span>
            `);
        });
        return html;
    }

    function renderSchedule(isExam) {
        const s = isExam ? scheduleExam : scheduleNormal;
        return `
            <strong>📅 ${isExam ? 'Exam Period' : 'Regular'} Schedule</strong><br><br>
            <strong>📚 Library Hours:</strong><br>
            • Weekdays: ${s.library.weekdays}<br>
            • Weekends: ${s.library.weekends}<br><br>
            <strong>🏫 Study Rooms:</strong><br>
            • Availability: ${s.studyrooms.availability}<br>
            • Booking: ${s.studyrooms.booking}<br><br>
            <strong>👨‍🏫 Faculty Office Hours:</strong><br>
            • General: ${s.faculty.general}<br>
            • Doubt Sessions: ${s.faculty.doubt}
        `;
    }

    function card(content) {
        return `<div class="card">${content}</div>`;
    }

    function ord(n) {
        const s = ['th', 'st', 'nd', 'rd'];
        const v = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    }

    // Enhanced compatibility algorithm
    function compat(user, partner) {
        let score = 0;
        
        // Subject overlap (40% weight)
        const userSubs = user.subjects.map(s => s.toLowerCase());
        const partnerSubs = partner.subjects.map(s => s.toLowerCase());
        const commonSubs = userSubs.filter(s => partnerSubs.some(ps => ps.includes(s) || s.includes(ps)));
        score += (commonSubs.length / Math.max(userSubs.length, partnerSubs.length)) * 40;
        
        // Study style compatibility (20% weight)
        if (user.study_style === partner.study_style || user.study_style === 'Both' || partner.study_style === 'Both') {
            score += 20;
        } else if (user.study_style === 'Group' && partner.study_style === 'Group') {
            score += 15;
        }
        
        // Time overlap (20% weight)
        const userTimes = user.preferred_times.map(t => t.toLowerCase());
        const partnerTimes = partner.preferred_times.map(t => t.toLowerCase());
        const commonTimes = userTimes.filter(t => partnerTimes.includes(t));
        score += (commonTimes.length / Math.max(userTimes.length, partnerTimes.length)) * 20;
        
        // Year compatibility (10% weight)
        const yearDiff = Math.abs(user.year - partner.year);
        if (yearDiff === 0) score += 10;
        else if (yearDiff === 1) score += 8;
        else if (yearDiff === 2) score += 5;
        
        // Department similarity (10% weight)
        if (user.department === partner.department) score += 10;
        else if (user.department.includes('Engineering') && partner.department.includes('Engineering')) score += 5;
        
        return Math.round(score);
    }

    function sanitize(html) {
        const div = document.createElement('div');
        div.textContent = html;
        return div.innerHTML;
    }
})();
