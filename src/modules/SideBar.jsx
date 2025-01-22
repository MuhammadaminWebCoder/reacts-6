import React, { useContext, useState } from 'react';
import { PATH } from '../hooks/usePath';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../context/Context';
import Modal from '../components/Modal';
import Input from '../components/Input';

function Sidebar() {
  const [icon, setIcon] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const {urlImg, setUrlImg} = useContext(Context);
  const [modalType, setModalType] = useState(null);
  const { user, setToken, formData, setFormData } = useContext(Context);
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

  const handleEdit = () => {
    setModalType('edit');
    setOpenModal(true);
  };

  const handleDelete = () => {
    setModalType('delete');
    setOpenModal(true);
  };

  const handleLogout = () => {
    setToken(null);
    navigate('/');
  };

  const Cancel = () => {
    setOpenModal(false);
  };

  const fileChooce = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUrlImg(url);
    }
  };

  const handleProfileChange = (e) => {
    e.preventDefault();
    const newName = e.target.nameEdit.value;
    const updatedFormData = formData.map((userData) =>
      userData.id === user.id ? { ...userData, image: urlImg, name: newName } : userData
    );
    setFormData(updatedFormData);
    setOpenModal(false);
    // localStorage.setItem('user',JSON.stringify(updatedFormData))
  };
  // image va name change boldi consoleda localStorage dayam bolshi kere
  return (
    <div className="w-[300px] pt-4">
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
            onClick={handleEdit}
            className="w-full text-white bg-yellow-400 h-[40px] flex items-center justify-center ps-3 cursor-pointer"
          >
            Edit <i className="fa-regular ms-4 fa-pen-to-square"></i>
          </p>
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

      {openModal && (
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          {modalType === 'edit' ? (
            <form
              onSubmit={handleProfileChange}
              className="text-center space-x-2 space-y-2 py-5"
            >
              <p className="text-xl -mb-5 mt-3 font-semibold">Edit</p>
              <label>
                <input
                  type="file"
                  name="file"
                  onChange={fileChooce}
                  className="hidden"
                />
                <img
                  src={urlImg || UserDef}
                  width={120}
                  height={120}
                  className="object-contain !mx-auto !my-4"
                  alt="chooce image"
                />
              </label>
              <Input
                name="nameEdit"
                type="text"
                extraClass="!w-[50%] block !py-2 !mx-auto border"
                placeholder="Edit your name ..."
              />
              <button type="submit" className="bg-yellow-400 text-white py-2 px-4 rounded">
                Save
              </button>
              <button onClick={Cancel} className="bg-slate-400 text-white py-2 px-4 rounded">
                Cancel
              </button>
            </form>
          ) : (
            <div className="text-center space-x-4 space-y-2 py-5">
              <p className="-mb-1 text-xl font-semibold">Delete</p>
              <p>Are you sure you want to log out?</p>
              <button onClick={Cancel} className="bg-slate-400 text-white py-2 px-4 rounded">
                Cancel
              </button>
              <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
                Confirm Logout
              </button>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}

export default Sidebar;
