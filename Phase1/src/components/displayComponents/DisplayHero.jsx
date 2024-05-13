import React from "react";
import Hero1 from "../componentUI/Hero1";
import Hero2 from "../componentUI/Hero2";

const DisplayHero = ({ movie, selectedIndex, setSelectedIndex, heroType }) => {
  let heroComponent;
  if (heroType === "H1") {
    heroComponent = (
      <Hero1
        movie={movie}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    );
  } else if (heroType === "H2") {
    heroComponent = (
      <Hero2
        movie={movie}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    );
  } else {
    heroComponent = <div>No matching hero component found</div>;
  }

  return <>{heroComponent}</>;
};

export default DisplayHero;
