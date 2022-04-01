import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import HeroCard from "../HeroCard";

// const { API_URL } = process.env;

const ListHeroes = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    getHeroes();
  }, []);

  const getHeroes = async () => {
    const { data } = await axios.get("https://dota2-api.vercel.app/heroes");
    setHeroes(data);
  };

  return (
    <div className="flex flex-wrap mx-auto max-w-[1245px] mt-10 relative">
      {heroes.map((hero, idx) => (
        <HeroCard hero={hero} key={idx} />
      ))}
    </div>
  );
};

export default ListHeroes;
