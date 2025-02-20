import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Welcome to My Frontend Showcase</h1>
        <p>React project demonstrating UI/UX best practices</p>
      </header>
      <main>
        <button onClick={() => alert("Hello, Recruiter!")}>
          Click Me!
        </button>
      </main>
    </div>
  );
};

export default App;
