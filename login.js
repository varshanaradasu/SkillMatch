document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;

  if (!email || !password || !role) {
    alert("Please fill all fields.");
    return;
  }
  alert(`Login successful as ${role}!`);
  if (role === "admin") {
    window.location.href = "admin.html";
  } else if (role === "employee") {
    window.location.href = "employee.html";
  }
});
