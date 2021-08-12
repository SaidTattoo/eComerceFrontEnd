import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../utils/NavBar'

export const Producto = ({history}) => {
    const [producto, setProducto ] = useState([])
    let { id } = useParams();
    useEffect(() => {
        fetchData()
    },[])
    const fetchData =   () => { 
        fetch("http://localhost:8080/api/productos/listar/"+id)
       .then((productos) => productos.json())
       .then((productos) => setProducto(productos.producto))
   }

   const anadirCarro = (id) => {
    fetch("http://localhost:8080/api/carrito/agregar/"+id ,{
        method: 'PUT'})
    .then((productos) => productos.json())
    .then((productos) => console.log(productos))
 
}

    return (
        <div>
            <Nav />
            <h2>{producto.nombre}</h2>
            <div className="container">
            <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={producto.thumbnail} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text">{producto.descripcion}</p>
                  <p className="card-text"><small className="text-muted"> {producto.codigo}</small></p>
                  <p>Stock:  {producto.stock}</p>
                  <h2>CLP  ${producto.precio}</h2>
                  <button onClick ={() => anadirCarro(producto.id)}> Agregar al carrito </button>
                  <button onClick ={() => window.location.href ="/carrito"}>Ir al carrito</button>
                  <button onClick ={() => history.push('/')} >Volver </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    )
}
