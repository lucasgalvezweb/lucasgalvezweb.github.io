import React from 'react'
import { NavLink } from 'react-router-dom'
import { global } from '../../helpers/globalText'

export const WhatsAppButton = ({ wpIcon, wpNumber, wpIconWidth = "45", wpIconHeight="45", wpText = global.wpMessage}) => {
    return (
        <div>
            <NavLink to={`https://wa.me/${wpNumber}/?text=${wpText}`} target="_blank">
                <img className='hover:scale-150 transition' width={wpIconWidth} height={wpIconHeight} src={wpIcon} alt="WhastApp button" />
            </NavLink>
        </div>
    )
}
