const userEmail = sessionStorage.getItem("email");

async function fetchUserId() {
  const response = await fetch("http://localhost:5000/viewemployees");
  const employees = await response.json();
  const user = employees.find(emp => emp.email === userEmail);
  return user ? user.user_id : null;
}

async function loadAllocation() {
  const user_id = await fetchUserId();
  if (!user_id) {
    alert("User not found.");
    return;
  }

  const response = await fetch(`http://localhost:5000/getallocation/${user_id}`);
  const data = await response.json();

  if (data.proj_id) {
    document.getElementById("projectInfo").innerText = `Project ID: ${data.proj_id} - ${data.project_title}`;
    sessionStorage.setItem("user_id", user_id);
    sessionStorage.setItem("proj_id", data.proj_id);
  } else {
    document.getElementById("projectInfo").innerText = "No project allocated.";
  }

  loadStatusTable();
}

async function submitStatus() {
  const user_id = sessionStorage.getItem("user_id");
  const proj_id = sessionStorage.getItem("proj_id");
  const status = document.getElementById("status").value;

  if (!status) {
    alert("Please select a status.");
    return;
  }

  const response = await fetch("http://localhost:5000/updatestatus", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id, proj_id, status })
  });

  const result = await response.json();
  alert(result.message);
  loadStatusTable();
}

async function loadStatusTable() {
  const response = await fetch("http://localhost:5000/viewstatuses");
  const statuses = await response.json();
  const user_id = sessionStorage.getItem("user_id");

  const tableBody = document.querySelector("#statusTable tbody");
  tableBody.innerHTML = "";

  statuses
    .filter(row => row.employee_name && row.id && row.status && row.status !== "" && row.status !== null)
    .filter(row => row.id && row.user_id === parseInt(user_id))
    .forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${row.project_title}</td>
        <td>${row.status}</td>
        <td>${new Date(row.updated_at).toLocaleString()}</td>
      `;
      tableBody.appendChild(tr);
    });
}

function logout() {
  sessionStorage.clear();
  window.location.href = "login.html";
}

window.onload = loadAllocation;
