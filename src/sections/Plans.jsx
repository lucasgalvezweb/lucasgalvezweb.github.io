import { planes } from '../data/plans.data'
import checkBlackIcon from '../assets/icons/cheque-black.png'
import { LinkPrimaryFakeOutline } from '../components/ui';
import Slider from 'react-slick';
import { useIntersectionAnimation } from '../hooks';
import { global } from '../helpers/globalText';

export const Plans = () => {

    const { ref, isVisible } = useIntersectionAnimation()

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: false,
        slidesToShow: 4,
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
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    };

    return (
        <section id='plans' className='bg-white xl:px-28 lg:px-16 pt-20 pb-20 md:pt-24 md:pb-24' ref={ref}>
            <div className='container mx-auto px-4 md:px-0'> {/* md:py-20 lg:py-32 */}
                <h2 className={`text-4xl lg:text-5xl text-center pb-4 font-extrabold ${isVisible ? 'animate-fade-up' : ''} animate-duration-900`}>Planes <span className='text-[#f49c24]'>Web</span></h2>
                <p className={`text-2xl pt-2 pb-8 md:px-4 font-light text-center ${isVisible ? 'animate-fade-up' : ''} animate-duration-900 animate-delay-200`}>Elije la solución que se adapte a tu proyecto</p>

                <Slider {...settings}>
                    {
                        planes.map(({ 
                            title, 
                            priceText, 
                            price, 
                            benefitsList, 
                            color = 'white', 
                            support, 
                            timeReady, 
                            wpMessage = 'Hola, necesito una web para mi negocio' 
                        }, index) => (
                            <div className={`mx-0 ${isVisible ? 'animate-fade-up' : ''} animate-duration-900 animate-delay-400`} key={index}>
                                <div className={`text-white h-[580px] text-center shadow-xl  mx-4 mb-6 rounded-xl flex flex-col border-neutral-100 border-2`}>
                                    <div className={`py-4 px-4 bg-${color} rounded-t-xl`}>
                                        <h1 className='text-2xl'>{title}</h1>
                                        <div className='align-kit-center my-2'>
                                            <hr className='w-[70%]' />
                                        </div>
                                        {/* <div className='flex justify-center'>
                                            <h2 className='font-light'>{priceText}</h2>
                                            <span className='ml-4 text-3xl font-bold'>{price}</span>
                                        </div>
                                        <div className='align-kit-center my-2'>
                                            <hr className='w-[70%]' />
                                        </div> */}
                                        <div className='flex flex-col mt-4 italic'>
                                            <span>Entrega: {timeReady}</span>
                                            <span>Soporte: {support}</span>
                                        </div>
                                    </div>
                                    <div className='px-6 text-t2-dark-silver'>
                                        <ul className='py-4 text-left'>
                                            {
                                                benefitsList.map((benefit, index) => (
                                                    <div key={index} className='flex gap-2 items-start'>
                                                        <img className='mt-1' width="16" height="16" src={checkBlackIcon} alt="Icono de lista" />
                                                        <li className='text-t2-dark-silver'> {benefit} </li>
                                                    </div>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className='place-self-center mt-auto mb-8 w-[90%]'>
                                        <a href={`https://wa.me/${global.phone}/?text=${wpMessage}`} target='_blank'>
                                            <LinkPrimaryFakeOutline bgColor={color} textColor='white' text="Cotizar" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}
