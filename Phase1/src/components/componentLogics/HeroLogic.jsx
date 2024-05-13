import { useEffect, useState } from "react";

const useHeroLogic = ({ selectedIndex, setSelectedIndex }) => {
  const [index, setIndex] = useState(-1);
  const [loading, setLoading] = useState(true);

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prevIndex) => (prevIndex - 1) % 2);
    }
  };

  const handleNext = () => {
    if (index < 1) {
      setIndex((prevIndex) => (prevIndex + 1) % 2);
    }
  };

  useEffect(() => {
    if (selectedIndex === 1) {
      setIndex(0);
    } else if (selectedIndex === 2 || selectedIndex === 0) {
      setIndex(-1);
    }
  }, [selectedIndex]);

  const handleKeyDown = (e) => {
    if (selectedIndex === 1) {
      switch (e.key) {
        case "ArrowUp":
          setSelectedIndex(0);
          break;
        case "ArrowDown":
          setSelectedIndex(2);
          break;
        case "ArrowLeft":
          handlePrev();
          break;
        case "ArrowRight":
          handleNext();
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, handleKeyDown]);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return {
    index,
    loading,
    handlePrev,
    handleNext,
    handleImageLoad,
  };
};

export default useHeroLogic;
