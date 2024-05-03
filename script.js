document.getElementById("loginBtn").addEventListener("click", function() {
    document.getElementById("loginForm").classList.toggle("hide");
    document.getElementById("signupForm").classList.add("hide");
});

document.getElementById("signupBtn").addEventListener("click", function() {
    document.getElementById("signupForm").classList.toggle("hide");
    document.getElementById("loginForm").classList.add("hide");
});

// Function to handle sign up form submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    console.log("Sign up submitted with values:");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    this.reset(); // Clear the form fields after submission
});

// Function to handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    console.log("Login submitted with values:");
    console.log("Email:", email);
    console.log("Password:", password);
    this.reset(); // Clear the form fields after submission
});