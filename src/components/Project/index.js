import React from "react";
import works from "../../data";
import Card from "../Card";

const Project = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="">
              <div className="card-body">
                <div className="header">
                  <h3>Projects</h3>
                </div>
                <div className="" />

                <div className="grid-container vertical-line">
                  {works.map((project) => (
                    <Card
                      id={project.id}
                      key={project.id}
                      image={project.image}
                      name={project.name}
                      github={project.github}
                      deploy={project.deploy}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;
