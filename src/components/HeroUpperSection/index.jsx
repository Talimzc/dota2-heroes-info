import React from "react";
import HeroSummary from "../HeroSummary";
import HeroVideo from "../HeroVideo";

const HeroUpperSection = ({ heroInfo, slug }) => {
  return (
    <div className="w-full h-[80vh] min-h-[700px] p-[40px_100px_0px_100px]">
      <HeroSummary heroInfo={heroInfo} />
      <HeroVideo slug={slug} />
    </div>
  );
};

export default HeroUpperSection;
