import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import useSliderLogic from "../componentLogics/SliderLogic";

const Slider2 = ({
  slides,
  selectedIndex,
  setSelectedIndex,
  setSelectedMovie,
  title,
}) => {
  const {
    visibleSlides,
    sliderRef,
    focusedIndex,
    isFocused,
    loading,
    handlePrev,
    handleNext,
    handleImageLoad,
    visibleCount,
    currentIndex,
  } = useSliderLogic(slides, selectedIndex, setSelectedIndex, setSelectedMovie);

  return (
    <div className="bg-[#0F1014] w-full flex-[0.3] px-24 py-2 border-transparent focus:border-transparent focus:ring-0">
      <h1 className="text-white text-xl font-inter font-semibold pb-4 tracking-widest">
        {title}
      </h1>
      <div tabIndex={0} ref={sliderRef} className="flex flex-row items-center">
        <div className="flex items-center justify-center absolute left-[3%] bg-slate-200 p-2 rounded-full">
          {slides.length !== 0 && currentIndex !== 0 && (
            <button onClick={handlePrev}>
              <MdKeyboardArrowLeft />
            </button>
          )}
        </div>
        <div className="flex flex-grow space-x-8 ">
          {visibleSlides.map((slide, index) => (
            <div
              key={index}
              className={`relative ${
                index === focusedIndex && isFocused
                  ? "transform scale-105 transition-all duration-500 ease-in-out"
                  : ""
              }`}
              tabIndex={index === focusedIndex ? 0 : -1}
              onClick={() => handleMovieClick(slide)}
            >
              <a href={`/details2/${slide.id}`}>
                {loading && (
                  <div className="absolute aspect-video bg-gray-400 animate-pulse"></div>
                )}
                <img
                  src={`https://image.tmdb.org/t/p/w500/${slide.thumbnail}`}
                  alt=""
                  className={`aspect-video object-cover transition-opacity duration-500 ${
                    loading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={handleImageLoad}
                />
              </a>
              {/* <h1 className="py-2  truncate text-xl text-white font-poppins">
                {slide.title}
              </h1> */}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center absolute right-[3%] bg-slate-200 p-2 rounded-full">
          {slides.length !== 0 &&
            currentIndex < slides.length - visibleCount && (
              <button onClick={handleNext}>
                <MdKeyboardArrowRight />
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default Slider2;
