import { useEffect, useState } from "react"
import { NavBar } from "../../components"
import { useIntersectionAnimation } from "../../hooks"
import { customTimeText } from "../../helpers/helpful"
import { global } from "../../helpers/globalText"
import { BaseNotification } from "../../components/notifications"

const dataSample = [
    {
        date: "14-5-2024",
        income: "1234.00",
        name: "Pepito",
        percentage: "",
        toPay: ""
    },
    {
        date: "14-5-2024",
        income: "3402.00",
        name: "Jaimito",
        percentage: "",
        toPay: ""
    }
]

export const GastosCompartidos = () => {

    const { ref, isVisible } = useIntersectionAnimation()
    const [nombres, setNombres] = useState('')
    const [ingreso, setIngreso] = useState('')
    const [ingresoTotal, setIngresoTotal] = useState('')
    const [gastoTotal, setGastoTotal] = useState('')
    const [row, setRow] = useState([])
    const [notificacion, setNotificacion] = useState(false)
    const [notificacionProperties, setNotificacionProperties] = useState({})

    // Return notificacion to false
    useEffect(() => {
        const timer = setTimeout(() => {
            setNotificacion(false)
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, [notificacion])


    const handleTotalIncome = () => {
        const sumatoria = row.reduce((total, item) => total + parseFloat(item.income), 0).toFixed(2)
        return sumatoria
    }

    // porcentajes de ganancia
    const calculatePercentage = () => {
        const totalIncome = handleTotalIncome()
        const updatePercetangeRow = row.map(item => ({
            ...item,
            percentage: (parseFloat(item.income) / parseFloat(totalIncome)).toFixed(4),
        }));
        return updatePercetangeRow
    }

    const calculateHowMuchToPay = () => {
        const updatedPercetange = calculatePercentage()
        if (parseFloat(gastoTotal) < parseFloat(ingresoTotal)) {
            const updatedAmountToPay = updatedPercetange.map(item => ({
                ...item,
                toPay: (parseFloat(gastoTotal) * item.percentage).toFixed(4),
            }))
            return updatedAmountToPay
        } else {
            return false
        }
    }

    const handleHowMuchToPay = (event) => {
        event.preventDefault()
        if (gastoTotal) {
            setGastoTotal(parseFloat(gastoTotal).toFixed(2))
            const totalToPay = calculateHowMuchToPay()
            if (totalToPay !== false) {
                setRow(totalToPay)
                setNotificacion(true)
                setNotificacionProperties({
                    type: "success",
                    detail: "Gastos calculados"
                })
            } else {
                setNotificacion(true)
                setNotificacionProperties({
                    title: "Aviso",
                    type: "warning",
                    detail: "Los gastos superan a los ingresos, se aconseja gastar menos"
                })
            }
        }
    }

    useEffect(() => {
        setIngresoTotal(handleTotalIncome()) // Actualiza el valor del ingreso total
    }, [row])



    const handleAddRow = (event) => {
        event.preventDefault()
        if (nombres && ingreso) {
            setRow([
                ...row,
                {
                    name: nombres,
                    income: parseFloat(ingreso).toFixed(2),
                    date: customTimeText.currentDateES,
                    percentage: '',
                    toPay: ''
                }
            ])
            setNombres('') // Resetea el campo nombres
            setIngreso('') // Resetea el campo ingreso
            setNotificacion(true)
            setNotificacionProperties({
                type: "primary",
                detail: "Ingreso guardado"
            })
        }
        // TODO: Show error validation messages
    }



    const listMenu = [
        {
            name: 'Inicio',
            route: '/',
            scrollTo: null,
            isShown: true
        },
        {
            name: 'Menú de miniapps',
            route: '/miniapps',
            scrollTo: null,
            isShown: true
        }
    ]

    // TODO:
    // Allow the user show the ammounts with the currency of its preference
    // Show validation message when the expenses are higher than incomes
    // Put Gastos totales input next to its text to gain space in responsive
    // Versión text to footer

    return (
        <>
            <NavBar listMenu={listMenu} />
            <section className="lg:px-28">
                <div ref={ref} className={`container mx-auto px-4 md:px-0 flex flex-col min-h-screen items-center justify-center pt-20 md:py-24 md:pt-20 ${isVisible ? 'animate-fade-up' : ''} animate-duration-900`}>
                    {
                        notificacion && <BaseNotification {...notificacionProperties} />
                    }
                    <div className="mr-auto">
                        <h1 className="text-2xl lg:text-3xl font-bold text-ct2-dark-silver my-2 lg:my-4">Gastos compartidos</h1>
                        <h2 className="text-md font-medium text-ct2-dark-silver">Para saber cuanto pagar con la familia, pareja o roommates.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mt-2 lg:mt-5">
                        <div className="bg-white shadow-xl px-3 lg:px-5 py-3 lg:py-5 rounded-2xl lg:col-span-2">
                            <h2 className="text-ct2-dark-silver text-xl lg:text-2xl font-semibold">Ingreso individual</h2>
                            <form>
                                <div className="my-3 lg:my-5 flex gap-2 justify-between">
                                    <input className="py-2 rounded-xl border-gray-400 border placeholder:text-xl px-4 text-xl w-[50%]" type="text" placeholder="Nombres" value={nombres} onChange={(e) => setNombres(e.target.value)} />
                                    <input className="py-2 rounded-xl border-gray-400 border placeholder:text-xl px-4 text-xl w-[50%]" type="number" placeholder="Ingreso mensual" value={ingreso} onChange={(e) => setIngreso(e.target.value)} />
                                </div>
                                <button type="submit" className="bg-[#0069D0] text-white w-[50%] py-2 rounded-xl font-semibold text-lg" onClick={handleAddRow}>Añadir</button>
                            </form>
                        </div>
                        <div className="bg-white shadow-xl px-3 lg:px-5 py-3 lg:py-5 rounded-2xl col-span-1">
                            <form>
                                <h2 className="text-ct2-dark-silver text-xl lg:text-2xl font-medium">Gastos totales</h2>
                                <input className="my-3 lg:my-5 py-2 rounded-xl border-gray-400 border placeholder:text-xl px-4 text-xl w-full" type="number" placeholder="Monto total" value={gastoTotal} onChange={(e) => setGastoTotal(e.target.value)} />
                                <button type="submit" className="bg-[#0069D0] py-2 text-white w-full rounded-xl font-semibold text-lg" onClick={handleHowMuchToPay}>Calcular</button>
                            </form>
                        </div>
                        <div className="col-span-1">
                            <div className="flex mb-6 gap-3 justify-between bg-[#40C33D] shadow-xl px-3 lg:px-5 py-3 lg:py-7 rounded-2xl text-white text-2xl">
                                <h3>Ganancias totales</h3>
                                <p>S/. {parseFloat(ingresoTotal)}</p>
                            </div>
                            <div className="flex gap-3 justify-between bg-[#FF5A5A] shadow-xl px-3 lg:px-5 py-3 lg:py-7 rounded-2xl text-white text-2xl">
                                <h3>Gastos totales</h3>
                                <p>S/. {gastoTotal === '' ? '0' : parseFloat(gastoTotal)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
                        <div className="shadow-xl rounded-2xl max-h-[30vh] overflow-y-auto">
                            <table className="table-fixed w-full">
                                <thead className="sticky top-0">
                                    <tr className="bg-gray-300">
                                        <th className="w-[10%] py-4 font-semibold">N.</th>
                                        <th className="w-[25%] font-semibold text-left">Nombre</th>
                                        <th className="w-[20%] font-semibold">Ingreso</th>
                                        <th className="w-[20%] font-semibold">Fracción</th>
                                        <th className="w-[25%] font-semibold">A pagar</th>
                                    </tr>
                                </thead>
                                <tbody className="overflow-y-auto">
                                    {
                                        row.map(({ name, income, date, percentage, toPay }, index) => (
                                            <tr key={index} className="border-b font-light">
                                                <td className="text-center py-4">{index + 1}</td>
                                                <td className="text-left">{name}</td>
                                                <td className="text-center">S/. {income}</td>
                                                <td className="text-center">{percentage === '' ? '' : ((parseFloat(percentage) * 100).toFixed(2))} %</td>
                                                <td className="text-center">S/. {toPay === '' ? '' : (parseFloat(toPay).toFixed(2))}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="mt-auto mb-5 lg:mb-0">
                        <p className="text-center font-medium">¿Encontraste un error o tienes sugerencias? Escribe <a href={`https://wa.me/${global.phone}/?text=Encontré un error en Gastos compartidos`} target="_blank" className="text-[#40C33D]">aquí</a></p>
                    </div>
                </div>
            </section>
        </>
    )
}
