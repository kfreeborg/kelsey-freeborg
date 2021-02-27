import React from "react";
// import Project from "./Project";

function Navigation(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="">
          Kelsey Freeborg
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="">
                Education <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Contact Me
              </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
