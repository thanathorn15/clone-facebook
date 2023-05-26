import React from 'react'

export default function LoginInput({placeholder}) {
  return (
    <input className='block w-full border border-gray-300 rounded-md px-4 py-4 outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-500' 
                placeholder={placeholder}
                />
  )
}
