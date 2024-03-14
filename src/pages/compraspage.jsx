import { useContext } from "react"
import { Card } from "../components/Card/card";
import { ProductosContext } from "../context/productcontext"
import { CarritoContext } from "../context/carritocontext"

export const ComprasPage = () => {

    const { productos } = useContext(ProductosContext)

    const { agregarCompra, eliminarCompra } = useContext(CarritoContext)

    const handleAgregar = (compra) => {
        agregarCompra(compra)
    }
    const handleQuitar = (id) => {
        eliminarCompra(id)
    }


    return (
        <>
            <h1>Compras: </h1>
            <hr />

            {productos.map(producto => (
                <Card
                    key={producto.id}
                    imagen={producto.image}
                    titulo={producto.title}
                    descripcion={producto.description}
                    precio={producto.price}
                    handleAgregar={() => handleAgregar(producto)}
                    handleQuitar={() => handleQuitar(producto.id)}
                >

                </Card>
            ))}

        </>
    )
}