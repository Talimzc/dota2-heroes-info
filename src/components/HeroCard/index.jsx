import React from "react";
import { Link } from "react-router-dom";

const HeroCard = ({ hero }) => {
  return (
    <Link
      to={`/hero/${hero?.slug}`}
      className="w-[225px] h-[127px] bg-center m-3 bg-[length:110%] shadow-[1px_1px_4px_rgba(0,0,0,1)] hover:scale-150 transition duration-500 ease-in-out"
      style={{
        backgroundImage: `url(
        ${hero.image}
      )`,
        cursor: "pointer",
      }}
    >
      <div className="w-full h-[50px] absolute bottom-[-40px] left-0 flex flex-row items-center opacity-0 transition duration-300 ease-in-out hover: bottom-[0px] opacity-100">
        <img
          src={`/assets/images/type_${hero?.primary_attr}.png`}
          className="w-[42px] h-[42px] p-[8px]"
        />
        <div
          className="text-[18px] font-['Reaver-Bold'] text-white uppercase p-[8px] pl-0 tracking-[1px]"
          style={{ textShadow: "0px 0px 4px #000" }}
        >
          {hero?.name_loc}
        </div>
      </div>
    </Link>
  );
};

export default HeroCard;
