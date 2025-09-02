import { Route, Routes } from "react-router-dom"
import { HomePage, AppsMenu } from "../pages"
import { GastosCompartidos, SuperCalc } from "../pages/miniapps"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="inicio" element={<HomePage />} />
            <Route path="miniapps" element={<AppsMenu />} />
            <Route path="/*" element={<HomePage />} />
            {/* <Route path="/form" element={<ContactForm />} /> */}

            {/* Miniapps Routes */}
            <Route path="/miniapps/supercalc" element={<SuperCalc />} />
            <Route path="/miniapps/gastos-compartidos" element={<GastosCompartidos />} />
        </Routes>
    </>
  )
}
