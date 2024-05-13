import React from "react";
import { Link } from "react-router-dom";
import useHeroLogic from "../componentLogics/HeroLogic";
import { RxPlus } from "react-icons/rx";

const Hero = ({ movie, selectedIndex, setSelectedIndex }) => {
  const { index, loading, handlePrev, handleNext, handleImageLoad } =
    useHeroLogic({
      selectedIndex,
      setSelectedIndex,
    });

  return (
    <div className="relative w-full flex-[0.7] font-poppins h-screen">
      {movie && (
        <div
          className={`relative w-full h-full transition-opacity duration-500 `}
        >
          {loading && (
            <div className="absolute inset-0 w-full p-12 rounded-xl bg-gray-500 animate-pulse"></div>
          )}
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="loaded content"
            className={`w-full aspect-[2.2] object-cover transition-opacity duration-500 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={handleImageLoad}
          />

          {/* title, desc, imdb, no. of streams, play and watch trailer button */}
          <div className=" bg-gradient-to-b from-transparent to-[#0F1014] w-full h-auto text-white absolute bottom-0">
            <div className="ml-28 w-[30%] mb-28">
              <div
                className={`py-[1vh] mb-[4vh] ${
                  loading ? " bg-gray-400 animate-pulse rounded-lg" : ""
                }`}
              >
                <h1
                  className={`text-5xl font-semibold w-full uppercase transition-opacity duration-500 ${
                    loading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={handleImageLoad}
                >
                  {movie.title}
                </h1>
              </div>

              <div
                className={` ${
                  loading ? "bg-gray-400 animate-pulse rounded-lg" : ""
                }`}
              >
                <div
                  className={`transition-opacity duration-500 ${
                    loading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={handleImageLoad}
                >
                  <p className={`text-[18px] text-[#CDCDCD] line-clamp-5`}>
                    {movie.overview}
                  </p>
                  <p className="text-[12px] py-2">IMDB: {movie.vote_average}</p>
                  <p className="text-[12px]">Streams: {movie.popularity}</p>
                </div>
              </div>

              <div className={`flex flex-row space-x-8 pt-16 text-xl `}>
                <div
                  className={`w-full ${
                    loading ? "bg-gray-400 animate-pulse rounded-xl" : ""
                  } `}
                >
                  <Link
                    to={`/watch/${movie.id}`}
                    className={`bg-white text-black font-bold p-2 w-full flex items-center justify-center rounded-xl ${
                      index === 0
                        ? "transform scale-110 transition-all duration-500 ease-in-out"
                        : ""
                    } transition-opacity duration-500 ${
                      loading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={handleImageLoad}
                  >
                    Play
                  </Link>
                </div>

                <div
                  className={` ${
                    loading ? "bg-gray-400 animate-pulse rounded-xl" : ""
                  }`}
                >
                  <button
                    className={`bg-[#373737] p-2 px-4 w-full text-white flex items-center justify-center rounded-xl ${
                      index === 1
                        ? "bg-[#545454] transform scale-110 transition-all duration-500 ease-in-out"
                        : ""
                    } transition-opacity duration-500 ${
                      loading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={handleImageLoad}
                  >
                    <RxPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
