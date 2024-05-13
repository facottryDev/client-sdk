import { useEffect, useState } from "react";
import Hero1 from "../components/componentUI/Hero1";
import { CLIENT_API } from "../Client/client";
import RenderSlider from "../components/RenderSlider";
import Navbar1 from "../components/componentUI/Navbar1";

const Movie = () => {
  const [slides, setSlides] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    setSelectedMovie(slides[0]);
  }, [slides]);

  useEffect(() => {
    CLIENT_API.getAllMovies("movie", (movieData) => {
      setSlides(movieData);
    });

    CLIENT_API.getMoviesByGenre(35, (comedyData) => {
      setComedyMovies(comedyData);
    });

    CLIENT_API.getTrendingMovies((trendingData) => {
      setTrendingMovies(trendingData);
    });
  }, []);

  console.log("selected index: ", selectedIndex);

  return (
    <div className="font-poppins w-full flex flex-col relative items-start justify-center bg-[#0F1014]">
      <div className="z-10 w-32 h-full bg-gradient-to-r from-[#0F1014] to-transparent absolute left-0 top-0">
        <Navbar1
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </div>
      <div className="flex flex-col space-y-8">
        <Hero1
          movie={selectedMovie}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <div className="flex flex-col items-center space-y-8 z-10 ">
          {slides.length > 0 &&
            RenderSlider(
              slides,
              selectedIndex,
              setSelectedIndex,
              setSelectedMovie,
              "Movies"
            )}
          {comedyMovies.length > 0 &&
            RenderSlider(
              comedyMovies,
              selectedIndex,
              setSelectedIndex,
              setSelectedMovie,
              "Comedy Movies"
            )}
          {trendingMovies.length > 0 &&
            RenderSlider(
              trendingMovies,
              selectedIndex,
              setSelectedIndex,
              setSelectedMovie,
              "Trending Movies"
            )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
