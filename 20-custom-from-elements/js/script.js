const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const fieldEmail = document.getElementById('field-email');
const fieldPassword = document.getElementById('field-password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const togglePasswordBtn = document.getElementById('toggle-password');
const submitBtn = document.getElementById('submit-btn');
const formStatus = document.getElementById('form-status');
const oauthButtons = document.querySelectorAll('.btn-oauth');
/*
===============================
        HELPERS
===============================
*/

// toggle password visibility
const passwordVisibility = () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    togglePasswordBtn.setAttribute('aria-pressed', !isPassword);
};

togglePasswordBtn.addEventListener('click', passwordVisibility);

// Error message formats
const showError = (element, msg) => {
    element.textContent = msg;
    element.style.display = 'block';
}

const clearError = (element) => {
    element.textContent = '';
    element.style.display = 'none';
};


// ====== Submit simulation ======
const validateEmail = () => {
    const emailWritten = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailWritten) {
        showError(emailError, 'Email is required.');
        fieldEmail.classList.add('is-invalid');
        return false;
    }
    if (!emailRegex.test(emailWritten)) {
        showError(emailError, 'Enter a valid email address.');
        fieldEmail.classList.add('is-invalid');
        return false;
    }

    clearError(emailError);
    fieldEmail.classList.remove('is-invalid');
    return true;
};

const validatePassword = () => {
    const passwordWritten = passwordInput.value.trim();

    if (!passwordWritten) {
        showError(passwordError, 'Password is required.');
        fieldPassword.classList.add('is-invalid');
        return false;
    }
    if (passwordWritten.length < 8) {
        showError(passwordError, 'Password must be at least 8 characters.');
        fieldPassword.classList.add('is-invalid');
        return false;
    }

    clearError(passwordError);
    fieldPassword.classList.remove('is-invalid');
    return true;
};

// Simulated async request (replace with real fetch when backend is ready)
const fakeLoginRequest = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Change to reject() to test the error flow
            resolve();
        }, 1500);
    });
};

const handleSubmit = async (event) => {
    event.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // Focus first invalid field
    if (!isEmailValid) {
        emailInput.focus();
        return;
    }
    if (!isPasswordValid) {
        passwordInput.focus();
        return;
    }

    // Loading state
    submitBtn.classList.add('is-loading');
    submitBtn.disabled = true;
    formStatus.textContent = '';
    formStatus.className = '';

    try {
        await fakeLoginRequest();

        // Success
        formStatus.textContent = 'Signed in successfully!';
        formStatus.classList.add('is-success');
    } catch {
        // Error
        formStatus.textContent = 'Invalid email or password.';
        formStatus.classList.add('is-error');
    } finally {
        submitBtn.classList.remove('is-loading');
        submitBtn.disabled = false;
    }
};

form.addEventListener('submit', handleSubmit);



oauthButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const provider = btn.dataset.provider;
        // Replace with real OAuth endpoint when ready
        console.log(`Redirecting to ${provider} OAuth...`);
        // window.location.href = `/auth/${provider}`;
    });
});


// Clear error as soon as user starts correcting
emailInput.addEventListener('input', () => {
    fieldEmail.classList.remove('is-invalid');
    clearError(emailError);
});

passwordInput.addEventListener('input', () => {
    fieldPassword.classList.remove('is-invalid');
    clearError(passwordError);
});