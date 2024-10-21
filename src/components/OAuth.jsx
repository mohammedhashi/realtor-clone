import React from 'react'
import { FcGoogle } from "react-icons/fc";


export default function OAuth() {
  return (
    <button className='flex items-center justify-center w-full
     bg-red-700 text-white py-3 px-7 uppercase active:bg-red-900 shadow-md
      font-medium hover:shadow-lg active:shadow-lg
       hover:bg-red-800 transition duration-300 ease-in-out'><FcGoogle className='mr-2 
        text-2xl bg-white rounded-full' /> Continue with Google</button>
  )
}
