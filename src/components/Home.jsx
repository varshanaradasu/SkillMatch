import React from "react";
import "../styles/index.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">SkillMatch</div>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <button onClick={() => navigate("/login")} className="btn">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <div className="overlay"></div>

      <section className="landing">
        <div className="content">
          <div className="text-block">
            <h1>Skill-Match</h1>
            <p>
              Intelligently match the right people to the right projects.
              Streamline your team's potential with powerful project allocation.
            </p>
            <button className="btn" onClick={() => navigate("/login")}>
              Get Started
            </button>
          </div>
          <div className="image-block">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5840/5840381.png"
              alt="Project Illustration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
