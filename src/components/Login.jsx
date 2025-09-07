import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = ({ setCurrentEmail }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !role) {
      alert("Please fill all fields.");
      return;
    }
    setCurrentEmail(email);
    if (role === "admin") navigate("/admin");
    if (role === "employee") navigate("/employee");
  };

  return (
    <div className="login-wrapper">
      <div className="company-header">
        <h1>Skill Match</h1>
        <p style={{ fontSize: "14px", color: "#666", textAlign: "center" }}>
          Admin | Employee
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email ID</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Select Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="" disabled>
              Select role
            </option>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="footer">
        © 2025 Skill Match Project | All rights reserved.
      </div>
    </div>
  );
};

export default Login;
