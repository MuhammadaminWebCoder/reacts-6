import React, { useContext } from 'react';
import { Context } from '../../context/Context';
import Modal from '../../components/Modal';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Home() {  
  const {setOpenModal,openModal,setToken} = useContext(Context)
  const navigate = useNavigate()
  const handleLogout = () => {
    setToken(null);
    navigate("/");
  };

  const Cancel = () => {
    setOpenModal(false);
  };
  const support = () => {
    toast.success('xato bolsa yozish uchun')
    setTimeout(() => {
      window.location.href = 'https://t.me/muhammadamin308';
    }, 1000);
  }
  return (
  <div className='bg-white h-[100vh]'>
  <header className='bg-[#FCFAFA]'>
      <div className="flex w-[80%] mt-10 items-center justify-between pb-4 mx-auto">
        <div>
        <Toaster position="top-center" reverseOrder={false}/>
          <p className='text-lg'>Learn  how to launch faster</p>
          <p> watch our webinar for tips from our experts and get a limited time offer.</p>
        </div>
        <div>
        <i className="fa-light text-2xl fa-bell"></i>
          <button onClick={() => setOpenModal(true)} className='py-3 ms-10 px-8 rounded-md bg-[#509CDB] text-white'>Log out</button>
        </div>
      </div>
  </header>
  
  <div className="w-[80%] mx-auto">
      <div>
        <p className='text-[32px] mt-[50px]'>Welcome to your dashboard, Udemy school</p>
        <p className='ms-[100px] mt-4 text-[24px]'>Uyo/school/@teachable.com</p>
        <ul className='ms-[100px] space-y-4 py-[80px]'>
          <li className='flex'>
            <i className="fa-solid h-[40px] w-[40px] flex items-center justify-center bg-slate-200 text-[#13296A] rounded-md me-5 fa-user"></i>
            <div className='w-[550px]'>
              <p className='text-2xl'>Add other admins </p>
              <p className='mt-4'>Create rich course content and coaching products for your students.
               When you give them a pricing plan, they’ll appear on your site!</p>
            </div>
          </li>
          <li className='flex'>
            <i className="fa-regular h-[40px] w-[40px] flex items-center justify-center bg-slate-200 text-[#13296A] rounded-md me-5 fa-building-columns"></i>
            <div className='w-[550px]'>
              <p className='text-2xl'>Add classes  </p>
              <p className='mt-4'>Create rich course content and coaching products for your students.
               When you give them a pricing plan, they’ll appear on your site!</p>
            </div>
          </li>
          <li className='flex'>
            <i className="fa-solid h-[40px] w-[40px] flex items-center justify-center bg-slate-200 text-[#13296A] rounded-md me-5 fa-graduation-cap"></i>
            <div className='w-[550px]'>
              <p className='text-2xl'>Add students </p>
              <p className='mt-4'>Create rich course content and coaching products for your students.
               When you give them a pricing plan, they’ll appear on your site!</p>
            </div>
          </li>
        </ul>
      </div>
      <button onClick={support} className='absolute shadow-lg shadow-slate-500 text-white rounded-full py-5 px-8 space-x-8 bg-[#152259] bottom-[17%] right-[10%]'><i className="fa-solid me-2 fa-headset"></i>Support <i className='fa-solid fa-chevron-up'></i></button>
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
  );
}

export default Home;
