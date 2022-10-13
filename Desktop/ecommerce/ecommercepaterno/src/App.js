import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalogo from './components/menu/Catalogo';
import Contacto from './components/menu/Contacto';
import Nosotros from './components/menu/Nosotros';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return(
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={`Bienvenido!`}/>}/>
      <Route id='rutaCatalogo' path='/catalogo' element={<Catalogo/>}/>
      <Route id='rutaContacto' path='/contacto' element={<Contacto/>}/>
      <Route id='rutaNosotros' path='/nosotros' element={<Nosotros/>}/>
    </Routes>
    </BrowserRouter>

)
}

export default App;
