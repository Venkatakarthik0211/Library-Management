// login.js

// Initialize an empty array to store sign-up details
const signUpData = [];

// Function to handle the signup form submission
function handleSignUp(e) {
  e.preventDefault();
  const email = e.target.querySelector('input[type="text"]').value;
  const password = e.target.querySelector('input[type="password"]').value;
  const confirmPassword = e.target.querySelector('input[name="confirm-password"]').value;

  if (password === confirmPassword) {
    // Check if email already exists in the sign-up data
    const existingUser = signUpData.find(user => user.email === email);

    if (existingUser) {
      alert("Email already exists. Please login.");
    } else {
      // Add the new user to the signUpData array
      signUpData.push({ email, password });
      alert("Signup Successful. You can now log in.");

      // Optionally, you can redirect the user to the login page after successful signup
      // window.location.href = "login.html";
    }
  } else {
    alert("Passwords do not match.");
  }
}

// Add a submit event listener to the signup form
document.querySelector("form.signup").addEventListener("submit", handleSignUp);

// Function to handle the login form submission
function handleLogin(e) {
  e.preventDefault();
  const email = e.target.querySelector('input[type="text"]').value;
  const password = e.target.querySelector('input[type="password"]').value;

  // Find the user with the entered email
  const user = signUpData.find(user => user.email === email);

  if (user) {
    // Check if the entered password matches the stored password
    if (user.password === password) {
      alert("Login Successful");
    } else {
      alert("Incorrect Password");
    }
  } else {
    alert("User not found. Please sign up.");
  }
}

// Add a submit event listener to the login form
document.querySelector("form.login").addEventListener("submit", handleLogin);

// Rest of your code for switching between login and signup forms
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};

loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};

signupLink.onclick = () => {
  signupBtn.click();
  return false;
};
