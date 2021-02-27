import React from "react";
import Navigation from "./components/Navigation";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <main>
        <h1>ABOUT ME</h1>
      </main>
      <footer>
        <h4>Instagram | LinkedIn | GitHub</h4>
      </footer>
    </div>
  );
}

export default App;
