import React from "react";

const HeroPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg"
    )`,
      }}
      className="w-full bg-[length:100%_auto] px-[100px] py-0 bg-no-repeat bg-top bg-fixed flex flex-col min-h-screen"
    ></div>
  );
};

export default HeroPage;
