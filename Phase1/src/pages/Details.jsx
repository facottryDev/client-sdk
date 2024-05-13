import React from "react";
import { useState, useEffect } from "react";
import Hero1 from "../components/componentUI/Hero1";
import { CLIENT_API } from "../Client/client";
import RenderSlider from "../components/RenderSlider";
import { useParams } from "react-router-dom";
import Navbar1 from "../components/componentUI/Navbar1";

const Details = () => {
  const { id } = useParams();
  const [slides, setSlides] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    var similarMovies;
    CLIENT_API.getById(id, (movieData2) => {
      similarMovies = movieData2;
      // console.log("id", id);
      // console.log("test2", movieData2);
    });
    CLIENT_API.getSimilarMovies(id, (movieData) => {
      // console.log("movie", movieData);
      setSlides([similarMovies, ...movieData]);
    });
  }, [id]);

  useEffect(() => {
    setSelectedMovie(slides[0]);
  }, [slides]);

  return (
    <div className="font-poppins w-full flex flex-col relative items-start justify-center bg-[#0F1014]">
      <div className="z-10 w-32 h-full bg-gradient-to-r from-[#0F1014] to-transparent absolute left-0 top-0">
        <Navbar1
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          navBarType="N1"
        />
      </div>
      <div className="flex flex-col space-y-8">
        <Hero1
          movie={selectedMovie}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <div className="flex flex-col items-center space-y-8 z-10">
          {slides.length > 0 &&
            RenderSlider(
              slides,
              selectedIndex,
              setSelectedIndex,
              setSelectedMovie,
              "More Like This"
            )}
        </div>
      </div>
    </div>
  );
};

export default Details;
