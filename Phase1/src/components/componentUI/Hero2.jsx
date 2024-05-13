import React from "react";
import { Link } from "react-router-dom";
import useHeroLogic from "../componentLogics/HeroLogic";

const Hero2 = ({ movie, selectedIndex, setSelectedIndex }) => {
  const { index, loading, handlePrev, handleNext, handleImageLoad } =
    useHeroLogic({
      movie,
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

          <div className=" bg-gradient-to-b from-transparent to-[#0F1014] w-full h-auto text-white absolute bottom-0">
            {/* details */}
            <div className="ml-28 w-[30%] mb-20 flex flex-col justify-between bg-gray-800 bg-opacity-50 p-8 rounded-3xl">
              <div
                className={`pb-4${
                  loading ? " bg-gray-400 animate-pulse rounded-lg" : ""
                }`}
              >
                <h1
                  className={`text-5xl font-semibold w-full transition-opacity duration-500 ${
                    loading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={handleImageLoad}
                >
                  {movie.title}
                </h1>
              </div>

              <div
                className={`${
                  loading ? "bg-gray-400 animate-pulse rounded-lg" : ""
                }`}
              >
                <div
                  className={`transition-opacity duration-500 ${
                    loading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={handleImageLoad}
                >
                  <p className={` text-[#CDCDCD] line-clamp-5 `}>
                    {movie.overview}
                  </p>
                  <p className="text-[12px] py-4">IMDB: {movie.vote_average}</p>
                  <p className="text-[12px]">Streams: {movie.popularity}</p>
                </div>
              </div>

              <div className={`flex flex-row space-x-8 pt-16 text-xl `}>
                <div
                  className={`flex-1 ${
                    loading ? "bg-gray-400 animate-pulse rounded-3xl" : ""
                  }`}
                >
                  <Link
                    to={`/watch2/${movie.id}`}
                    className={`bg-white text-black font-bold p-2 flex items-center justify-center rounded-3xl ${
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
                  className={`flex-1 ${
                    loading ? "bg-gray-400 animate-pulse rounded-3xl" : ""
                  }`}
                >
                  <button
                    className={`bg-[#ff0000] p-2 w-full font-semibold text-white flex items-center justify-center rounded-3xl ${
                      index === 1
                        ? "bg-[#545454] transform scale-110 transition-all duration-500 ease-in-out"
                        : ""
                    } transition-opacity duration-500 ${
                      loading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={handleImageLoad}
                  >
                    Wishlist
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

export default Hero2;
