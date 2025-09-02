import { useIntersectionAnimation } from '../../hooks'
import { LinkPrimaryFake } from '../ui'
import { global } from '../../helpers/globalText'
import profilePicBg from '../../assets/images/profile-pic-bg.png'


export const Hero = () => {

    const { ref, isVisible } = useIntersectionAnimation()

    return (
        <section id='hero' className='lg:px-16 bg-black xl:px-28 pt-28 pb-20 lg:pt-0'>
            <div className={`container mx-auto px-4 lg:px-0 md:py-20 lg:py-32 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 items-center justify-center ${isVisible ? 'animate-fade-up' : ''} animate-duration-900`} ref={ref}>
                <div className='md:px-2'>
                    <h3 className='text-white text-xl italic'>Hola</h3>
                    <h1 className='text-4xl text-white lg:text-5xl !leading-[4rem] lg:mb-6 font-extrabold rounded-md py-4'>
                        Soy <span className='text-[#f49c24]'>Lucas Galvez</span>
                    </h1>
                    <div className='w-full h-1 bg-[#f49c24] rounded-sm'></div>
                    <p className='font-light text-white text-xl lg:my-6 rounded-md py-4'>¿Quieres hacer tu página web y no sabes por donde empezar? <span className='font-normal'>Estás en el lugar correcto</span>. Soy Desarrollador Web, me especializo en la <span className='text-[#f49c24] font-normal'>creación de páginas web enfocadas en conversión de posibles clientes.</span></p>
                    <div className='lg:mt-8'>
                        <a href={`https://wa.me/${global.phone}/?text=${global.wpMessage}`} target='_blank'>
                            <LinkPrimaryFake textColor="black" lgWidth='lg:w-48' text="Cotizar" bgColor='[#f49c24]' />
                        </a>
                    </div>
                </div>
                <div className='place-self-center'>
                    <img className='img-profile aspect-[9/12]' width="500" height="auto" src={profilePicBg} alt="" />
                </div>
            </div>
        </section>
    )
}
