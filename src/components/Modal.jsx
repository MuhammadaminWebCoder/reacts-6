import React from 'react'

const Modal = ({setOpenModal,openModal,children}) => {
  return (
    <div id='wrapper' onClick={(e) => e.target.id == 'wrapper'? setOpenModal(false):''} className={`absolute flex items-center justify-center !fixed top-0 z-10 left-0 h-full w-full backdrop-blur-sm bg-[#00000079] ${openModal == false?'hidden':'block'}`}>
      <div className="bg-white w-[600px] relative rounded-2xl">
        <i onClick={() => setOpenModal(false)} className='fa-solid fa-close absolute right-4 top-4'></i>
        {children}
      </div>
    </div>
  )
}

export default Modal
