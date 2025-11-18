import React from 'react'
import { CgClose } from 'react-icons/cg'

const SignupBanner = () => {
  return (
    <div className="w-full py-20 flex flex-col justify-center items-center bg-zinc-200 relative">
        <div className='absolute top-5 right-5'>
            <CgClose className='cursor-pointer text-3xl active:scale-[.97] text-zinc-400'/>
        </div>
        <div className="flex flex-col items-center justify-center w-full p-4 gap-2">
            <p className='text-2xl text-amber-800 font-semibold'>Don't have an account?</p>
            <p className='text-zinc-500 text-sm  text-center'>Earn points towards rewards on every purchase and recieve exclusive deals!</p>
        </div>
        <div className="rounded-full border border-solid border-zinc-300 p-2 flex items-center pl-4 w-[600px] bg-white">
            <input placeholder="Enter your email here..." className="w-full border-0 focus:ring-0 focus:outline-none text-sm"/>
            <button className="bg-amber-800 px-8 py-2 text-nowrap rounded-full text-white border-0 active:scale-[.97] cursor-pointer text-base">
                Sign up
            </button>
        </div>

    </div>
  )
}

export default SignupBanner
