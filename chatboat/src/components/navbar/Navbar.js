import React from "react";
import { IoIosSearch } from "react-icons/io";
import { PiBell } from "react-icons/pi";
import { GiNestedHexagons } from "react-icons/gi";

function Navbar() {
  return (
    <>
      <div className="flex justify-between bg-gray-800 text-blue-100 py-1.5 ">
        <div className="cursor-pointer">
          <GiNestedHexagons className="text-2xl ml-1.5" />
          <p>LOGO</p>
        </div>
        <div className="flex items-center gap-5 border-2 border-blue-100 rounded-full p-1 px-3 text-sm font-semibold bg-gray-950">
          <input
            type="text"
            placeholder="Search anything..."
            className="bg-gray-950  focus:outline-none p-1"
          />
          <IoIosSearch className="text-xl" />
        </div>
        <div className="flex text-xl gap-x-5 items-center">
          <PiBell />
          <img
            src="https://placehold.co/40"
            alt="img"
            className="rounded-full"
          />
          <select className="bg-gray-800 focus:outline-none"></select>
        </div>
      </div>
    </>
  );
}

export default Navbar;
