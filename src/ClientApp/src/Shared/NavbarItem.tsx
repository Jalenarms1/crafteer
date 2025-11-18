import React from 'react'
import { Link } from 'react-router-dom'

const NavbarItem = ({path, label}: {path: string, label: string}) => {
  return (
    <Link to={path} className='text-sm hover:bg-zinc-100 px-4 py-2 rounded-md'>
        {label}
    </Link>
  )
}

export default NavbarItem
