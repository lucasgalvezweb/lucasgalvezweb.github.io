import React, { useEffect, useState } from 'react'

export const BaseNotification = ({ title, detail, type = "success" }) => {
    return (
        <>
            <div className={`absolute bg-${type} text-white right-1 top-28 mx-4 px-3 py-3 rounded-xl animate-fade-up animate-duration-900`}>
                {title && <h2 className='text-xl font-semibold'>{title}</h2>}
                <p>{detail}</p>
            </div>
        </>
    )
}
