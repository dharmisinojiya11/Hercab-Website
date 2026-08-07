// ===============================
// SHOW / HIDE PASSWORD
// ===============================

const togglePassword = document.getElementById("togglePassword");

const password = document.getElementById("password");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.classList.remove("fa-eye");

        togglePassword.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        togglePassword.classList.remove("fa-eye-slash");

        togglePassword.classList.add("fa-eye");

    }

});

// ===============================
// LOGIN VALIDATION
// ===============================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    const passwordValue = document.getElementById("password").value.trim();

    // Email Empty

    if (email === "") {

        alert("Please enter your email address.");

        return;

    }

    // Email Format

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {

        alert("Please enter a valid email address.");

        return;

    }

    // Password Empty

    if (passwordValue === "") {

        alert("Please enter your password.");

        return;

    }

    // Password Length

    if (passwordValue.length < 6) {

        alert("Password must be at least 6 characters.");

        return;

    }

    // Success

    alert("Login Successful! Welcome to HerCab.");

    // Redirect to Dashboard

    window.location.href = "dashboard.html";

});