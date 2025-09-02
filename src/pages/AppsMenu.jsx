import React from 'react'
import { appsMenuList } from '../data'
import { CardItem } from '../components/ui'
import { NavBar } from '../components'
import { useIntersectionAnimation } from '../hooks'
import { Link } from 'react-router-dom'

const listMenu = [
  {
    name: 'Inicio',
    route: '/',
    scrollTo: null,
    isShown: true
  }
]

export const AppsMenu = () => {

  const { ref, isVisible } = useIntersectionAnimation()

  return (
    <>
      <NavBar listMenu={listMenu} />
      <section className='lg:px-28 bg-white pt-20' ref={ref}>
        <div className={`container mx-auto px-4 md:px-0 h-screen items-center justify-center ${isVisible ? 'animate-fade-up' : ''} animate-duration-900`}>
          <div className='mt-10 mb-10'>
            <h1 className='text-2xl mx-2 lg:text-4xl'>Explora nuestras mini apps, seguro que <span className='text-cc-third font-bold'> alguna te es útil</span></h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {
              appsMenuList.map(({ imageRoute, span, name, botonText, redirectTo, isIsMenu }, index) => (
                isIsMenu && <Link to={redirectTo}>
                  <CardItem
                    key={index}
                    imageRoute={imageRoute}
                    span={span}
                    name={name}
                    botonText={botonText}
                    redirectTo={redirectTo}
                  />
                </Link>
              ))
            }
          </div>

        </div>
      </section>
    </>
  )
}
