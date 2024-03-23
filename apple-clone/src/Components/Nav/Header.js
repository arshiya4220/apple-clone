import React from "react";
import Navigation from "./Nav";
import { TiTick } from "react-icons/ti";
import { FaAngleDown } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
function Header() {
  return (
    <div className="z-50 fixed">
      <div className='flex  w-screen relative flex-wrap justify-center bg-[hsla(240,3%,12%,1)] py-3 xl:py-4 px-5 sm:px-[8%] md:px-[10%] xl:px-[17%] md:justify-end text-white'>
        <div className="xl:text-[13px] flex text-[12px] md:flex-1 xl:pb-0 py-[2px] xl:pt-1">
          <p>Choose another country or region to see content specific to your location and shop online.</p> <span className=" md:hidden text-[24px] right-1  ">
          <IoCloseOutline />
        </span>
        </div>
        <div className="flex md:flex-1 flex-shrink flex-grow justify-end">
        <div className="flex flex-grow md:ml-[29px] relative px-2 rounded-md md:pt-[3px] pt-[2px] xl:py-1 bg-[rgba(209,191,191,0.23)]">
          <span className="w-[20px] text-xl pt-1 pr-7"><TiTick /></span>
          <div class=" xl:text-[17px] md:text-[16px]  text-[15px]"
          >India</div>
          <span className="pt-[6px] absolute right-1"><FaAngleDown /></span>
        </div>
        <div className="bg-[white] ml-[13px] mr-[14px] xl:px-[15px] md:px-[10px] md:pt-[3px] px-[5px] pt-[2px] xl:pt-[4px] rounded-md xl:text-base md:text-[13px]  text-[12px]  text-black">
          Continue
        </div>
        <span className="xl:text-3xl md:text-[30px] md:block hidden text-[24px] right-1  ">
          <IoCloseOutline />
        </span>
        </div>
      </div>
      <div><Navigation/></div>
    </div>
  );
}
export default Header;