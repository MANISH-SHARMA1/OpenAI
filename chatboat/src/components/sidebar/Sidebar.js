import React from "react";
import { PiSquaresFourLight } from "react-icons/pi";
import { IoAnalyticsOutline, IoSaveOutline } from "react-icons/io5";
import { CiChat1, CiImageOn } from "react-icons/ci";
import { SlMusicToneAlt } from "react-icons/sl";
import { BsBoxArrowRight } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="bg-gray-800  ">
      <div className="text-blue-100 px-2.5 pt-10 text-xl ">
        <PiSquaresFourLight className="my-10 cursor-pointer" />
        <IoAnalyticsOutline className="my-10 cursor-pointer" />
        <CiChat1 className="my-10 cursor-pointer" />
        <CiImageOn className="my-10 cursor-pointer" />
        <SlMusicToneAlt className="my-10 cursor-pointer" />
        <IoSaveOutline className="my-10 cursor-pointer" />
        <BsBoxArrowRight className="mt-10 cursor-pointer" />
      </div>
    </div>
  );
}

export default Sidebar;
