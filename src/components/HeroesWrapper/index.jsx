import React from "react";

const HeroesWrapper = () => {
  return (
    <div className="w-full relative z-[2] mt-[50px]">
      <div className="text-white text-6xl text-center font-['Reaver-Bold'] uppercase font-bold tracking-[3px] mt-[80px] mb-[10px]">
        Elige Tu Heroe
      </div>
      <div className="w-full text-center text-[26px] mx-auto max-w-[1000px] text-[#ddd]">
        Estrategas de la magia, feroces bestias, astutos pícaros... El conjunto
        de héroes de Dota 2 es enorme y de una diversidad ilimitada. Lanza
        increíbles hechizos y devastadoras habilidades definitivas en tu camino
        hacia la victoria.
      </div>
    </div>
  );
};

export default HeroesWrapper;
