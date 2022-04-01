import React from "react";

const HeroVideo = ({ slug }) => {
  return (
    <div className="absolute w-[80%] h-full top-0 right-[-5%] flex justify-center">
      <video autoPlay preload="auto" loop playsInline className="w-[100%]">
        <source
          type="video/webm"
          src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${slug}.webm`}
        />
      </video>
    </div>
  );
};

export default HeroVideo;
