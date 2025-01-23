import Input from '../../components/Input';
import React, { useContext, useState } from 'react';
import { Context } from '../../context/Context';

function Home() {
  const { user,setState,state } = useContext(Context);
  const UserDef = user.image

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    const file = e.target.file.files[0];
    const url = file ? URL.createObjectURL(file) : null;

    const addData = {
      id: Date.now(),
      addInp: e.target.addInp.value,
      file: url,
      like: 0,
      liked: false,
    };

    if (addData.addInp) {
      const newState = [...state, addData];
      setState(newState);
      localStorage.setItem('addChat', JSON.stringify(newState));
      e.target.reset();
    }
  };
  const handleLikeToggle = (id) => {
    const updatedState = state.map((item) => {
      if (item.id === id) {
        const isLiked = !item.liked;
        return {
          ...item,
          like: isLiked ? item.like + 1 : item.like - 1,
          liked: isLiked,
        };
      }
      return item;
    });

    setState(updatedState);
    localStorage.setItem('addChat', JSON.stringify(updatedState));
  };

  return (
    <div>
      <header>
        <div className="flex justify-between p-3 items-center">
          <h1 className="text-xl font-semibold">Home</h1>
          <i className="fa-thin text-2xl fa-stars"></i>
        </div>
      </header>
      <div className="border-y">
        <div className="flex items-start mx-3">
          <img width={50} src={UserDef} alt="user img" />
          <form onSubmit={handleSubmitAdd} className="w-full">
            <Input name={'addInp'} placeholder={'What’s happening'} extraClass={'outline-0 border-none h-[63px]'} />
            <div className="flex items-center text-blue-500 mt-5 ms-4 gap-5">
              <label>
                <input name="file" type="file" className="hidden" />
                <i className="fa-light fa-image"></i>
              </label>
              <i className="fa-light fa-gif"></i>
              <i className="fa-light fa-chart-simple-horizontal"></i>
              <i className="fa-light fa-face-smile"></i>
              <i className="fa-light fa-calendar-clock"></i>
            </div>
            <div className="w-full flex justify-end">
              <button type="submit" className="py-2 mb-1 font-semibold px-4 text-white hover:bg-blue-300 bg-blue-500 rounded-full">
                Tweet
              </button>
            </div>
          </form>
        </div>
      </div>
      {state.map((item, ind) => (
        <div key={ind} className="flex border-b pb-5 px-3 relative pt-2 items-start">
          <i className="fa-solid text-xl absolute top-0 right-4 fa-ellipsis"></i>
          <img width={50} src={UserDef} alt="defImg" />
          <div className="text-lg flex-1 mx-3">
            <p className="font-semibold">{user.name}</p>
            <p className="leading-6 text-[17px]">{item.addInp}</p>
            {item.file ? (
              <img width={'90%'} className="mt-3 rounded-xl" src={item.file} alt="post img" />
            ) : null}
            <div className="flex gap-[80px] mt-4 text-slate-400">
              <p className="fa-light fa-message"></p>
              <p className="text-green-400 fa-light fa-arrows-rotate-reverse">
                <span className="ps-2 text-[12px]"></span>
              </p>
              <p
                onClick={() => handleLikeToggle(item.id)}
                className={`text-red-500 fa-heart relative ${item.liked ? 'fa-solid' : 'fa-regular'}`}
              >
                <span className="ps-2 absolute top-1 text-[12px]">{item.like !== 0?item.like:''}</span>
              </p>
              <p className="fa-regular fa-up-from-bracket"></p>
              <p className="fa-solid fa-chart-simple"></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
