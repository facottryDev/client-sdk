import React from "react";
import Slider1 from "./componentUI/Slider1";

const RenderSlider = (
  slides,
  selectedIndex,
  setSelectedIndex,
  setSelectedMovie,
  title
) => {
  return (
    <Slider1
      slides={slides}
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
      setSelectedMovie={setSelectedMovie}
      title={title}
    />
  );
};

export default RenderSlider;
