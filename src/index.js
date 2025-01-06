import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
  { skill: "Node.js", level: "advanced", color: "#5D8736" },
  { skill: "NextJS", level: "beginner", color: "" },
  { skill: "TailwindCSS", level: "advanced", color: "#2662EA" },
  { skill: "MaterialUI", level: "advanced", color: "purple" },
  { skill: "Firebase", level: "advanced", color: "#EFD81D" },
  { skill: "MongoDB", level: "advanced", color: "green" },
];

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="navbar-list-item">
          <a href="#home">Home</a>
        </li>
        <li className="navbar-list-item">
          <a href="#techstack">Tech Stack</a>
        </li>
        <li className="navbar-list-item">
          <a href="#about">About</a>
        </li>
        <li className="navbar-list-item">
          <a href="#hireme">Hire Me</a>
        </li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header className="header" id="home">
      <div>
        <h1 className="typing">YASH VARDHAN</h1>
        <p>Welcome to my portfolio.</p>
      </div>
    </header>
  );
}

function Main() {
  return (
    <>
      <main className="main">
        <section>
          <h2 id="about">About Me</h2>
          <p>
            Mastering <span className="react">ReactJS</span>,{" "}
            <span className="tailwind">Tailwind CSS</span>, and a suite of web
            design tools, I've crafted <span className="respo">responsive</span>{" "}
            and {""}
            <span className="dyno">dynamic web applications</span> that are both
            robust and user-friendly. Currently enrolled at {""}
            <span className="cent">Centurion University</span>, my academic
            journey is intertwined with a passion for Full-Stack development.
            With <span className="meta">Meta</span> certifications in key areas
            like <span className="java">JavaScript </span>and version control,
            my aim is to merge theoretical knowledge with practical skills to
            innovate and excel in the tech landscape.
          </p>
        </section>
        <section>
          <h2>Tech Stack</h2>
          <div className="tech-stack" id="techstack">
            <SkillList />
          </div>
        </section>
      </main>
      <HireMe />
    </>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

function HireMe() {
  return (
    <section className="hire_me">
      <h2 id="hireme">Hire Me</h2>
      <p>
        I am currently looking for opportunities in the field of Full-Stack
        development. If you are looking for a passionate and hardworking
        individual to join your team, feel free to reach out to me.
      </p>
      <a href="mailto:vardhan.yash3105@gmail.com" className="email-button">
        Mail Me
      </a>
      <p className="resume_main">
        Download my{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/18rz3YVk_hDhtoJW9AxARkN2bR6PUVlCp/view?usp=sharing"
        >
          Resume
        </a>
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 My Portfolio</p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
