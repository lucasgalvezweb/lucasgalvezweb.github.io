import { LinkPrimary } from "./LinkPrimary"
import { useEffect, useState } from "react";
import { LinkPrimaryFake } from "./LinkPrimaryFake";

export const CardItem = ({
    name,
    background = "cc-fourth",
    imageRoute,
    span,
    botonText,
    redirectTo,
    animationStyle = 'animate-fade-up',
    target = false
}) => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const aspectRatio = 16 / 9; // Adjust the aspect ratio as needed

    const widthImg = width <= 640 ? '350' : '400px'; // Adjust the breakpoint and dimensions as needed
    const heightImg = width <= 640 ? `${(width * aspectRatio) / 100}px` : 'auto'; // Calculate height based on aspect ratio


    return (
        <div className={`bg-${background} mx-2 rounded-xl px-4 py-4 pb-6 my-2 ${animationStyle} animate-duration-900`}>
            <img src={imageRoute} alt={name} width={widthImg} height={heightImg} className='rounded-xl mb-4 aspect-[4/3]' />
            <h3 className='text-2xl lg:text-xl md:text-xl pt-3 pb-2 text-white font-semibold'>{name}</h3>
            <p className='text-white font-light pb-8'>{span}</p>
            {
                target ?
                    <a href={redirectTo} target="_blank">
                        <LinkPrimaryFake text={botonText} />
                    </a> :
                    <LinkPrimary text={botonText} redirectTo={redirectTo} />
            }

        </div>
    )
}
