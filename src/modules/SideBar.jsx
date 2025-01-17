import React from 'react';
import { PATH } from '../hooks/usePath';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const icons = [
    'fa-regular ms-5 me-2 fa-house',
    'fa-regular ms-5 me-2 fa-bell',
    'fa-regular ms-5 me-2 fa-envelope',
    'fa-regular ms-5 me-2 fa-user',
    'fa-regular ms-5 me-2 fa-hashtag',
    'fa-regular ms-5 me-2 fa-gear',
  ];

  return (
    <div className="w-[268px] pt-4">
      <i className="fa-brands text-blue-500 ms-5 text-4xl fa-twitter"></i>
      <ul className="pb-5 pt-7 flex flex-col">
        {Object.entries(PATH).slice(0,8).map(([key, value], index) => (
            <NavLink key={key} className="font-semibold text-slate-700 text-xl py-2 flex items-center" to={value}><i className={icons[index]}></i> {key}</NavLink>
          ))}
      </ul>

      <button className="w-[85%] bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 px-8 text-lg font-semibold transition-colors" aria-label="Tweet Button">Tweet </button>
    </div>
  );
}

export default Sidebar;
