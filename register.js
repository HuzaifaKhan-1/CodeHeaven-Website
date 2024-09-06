let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

// Initially set the password type to 'password' and the icon to 'closed'
password.type = "password";
eyeicon.src = "eye-close.png";

eyeicon.onclick = function() {
    if (password.type === "password") {
        password.type = "text";
        eyeicon.src = "eye-open.png"; // Show the open eye icon
    } else {
        password.type = "password";
        eyeicon.src = "eye-close.png"; // Show the closed eye icon
    }
}

// For the Confirm Password field
let eyeicon2 = document.getElementById("eyeicon2");
let conpassword = document.getElementById("conpassword");

conpassword.type = "password";
eyeicon2.src = "eye-close.png";

eyeicon2.onclick = function() {
    if (conpassword.type === "password") {
        conpassword.type = "text";
        eyeicon2.src = "eye-open.png";
    } else {
        conpassword.type = "password";
        eyeicon2.src = "eye-close.png";
    }
}


document.getElementById("form").onsubmit = function() {
    var phone = document.getElementById("phone").value;
    var phoneError = document.getElementById("phone_error");

    var phonePattern = /^[+]?[0-9]{10,13}$/;
    if (!phonePattern.test(phone)) {
        phoneError.textContent = "Invalid phone number!";
        return false;
    } else {
        phoneError.textContent = "";
    }

    // Other validations...
    return true;
};

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear previous errors
    document.getElementById("name_error").textContent = "";
    document.getElementById("email_error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("confirmpsw-error").textContent = "";
    document.getElementById("submit-error").textContent = "";

    let valid = true;

    // Validate Full Name
    const name = document.getElementById("name").value.trim();
    if (name.length < 3) {
        document.getElementById("name_error").textContent = "*Name must be at least 3 characters long";
        valid = false;
    }

    // Validate Email
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("email_error").textContent = "*Please enter a valid email address";
        valid = false;
    }

    // Validate Password
    const password = document.getElementById("password").value.trim();
    if (password.length < 8) {
        document.getElementById("password-error").textContent = "*Password must be at least 8 characters long";
        valid = false;
    }

    // Validate Confirm Password
    const conpassword = document.getElementById("conpassword").value.trim();
    if (password !== conpassword) {
        document.getElementById("confirmpsw-error").textContent = "Password do not match";
        valid = false;
    }

    // Validate Gender
    const gender = document.querySelector('input[name="r1"]:checked');
    if (!gender) {
        document.getElementById("submit-error").textContent = "*Please select a gender";
        valid = false;
    }

    // Validate Country
    const country = document.querySelector('.country').value;
    if (country === "Select a Country") {
        document.getElementById("submit-error").textContent = "*Please select a country";
        valid = false;
    }

    // Validate Terms and Conditions
    const terms = document.querySelector('.check-button input').checked;
    if (!terms) {
        document.getElementById("submit-error").textContent = "*You must accept the terms and conditions";
        valid = false;
    }

    // If all validations pass, submit the form
    if (valid) {
        alert("Form submitted successfully!");
        
        event.target.submit();
    }
});
