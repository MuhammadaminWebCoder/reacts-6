import React from 'react'

const Input = ({type,name,extraClass,placeholder}) => {
  return (
    <input
        type={type}
        name={name}
        className={`w-full border rounded-md px-4 py-3 focus:outline-blue-500 ${extraClass}`}
        placeholder={placeholder}
    />
  )
}

export default Input
