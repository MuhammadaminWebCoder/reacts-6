import React, { useState } from "react";
import { PATH } from "../hooks/usePath";
import { NavLink, useLocation } from "react-router-dom";
import imageTop from "../assets/image/Ellipse 6.png";

function Sidebar() {
  const [icon, setIcon] = useState(0);
  const location = useLocation();

  const icons = [
    "mx-3 fa-regular fa-house-blank",
    "mx-3 fa-regular fa-house-blank",
    "fa-regular mx-3 fa-bell",
    "fa-regular mx-3 fa-graduation-cap",
    "fa-regular mx-3 fa-building-columns",
    "fa-light mx-3 fa-chart-column",
    "fa-regular mx-3 fa-building-columns",
  ];

  return (
    <div className="w-[270px] h-[100vh] bg-[#152259] text-white">
      <img className="mx-auto mt-5 mb-3 w-[80px]" src={imageTop} alt="top Img" />
      <p className="text-center text-lg mb-8 mt-5">Udemy Inter. school</p>
      <hr className="border-[#BDBDBD]" />
      <ul className="p-5 flex flex-col">
        {Object.entries(PATH).slice(0, 7).map(([key, value], index) => (
          <NavLink
            key={key}
            onClick={() => setIcon(index)}
            className={({ isActive }) =>
              `rounded-md relative text-xl py-3 flex items-center ${
                index === 6 ? "mt-10" : ""
              } ${isActive ? "bg-[#509CDB] text-white" : "text-gray-300"}`
            }
            to={value}
          >
            <i className={icons[index]}></i>
            {key === "Settings" ? "Settings and profile" : key}
            {index === 6 && (
              <span className="bg-[#B9D7F1] h-[22px] w-[50px] flex items-center ms-4 text-black rounded-xl justify-center text-[13px]">
                NEW
              </span>
            )}
            {/* Display chevron icon for the active link */}
            {location.pathname === value && (
              <i className="fa-solid fa-chevron-right right-5 text-sm absolute"></i>
            )}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
