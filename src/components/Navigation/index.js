import React from "react";

function Navigation(props) {
  const { currentPage, handlePageChange } = props;

  return (
    <div>
      <nav class="navbar">
        <h2 class={currentPage === "Home"}>
          <span class="nav-link" onClick={() => handlePageChange("Home")}>
            Kelsey Freeborg
          </span>
        </h2>

        <div>
          <ul class="nav justify-content-end">
            <li class={currentPage === "Education"}>
              <span
                class="nav-link"
                onClick={() => handlePageChange("Education")}
              >
                Education
              </span>
            </li>
            <li class={currentPage === "Project"}>
              <span
                class="nav-link"
                onClick={() => handlePageChange("Project")}
              >
                Projects
              </span>
            </li>
            <li class={currentPage === "Contact"}>
              <span
                class="nav-link"
                onClick={() => handlePageChange("Contact")}
              >
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