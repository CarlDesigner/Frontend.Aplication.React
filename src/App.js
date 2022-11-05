//LIBRARIES
import { Route, Routes } from 'react-router-dom';
//CSS
import './css/App.css';
//COMPONENTS
import Index from "./components/index";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";
import Nosotros from "./components/nosotros";
import IndexEjemplos from "./components/ejemplos";
import ComponenteClase from './components/ejemplos/ComponenteClase';
import ComponenteFuncion from './components/ejemplos/ComponenteFuncion';

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Index></Index>} />
        <Route path="nosotros" element={<Nosotros></Nosotros>} />
        <Route path="/ejemplos">

          <Route path="/ejemplos"
            element={<IndexEjemplos></IndexEjemplos>} />
        </Route>

        <Route>
          <Route path="/ejemplos/clase"
            element={<ComponenteClase></ComponenteClase>} />
        </Route>

        <Route>
          <Route path="/ejemplos/funcion"
            element={<ComponenteFuncion msn={"React me da dolor de cabeza"}></ComponenteFuncion>} />
        </Route>

      </Routes>

      <Footer></Footer>
    </div >
  );
}

export default App;