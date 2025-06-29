// Auth Modal Toggle
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const authModal = document.getElementById('authModal');
const closeModal = document.querySelector('.close-modal');
const showLogin = document.getElementById('showLogin');
const showSignup = document.getElementById('showSignup');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const tabBtns = document.querySelectorAll('.tab-btn');

// Open modal for login
if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        authModal.style.display = 'flex';
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        tabBtns[0].classList.add('active');
        tabBtns[1].classList.remove('active');
    });
}

// Open modal for signup
if (signupBtn) {
    signupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        authModal.style.display = 'flex';
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        tabBtns[1].classList.add('active');
        tabBtns[0].classList.remove('active');
    });
}

// Close modal
closeModal.addEventListener('click', () => {
    authModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.style.display = 'none';
    }
});

// Switch to login form
if (showLogin) {
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        tabBtns[0].classList.add('active');
        tabBtns[1].classList.remove('active');
    });
}

// Switch to signup form
if (showSignup) {
    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        tabBtns[1].classList.add('active');
        tabBtns[0].classList.remove('active');
    });
}

// Tab switching
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        if (tab === 'login') {
            loginForm.classList.add('active');
            signupForm.classList.remove('active');
        } else {
            signupForm.classList.add('active');
            loginForm.classList.remove('active');
        }
    });
});

// Login form submission
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Simple validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the data to a server for authentication
        console.log('Login attempt:', { email, password });
        
        // For demo purposes, we'll just redirect to dashboard
        window.location.href = 'dashboard.html';
    });
}

// Signup form submission
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirm').value;
        
        // Validation
        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        if (password.length < 6) {
            alert('Password must be at least 6 characters');
            return;
        }
        
        // Here you would typically send the data to a server
        console.log('Signup data:', { name, email, password });
        
        // For demo purposes, we'll show success and switch to login
        alert('Account created successfully! Please login.');
        signupForm.reset();
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        tabBtns[0].classList.add('active');
        tabBtns[1].classList.remove('active');
    });
}