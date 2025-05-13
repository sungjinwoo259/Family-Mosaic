// User credentials
const users = {
    // Replace these with actual values
    'brother': {
        password: '14/05/2008', // Replace with actual date
        redirect: 'birthday.html'
    },
    'parents': {
        password: '14/05/2003', // Replace with actual date
        redirect: 'anniversary.html'
    }
};

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.toLowerCase();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Validate credentials
    if (users[username] && users[username].password === password) {
        // Successful login
        errorMessage.classList.add('hidden');
        
        // Add animation before redirect
        const form = document.querySelector('.max-w-md');
        form.style.animation = 'fadeOut 0.5s ease-out';
        
        setTimeout(() => {
            window.location.href = users[username].redirect;
        }, 500);
    } else {
        // Failed login
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.classList.remove('hidden');
        
        // Shake animation for error
        const form = document.querySelector('.max-w-md');
        form.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            form.style.animation = '';
        }, 500);
    }
});

// Add shake animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(0.95); }
    }
`;
document.head.appendChild(style); 