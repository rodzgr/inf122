
import './App.css';
import Navbar from './componentes/Navbar';
import Login from './componentes/Login';
import Perfil from "./componentes/Perfil"
import Registro from "./componentes/Registro"
import Navbar from './componentes/Navbar';
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
         
          <Router>
            <div>
              <Routes>
            <Route path="/" exact component={Navbar}/> 
            <Route path="/login" exact component={Login}/> 
            <Route path="/registro" exact component={Registro}/> 
            <Route path="/perfil" exact component={Perfil}/> 
            </Routes>
            </div>
          </Router>
        </div>
      </Router>

    </div>
  );
}

export default App;
