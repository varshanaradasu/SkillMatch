import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/employee.css";

const Employee = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [statusHistory, setStatusHistory] = useState([]);

  const project = {
    proj_id: 1,
    project_title: "AI Chatbot",
  };

  const submitStatus = () => {
    if (!status) {
      alert("Please select a status.");
      return;
    }

    const newEntry = {
      project_title: project.project_title,
      status,
      updated_at: new Date().toLocaleString(),
    };

    setStatusHistory([...statusHistory, newEntry]);
    alert("Status updated!");
    setStatus("");
  };

  const logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <div className="header-row">
        <h1>Employee Dashboard</h1>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="cards-container">
        <div className="card">
          <h2>Allocated Project</h2>
          <p>Project: AI Chatbot</p>
        </div>

        <div className="card">
          <h2>Update Project Status</h2>
          <label htmlFor="status">Select Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button onClick={submitStatus}>Submit Status</button>
        </div>

        <div className="card">
          <h2>Status History</h2>
          <table>
            <thead>
              <tr>
                <th>Project Title</th>
                <th>Status</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {statusHistory.length > 0 ? (
                statusHistory.map((row, index) => (
                  <tr key={index}>
                    <td>{row.project_title}</td>
                    <td>{row.status}</td>
                    <td>{row.updated_at}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center" }}>
                    No status updates yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employee;
