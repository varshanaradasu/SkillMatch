const form = document.getElementById("loginForm");
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const role = document.getElementById("role").value;
  if (!role) {
    alert("Please select a role.");
    return;
  }

  const data = {
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value
  };

  try {
    const response = await fetch("http://localhost:5000/userlogin", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.access_token) {
      if (result.role !== role) {
        alert(`Role mismatch. You are registered as '${result.role}', but selected '${role}'.`);
        return;
      }

      sessionStorage.setItem("access_token", result.access_token);
      sessionStorage.setItem("email", result.email);
      sessionStorage.setItem("user_id", result.user_id);
      sessionStorage.setItem("role", result.role);

      alert("Login successful");

      window.location.href = result.role === "employee" ? "employee.html" : "admin.html";
    } else {
      alert("Login failed: " + (result.message || "Invalid credentials"));
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
  }
});
