import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
    <header className="header">
      <div>
        <h1 className="typing">YASH VARDHAN</h1>
        <p>Welcome to my portfolio.</p>
      </div>
    </header>
  );
}

function Main() {
  return (
    <main>
      <section>
        <h2 id="about">About Me</h2>
        <p>
          Mastering ReactJS, Tailwind CSS, and a suite of web design tools, I've
          crafted responsive and dynamic web applications that are both robust
          and user-friendly. Currently enrolled at Centurion University, my
          academic journey is intertwined with a passion for Full-Stack
          development. With Meta certifications in key areas like JavaScript and
          version control, my aim is to merge theoretical knowledge with
          practical skills to innovate and excel in the tech landscape.
        </p>
      </section>
      <section>
        <h2>Tech Stack</h2>
        <div className="tech-stack" id="techstack">
          <TechStack />
        </div>
      </section>
      <HireMe />
    </main>
  );
}

function TechStack() {
  return (
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>NextJS</li>
      <li>TailwindCSS</li>
      <li>MaterialUI</li>
      <li>Firebase</li>
      <li>MongoDB</li>
    </ul>
  );
}

function HireMe() {
  return (
    <section>
      <h2 id="hireme">Hire Me</h2>
      <p>
        I am currently looking for opportunities in the field of Full-Stack
        development. If you are looking for a passionate and hardworking
        individual to join your team, feel free to reach out to me.
        <a href="mailto:vardhan.yash3105@gmail.com" className="email">
          Mail Me
        </a>
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2021 My Portfolio</p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
