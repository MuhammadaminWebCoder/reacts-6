import React, { useContext } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Context } from "../../context/Context";
import Modal from '../../components/Modal'
function Teachers() {
  const navigate = useNavigate()
  const {setOpenModal,openModal} = useContext(Context)
  const handleLogout = () => {
    setToken(null);
    navigate("/");
  };

  const Cancel = () => {
    setOpenModal(false);
  };
  return (
    <div className="bg-white h-[100vh] pt-5">
      <div className='w-[1240px] ms-10'>
        <div className='flex items-center justify-end'>
          <i className="fa-light text-xl fa-bell"></i>
          <button onClick={() => setOpenModal(true)} className='py-3 ms-7'>Log out</button>
        </div>
        <Outlet/>
        
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <div className="text-center space-x-4 space-y-2 py-5">
          <p className="-mb-1 text-xl font-semibold">Log out</p>
          <p>Are you sure you want to log out?</p>
          <button
            onClick={Cancel}
            className="bg-slate-400 text-white py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Confirm Logout
          </button>
        </div>
      </Modal>
    </div>
    </div>
  )
}

export default Teachers
