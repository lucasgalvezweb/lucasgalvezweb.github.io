import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export const useIntersectionAnimation = () => {

    const [isVisible, setIsVisible] = useState(false)
    const { ref, inView } = useInView({ 
        triggerOnce: false,
        threshold: 0.1
    })

    useEffect(() => {
        inView ? setIsVisible(true) : setIsVisible(false)
    }, [inView])

    return { ref, isVisible}
}
