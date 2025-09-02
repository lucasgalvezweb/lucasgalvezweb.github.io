import React from 'react'
import { NavLink } from 'react-router-dom'

export const LinkPrimary = ({ text, redirectTo }) => {
    return (
        <NavLink to={redirectTo} className='py-3 px-3 flex place-content-center bg-cc-first rounded-xl text-white font-semibold  w-full text-lg transition-colors duration-300 ease-in-out hover:bg-white hover:text-black'>
            {text}
        </NavLink>
    )
}
