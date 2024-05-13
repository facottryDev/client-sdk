import { useState, useEffect, useRef } from "react";

const useSliderLogic = (slides, selectedIndex, setSelectedIndex, setSelectedMovie) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  const visibleCount = 5;

  const handlePrev = () => {
    if (focusedIndex > 0) {
      setFocusedIndex((prevIndex) => prevIndex - 1);
    } else if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (focusedIndex < visibleCount - 1) {
      setFocusedIndex((prevIndex) => prevIndex + 1);
    } else if (currentIndex < slides.length - visibleCount) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    setVisibleSlides(slides.slice(currentIndex, currentIndex + visibleCount));
  }, [currentIndex, slides, visibleCount]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (selectedIndex === 2) {
      setFocusedIndex(0);
      setIsFocused(true);
    } else if (selectedIndex === 1 || selectedIndex === 0) {
      setFocusedIndex(-1);
      setIsFocused(false);
    }
  }, [selectedIndex]);

  useEffect(() => {
    if (focusedIndex === -1) {
      setFocusedIndex(0);
    }
  }, [focusedIndex]);

  useEffect(() => {
    setSelectedMovie(slides[focusedIndex + currentIndex]);
  }, [currentIndex, focusedIndex]);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleKeyDownSlider = (e) => {
    if (selectedIndex === 2) {
      switch (e.key) {
        case "ArrowUp":
          setSelectedIndex(1);
          setIsFocused(false);
          break;
        case "ArrowLeft":
          handlePrev();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case "Enter":
          if (focusedIndex !== -1) {
            const selectedSlide = slides[currentIndex + focusedIndex];
            if (selectedSlide) {
              window.location.href = `/details2/${selectedSlide.id}`;
            }
          }
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDownSlider);

    return () => {
      document.removeEventListener("keydown", handleKeyDownSlider);
    };
  }, [
    selectedIndex,
    focusedIndex,
    currentIndex,
    slides,
    visibleCount,
    setFocusedIndex,
    handleKeyDownSlider,
  ]);

  return {
    visibleSlides,
    sliderRef,
    focusedIndex,
    isFocused,
    loading,
    handlePrev,
    handleNext,
    handleImageLoad,
    visibleCount,
    currentIndex
  };
};

export default useSliderLogic;
