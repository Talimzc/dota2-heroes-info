import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import listHeroes from "../../heroes";
import HeroCard from "../HeroCard";

const ListHeroes = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    getHeroes();
  }, []);

  function compare(a, b) {
    if (a.name_loc < b.name_loc) {
      return -1;
    }
    if (a.name_loc > b.name_loc) {
      return 1;
    }
    return 0;
  }

  const getHeroes = async () => {
    let mapped = listHeroes.map((heroe) => {
      let slug = heroe?.name?.substring(14);
      let obj = {
        ...heroe,
        slug: slug,
        image: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${slug}.png`,
      };
      return obj;
    });

    let ordered = mapped.sort(compare);
    console.log(ordered);
    setHeroes(ordered);
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
