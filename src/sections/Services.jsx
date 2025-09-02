import { useEffect, useState } from 'react'
import { servicesList } from '../data/services.data'
import { CardItem } from '../components/ui/CardItem'

import Slider from "react-slick";
import { global } from '../helpers/globalText';
import { useIntersectionAnimation } from '../hooks';

export const Services = () => {

    const { ref, isVisible } = useIntersectionAnimation()

    const settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1545,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 5
                }
            }
        ]
    };

    return (
        <section id='services' ref={ref} className=' bg-cc-first min-h-full text-white xl:px-28 lg:px-16 pt-20 pb-24 md:pt-20 md:pb-24'>
            <div className={`container mx-auto px-4 md:px-0 ${isVisible ? 'animate-fade-up' : ''} animate-duration-900`}>
                <div className='text-center pb-10'>
                    <h2 className='text-4xl text-center pb-4 font-semibold'>Mis <span className='text-[#f49c24]'>Servicios</span></h2>
                    <p className='text-xl pt-4 md:px-4'>Me importa mucho conocer sobre tu negocio o idea antes de diseñar una solución a tu necesidad</p>
                </div>
                <Slider {...settings}>
                    {
                        servicesList.map(({ imageRoute, background, span, name, botonText, redirectTo, wpMessage = 'Estoy interesado en conocer de sus servicios', target }, index) => (
                            <CardItem className="mx-2"
                                key={index}
                                imageRoute={imageRoute}
                                span={span}
                                name={name}
                                botonText={botonText}
                                redirectTo={`https://wa.me/${global.phone}?text=${wpMessage}`}
                                background={background}
                                target={target}
                            />
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}
