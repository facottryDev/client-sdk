import React, { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../TanslateLayer.js";
import DisplayNavbar from "../components/displayComponents/DisplayNavbar";
import DisplayHero from "../components/displayComponents/DisplayHero";
import DisplaySlider from "../components/displayComponents/DisplaySlider";

const Home = ({ appConfig }) => {
  const [slides, setSlides] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(slides[0]);

  useEffect(() => {
    setSelectedMovie(slides[0]);
  }, [slides]);
  useEffect(() => {
    fetchDataFromAPI("TMDB", "All Movies", "movie").then((data) => {
      setSlides(data);
    });
  }, []);
  //popular releases, top 10, popular shows, 2010 movies, romantic movies, comedy movies, trending movies, popular genres

  return (
    <div className="bg-black w-full flex flex-col relative items-start justify-center">
      <div className="z-10 w-32 bg-gradient-to-r from-[#0F1014] to-transparent absolute left-0 top-0">
        <DisplayNavbar
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          navBarType={appConfig?.navBarType ? appConfig.navBarType : "N2"}
        />
      </div>
      <DisplayHero
        movie={selectedMovie}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        heroType={appConfig?.heroType ? appConfig.heroType : "H1"}
      />

      <DisplaySlider
        slides={slides}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        setSelectedMovie={setSelectedMovie}
        sliderType={appConfig?.sliderType ? appConfig.sliderType : "S1"}
      />
    </div>
  );
};

export default Home;
