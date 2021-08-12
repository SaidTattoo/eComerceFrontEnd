import React, { useEffect, useState } from 'react'
import Nav from '../utils/NavBar'
import swal from 'sweetalert';

export const Carro = ({history}) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = () => {
        fetch("http://localhost:8080/api/carrito/listar/")
            .then((productos) => productos.json())
            .then((productos) => {
                console.log(productos)
                setProductos(productos.carrito.producto)
            })
    }
    const quitar = (id) => {
        swal({
            title: "Estas seguro?",
            text: "Deseas eliminar el producto del carro de compras!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
                if (willDelete) {
                    fetch('http://localhost:8080/api/carrito/borrar/'+id,{method:'delete'})
                    .then((response) => console.log("-->", response) )
                    fetchData()
                } 
          });
        
    }
    return (
        <div>
            <Nav />
            <div className="container">
                 {console.log(productos.length ===0)}
                { productos.length !==0 ? productos.map((prod) => (
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img width="200" height="" src={prod.thumbnail} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{prod.nombre}</h5>
                                    <p className="card-text">{prod.descripcion}</p>
                                    <p className="card-text"><small className="text-muted">{prod.codigo}</small></p>
                                    <p>CLP: ${prod.precio}</p>
                                    <button onClick={() => {quitar(prod.id_producto)}}>Quitar del carrito</button>
                                    <button onClick ={() => history.push('/')} >Volver </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )): <button onClick ={() => history.push('/')} >Volver </button>}

            </div>
        </div>
    )
}
