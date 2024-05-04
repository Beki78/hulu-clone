import React, { useState } from "react";
import hulu from "../assets/hulu.png";
import {
  IoSearchSharp,
  IoChevronDownOutline,
  IoChevronUp,
} from "react-icons/io5";

const Header = () => {
  const menu = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Movies",
    },
    {
      id: 3,
      name: "TV",
    },
    {
      id: 4,
      name: "Sports",
    },
    {
      id: 5,
      name: "News",
    },
    {
      id: 6,
      name: "My Stuff",
    },
    {
      id: 7,
      name: "Hubs",
    },
  ];

  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex items-center justify-between p-2 px-10 absolute w-full bg-gradient-to-b from-[#1e2126] to-transparent">
      <img src={hulu} alt="logo" className="w-[65px]" />
      <ul className="hidden md:flex gap-4">
        {menu.map((item) => (
          <li className="text-gray-400 text-[18px]  font-medium cursor-pointer hover:bg-gray-700 hover:text-white px-3 p-1 rounded-md transition-all duration-500 ease-in-out">
            {item.name}
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <h2 onClick={()=>setToggle(!toggle)} className="text-white font-medium flex items-center p-2 bg-gray-700 rounded-md cursor-pointer">
          Home
          {!toggle ? (
            <IoChevronDownOutline className="mt-1 p-[2px]" />
          ) : (
            <IoChevronUp className="mt-1 p-[2px]" />
          )}
        </h2>
        {toggle ? (
          <ul className="absolute bg-gray-700 w-[200px] text-center mt-3 left-0 right-0 ml-auto mr-auto rounded-md px-3">
            {menu.map((item) => (
              <li className="text-gray-400 text-[18px]  font-medium cursor-pointer hover:bg-gray-700 hover:text-white px-3 p-1 rounded-md transition-all duration-500 ease-in-out">
                {item.name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="flex gap-10">
        <IoSearchSharp className="text-[35px] text-gray-300 hover:bg-gray-700 pb-[2px] py-[2px] rounded-md hover:text-white transition-all duration-500 ease-in-out" />
        <h2 className="px-[10px] text-[20px] text-gray-300 border-[2px] border-white rounded-full">
          R
        </h2>
      </div>
    </div>
  );
};

export default Header;
