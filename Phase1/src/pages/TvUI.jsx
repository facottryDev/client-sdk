import React from "react";
import { useEffect, useState } from "react";
import Slider1 from "../components/componentUI/Slider1";
import Hero1 from "../components/componentUI/Hero1";
import Navbar1 from "../components/componentUI/Navbar1";
import { fetchDataFromAPI } from "../TanslateLayer";

const TvShows = () => {
  const [slides, setSlides] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(slides[0]);

  useEffect(() => {
    setSelectedMovie(slides[0]);
  }, [slides]);
  useEffect(() => {
    fetchDataFromAPI("TMDB", "All Shows", "tv").then((data) => {
      setSlides(data);
    });
  }, []);

  return (
    <div>
      {/* <Navbar1 /> */}
      <Hero1
        movie={selectedMovie}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Slider1
        slides={slides}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        setSelectedMovie={setSelectedMovie}
      />
    </div>
  );
};

export default TvShows;
