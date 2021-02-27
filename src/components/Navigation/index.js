import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Project from ".././Project";
// import Home from "../../App";

function Navigation(props) {
  return (
    <BrowserRouter>
      {/* <Route path="/" component={Home} /> */}
      <Route path="/project" component={Project} />
      {/* <Route path="/articles" component={Articles} />
      <Route path="/about" component={About} /> */}

      <div>
        <nav class="navbar">
          <a class="navbar-brand" href="/">
            Kelsey Freeborg
          </a>

          <div>
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <a class="nav-link" href="/education">
                  Education
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/project">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact-form">
                  Contact Form
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default Navigation;
