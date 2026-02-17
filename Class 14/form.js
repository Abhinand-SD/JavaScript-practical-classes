let form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop reload

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  let valid = true;

  // Clear errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  if (name === "") {
    document.getElementById("nameError").textContent = "Name required";
    valid = false;
  }

  if (email === "") {
    document.getElementById("emailError").textContent = "Email required";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Min 6 characters";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
  }
});


// Event Delegation
let container = document.getElementById("buttons");

container.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    alert("Clicked: " + e.target.textContent);
  }
});
