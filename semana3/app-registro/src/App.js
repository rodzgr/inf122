
import './App.css';
import Navbar from './componentes/Navbar';
import Login from './componentes/Login';
import Perfil from "./componentes/Perfil"
import Registro from "./componentes/Registro"
import {BrowserRouter ,route,Switch } from 'react-router-app';
function App() {
  return (
    <div className="App">
      <router>
        <div>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Login}/> 
            <Route path="/login" exact component={Login}/> 
            <Route path="/registro" exact component={Registro}/> 
            <Route path="/perfil" exact component={Perfil}/> 
          </Switch>
        </div>
      </router>

    </div>
  );
}

export default App;
