import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Hero2 from "../../components/componentUI/Hero2";
import Slider2 from "../../components/componentUI/Slider2";
import { CLIENT_API } from "../../Client/client";

const Home2 = () => {
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
      <Navbar
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Hero2
        movie={selectedMovie}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />

      <Slider2
        slides={slides}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        setSelectedMovie={setSelectedMovie}
      />
    </div>
  );
};

export default Home2;
