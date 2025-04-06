import React from "react";
import { Link } from "react-router-dom";
import BackgroundSlideshow from "./BackgroundSlideshow";

export function Hero() {
  return (
    <div className="relative min-h-[700px] md:h-[600px] pt-10 flex items-center justify-center bg-gray-900 overflow-hidden">
      <BackgroundSlideshow />

      <div className="relative z-10 text-center px-4 pt-20 pb-10 md:pt-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Идеальное пространство для работы и встреч
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Аренда коворкингов в вашем городе — легко, удобно и по доступной цене.
        </p>

        <Link
          to="/all-places"
          className="inline-block bg-[#00000091] border border-solid text-white py-3 px-8 rounded-lg transition-colors hover:bg-gray-800 font-medium text-lg"
        >
          Найти свой коворкинг
        </Link>
      </div>
    </div>
  );
}
