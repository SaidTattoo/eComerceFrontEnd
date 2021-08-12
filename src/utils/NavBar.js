import React, { useEffect, useState } from 'react'

function Nav() {
    const [cantidad, setCantidad] = useState(0)
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = () => {
        fetch("http://localhost:8080/api/carrito/listar")
            .then((productos) => productos.json())
            .then((productos) => setCantidad(productos.carrito.producto.length))
    }
    console.log()
    return (
        <div>
            <nav className="navbar navbar-light bg-dark">
                <form className="container-fluid">

                    <div className="input-group"> <a href="" className="navbar-brand text">Codezon</a>
                        <span className="input-group-text" id="basic-addon1">Todos</span>
                        <input type="text" className="form-control" placeholder="Producto" aria-label="Username" aria-describedby="basic-addon1" />
                        <a onClick={() => {window.location.href ="/carrito"}}>
                            <img className="compras" width="40" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZmZiOTBiO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxwb2x5bGluZSBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNiAxMCAxNSAxMCAxOSAzOSA1NCAzOSA1NyAxOCAyMSAxOCAyMy4zIDM0Ii8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMzEiIHgyPSIzNyIgeTE9IjUwIiB5Mj0iNTAiLz48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjQ3IiBjeT0iNTAiIHI9IjUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjI2IiBjeT0iNTAiIHI9IjUiLz48L3N2Zz4=" alt="imagen" />
                            <span className="badge badge-danger ">{cantidad}</span>
                        </a>
                    </div>
                </form>
            </nav>
        </div>
    )
}

export default Nav