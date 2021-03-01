import React from "react";

function Home() {
  return (
    <div className="container" id="home">
      <div className="row">
        <div className="col">
          <h1>A little about me.. </h1>
          <div class="row resume-cards g-0">
            <div class="col-md-4">
              <h2>Hobbies</h2>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  at est posuere, pharetra est eget, dictum felis. Donec
                  ultricies dignissim libero at blandit. Praesent lacinia vel
                  nisl sit amet tincidunt. Curabitur sit amet lectus diam. Morbi
                  eu tristique felis. Nullam quis laoreet metus, in tincidunt
                  ligula. Aliquam condimentum tincidunt arcu, id efficitur felis
                  rhoncus nec. Phasellus eu lacinia est. Phasellus eleifend,
                  velit eu commodo ultricies, risus tellus faucibus augue, vitae
                  laoreet magna mi vitae arcu. Vestibulum nisi risus, efficitur
                  ac mi at, maximus viverra erat. Orci varius natoque penatibus
                  et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
              </div>
            </div>
          </div>
          <div class="row resume-cards g-0 reverse">
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text">
                  Sed tempus ex vitae maximus malesuada. Etiam quam odio,
                  tincidunt eget arcu ut, elementum porttitor arcu. Nunc
                  fringilla molestie mi a egestas. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Proin tincidunt leo in ipsum
                  tincidunt tristique. Nunc tempus elit est, et congue sapien
                  laoreet ut. Duis non mauris a odio sollicitudin vehicula.
                  Aliquam feugiat aliquam venenatis. Cras eget ullamcorper orci.
                  Maecenas semper nisl dignissim diam rhoncus auctor. Curabitur
                  vestibulum aliquam velit. Donec eget luctus mi. Suspendisse
                  suscipit risus a lorem cursus tempus. Nam id ligula ac nibh
                  consequat varius. Fusce dapibus rhoncus eros, et interdum
                  velit lobortis eget. Vivamus quis ultrices tellus.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <h2>How I got into software...</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
