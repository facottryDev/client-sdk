import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/componentUI/Hero";
import Slider from "../../components/componentUI/Slider";
import LeftNavBar from "../../components/LeftNavBar";
import { CLIENT_API } from "../../Client/client";

const Home = () => {
  const [slides, setSlides] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(slides[0]);

  useEffect(() => {
    setSelectedMovie(slides[0]);
  }, [slides]);
  useEffect(() => {
    CLIENT_API.getAllMovies("movie", (movieData) => {
      setSlides(movieData);
    });
  }, []);
  //popular releases, top 10, popular shows, 2010 movies, romantic movies, comedy movies, trending movies, popular genres

  return (
    <div className="bg-black w-full flex flex-col relative items-start justify-center">
      <div className="z-10 w-32 bg-gradient-to-r from-[#0F1014] to-transparent absolute left-0 top-0">
        <LeftNavBar
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </div>
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

export default Home;
