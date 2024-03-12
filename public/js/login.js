document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordFormat = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const errorDisplay = document.getElementById("errorDisplay");
    errorDisplay.innerHTML = "";

    // Declare variables outside of if statements
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (!email.match(emailFormat)) {
      errorDisplay.innerHTML = "Please enter a valid email address.";
      event.preventDefault();

      // Focus on the email input field and set outline to red
      emailInput.focus();
      emailInput.style.outline = "2px solid red";

      return;
    } else {
      // Reset outline if email is valid
      emailInput.style.outline = "";
    }

    if (!password.match(passwordFormat)) {
      errorDisplay.innerHTML =
        "Please enter a valid password. Password must contain at least one capital letter, one special character, one number, and be at least 8 characters long.";
      event.preventDefault();

      // Focus on the password input field and set outline to red
      passwordInput.focus();
      passwordInput.style.outline = "2px solid red";

      return;
    } else {
      // Reset outline if password is valid
      passwordInput.style.outline = "";
    }

    // // Prepare data for submission
    // const formData = new FormData();
    // formData.append("email", email);
    // formData.append("password", password);

    // // Submit data to backend endpoint
    // fetch("/your-backend-endpoint", {
    //   method: "POST",
    //   body: formData
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // Handle response from backend
    //     console.log(data); // You can process the response data here
    //   })
    //   .catch((error) => {
    //     console.error("There was a problem with your fetch operation:", error);
    //   });

    if (email == 'admin@mail.com' && password == 'Admin123!') {
      window.location.assign('../../app/home.html')
    } else {
      alert('invalid credentials')
    }

    event.preventDefault(); // Prevent default form submission behavior
  });

function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const passwordToggle = document.querySelector(".password-toggle");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.classList.remove("fa-eye-slash");
    passwordToggle.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    passwordToggle.classList.remove("fa-eye");
    passwordToggle.classList.add("fa-eye-slash");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  emailInput.focus();
});
