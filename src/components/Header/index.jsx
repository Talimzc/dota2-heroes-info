import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="absolute top-0 z-50 bg-transparent h-20 px-8 py-0 w-full">
      <div className="flex flex-row items-center w-full h-full">
        <Link to="/">
          <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png"
            className="bg-contain opacity-80 hover:opacity-100"
            style={{ width: "200px", height: "40px" }}
            alt="Logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
