import React from 'react'
import { global } from '../helpers/globalText'
import { useIntersectionAnimation } from '../hooks'
import profile from '../assets/images/picture-about-me.png'

export const AboutMe = () => {

    const { ref, isVisible } = useIntersectionAnimation()

    return (
        <section id='aboutme' className='bg-cc-gray min-h-full xl:px-28 lg:px-16 pt-10 pb-14 md:pt-28 md:pb-20' ref={ref}>
            <div className={`container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 text-left`}>
                <div className='place-self-center'>
                    <div className={`${isVisible ? 'animate-fade-right' : ''} animate-duration-800`}>
                        <img width="1000" height="auto" className='aspect-[4/3]' src={profile} alt="Profile picture" />
                    </div>
                </div>
                <div className={`text-black bg-red mt-5 md:mt-0 py-5 lg:pt-24 md:pb-8 px-5 relative place-self-center rounded-xl ${isVisible ? 'animate-fade-left' : ''} animate-duration-800 animate-delay-200`}>
                    <div className='bg-t2-dark-silver px-4 py-3 lg:absolute lg:top-[5%] lg:left-[-58%] xl:top-[7%] xl:left-[-12%] rounded-xl text-center'>
                        <h2 className={`text-xl text-white ${isVisible ? 'animate-fade-down' : ''} animate-duration-800 animate-delay-200`}>Conoce un poco<span className='text-3xl'> sobre mi</span></h2>
                    </div>
                    <p className='text-white mt-5 font-light lg:text-2xl'>Tengo {global.age} años, vivo en Lima - Perú, llevo más de {global.workingYears} años trabajando en el sector tecnología, los últimos 5 años desarrollando páginas, aplicaciones y sistemas web. Formalmente estudié la carrera de Ingeniería de Sistemas Computacionales e Inglés. Y la U de la vida me enseñó a comunicarme con usuarios ó clientes, a trabajar en equipo y a encontrar la ruta para crear mejores experiencias de usuario. Estas disciplinas me han dado no solo habilidades técnicas, sino también una mentalidad versátil y creativa para abordar los desafíos. ¡Estoy listo para colaborar contigo y llevar tus proyectos al siguiente nivel!</p>
                    <p className='text-white mt-5 font-light xl:text-xl'>Si necesitas más información, aquí está mi <a target="_blank" className='font-semibold' href="https://www.linkedin.com/in/lucas-g%C3%A1lvez-chamorro-0b98791a3/">LinkedIn</a> </p>
                </div>
            </div>
        </section>

    )
}
