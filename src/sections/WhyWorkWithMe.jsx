import React from 'react'
import { useIntersectionAnimation } from '../hooks'
import { global } from '../helpers/globalText'
import { LinkPrimaryFake } from '../components/ui'
import { workwithmedata } from '../data/workwithme.data'

export const WhyWorkWithMe = () => {

    const { phone, wpMessage } = global

    const { ref, isVisible } = useIntersectionAnimation()

    return (
        <section ref={ref} id='whyworkwithme' className='bg-orange xl:px-28 lg:px-16 pt-16 pb-20 md:pt-20 md:pb-24'>
            <div className={`container px-4 lg:px-0 mx-auto grid grid-cols-1 gap-5 lg:grid-cols-2 items-center justify-center ${isVisible ? 'animate-fade-up' : ''} animate-duration-900`}> {/* md:py-20 lg:py-32 */}
                <div className='md:px-2'>
                    <h1 className='text-4xl text-white lg:text-5xl !leading-[4rem] lg:mb-6 font-extrabold rounded-md py-4'>
                        ¿Porqué trabajar conmigo?
                    </h1>
                    <div className='w-full h-1 bg-[#2B2F30] rounded-sm'></div>
                    <p className='font-light text-white text-xl lg:my-6 rounded-md py-4'>Porque seré tu aliado en el camino a tus objetivos, estoy más interesado en que tu negocio crezca que en solo hacer tu web, seremos un equipo, soy consciente de que si tu ganas yo gano, conoce los 4 pilares que rigen mi trabajo, las 4 C.</p>
                    <div className='lg:mt-8 hidden lg:block'>
                        <a href={`https://wa.me/${phone}/?text=${wpMessage}`} target='_blank'>
                            <LinkPrimaryFake text="Hablemos" lgWidth='lg:w-48' bgColor='t2-dark-silver' />
                        </a>
                    </div>
                </div>
                <div className='place-self-center'>
                    {
                        workwithmedata.map(({ number, title, text, marginX }, index) => (
                            <div key={index} className={`grid grid-cols-6 text-white bg-t2-dark-silver py-4 rounded-xl mb-3 mr-0 ml-0 ${marginX}`}>
                                <div className='col-span-1 text-6xl font-bold text-center place-self-center'>
                                    {number}
                                </div>
                                <div className='col-span-5'>
                                    <h3 className='text-2xl font-semibold'>{title}</h3>
                                    <p className='font-light mt-1 mr-5'>{text}</p>
                                </div>
                            </div>
                        ))
                    }

                    <div className='mt-8 lg:hidden block'>
                        <a href={`https://wa.me/${phone}/?text=${wpMessage}`} target='_blank'>
                            <LinkPrimaryFake text="Hablemos" lgWidth='lg:w-48' bgColor='t2-dark-silver' />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}
