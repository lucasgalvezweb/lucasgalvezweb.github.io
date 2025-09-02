import { methodList } from '../data/method.data'
import { useIntersectionAnimation } from '../hooks'
import Slider from 'react-slick';

export const Method = () => {

  const { ref, isVisible } = useIntersectionAnimation()

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: true,
          slidesToShow: 1,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 1545,
        settings: {
          slidesToShow: 5,
          dots: false,
        }
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          dots: false,
        }
      }
    ]
  };


  return (
    <section ref={ref} id='method' className='bg-[#103754] min-h-full xl:px-28 lg:px-16 pt-10 pb-14 md:pt-28 md:pb-20'>
      <div className={`container mx-auto px-4 md:px-0 py-10 ${isVisible ? 'animate-fade-up' : ''} animate-duration-1000`}>
        <h1 className='text-4xl text-white lg:text-5xl !leading-[4rem] lg:mb-6 font-extrabold rounded-md px-3'>¿Cómo trabajo?</h1>
        <p className='font-light text-white text-xl my-6 rounded-md px-3'>Estos son las etapas mínimas que considero todo proyecto debe tener:</p>
        <Slider {...settings}>
          {
            methodList.map(({ imgRoute, title, text, marginTop, animationDelay }, index) => (
              <div key={index} className={`mx-0 ${marginTop} ${isVisible ? 'animate-fade-up' : ''} animate-duration-1000`}>
                <div className="bg-white px-4 py-4 rounded-xl mx-2 mb-6 flex flex-col item items-center">
                  <img className='aspect-square' width="80%" src={imgRoute} alt="" />
                  <div className='self-start'>
                    <h3 className="my-4 text-2xl font-semibold">{title}</h3>
                  </div>
                  <p className="my-2">{text}</p>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </section>
  )
}
