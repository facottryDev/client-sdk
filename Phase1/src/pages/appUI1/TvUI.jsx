import React from "react";
import { useEffect, useState } from "react";
import Slider from "../../components/componentUI/Slider";
import Hero from "../../components/componentUI/Hero";
import LeftNavBar from "../../components/LeftNavBar";

const TvShows = () => {
  const [slides, setSlides] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(slides[0]);

  useEffect(() => {
    setSelectedMovie(slides[0]);
  }, [slides]);
  useEffect(() => {
    window.CLIENT_API.getMovieData("tv", (tvData) => {
      setSlides(tvData);
    });
  }, []);
  console.log("selected index: ", selectedIndex);

  return (
    <div>
      <LeftNavBar />
      <Hero
        movie={selectedMovie}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Slider
        slides={slides}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        setSelectedMovie={setSelectedMovie}
      />
    </div>
  );
};

export default TvShows;
