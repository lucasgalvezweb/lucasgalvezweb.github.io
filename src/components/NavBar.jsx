import React, { useState } from 'react'
import menuIcon from '../assets/icons/menu-icon.png'
import closeIcon from '../assets/icons/cerrar.png'
import mainLogoWhite from '../assets/icons/logo/200px/logo-lucasgalvezconsulting-white.png'
import { NavLink } from 'react-router-dom'

export const NavBar = ({listMenu}) => {

    const [mobile, setMobile] = useState(false)

    const handleScroll = (elementId) => {
        if (elementId) {
            const section = document.getElementById(elementId);
            const sectionPosition = section.offsetTop;
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
        }
    }

    return (
        <header className='h-15 bg-cc-first text-white lg:px-28 py-3 w-full fixed z-50'>
            <nav className='container px-4 md:px-0 mx-auto flex'>
                <div className='flex-auto self-center'>
                    <NavLink to="/">
                        <img loading='lazy' src={mainLogoWhite} width="150" height="auto" alt="Logo principal" />
                    </NavLink>
                </div>

                <div className='flex-auto hidden lg:block place-self-center'>
                    <ul className='flex gap-2 justify-end'>
                        {
                            listMenu.map(({scrollTo, route, name, isShown}, index) => (
                                isShown && (<NavLink onClick={() => handleScroll(scrollTo)} key={index} to={route} className="hover:bg-white hover:text-black rounded-md px-4 py-2 transition duration-300 ease-in-out font-semibold">{name}</NavLink>)
                            ))
                        }
                    </ul>
                </div>

                <div className='lg:hidden place-self-center'>
                    <button onClick={() => { setMobile(!mobile) }}>
                        <img loading='lazy' className='mb-[-10px]' width="25px" height="25px" src={mobile ? closeIcon : menuIcon} alt="Icono de menú" />
                    </button>
                </div>
            </nav>

            <div className={`${mobile ? 'block' : 'hidden'} px-4 mt-7 lg:hidden`}>
                <ul className='nav-mobile animate-fade-down animate-duration-700'>
                    {
                        listMenu.map(listItem => (
                            <NavLink className="mt-4 flex hover:bg-white hover:text-black rounded-md px-4 py-2 mb-4 font-semibold" onClick={() => handleScroll(listItem.scrollTo)} key={listItem.name} to={listItem.route}>{listItem.name}</NavLink>
                        ))
                        /* TODO: Hide menu when clic outsite the menu */
                    }
                </ul>
            </div>
        </header>
    )
}
