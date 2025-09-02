import mainLogoBlack from '../assets/icons/logo/200px/logo-lucasgalvezconsulting.png'
import { global } from '../helpers/globalText'
import { time } from '../helpers/helpful'
import { appsMenuList, servicesList } from '../data'
import { NavLink } from 'react-router-dom'
import { useIntersectionAnimation } from '../hooks'

export const Footer = () => {

    const { ref, isVisible } = useIntersectionAnimation()

    const { phone, mail, companyName } = global

    return (
        <section ref={ref} id='footer' className=' bg-white min-h-full xl:px-28 lg:px-16 pt-10 pb-14 md:pt-20 md:pb-14'>
            <div className={`container mx-auto px-4 md:px-0 pb-10 grid grid-cols-1 lg:grid-cols-4 text-left ${isVisible ? 'animate-fade-up' : ''} animate-duration-900`}>
                <div className='mb-3 md:mb-0'>
                    <img loading='lazy' src={mainLogoBlack} width="150" height="auto" alt="Logo principal" />
                </div>
                <div className='mb-3 md:mb-0'>
                    <h2 className='text-xl font-semibold'>Servicios</h2>
                    <ul className='text-sm pt-2 pl-2 pr-6'>
                        {
                            servicesList.map(({name, wpMessage = 'Estoy interesado en conocer de sus servicios', isInFooter}, index) => (
                                <li key={index} className='my-1'><a href={`https://wa.me/${ phone }/?text=${ wpMessage }`}>{ isInFooter && name }</a></li>
                            ))
                        }
                    </ul>
                </div>
                <div className='mb-3 md:mb-0'>
                    <h2 className='text-xl font-semibold'>Apps más usadas</h2>
                    <ul className='text-sm pt-2 pl-2 pr-6'>
                        {
                            appsMenuList.map(({name, redirectTo, isInFooter}, index) => (
                                <li key={index} className='my-1'><NavLink to={redirectTo}>{ isInFooter && name }</NavLink></li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Contácto</h2>
                    <ul className='text-sm pt-2 pl-2 pr-6'>
                        <li className='my-1'>Teléfono: <a target='_blank' href={`tel:${ phone }`}>{ phone }</a></li>
                        <li className='my-1'>Correo: <a target='_blank' href={`mailto:${ mail }`}>{ mail }</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className={`mt-10 px-4 md:px-0 text-center ${isVisible ? 'animate-fade-up' : ''} animate-duration-900`}>
                <p>&copy; {time.year} { companyName }. Todos los derechos reservados.</p>
                <p>Diseñado y desarrollado por { companyName }</p>
            </div>
        </section>
    )
}
