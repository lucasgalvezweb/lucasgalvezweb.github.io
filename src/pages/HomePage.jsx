import React from 'react'
import { NavBar } from '../components'
import { Hero } from '../components/Heros'
import { Services } from '../sections/Services'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

import wpIcon from '../assets/icons/whatsapp.png'
import { Plans } from '../sections/Plans'
import { listMenu } from '../data/navbar.data'
import { Footer } from '../sections/Footer'
import { global } from '../helpers/globalText'
import { AboutMe } from '../sections/AboutMe'
import { Method } from '../sections/Method'
import { WhyWorkWithMe } from '../sections/WhyWorkWithMe'

export const HomePage = () => {
    return (
        <div className=''>
            <NavBar listMenu={listMenu} />
            <Hero />
            <WhyWorkWithMe />
            <Method />
            <Plans />
            <Services />
            <AboutMe />
            <div className='fixed z-50 bottom-8 right-8 animate-bounce'>
                <WhatsAppButton wpIcon={wpIcon} wpNumber={global.phone} wpIconWidth="45" />
            </div>
            <Footer />
        </div>
    )
}
