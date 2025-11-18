import React from 'react'
import logoImg from "../assets/logo.jpg"
import NavbarItem from './NavbarItem'


const Navbar = () => {
  return (
    <div className="flex flex-col font-serif w-full sticky top-0 z-[99]">
        <div className="max-w-full border border-solid border-zinc-200 px-20 bg-white flex justify-between items-center p-2">
            <div className="flex items-end gap-1">
                <img src={logoImg} className="w-12 h-12"/>
                <div className="flex flex-col justify-end">
                    <p className="text-[20px]">Knots & Prints</p>
                    <p className="text-[10px] font-light">Dtf Printing and Custom Merchandise</p>
                </div>
            </div>
            <div className="w-fit flex items-center gap-3">
                <NavbarItem path='/shop' label='Shop'/>
                <NavbarItem path='/design' label='Design'/>
                <NavbarItem path='/contact' label='Contact'/>
                {/* <NavbarItem path='/sign-up' label='Sign up'/> */}
                <a href="" className="bg-amber-800 px-4 py-2 text-white text-sm decoration-0  rounded-md">Sign up</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
