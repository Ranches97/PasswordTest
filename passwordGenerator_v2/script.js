function generatePassword() {
  // Get password length from slider
  var charLength = document.getElementById("charLength").value;

  // Get checkbox values
  var useSpecialChars = document.getElementById("useSpecialChars").checked;
  var useNumbers = document.getElementById("useNumbers").checked;
  var useUpperCase = document.getElementById("useUpperCase").checked;

  // Define character sets to include in password
  var charSet = "";
  if (useSpecialChars) {
    charSet += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }
  if (useNumbers) {
    charSet += "0123456789";
  }
  if (useUpperCase) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  charSet += "abcdefghijklmnopqrstuvwxyz";

  // Generate password
  var password = "";
  for (var i = 0; i < charLength; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  // Display password
  document.getElementById("password").textContent = password;
}

  // Password Strength test

  function checkPasswordStrength() {
    const password = document.getElementById("password-input").value;
    const progressBar = document.getElementById("progress-bar");
    const strengthText = document.getElementById("strength-text");
    const feedback = document.getElementById("feedback");
  
    // Define variables to store password strength, score, and feedback
    let strength = "";
    let score = 0;
    let feedbackText = "";
  
    // Check password length
    if (password.length < 12) {
      score -= 1;
      feedbackText += "Your password should have at least 8 characters.";
    } else {
      score += 1;
    }
  
    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
      score += 1;
    } else {
      feedbackText += "Your password should include at least one uppercase letter.";
    }
  
    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
      score += 1;
    } else {
      feedbackText += "Your password should include at least one lowercase letter.<br>";
    }
  
    // Check for numbers
    if (/\d/.test(password)) {
      score += 1;
    } else {
      feedbackText += "Your password should include at least one number.";
    }
  
    // Check for special characters
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      score += 1;
    } else {
      feedbackText += "Your password should include at least one special character.";
    }
  
    // Determine password strength based on score
    if (score == 0) {
      strength = "Weak";
    } else if (score < 3) {
      strength = "Moderate";
    } else if (score < 5) {
      strength = "Strong";
    } else {
      strength = "Very Strong";
    }
  
    // Update progress bar
    progressBar.style.width = score * 20 + "%";
    progressBar.className = "progress-bar bg-" + strength.toLowerCase();
  
    // Update strength text
    strengthText.innerText = "Strength: " + strength;
  
    // Update feedback
    feedback.innerHTML = feedbackText;
  }