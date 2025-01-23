import React, { useContext, useState } from 'react';
import { PATH } from '../hooks/usePath';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../context/Context';
import Modal from '../components/Modal';

function Sidebar() {
  const [icon, setIcon] = useState(0);
  const {setOpenModal,openModal} = useContext(Context);
  const [setModalType] = useState(null);
  const { user, setToken, } = useContext(Context);
  const [downopen, setDownopen] = useState(false);
  const navigate = useNavigate();
  const UserDef = user.image
  const icons = [
    'fa-regular ms-5 me-3 fa-house-window',
    'fa-regular ms-5 me-3 fa-hashtag',
    'fa-regular ms-5 me-3 fa-bell',
    'fa-regular ms-5 me-3 fa-envelope',
    'fa-regular ms-5 me-3 fa-bookmark',
    'fa-light ms-5 me-3 fa-square-list',
    'fa-regular ms-5 me-3 fa-user',
    'fa-regular ms-5 me-3 fa-circle-ellipsis',
  ];
  const iconsClick = [
    'fa-solid ms-5 me-3 fa-house-window',
    'fa-solid ms-5 me-3 fa-hashtag',
    'fa-solid ms-5 me-3 fa-bell',
    'fa-solid ms-5 me-3 fa-envelope',
    'fa-solid ms-5 me-3 fa-bookmark',
    'fa-solid ms-5 me-3 fa-square-list',
    'fa-solid ms-5 me-3 fa-user',
    'fa-regular ms-5 me-3 fa-circle-ellipsis',
  ];

  const clickedPath = (ind) => {
    setIcon(ind);
  };


  const handleDelete = () => {
    setOpenModal(true);
  };

  const handleLogout = () => {
    setToken(null);
    navigate('/');
  };

  const Cancel = () => {
    setOpenModal(false);
  };


  return (
    <div className="w-[260px] pt-4">
      <Link to="/" className="fa-brands text-blue-500 ms-5 text-4xl fa-twitter"></Link>
      <ul className="pb-5 pt-7 flex flex-col">
        {Object.entries(PATH).slice(0, 8).map(([key, value], index) => (
          <NavLink
            key={key}
            onClick={() => clickedPath(index)}
            className="font-semibold text-slate-700 text-xl py-2 flex items-center"
            to={value}
          >
            <i className={icon === index ? iconsClick[index] : icons[index]}></i> {key}
          </NavLink>
        ))}
      </ul>
      <button
        className="w-[85%] bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 px-8 text-lg font-semibold transition-colors"
        aria-label="Tweet Button"
      >
        Tweet
      </button>
      <div
        onClick={() => setDownopen(!downopen)}
        className="flex relative items-center mt-10 gap-2"
      >
        <div
          className={`absolute -top-[120px] z-10 w-full p-2 space-y-2 bg-slate-200 top-0 ${
            downopen ? 'block' : 'hidden'
          }`}
        >
          <p
            onClick={handleDelete}
            className="w-full bg-red-500 text-white h-[40px] flex items-center justify-center ps-3 cursor-pointer"
          >
            Log out <i className="fa-regular ms-4 fa-right-from-bracket"></i>
          </p>
        </div>
        <img width={50} src={user.image || UserDef} alt="def user" />
        <div>
          <strong className="text-lg">{user.name}</strong>
          <p className="text-[17px]">@bobur_mavlonov</p>
        </div>
        <i className="absolute right-6 translate-x-2/4 text-2xl fa-regular fa-ellipsis"></i>
      </div>

        <Modal openModal={openModal} setOpenModal={setOpenModal}>
            <div className="text-center space-x-4 space-y-2 py-5">
              <p className="-mb-1 text-xl font-semibold">Delete</p>
              <p>Are you sure you want to log out?</p>
              <button onClick={Cancel} className="bg-slate-400 text-white py-2 px-4 rounded">
                Cancel
              </button>
              <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
                Confirm Logout
              </button>
            </div></Modal>
    </div>
  );
}

export default Sidebar;
