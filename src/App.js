import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Productos } from './Pages/Productos';
import { Producto } from './Pages/Producto';
import { Carro } from './Pages/Carro';
function App() {
  return (
    <div className="App">
      <Router>
          <div>
            <Switch>
              <Route exact path="/carrito" component ={Carro} />
              <Route exact path="/" component={Productos}/>
              <Route exact path="/:id" component={Producto}/>
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
