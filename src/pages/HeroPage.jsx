import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroUpperSection from "../components/HeroUpperSection";

const HeroPage = () => {
  const { id } = useParams();
  const [heroInfo, setHeroInfo] = useState(null);

  useEffect(() => {
    getHeroInfo(id);
  }, [id]);

  const getHeroInfo = async (id) => {
    const { data } = await axios.get("https://dota2-api.vercel.app/heroes");
    let [hero] = data?.filter((hero) => hero.slug === id);
    const info = await axios.get(
      `https://dota2-api.vercel.app/heroes/hero/${hero?.id}`
    );
    setHeroInfo(info?.data);
  };

  return (
    <div
      style={{
        backgroundImage: `url(
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg"
    )`,
      }}
      className="w-full bg-[length:100%_auto] py-0 bg-no-repeat bg-top bg-fixed flex flex-col min-h-screen"
    >
      <HeroUpperSection heroInfo={heroInfo} slug={id} />
    </div>
  );
};

export default HeroPage;
