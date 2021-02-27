import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <h1>ABOUT ME</h1>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
