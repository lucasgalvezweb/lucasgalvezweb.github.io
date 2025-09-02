import React from 'react'

export const LinkPrimaryFakeOutline = ({ text, textColor = 'white', bgColor = 'cc-first', hoverTextColor = 'black', hoverBgColor = 'white' }) => {
    return (
        <button className={`py-3 px-3 bg-${bgColor} rounded-xl text-${textColor} font-semibold w-full text-lg transition-colors duration-300 ease-in-out hover:bg-${hoverBgColor} hover:text-${hoverTextColor} border-neutral-300 border-2`}>
            {text}
        </button>
    )
}
