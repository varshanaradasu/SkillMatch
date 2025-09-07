import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [currentEmail, setCurrentEmail] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setCurrentEmail={setCurrentEmail} />}
        />
        <Route
          path="/admin"
          element={
            <Admin
              users={users}
              setUsers={setUsers}
              projects={projects}
              setProjects={setProjects}
            />
          }
        />
        <Route
          path="/employee"
          element={
            <Employee
              email={currentEmail}
              users={users}
              projects={projects}
              statuses={statuses}
              setStatuses={setStatuses}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
