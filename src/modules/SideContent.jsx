import { Link, useLocation } from 'react-router-dom'
import Input from '../components/Input'
import React, { useContext } from 'react'
import { Context } from '../context/Context';

const SideContent = () => {
const { user,state } = useContext(Context);
const UserDef = user.image
const location = useLocation();
  return (
    <div className='p-4 space-y-4'>
      {location.pathname == '/' && (<div className='relative'>
        <Input type={'text'} placeholder={'Search Twitter'} extraClass={'!bg-slate-100 ps-12 text-lg !rounded-full'}/>
        <i className='fa-regular absolute top-3 left-4 text-lg text-slate-400 fa-search'></i>
      </div>)}
      {location.pathname.includes('/profile/') && <div className='flex-wrap grid grid-cols-3'> 
        {state.map(item => (
        item.file && <img className="w-full h-[40px] object-cover mt-3 rounded-xl" src={item.file} alt="post img" />
        ))}
      </div>}
        <div className="p-4 rounded-xl bg-slate-100">
            <div className="flex items-center justify-between">
                <p className='font-bold text-xl'>Trends for you</p>
                <i className='fa-regular me-3 text-xl fa-gear'></i>
            </div>
            <div className="py-4 relative">
                <i className='fa-solid text-xl absolute top-6 right-4 fa-ellipsis'></i>
                <p className='text-slate-400 text-lg'>Trending in Germany</p>
                <strong className='text-xl'>Revolution</strong>
                <p className='text-slate-400 text-lg'>50.4K Tweets</p>
            </div>
            <div className="py-4 relative">
                <i className='fa-solid text-xl absolute top-6 right-4 fa-ellipsis'></i>
                <p className='text-slate-400 text-lg'>Trending in Germany</p>
                <strong className='text-xl'>Revolution</strong>
                <p className='text-slate-400 text-lg'>50.4K Tweets</p>
            </div>
            <div className="py-4 relative">
                <i className='fa-solid text-xl absolute top-6 right-4 fa-ellipsis'></i>
                <p className='text-slate-400 text-lg'>Trending in Germany</p>
                <strong className='text-xl'>Revolution</strong>
                <p className='text-slate-400 text-lg'>50.4K Tweets</p>
            </div>
            <Link className='decoration-auto underline text-blue-500' to={'/'}>Show more</Link>
        </div>
        <div className="p-4 rounded-xl bg-slate-100">
            <p className='text-xl font-bold'> You might like</p>
            <div className="flex my-2 items-center">
                <img width={50} src={UserDef} alt="defImg" />
                <div className='text-lg flex-1 mx-3'>
                    <p className='font-semibold'>Mushtariy</p>
                    <p className='text-slate-400'>@Mushtar565266</p>
                </div>
                <button className='text-white bg-black h-[40px] px-4 rounded-full font-bold text-lg'>Follow</button>
            </div>
            <div className="flex mb-5 mt-2 items-center">
                <img width={50} src={UserDef} alt="defImg" />
                <div className='text-lg flex-1 mx-3'>
                    <p className='font-semibold'>Mushtariy</p>
                    <p className='text-slate-400'>@Mushtar565266</p>
                </div>
                <button className='text-white bg-black h-[40px] px-4 rounded-full font-bold text-lg'>Follow</button>
            </div>
            <Link className='text-blue-500 text-lg' to={'/'}>Show more</Link>
        </div>
            {location.pathname == '/' && (<p className='leading-2 text-lg text-slate-400 py-2'>Terms of Service Privacy Policy Cookie Policy Imprint Ads Info More ··· © 2021 Twitter, Inc.</p>)}
    </div>
  )
}

export default SideContent
