import React, { useEffect } from "react";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { IoReorderTwoOutline } from "react-icons/io5";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../../Home";
function Navigation() {
  const[isHover , setIsHover] = useState(-1);
  const numbers = [{ id: 1, name: <FaApple /> },
  { id: 2, name: 'Store' },
  { id: 3, name: 'Mac' },
  { id: 4, name: 'iPad' },
  { id: 5, name: 'iPhone' },
  { id: 6, name: 'Watch' },
  { id: 7, name: 'Vision' },
  { id: 8, name: 'AirPods' },
  { id: 9, name: 'TV & Home' },
  { id: 10, name: 'Entertainment' },
  { id: 11, name: 'Accessories' },
  { id: 12, name: 'Support' },
  { id: 13, name: <IoIosSearch /> },
  { id: 14, name: <AiOutlineShopping /> }
  ];
  // const listItems = numbers.map((number,i) => <ul key={i}>{number.name}</ul>);
  const handleMouseOver = (i) => {
    setIsHover(i);
  }
  const handleMouseOut = () => {
    setIsHover(-1);
    
  }

// const [isNavFixed,setIsNavFixed] = useState(false);
// useEffect(() =>{
//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     setIsNavFixed(scrollPosition>58)
//   };
//   window.addEventListener('scroll',handleScroll);
//   return() => {
//     window.addEventListener('scroll',handleScroll);
//   };
// },[]);

  return (
    <div>
      <nav className= ' z-50' >
        <ul className="relative md:block bg-[rgba(209,191,191,0.23)] md:bg-none flex justify-between z-50">
       
          <li className='hidden sm:flex bg-[#131313ea] text-white justify-around w-screen px-1 sm:px-[8%] md:px-[10%]   xl:px-[17%] md:text-[13px] text-[12px] font-[400] font-sans'>   
            {numbers.map((number,i) => (
             <ul key={i} onMouseEnter={() => handleMouseOver(i)}  className="cursor-pointer py-[14px]">
              {number.name}
           </ul>
              ))}
          </li>
          {/* small nav */}
          <li className="md:hidden px-4 text-xl text-white flex ">
          {numbers.filter((shop) => shop.id === 1  ).map((number,i) => (
             <ul key={i} onMouseEnter={() => handleMouseOver(i)}  className="cursor-pointer py-[14px]">
              {number.name}
           </ul>
              ))}
          </li>
          <li className="md:hidden text-white justify-end flex">   {numbers.filter((shop) =>  shop.id === 13 | shop.id === 14 ).map((number,i) => (
             <ul key={i} onMouseEnter={() => handleMouseOver(i)}  className="cursor-pointer text-xl px-4 py-[14px]">
              {number.name}
           </ul>
              ))}<li className="px-4 text-xl py-[14px] text-white"><IoReorderTwoOutline/> </li></li>
        {isHover === 1 && (
      <div onMouseLeave={handleMouseOut} className="nav-store bg-[#131313ea] absolute w-screen text-white space-x-[88px] flex pt-10 pb-[84px] px-[20%] ">
      <ul className="text-[24px] font-[600] leadng-[28px]">
          <a href="###" className="text-[12px] font-[400] leading-[16px]">shop</a>
          <li>Shop the Lateset</li>
          <li>
          {numbers.filter((shop) => shop.id === 3 | shop.id === 4 | shop.id === 5 | shop.id === 11).map((shop) => <li>{shop.name}</li>)}
          </li>
          <li>Applewatch</li>
        </ul>
        <ul  className="text-[12px] px-[11px] py-[7px] font-[600] leading-[28px]">
          <a href="###" className="text-[12px] font-[400] leading-[16px]">Quick Links</a>
          <li>Find a store</li>
          <li>Order Status</li>
          <li>Apple Trade In</li>
          <li>Financing</li>
        </ul>
        <ul  className="text-[12px] px-[11px] py-[7px] font-[600] leading-[28px]">
          <a href="###"  className="text-[12px] font-[400] leading-[16px]">Shop Special Stores</a>
          <li>Certified Refurbrished</li>
          <li>Education</li>
          <li>Business</li>
          <li>Veterans and military</li>
          <li>Government</li>
        </ul>
      </div>
      )}
       {isHover === 2 && (
      <div onMouseLeave={handleMouseOut} className="nav-store bg-[#131313ea] absolute w-screen text-white space-x-[88px] flex pt-10 pb-[84px] px-[20%] ">
      <ul className="text-[24px] font-[600] leadng-[28px]">
          <a href="###" className="text-[12px] font-[400] leading-[16px]">Explore Mac</a>
          <li>Explore all MAC</li>
          <li>MacBook Air</li>
          <li>MacBook Pro</li>
          <li>iMac</li>
          <li>Mac mini</li>
          <li>Mac studio</li>
          <li>Mac Pro</li>
          <li>Displays</li>
        </ul>
        <ul  className="text-[12px] px-[11px] py-[7px] font-[600] leading-[28px]">
          <a href="###" className="text-[12px] font-[400] leading-[16px]">Shop Mac</a>
          <li>Shop MAC</li>
          <li>Mac Accessories</li>
          <li>Apple Trade In</li>
          <li>Financing</li>
        </ul>
        <ul  className="text-[12px] px-[11px] py-[7px] font-[600] leading-[28px]">
          <a href="###"  className="text-[12px] font-[400] leading-[16px]">More from MAC</a>
          <li>Mac Support</li>
          <li>Applecare+ for Mac</li>
          <li>Apps by Apple</li>
          <li>Continiuity</li>
          <li>iCloud+</li>
          <li>Mac for Business</li>
          <li>Education</li>
        </ul>
      </div>
      )}
        {isHover === 3 && (
      <div onMouseLeave={handleMouseOut} className="nav-store bg-[#131313ea] absolute w-screen text-white space-x-[88px] flex pt-10 pb-[84px] px-[20%] ">
      <ul className="text-[24px] font-[600] leadng-[28px]">
          <a href="###" className="text-[12px] font-[400] leading-[16px]">Explore iPad</a>
          <li>Explore all iPad</li>
          <li>iPad Air</li>
          <li>iPad Pro</li>
          <li>iPad</li>
          <li>iPad mini</li>
          <li>apple pencil</li>
          <li>Keyboards</li>
        </ul>
        <ul  className="text-[12px] px-[11px] py-[7px] font-[600] leading-[28px]">
          <a href="###" className="text-[12px] font-[400] leading-[16px]">iPad</a>
          <li>Shop iPad</li>
          <li>iPad Accessories</li>
          <li>Apple Trade In</li>
          <li>Financing</li>
        </ul>
        <ul  className="text-[12px] px-[11px] py-[7px] font-[600] leading-[28px]">
          <a href="###"  className="text-[12px] font-[400] leading-[16px]">More from MAC</a>
          <li>iPad Support</li>
          <li>Applecare+ for Mac</li>
          <li>iPadOS17</li>
          <li>Apps by Apple</li>
          <li>Continiuity</li>
          <li>iCloud+</li>
          <li>Education</li>
        </ul>
      </div>
      )}
      {isHover === 4 && (
      <div onMouseLeave={handleMouseOut} className="nav-store bg-[#131313ea] absolute w-screen text-white space-x-[88px] flex pt-10 pb-[84px] px-[20%] ">
      <ul className="text-[24px] font-[600] leadng-[28px]">
          <a href="###" className="text-[12px] font-[400] leading-[16px]">Explore iPhone</a>
          <li>Explore all iPhone</li>
          <li>iphone 15 Pro</li>
          <li>iPhone 15</li>
          <li>iPhone 14</li>
          <li>iPhone 13</li>
          <li>iPhone SE</li>
        </ul>
        <ul  className="text-[12px] px-[11px] py-[7px] font-[600] leading-[28px]">
          <a href="###" className="text-[12px] font-[400] leading-[16px]">iPad</a>
          <li>Shop iPhone</li>
          <li>iPhone Accessories</li>
          <li>Apple Trade In</li>
          <li>Carrier Deals at Apple</li>
          <li>Financing</li>
        </ul>
        <ul  className="text-[12px] px-[11px] py-[7px] font-[600] leading-[28px]">
          <a href="###"  className="text-[12px] font-[400] leading-[16px]">More from MAC</a>
          <li>iPhone Support</li>
          <li>Applecare+ for Mac</li>
          <li>iOS17</li>
          <li>Apps by Apple</li>
          <li>Continiuity</li>
          <li>iCloud+</li>
          <li>Education</li>
        </ul>
      </div>
      )}
       {isHover === 5 && (
      <div onMouseLeave={handleMouseOut} className="nav-store bg-[#131313ea] absolute w-screen text-white space-x-[88px] flex pt-10 pb-[84px] px-[20%] ">
      <ul className="text-[24px] font-[600] leadng-[28px]">
          <a href="###" className="text-[12px] font-[400] leading-[16px]">Explore iPhone</a>
          <li>Explore all Apple Watch</li>
          <li>Apple Watch Series 9</li>
          <li>Apple Watch Ultra 2</li>
          <li>Apple Watch SE</li>
          <li>Apple Watch Nike</li>
          <li>Apple Watch Hemes</li>
        </ul>
        <ul  className="text-[12px] px-[11px] py-[7px] font-[600] leading-[28px]">
          <a href="###" className="text-[12px] font-[400] leading-[16px]">shop Watch</a>
          <li>Shop Apple Watch</li>
          <li>Apple Watch Studio</li>
          <li>Apple Watch Brands</li>
          <li>Apple Watch Accessories</li>
          <li>Apple Trade In</li>
          <li>Financing</li>
        </ul>
        <ul  className="text-[12px] px-[11px] py-[7px] font-[600] leading-[28px]">
          <a href="###"  className="text-[12px] font-[400] leading-[16px]">More from Apple Watch</a>
          <li>Apple Watch Support</li>
          <li>Applecare+ for Apple Watch</li>
          <li>watchOS17</li>
          <li>Apps by Apple</li>
          <li>Apple For Apple</li>
        </ul>
      </div>
      )}
       {isHover === 7 && (
      <div onMouseLeave={handleMouseOut} className="nav-store bg-[#131313ea] absolute w-screen text-white space-x-[88px] flex pt-10 pb-[84px] px-[20%] ">
      <ul className="text-[24px] font-[600] leadng-[28px]">
          <a href="###" className="text-[12px] font-[400] leading-[16px]">Explore AirPods</a>
          <li>Explore all AirPods</li>
          <li>AirPods Pro 2nd generation</li>
          <li>AirPods 2nd generation</li>
          <li>AirPods 3rd generation</li>
          <li>AirPods MAx</li>
        </ul>
        <ul  className="text-[12px] px-[11px] py-[7px] font-[600] leading-[28px]">
          <a href="###" className="text-[12px] font-[400] leading-[16px]">shop AirPods</a>
          <li>Shop AirPods</li>
          <li>AirPods Accessories</li>
        </ul>
        <ul  className="text-[12px] px-[11px] py-[7px] font-[600] leading-[28px]">
          <a href="###"  className="text-[12px] font-[400] leading-[16px]">More from AirPods</a>
          <li>AirPods Support</li>
          <li>Apps by Apple</li>
          <li>Apple For Apple</li>
        </ul>
      </div>
      )}
        {isHover === 8 && (
      <div onMouseLeave={handleMouseOut} className="nav-store bg-[#131313ea] absolute w-screen text-white space-x-[88px] flex pt-10 pb-[84px] px-[20%] ">
      <ul className="text-[24px] font-[600] leadng-[28px]">
          <a href="###" className="text-[12px] font-[400] leading-[16px]">Explore TV & Home</a>
          <li>Explore TV & Home</li>
          <li>Apple Tv 4k</li>
          <li>HomePod</li>
          <li>HomePod mini</li>
        </ul>
        <ul  className="text-[12px] px-[11px] py-[7px] font-[600] leading-[28px]">
          <a href="###" className="text-[12px] font-[400] leading-[16px]">shop TV & Home</a>
          <li>Shop Apple TV & Home</li>
          <li>shop HomePod</li>
          <li>shop HomePod mini</li>
          <li>Shop Siri Remote</li>
          <li>Apple TV & Home Accessories</li>
        </ul>
        <ul  className="text-[12px] px-[11px] py-[7px] font-[600] leading-[28px]">
          <a href="###"  className="text-[12px] font-[400] leading-[16px]">More from Apple TV & Home</a>
          <li>Apple TV Support</li>
          <li>HomePod Support</li>
          <li>Applecare+</li>
          <li>Apple Tv App</li>
          <li>Apple TV+</li>
          <li>Home App</li>
          <li>Apple Music</li>
          <li>Siri</li>
          <li>AirPlay</li>
        </ul>
      </div>
      )}
        {isHover === 9 && (
      <div onMouseLeave={handleMouseOut} className="nav-store bg-[#131313ea] absolute w-screen text-white space-x-[88px] flex pt-10 pb-[84px] px-[20%] ">
      <ul className="text-[24px] font-[600] leadng-[28px]">
          <a href="###" className="text-[12px] font-[400] leading-[16px]">Explore Entertainment</a>
          <li>Explore Entertainment</li>
          <li>Apple one</li>
          <li>Apple  Tv+</li>
          <li>Apple Music</li>
          <li>Apple Arcade</li>
          <li>Apple Fitness+</li>
          <li>Apple News+</li>
          <li>Apple Podcasts</li>
          <li>Apple Books</li>
          <li>Apple store</li>
        </ul>
        <ul  className="text-[12px] px-[11px] py-[7px] font-[600] leading-[28px]">
          <a href="###"  className="text-[12px] font-[400] leading-[16px]">Support</a>
          <li>Apple Tv+ Support</li>
          <li>Apple Music Support</li>
        </ul>
      </div>
      )}
        {isHover === 10 && (
      <div onMouseLeave={handleMouseOut} className="nav-store bg-[#131313ea] absolute w-screen text-white space-x-[88px] flex pt-10 pb-[84px] px-[20%] ">
      <ul className="text-[24px] font-[600] leadng-[28px]">
          <a href="###" className="text-[12px] font-[400] leading-[16px]">Explore AirPods</a>
          <li>Shop All Accessories</li>
          <li>iPhone</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>Tv</li>
        </ul>
        <ul  className="text-[12px] px-[11px] py-[7px] font-[600] leading-[28px]">
          <a href="###"  className="text-[12px] font-[400] leading-[16px]">Explore Accessories</a>
          <li>Made by Apple</li>
          <li>Beats by Dr.Dre</li>
          <li>AirTag</li>
        </ul>
      </div>
      )}
        {isHover === 11 && (
      <div onMouseLeave={handleMouseOut} className="nav-store bg-[#131313ea] absolute w-screen text-white space-x-[88px] flex pt-10 pb-[84px] px-[20%] ">
      <ul className="text-[24px] font-[600] leadng-[28px]">
          <a href="###" className="text-[12px] font-[400] leading-[16px]">Explore Support</a>
          <li>iPhone</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>Music</li>
          <li>Tv</li>
        </ul>
        <ul  className="text-[12px] px-[11px] py-[7px] font-[600] leading-[28px]">
          <a href="###" className="text-[12px] font-[400] leading-[16px]">Get Help</a>
          <li>Check Community</li>
          <li>Coverage</li>
          <li>Repair</li>
          <li>Contact us</li>
        </ul>
        <ul  className="text-[12px] px-[11px] py-[7px] font-[600] leading-[28px]">
          <a href="###"  className="text-[12px] font-[400] leading-[16px]">Helpful Topics</a>
          <li>Get Applecare+</li>
          <li>Apple Id and Password</li>
          <li>Billing and subscription</li>
          <li>Find my</li>
          <li>Accessibility</li>
        </ul>
      </div>
      )}
       </ul>
      </nav>
    </div>

  );
}
export default Navigation;