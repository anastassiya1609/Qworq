import React, { useState, useEffect } from 'react';
import Bg1 from "../../../assets/img/bg-hero-1.webp";
import Bg2 from "../../../assets/img/bg-hero-2.webp";
import Bg3 from "../../../assets/img/bg-hero-3.webp";

const SLIDES = [
  {
    url: Bg1,
    alt: 'Коворкинг-1'
  },
  {
    url: Bg2,
    alt: 'Коворкинг-2'
  },
  {
    url: Bg3,
    alt: 'Коворкинг-3'
  },
];

export default function BackgroundSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 bg-cover bg-center transition-opacity duration-1000 min-h-full
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            backgroundImage: `url(${slide.url})`,
          }}
          aria-hidden={index !== currentSlide}
        />
      ))}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}