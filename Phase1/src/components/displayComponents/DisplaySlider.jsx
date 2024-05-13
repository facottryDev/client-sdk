import React from "react";
import Slider1 from "../componentUI/Slider1";
import Slider2 from "../componentUI/Slider2";

const DisplaySlider = ({
  slides,
  selectedIndex,
  setSelectedIndex,
  setSelectedMovie,
  sliderType,
}) => {
  let sliderComponent;
  if (sliderType === "S1") {
    sliderComponent = (
      <Slider1
        slides={slides}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        setSelectedMovie={setSelectedMovie}
      />
    );
  } else if (sliderType === "S2") {
    sliderComponent = (
      <Slider2
        slides={slides}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        setSelectedMovie={setSelectedMovie}
      />
    );
  } else {
    sliderComponent = <div>No matching hero component found</div>;
  }

  return <>{sliderComponent}</>;
};

export default DisplaySlider;
