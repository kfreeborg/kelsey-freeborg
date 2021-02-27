import React from "react";

function Navigation(props) {
  const [currentPage, handlePageChange] = props;

  return (
    <div>
      <nav class="navbar">
        <h2 class={currentPage === "home"}>
          <span onClick={() => handlePageChange("home")}>Kelsey Freeborg</span>
        </h2>

        <div>
          <ul class="nav justify-content-end">
            <li class={currentPage === "education"}>
              <span onClick={() => handlePageChange("education")}>
                Education
              </span>
            </li>
            <li class={currentPage === "project"}>
              <span onClick={() => handlePageChange("project")}>Projects</span>
            </li>
            <li class={currentPage === "contact"}>
              <span onClick={() => handlePageChange("contact")}>
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
