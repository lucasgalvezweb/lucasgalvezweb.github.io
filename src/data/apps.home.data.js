import webDevelpment from '../assets/images/web-development.webp'
import superCalc from '../assets/images/supercalc.webp'

export const appsMenuList = [
    {
        imageRoute: superCalc,
        span: 'Has operaciones del día a día, ponles nombre para recordarlas luego y usalas en otros cálculos.',
        name: 'SuperCalc',
        botonText: 'Abrir',
        redirectTo: '/miniapps/supercalc',
        isIsMenu: true,
        isInFooter: true
    },
    {
        imageRoute: webDevelpment,
        span: 'Para saber cuanto pagar con la familia, pareja o roommates de manera equitativa según los ingresos.',
        name: 'Gastos compartidos',
        botonText: 'Abrir',
        redirectTo: '/miniapps/gastos-compartidos',
        isIsMenu: true,
        isInFooter: true
    },
    {
        imageRoute: webDevelpment,
        span: 'Envía presupuesto para tus posibles clientes de manera automática',
        name: 'Cotiza tu servicio',
        botonText: 'Proximamente',
        redirectTo: null,
        isIsMenu: false,
        isInFooter: false
    },
    {
        imageRoute: webDevelpment,
        span: 'Ingresa los ingredientes que tengas y opten sugerencias de comidas para hoy',
        name: '¿Qué cocino hoy?',
        botonText: 'Abrir',
        redirectTo: '/apps/fooday',
        isIsMenu: false,
        isInFooter: false
    },
    {
        imageRoute: webDevelpment,
        span: '¿Cómo y a donde se va mi dinero? Siguele el rastro en nuestra sencilla app',
        name: 'Where is the money?',
        botonText: 'Proximamente',
        redirectTo: null,
        isIsMenu: false,
        isInFooter: false
    },
    {
        imageRoute: webDevelpment,
        span: 'Las cifras contables y financieras que más necesitas en cualquier momento y lugar',
        name: 'Contabilidad YA!',
        botonText: 'Proximamente',
        redirectTo: null,
        isIsMenu: false,
        isInFooter: false
    },
    
]