import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [currentPage, handlePageChange] = useState("Home");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Education":
        return <Education />;
      case "Project":
        return <Project />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };
  return (
    <div>
      <header>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <div>
        <main>{renderPage()}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
