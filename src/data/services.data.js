import webDevelopment from '../assets/images/web-development.webp'
import uxResearch from '../assets/images/ux-research.webp'
import digitalMarketing from '../assets/images/digital-marketing.webp'
import tiConsulting from '../assets/images/ti-consulting.webp'
import softwareDevelopment from '../assets/images/software-development.webp'
import graphicDesign from '../assets/images/graphic-design.webp'
import dashboard from '../assets/images/dashboard.webp'

export const servicesList = [
    {
        imageRoute: webDevelopment,
        span: 'Pongamos tu negocio donde cualquier lo pueda encontrar',
        name: 'Tu negocio en linea atendiendo las 24h',
        botonText: 'Cotizar',
        redirectTo: '#precios',
        background: 't2-dark-silver',
        isInFooter: true,
        target: true,
        wpMessage: 'Hola Lucas, quiero cotizar mi página web'
    },
    {
        imageRoute: uxResearch,
        span: 'Diseñalos sabiendo la verdad detrás de sus necesidades inconcientes',
        name: 'Crea los productos que tus usuarios necesitan',
        botonText: 'Conocer más',
        redirectTo: '/',
        background: 't2-dark-silver',
        isInFooter: true,
        target: true,
        wpMessage: 'Hola Lucas, quiero un UX/UI research de mis usuarios'
    },
    {
        imageRoute: digitalMarketing,
        span: 'Aumente su popularidad con estrategias de marketing',
        name: 'Convierte posibles clientes en contactos de tu marca',
        botonText: 'Quiero saber cómo',
        redirectTo: '/',
        background: 't2-dark-silver',
        isInFooter: false,
        target: true,
        wpMessage: 'Hola Lucas, quiero que mi marca sea más popular'
    },
    {
        imageRoute: tiConsulting,
        span: 'Te guiamos al elegir proveedor para ese proyecto importante',
        name: 'Asesorate al contratar un proveedor de tecnología',
        botonText: 'Quiero asesoria',
        redirectTo: '/',
        background: 't2-dark-silver',
        isInFooter: true,
        target: true,
        wpMessage: 'Hola Lucas, quiero asesoria porque voy a contratar a un tercero'
    },
    {
        imageRoute: softwareDevelopment,
        span: 'Administra todo desde un sistema de gestión comercial hecho a medida',
        name: 'Necesitas un sistema de gestión para crecer',
        botonText: 'Conocer más',
        redirectTo: '/',
        background: 't2-dark-silver',
        isInFooter: false,
        target: true,
        wpMessage: 'Hola Lucas, quiero cotizar un sistema de gestion empresarial, ERP o CRM'
    },
    {
        imageRoute: graphicDesign,
        span: 'Que tu marca llame la atención de tus clientes y quede en su memoria',
        name: 'Publicita tu producto en las redes sociales',
        botonText: 'Quiero saber cómo',
        redirectTo: '/',
        background: 't2-dark-silver',
        isInFooter: false,
        target: true,
        wpMessage: 'Hola Lucas, quiero llamar la atención en RRSS con mi producto'
    },
    {
        imageRoute: dashboard,
        span: 'Los datos hablan, solo hay que ordenarlos y crear la historia',
        name: 'Para saber todo lo que pasa en tu negocio',
        botonText: 'Conoce cómo',
        redirectTo: '/',
        background: 't2-dark-silver',
        isInFooter: true,
        target: true,
        wpMessage: 'Hola Lucas, quiero una auditoria completa de mi negocio'
    },
]