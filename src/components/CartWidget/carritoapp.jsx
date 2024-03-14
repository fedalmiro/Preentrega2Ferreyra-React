import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../Navbar/navbar"
import { ComprasPage } from "../../pages/compraspage"
import { CarritoPage } from "../../pages/carritopage"
import { ProductosProvider } from "../../context/productosprovider"
import { CarritoProvider } from "../../context/carritoprovider"

export const CaritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar></NavBar>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
                        <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
                        <Route path="/*" element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
            </CarritoProvider>
        </ProductosProvider>
    )
}