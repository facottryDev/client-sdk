import React from "react";
import Navbar2 from "../componentUI/Navbar2";
import Navbar1 from "../componentUI/Navbar1";

const DisplayNavbar = ({ selectedIndex, setSelectedIndex, navBarType }) => {
  let navbarComponent;
  if (navBarType === "N1") {
    navbarComponent = (
      <Navbar1
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        navBarType={navBarType}
      />
    );
  } else if (navBarType === "N2") {
    navbarComponent = (
      <Navbar2
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        navBarType={navBarType}
      />
    );
  } else {
    navbarComponent = <div>No matching navbar found</div>;
  }

  return <>{navbarComponent}</>;
};

export default DisplayNavbar;
