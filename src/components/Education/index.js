import React from "react";

function Education() {
  return (
    <div className="container" id="education">
      <div className="row">
        <div className="col">
          <h1>Resume</h1>
          <div class="row resume-cards g-0">
            <div class="col-md-4">
              <h2>Education</h2>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Northwest Missouri State University</h5>
                <p class="card-text">
                  <ul>
                    <li>Bacherlors in Biological Psychology</li>
                    <li>Emphasis in Spanish</li>
                  </ul>
                </p>
                <h5 class="card-title">University of Arizona</h5>
                <p class="card-text">
                  <ul>
                    <li>Full Stack Development Boot Camp</li>
                  </ul>
                </p>
                <p class="card-text">
                  <a
                    class="text"
                    href="https://drive.google.com/file/d/1YHK0gyxKcRFuBGHzWWI43T2ER6K1sGoa/view?usp=sharing"
                    download="Resume"
                    target="_blank"
                  >
                    Download Full Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="row resume-cards g-0 reverse">
            <div class="col-md-8 reverse">
              <div class="card-body">
                <h5 class="card-title">Global Environmental Consulting</h5>
                <p class="card-text">
                  <ul>
                    <li>Quality Assurance Specialist I - Software Tester</li>
                    <li>Website Development (HTML, CSS)</li>
                    <li>New App Development (Angular, Ionic)</li>
                    <li>Agile Development</li>
                  </ul>
                </p>
                <p class="card-text">
                  <a class="text" href="https://www.1gec.com/">
                    Website
                  </a>
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <h2>Employment</h2>
            </div>
          </div>
          <div class="row resume-cards g-0">
            <div class="col-md-4">
              <h2>Skills</h2>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Foundation</h5>
                <div className="row">
                  <div class="col-md-4">
                    <p class="card-text">
                      <ul>
                        <li>HTML/CSS/Git</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>The DOM</li>
                      </ul>
                    </p>
                  </div>
                  <div class="col-md-4">
                    <p class="card-text">
                      <ul>
                        <li>APIs</li>
                        <li>JQuery</li>
                        <li>JSON</li>
                        <li>AJAX</li>
                      </ul>
                    </p>
                  </div>
                </div>

                <h5 class="card-title">Technique</h5>
                <div className="row">
                  <div class="col-md-4">
                    <p class="card-text">
                      <ul>
                        <li>Node</li>
                        <li>ES6</li>
                        <li>Object-Oriented Programming</li>
                        <li>Express</li>
                      </ul>
                    </p>
                  </div>
                  <div class="col-md-4">
                    <p class="card-text">
                      <ul>
                        <li>MySQL</li>
                        <li>MVC Paradigm</li>
                        <li>Sequelize</li>
                        <li>Testing</li>
                        <li>Agile Development</li>
                      </ul>
                    </p>
                  </div>
                </div>
                <h5 class="card-title">Performance</h5>
                <div className="row">
                  <div class="col-md-4">
                    <p class="card-text">
                      <ul>
                        <li>Progressive Web Apps</li>
                        <li>React</li>
                        <li>NoSQL</li>
                      </ul>
                    </p>
                  </div>
                  <div class="col-md-4">
                    <p class="card-text">
                      <ul>
                        <li>MERN Stack</li>
                        <li>Computer Science Fundamentals</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
