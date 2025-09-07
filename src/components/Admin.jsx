import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/admin.css";

const Admin = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    skills: "",
    skill_rating: "",
  });

  const [project, setProject] = useState({
    proj_title: "",
    proj_desc: "",
    req_skills: "",
    proj_cap: "",
  });

  const handleUserSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: users.length + 1, ...user };
    setUsers([...users, newUser]);
    alert("User added successfully!");
    setUser({
      name: "",
      email: "",
      password: "",
      role: "",
      skills: "",
      skill_rating: "",
    });
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: projects.length + 1,
      status: "Not Started",
      ...project,
    };
    setProjects([...projects, newProject]);
    alert("Project added successfully!");
    setProject({
      proj_title: "",
      proj_desc: "",
      req_skills: "",
      proj_cap: "",
    });
  };

  const autoAllocate = () => {
    alert("Projects are Auto Allocated Successfully!!");
  };

  const logout = () => {
    navigate("/login");
  };

  return (
    <div className="main-container">
      <div className="top-row">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <div className="nav-links">
            <a href="#">View Employees</a>
            <a href="#">View Projects</a>
            <a href="#">View Allocations</a>
            <a href="#">Export Allocations</a>
            <a href="#">View Project Statuses</a>
          </div>
        </div>
      </div>

      <div className="bottom-row">
        <div className="left-column">
          <form onSubmit={handleUserSubmit}>
            <h2>Add User</h2>
            <input
              placeholder="Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
            <input
              placeholder="Email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
            <input
              placeholder="Password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
            <select
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
              required
            >
              <option value="">Select Role</option>
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
            </select>
            <input
              placeholder="Skills (if employee)"
              value={user.skills}
              onChange={(e) => setUser({ ...user, skills: e.target.value })}
            />
            <input
              placeholder="Skill Rating (1-10)"
              type="number"
              min="1"
              max="10"
              value={user.skill_rating}
              onChange={(e) =>
                setUser({ ...user, skill_rating: e.target.value })
              }
            />
            <button type="submit">Add User</button>
          </form>
        </div>

        <div className="right-column">
          <form onSubmit={handleProjectSubmit}>
            <h2>Add Project</h2>
            <textarea
              placeholder="Project Description"
              rows="3"
              value={project.proj_desc}
              onChange={(e) =>
                setProject({ ...project, proj_desc: e.target.value })
              }
              required
            />
            <input
              placeholder="Project Title"
              value={project.proj_title}
              onChange={(e) =>
                setProject({ ...project, proj_title: e.target.value })
              }
              required
            />
            <input
              placeholder="Required Skills (comma separated)"
              value={project.req_skills}
              onChange={(e) =>
                setProject({ ...project, req_skills: e.target.value })
              }
            />
            <input
              placeholder="Project Capacity"
              type="number"
              min="1"
              value={project.proj_cap}
              onChange={(e) =>
                setProject({ ...project, proj_cap: e.target.value })
              }
              required
            />
            <button type="submit">Add Project</button>
          </form>

          <div className="auto-allocate-container">
            <button onClick={autoAllocate}>Auto Allocate Projects</button>
            <button
              onClick={logout}
              style={{ backgroundColor: "red", color: "white" }}
            >
              {" "}
              Logout{" "}
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
