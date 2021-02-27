import React from "react";
import Navigation from "../Navigation";

function Header(props) {
  const { currentPage, handlePageChange } = props;

  return (
    <div>
      <div>{/* <img src="" /> */}</div>
      <div>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Header;
