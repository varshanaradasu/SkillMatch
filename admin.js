document.getElementById('addUserForm').onsubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('http://localhost:5000/adduser', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      role: document.getElementById('role').value,
      skills: document.getElementById('skills').value || null,
      skill_rating: document.getElementById('skill_rating').value || null
    })
  });
  const result = await response.json();
  alert(result.message || JSON.stringify(result));
  e.target.reset();
};

document.getElementById('addProjectForm').onsubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('http://localhost:5000/addproject', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      proj_title: document.getElementById('proj_title').value,
      proj_desc: document.getElementById('proj_desc').value,
      req_skills: document.getElementById('req_skills').value || null,
      proj_cap: parseInt(document.getElementById('proj_cap').value),
      status: 'Not Started'
    })
  });
  const result = await response.json();
  alert(result.message || JSON.stringify(result));
  e.target.reset();
};

async function autoAllocate() {
  try {
    const response = await fetch('http://localhost:5000/autoallocate');
    const result = await response.json();
    alert(result.message || JSON.stringify(result));
  } catch (err) {
    alert("Auto Allocation failed");
  }
}

function logout() {
  sessionStorage.clear();
  window.location.href = "login.html";
}
