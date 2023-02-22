import React from 'react'
import {BiBell, BiCartAlt} from 'react-icons/bi'
const Navbar = () => {
  return (
    <div className=' bg-primary py-3 text-white'>
        <div className=' container flex justify-between items-center mx-auto'>
            <h1 className=' font-bold'>
                Seafood
                <span className=' text-secondary'>Paradise</span>
            </h1>
            <ul className=' flex items-center gap-5 text-sm'>
                <li className=' font-bold bg-secondary px-3 py-2'>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Contact</li>
            </ul>
            <div className=' flex items-center gap-5 text-xl'>
                <BiBell/>
                <BiCartAlt/>
            </div>
        </div>
    </div>
  )
}

export default Navbar