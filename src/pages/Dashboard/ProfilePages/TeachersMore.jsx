import React, { useContext } from 'react';
import emptyImg from '../ProfilePages/img/empotyImg.png';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../../context/Context';
import Modal from '../../../components/Modal';
import toast, { Toaster } from 'react-hot-toast';

function TeachersMore() {
  const { allData,setOpenModal,openModal,setToken } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate()
  const teacher = allData.find(item => item.id == id);
  if (!teacher) {
    return <div>Teacher undefined</div>;
  }
  const support = () => {
    toast.success('xato bolsa yozish uchun')
    setTimeout(() => {
      window.location.href = 'https://t.me/muhammadamin308';
    }, 1000);
  }
    const handleLogout = () => {
      setToken(null);
      navigate("/");
    };
  
    const Cancel = () => {
      setOpenModal(false);
    };
  return (
    <div className="bg-white h-[100vh] pt-5">
      <div className="w-[1240px] ms-10">
        <div className="flex items-center justify-end">
          <i className="fa-light text-xl fa-bell"></i>
          <button onClick={() => setOpenModal(true)} className='py-3 ms-7'>Log out</button>
        </div>
        <Toaster position="top-center" reverseOrder={false}/>
        <div className="w-full flex items-center justify-center h-[600px]">
          <div className="flex justify-center w-[78%]">
            <div className="text-center w-[50%]">
              <img
                className="rounded-full mx-auto border w-[280px] h-[280px]"
                src={teacher.image || emptyImg}
                alt="teacher profile"
              />
              <p className="font-semibold text-black text-lg mt-10">{teacher.name}</p>
              <p className="mb-8">{teacher.email}</p>
              <div className="flex justify-center gap-8">
                <i className="fa-regular w-[80px] h-[80px] text-3xl rounded-xl flex items-center justify-center bg-slate-100 fa-graduation-cap"></i>
                <i className="fa-light w-[80px] h-[80px] text-3xl rounded-xl flex items-center justify-center bg-slate-100 fa-phone-volume"></i>
                <i className="fa-light w-[80px] h-[80px] text-3xl rounded-xl flex items-center justify-center bg-slate-100 fa-envelope"></i>
              </div>
            </div>
            <div className='w-[41%]'>
                  <p className='text-black text-lg mb-4 font-semibold'>About</p>
                  <p className='text-slate-400'>{teacher.about || 'not about'}</p>
                  <div className='grid gap-y-8 mt-7 grid-cols-2'>
                    <div><p className='text-black'>Subject</p> <p className='text-slate-400'>{teacher.subject || 'not subject'}</p></div>
                    <div><p className='text-black'>Class</p> <p className='text-slate-400'>{teacher.class || 'not class'}</p></div>
                    <div><p className='text-black'>Age</p> <p className='text-slate-400'>{teacher.age || 'not age'}</p></div>
                    <div><p className='text-black'>Gender</p> <p className='text-slate-400'>{teacher.gender || 'not gender'}</p></div>
                  </div>
                  <button className='absolute shadow-lg shadow-slate-500 text-white rounded-full py-5 px-8 space-x-8 bg-[#152259] bottom-[17%] right-[10%]'><i className="fa-solid me-2 fa-headset"></i>Support <i className='fa-solid fa-chevron-up'></i></button>
                </div>
            <button onClick={support} className='absolute shadow-lg shadow-slate-500 text-white rounded-full py-5 px-8 space-x-8 bg-[#152259] bottom-[17%] right-[10%]'><i className="fa-solid me-2 fa-headset"></i>Support <i className='fa-solid fa-chevron-up'></i></button>

          </div>
        </div>
      </div>
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
  );
}

export default TeachersMore;
