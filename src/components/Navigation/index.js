import React from "react";

function Navigation(props) {
  const { currentPage, handlePageChange } = props;

  return (
    <div>
      <nav class="navbar">
        <h2 class={currentPage === "Home"}>
          <span onClick={() => handlePageChange("Home")}>Kelsey Freeborg</span>
        </h2>

        <div>
          <ul class="nav justify-content-end">
            <li class={currentPage === "Education"}>
              <button class="btn" onClick={() => handlePageChange("Education")}>
                Education
              </button>
            </li>
            <li class={currentPage === "Project"}>
              <button class="btn" onClick={() => handlePageChange("Project")}>
                Projects
              </button>
            </li>
            <li class={currentPage === "Contact"}>
              <button class="btn" onClick={() => handlePageChange("Contact")}>
                Contact Form
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
