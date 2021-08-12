import React, { useEffect, useState } from 'react'
import Nav from '../utils/NavBar'

export const  Productos = ({history}) => {

    const [productos, setProductos ] = useState([])

    useEffect(() => {
       fetchData()
    }, [])
    const fetchData =   () => {
         fetch("http://localhost:8080/api/productos/listar")
        .then((productos) => productos.json())
        .then((productos) => setProductos(productos.productos))
    }
   
    const anadirCarro = (id) => {
        fetch("http://localhost:8080/api/carrito/agregar/"+id ,{
            method: 'PUT'})
        .then((productos) => productos.json())
        .then((productos) => console.log(productos))
     
    }

    const handleProductos = (productos) =>{
        console.log(productos)
        history.push('/'+productos)
    }

    return (
        <div><Nav />
            <img className="banner" src={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/JumpIn/Chile/Fuji_TallHero_JumpIn_CL_es_US_2x._CB670183133_.jpg"} alt ='data'/>
            <div className="conteiner">
                <div className="d-flex justify-content-between">
                    {productos.map((prod) => (
                        <div className="box m-3 col">
                        <h2>{prod.nombre}</h2>
                        <img className="banner" src={prod.thumbnail} alt ={prod.nombre}/>
                        <p>CLP {prod.precio}</p>
                        <button onClick={()=>  handleProductos(prod.id) } >detalle</button> 
                        <button onClick ={() => anadirCarro(prod.id) }>agregar al carrito</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


