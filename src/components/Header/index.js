import React from "react";
import Navigation from "../Navigation";

function Header(props) {
  const { currentPage, handlePageChange } = props;

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default Header;
