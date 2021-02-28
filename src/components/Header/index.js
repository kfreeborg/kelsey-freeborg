import React from "react";
import Navigation from "../Navigation";
import Shark from "../../assets/images/header.jpg";

function Header(props) {
  const { currentPage, handlePageChange } = props;

  return (
    <div>
      <div className="banner-home">
        <div className="container-fluid">
          <div className="row">
            <img src={Shark} />
            <div class="centered">
              <h1>Kelsey Freeborg</h1>
              <h5>Software Developer</h5>
            </div>
            <div className="top-right">
              <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
