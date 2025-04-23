import { useEffect, useState } from "react";

export function useSlider(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Invalid array provided to useSlider");
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % arr.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [arr.length]);

  return {currentSlide, setCurrentSlide};
}

