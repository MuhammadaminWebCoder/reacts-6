import React, { useContext } from 'react'
import { Context } from '../../../context/Context';

function Tweets() {
    const {user,state,setState } = useContext(Context);
  const UserDef = user.image
  const stateLength = state.length;

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
      })
      setState(updatedState)
    }
  return (
    <div className='px-3'>
     {stateLength == 0 ? <p className='text-center'>isn't chat undefined</p> : state.map((item, ind) => (
        <div key={ind} className="flex border-b pb-5 relative pt-2 items-start">
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
  )
}

export default Tweets
