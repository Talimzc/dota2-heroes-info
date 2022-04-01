import React from "react";

const primaryAttr = ["FUERZA", "AGILIDAD", "INTELIGENCIA"];
const attackCap = ["", "CUERPO A CUERPO", "A DISTANCIA"];

const HeroSummary = ({ heroInfo }) => {
  return (
    <div className="w-[40%] mt-[100px] ml-[30px] flex flex-col">
      <div className="flex flex-row items-center">
        <img
          src={`/assets/images/type_${heroInfo?.primary_attr}.png`}
          className="w-[32px] h-[32px]"
          alt="gg"
        />
        <div className="ml-[6px] text-white uppercase text-2xl tracking-[2px] font-thin">
          {primaryAttr[heroInfo?.primary_attr]}
        </div>
      </div>
      <div className="text-[60px] leading-[62px] mt-[12px] font-['Reaver-Bold'] uppercase tracking-[2px] text-white">
        {heroInfo?.name_loc}
      </div>
      <div className="text-[18px] uppercase tracking-[2px] text-[#a5e0f3] mt-[5px] font-['Radiance-semibold']">
        {heroInfo?.npe_desc_loc}
      </div>
      <div className="w-full h-full flex flex-col">
        <div className="w-100 mt-[14px] text-[#eee] font-thin text-[24px] tracking-[0px] max-h-[220px] overflow-y-auto">
          {heroInfo?.bio_loc}
        </div>
        <div>
          <div className="mt-[30px] text-[#959595] uppercase font-['Radiance-semibold'] tracking-[2px] text-[17px]">
            TIPO DE ATAQUE
          </div>
          <div className="flex flex-row items-center mt-[8px]">
            <img
              src={`/assets/images/attack_capability_${heroInfo?.attack_capability}.svg`}
              className="w-[24px] h-[24px] mr-[8px]"
              alt={"a"}
            />
            <div className="text-white uppercase tracking-[2px] text-[15px] font-['Radiance-semibold']">
              {attackCap[heroInfo?.attack_capability]}
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[30px] text-[#959595] uppercase font-['Radiance-semibold'] tracking-[2px] text-[17px]">
            COMPLEJIDAD
          </div>
          <div className="flex flex-row w-[80px] mt-[8px] ml-[4px] justify-between">
            {[0, 1, 2].map((_, idx) => (
              <div
                className={`w-[15px] h-[15px] border-solid border-2 border-white rotate-45 ${
                  heroInfo?.complexity > idx ? `bg-white` : ""
                }`}
                key={idx}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSummary;
