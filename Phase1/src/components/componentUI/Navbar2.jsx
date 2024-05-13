import { useState, useEffect, KeyboardEvent } from "react";
import {
  RiHome2Fill,
  RiHome2Line,
  RiSearchLine,
  RiMovie2Line,
  RiUser6Line,
  RiSlideshow4Fill,
  RiSlideshow4Line,
  RiSearchFill,
  RiUser6Fill,
  RiMovie2Fill,
} from "react-icons/ri";

const Navbar2 = ({ selectedIndex, setSelectedIndex }) => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const visibleItemsLength = 5;

  useEffect(() => {
    if (selectedIndex === 0) {
      setFocusedIndex(0);
    } else if (selectedIndex === 2 || selectedIndex === 1) {
      setFocusedIndex(-1);
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDownNavbar = (event) => {
      if (selectedIndex === 0) {
        if (event.key === "ArrowDown") {
          setSelectedIndex(1);
        } else if (event.key === "ArrowRight") {
          setFocusedIndex((prevIndex) => (prevIndex + 1) % visibleItemsLength);
        } else if (event.key === "ArrowLeft") {
          setFocusedIndex(
            (prevIndex) =>
              (prevIndex - 1 + visibleItemsLength) % visibleItemsLength
          );
        }
      }
    };
    document.addEventListener("keydown", handleKeyDownNavbar);

    return () => {
      document.removeEventListener("keydown", handleKeyDownNavbar);
    };
  }, [selectedIndex]);

  const style = { color: "white", fontSize: "1.5em" };

  return (
    <div className="bg-black absolute z-[1000] top-8 left-28 flex items-center px-8 py-4 rounded-3xl">
      <div className="flex flex-row items-center space-x-8">
        <a href="#">
          {focusedIndex === 0 ? (
            <RiUser6Fill style={style} />
          ) : (
            <RiUser6Line style={style} />
          )}
        </a>
        <a href="#">
          {focusedIndex === 1 ? (
            <RiSearchFill style={style} />
          ) : (
            <RiSearchLine style={style} />
          )}
        </a>
        <a href="#">
          {focusedIndex === 2 ? (
            <RiHome2Fill style={style} />
          ) : (
            <RiHome2Line style={style} />
          )}
        </a>
        <a href="#">
          {focusedIndex === 3 ? (
            <RiMovie2Fill style={style} />
          ) : (
            <RiMovie2Line style={style} />
          )}
        </a>
        <a href="#">
          {focusedIndex === 4 ? (
            <RiSlideshow4Fill style={style} />
          ) : (
            <RiSlideshow4Line style={style} />
          )}
        </a>
      </div>
    </div>
  );
};

export default Navbar2;
