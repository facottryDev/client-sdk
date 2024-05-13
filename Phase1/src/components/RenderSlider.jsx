import React from "react";
import Slider from "./componentUI/Slider";

const RenderSlider = (
  slides,
  selectedIndex,
  setSelectedIndex,
  setSelectedMovie,
  title
) => {
  return (
    <Slider
      slides={slides}
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
      setSelectedMovie={setSelectedMovie}
      title={title}
    />
  );
};

export default RenderSlider;
