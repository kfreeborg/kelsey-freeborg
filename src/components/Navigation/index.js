import React from "react";

function Navigation(props) {
  const { currentPage, handlePageChange } = props;

  return (
    <div>
      <nav class="navbar">
        <h2 class={currentPage === "Home"}>
          <span
            class="nav-brand nav-link"
            onClick={() => handlePageChange("Home")}
          >
            Kelsey Freeborg
          </span>
        </h2>
        <div>
          <ul class="nav">
            <li class={currentPage === "Home" ? "nav-link active" : "nav-link"}>
              <span onClick={() => handlePageChange("Home")}>About Me</span>
            </li>
            <li
              class={
                currentPage === "Education" ? "nav-link active" : "nav-link"
              }
            >
              <span onClick={() => handlePageChange("Education")}>Resume</span>
            </li>
            <li
              class={currentPage === "Project" ? "nav-link active" : "nav-link"}
            >
              <span onClick={() => handlePageChange("Project")}>Projects</span>
            </li>
            <li
              class={currentPage === "Contact" ? "nav-link active" : "nav-link"}
            >
              <span onClick={() => handlePageChange("Contact")}>
                Contact Form
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
