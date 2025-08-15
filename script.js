document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from submitting normally

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;

  if (!email || !password || !role) {
    alert("Please fill all fields.");
    return;
  }

  // Simulate login success
  alert(`Login successful as ${role}!`);

  // Redirect based on role
  if (role === "admin") {
    window.location.href = "admin.html"; // Change to your admin page
  } else if (role === "employee") {
    window.location.href = "employee.html"; // Change to your employee page
  }
});
