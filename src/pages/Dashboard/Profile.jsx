import React, { useContext } from 'react';
import { Context } from '../../context/Context';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import { PATH } from '../../hooks/usePath';

function Profile() {
  const {setFormData,setUrlImg,urlImg, user, state,setOpenModal,openModal } = useContext(Context);
  const userName = user.name;
  const stateLength = state.length;
  const UserDef = user.image

  
  const Cancel = () => {
    setOpenModal(false);
  };
  const handleEdite = () => {
    setOpenModal(true);
  };

  const fileChooce = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUrlImg(url);
    }
  };
  const navigate = useNavigate();
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
  // setState(updatedState);
  // localStorage.setItem('addChat', JSON.stringify(updatedState));
  return (
    <>
      <header>
        <div className='flex items-center p-3'>
        <button onClick={() => navigate(-2)} className="me-6 ms-3 text-xl">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
          <div>
            <strong>{userName}</strong>
            <p className='text-slate-400'>{stateLength} Tweets  </p>
          </div>
        </div>
      </header>
      <div>
        <img src={user.bgImage} className='h-[280px] object-cover w-full' alt="bgBanner" />
        <div className='relative items-start h-[100px] flex justify-end flex-1'>
          <img className='absolute left-6 -translate-y-[50%]' src={user.image} width={130} alt="avatar img" />
          <button className='border rounded-full py-2 px-4 mt-3 me-5' onClick={handleEdite}>Edit Profile</button>
        </div>
        <p className='ms-5 mb-2 font-semibold text-xl'>{user.name}</p>
        <p className='ms-5 mb-2 text-slate-400'>@username__name</p>
        <p className='ms-5'>UX&UI designer at <Link className='text-blue-500'>@abutechuz</Link></p>
        <div className="mx-5 my-2 flex items-center justify-between">
          <p><i className="fa-light fa-location-dot"></i> Mashag’daman</p>
          <a className='text-blue-500' href='/tme:localhost.org'><i className="fa-regular fa-link"></i> t.me/boburjon_mavlonov</a>
          <p><i className="fa-light fa-balloon"></i> Born November 24, 2000</p>
          <p><i className="fa-regular fa-calendar-days"></i> Joined May 2020</p>
        </div>
        <div className="ms-5 flex gap-3">
            <p className='text-slate-400'><span className='font-semibold text-black'>67</span> Following</p>
            <p className='text-slate-400'><span className='font-semibold text-black'>47</span> Followrs</p>
        </div>
          <div className="flex mx-5 mt-5 mb-4 justify-between childrenPage">
            <NavLink className={'px-3'} to={PATH.ProfileTweets}>Tweets</NavLink>
            <NavLink className={'px-3'} to={PATH.ProfileTweetsReplice}>Tweets & replies</NavLink>
            <NavLink className={'px-3'} to={PATH.ProfileMedia}>Media</NavLink>
            <NavLink className={'px-3'} to={PATH.ProfileLikes}>Likes</NavLink>
          </div>
          <hr />
          <p className='ms-12 mt-5 mb-2  text-slate-400'><i className="fa-solid fa-thumbtack"></i> Pinned Tweet</p>
          <Outlet/>
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
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
        </Modal>
      </div>
    </>
  );
}

export default Profile;
