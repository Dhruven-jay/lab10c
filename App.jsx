import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1>Building a Simple Web Page with React and Vite</h1>
      </header>

      <section className="content">
        <h2>Installation Process</h2>
        <p>
          To set up the project, I followed these steps:
        </p>
        <ol>
          <li>
            Installed Node.js, which is required for using npm (Node Package Manager).
          </li>
          <li>
            Used the following command to create a new Vite project:
            <code>npm create vite@latest my-project-name --template react</code>
          </li>
          <li>Changed into the project directory: <code>cd my-project-name</code></li>
          <li>Installed dependencies with <code>npm install</code>.</li>
          <li>Started the development server with <code>npm run dev</code>.</li>
        </ol>

        <h2>Building the Page</h2>
        <p>
          After setting up the project, I edited the <code>App.jsx</code> file to display the required information.
          I used simple HTML elements like headings, paragraphs, and lists to structure the content.
        </p>
        <p>
          The page includes:
          <ul>
            <li>An explanation of the installation process.</li>
            <li>Details about how the page was built.</li>
            <li>A section for challenges and solutions.</li>
          </ul>
        </p>

        <h2>Challenges and Solutions</h2>
        <p>
          Here are some difficulties I encountered and how I resolved them:
        </p>
        <ul>
          <li>
            <strong>Challenge:</strong> Missing dependencies while running the project for the first time.<br />
            <strong>Solution:</strong> I resolved this by running <code>npm install</code> again to ensure all dependencies were properly installed.
          </li>
          <li>
            <strong>Challenge:</strong> Configuring the project to handle asset imports (like images).<br />
            <strong>Solution:</strong> I used the asset importing capabilities of Vite by placing images in the `public` or `src/assets` directories.
          </li>
        </ul>
      </section>

      <footer>
        <p>
          This page was built using Vite and React. Click on the{" "}
          <a href="https://vite.dev" target="_blank">
            Vite
          </a>{" "}
          logo above to learn more.
        </p>
      </footer>
    </div>
  );
}

export default App;
